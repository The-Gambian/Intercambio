/*
  # Email Subscription Edge Function

  This function handles email subscriptions with multiple service integrations:
  1. Mailchimp (if configured)
  2. ConvertKit (if configured)  
  3. Database fallback (always available)

  ## Environment Variables Required
  - SUPABASE_URL (automatically provided)
  - SUPABASE_SERVICE_ROLE_KEY (automatically provided)
  
  ## Optional Environment Variables
  - MAILCHIMP_API_KEY, MAILCHIMP_AUDIENCE_ID, MAILCHIMP_SERVER_PREFIX
  - CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID
*/

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface SubscriptionRequest {
  email: string;
  firstName: string;
  lastName: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('=== Email Subscription Function Started ===')
    console.log('Request method:', req.method)
    console.log('Request URL:', req.url)

    const requestData: SubscriptionRequest = await req.json()
    console.log('Request data received:', { 
      email: requestData.email, 
      firstName: requestData.firstName, 
      lastName: requestData.lastName 
    })

    const { email, firstName, lastName } = requestData

    // Validate input
    if (!email || !firstName || !lastName) {
      console.error('Validation failed: Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields: email, firstName, and lastName are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('Validation failed: Invalid email format')
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log(`Processing subscription for: ${email}`)

    // Get Supabase environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    console.log('Environment check:', {
      hasSupabaseUrl: !!supabaseUrl,
      hasSupabaseKey: !!supabaseKey,
      supabaseUrl: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'missing'
    })

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables')
      return new Response(
        JSON.stringify({ error: 'Database configuration missing' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log('Supabase client initialized')

    // Option 1: Mailchimp Integration
    const MAILCHIMP_API_KEY = Deno.env.get('MAILCHIMP_API_KEY')
    const MAILCHIMP_AUDIENCE_ID = Deno.env.get('MAILCHIMP_AUDIENCE_ID')
    const MAILCHIMP_SERVER_PREFIX = Deno.env.get('MAILCHIMP_SERVER_PREFIX')

    if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID && MAILCHIMP_SERVER_PREFIX) {
      console.log('Attempting Mailchimp subscription...')
      try {
        const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`
        
        const mailchimpResponse = await fetch(mailchimpUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName,
            },
          }),
        })

        if (mailchimpResponse.ok) {
          console.log('Mailchimp subscription successful')
          
          // Also store in database for backup
          try {
            await supabase
              .from('email_subscribers')
              .insert([
                {
                  email,
                  first_name: firstName,
                  last_name: lastName,
                  subscribed_at: new Date().toISOString(),
                  status: 'active'
                }
              ])
            console.log('Also stored in database as backup')
          } catch (dbError) {
            console.warn('Failed to store in database backup:', dbError)
          }

          return new Response(
            JSON.stringify({ message: 'Successfully subscribed to newsletter via Mailchimp' }),
            { 
              status: 200, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
            }
          )
        } else {
          const error = await mailchimpResponse.text()
          console.error('Mailchimp error:', error)
          // Continue to next option instead of throwing
        }
      } catch (error) {
        console.error('Mailchimp request failed:', error)
        // Continue to next option
      }
    } else {
      console.log('Mailchimp not configured, skipping...')
    }

    // Option 2: ConvertKit Integration
    const CONVERTKIT_API_KEY = Deno.env.get('CONVERTKIT_API_KEY')
    const CONVERTKIT_FORM_ID = Deno.env.get('CONVERTKIT_FORM_ID')

    if (CONVERTKIT_API_KEY && CONVERTKIT_FORM_ID) {
      console.log('Attempting ConvertKit subscription...')
      try {
        const convertkitUrl = `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`
        
        const convertkitResponse = await fetch(convertkitUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: CONVERTKIT_API_KEY,
            email: email,
            first_name: firstName,
            last_name: lastName,
          }),
        })

        if (convertkitResponse.ok) {
          console.log('ConvertKit subscription successful')
          
          // Also store in database for backup
          try {
            await supabase
              .from('email_subscribers')
              .insert([
                {
                  email,
                  first_name: firstName,
                  last_name: lastName,
                  subscribed_at: new Date().toISOString(),
                  status: 'active'
                }
              ])
            console.log('Also stored in database as backup')
          } catch (dbError) {
            console.warn('Failed to store in database backup:', dbError)
          }

          return new Response(
            JSON.stringify({ message: 'Successfully subscribed to newsletter via ConvertKit' }),
            { 
              status: 200, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
            }
          )
        } else {
          const error = await convertkitResponse.text()
          console.error('ConvertKit error:', error)
          // Continue to database fallback
        }
      } catch (error) {
        console.error('ConvertKit request failed:', error)
        // Continue to database fallback
      }
    } else {
      console.log('ConvertKit not configured, skipping...')
    }

    // Option 3: Store in Supabase Database (fallback)
    console.log('Using database fallback for subscription...')
    try {
      // Check if email already exists
      console.log('Checking for existing subscriber...')
      const { data: existingSubscriber, error: checkError } = await supabase
        .from('email_subscribers')
        .select('email')
        .eq('email', email)
        .single()

      console.log('Existing subscriber check result:', { 
        found: !!existingSubscriber, 
        error: checkError?.code 
      })

      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "not found" error
        console.error('Database check error:', checkError)
        throw new Error('Failed to check existing subscription')
      }

      if (existingSubscriber) {
        console.log('Email already subscribed')
        return new Response(
          JSON.stringify({ message: 'Email is already subscribed to our newsletter' }),
          { 
            status: 200, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }

      // Insert new subscriber
      console.log('Inserting new subscriber...')
      const { data: insertData, error: insertError } = await supabase
        .from('email_subscribers')
        .insert([
          {
            email,
            first_name: firstName,
            last_name: lastName,
            subscribed_at: new Date().toISOString(),
            status: 'active'
          }
        ])
        .select()

      console.log('Insert result:', { 
        success: !insertError, 
        data: insertData, 
        error: insertError 
      })

      if (insertError) {
        console.error('Database insert error:', insertError)
        throw new Error(`Failed to save subscription to database: ${insertError.message}`)
      }

      console.log('Database subscription successful')
      return new Response(
        JSON.stringify({ message: 'Successfully subscribed to newsletter! Your subscription has been saved.' }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )

    } catch (dbError) {
      console.error('Database fallback failed:', dbError)
      throw new Error(`Database operation failed: ${dbError.message}`)
    }

  } catch (error) {
    console.error('=== Subscription processing error ===')
    console.error('Error details:', error)
    console.error('Error stack:', error.stack)
    
    let errorMessage = 'Failed to process subscription'
    let statusCode = 500

    if (error instanceof Error) {
      if (error.message.includes('Missing required fields')) {
        errorMessage = error.message
        statusCode = 400
      } else if (error.message.includes('Invalid email format')) {
        errorMessage = error.message
        statusCode = 400
      } else if (error.message.includes('Database configuration missing')) {
        errorMessage = 'Service temporarily unavailable. Please try again later.'
        statusCode = 503
      } else {
        errorMessage = 'Unable to process subscription at this time. Please try again later.'
      }
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: statusCode, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})