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
      const requestData: SubscriptionRequest = await req.json()
      const { email, firstName, lastName } = requestData
  
      // Validate input
      if (!email || !firstName || !lastName) {
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
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        )
      }
  
      console.log(`Processing subscription for: ${email}`)
  
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
      }
  
      // Option 3: Store in Supabase Database (fallback)
      console.log('Using database fallback for subscription...')
      try {
        const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
        const supabaseUrl = Deno.env.get('SUPABASE_URL')
        const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  
        if (!supabaseUrl || !supabaseKey) {
          console.error('Missing Supabase environment variables')
          throw new Error('Database configuration missing')
        }
  
        const supabase = createClient(supabaseUrl, supabaseKey)
  
        // Check if email already exists
        const { data: existingSubscriber, error: checkError } = await supabase
          .from('email_subscribers')
          .select('email')
          .eq('email', email)
          .single()
  
        if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "not found" error
          console.error('Database check error:', checkError)
          throw new Error('Failed to check existing subscription')
        }
  
        if (existingSubscriber) {
          return new Response(
            JSON.stringify({ message: 'Email is already subscribed to our newsletter' }),
            { 
              status: 200, 
              headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
            }
          )
        }
  
        // Insert new subscriber
        const { error: insertError } = await supabase
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
  
        if (insertError) {
          console.error('Database insert error:', insertError)
          throw new Error('Failed to save subscription to database')
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
        throw new Error('All subscription methods failed')
      }
  
    } catch (error) {
      console.error('Subscription processing error:', error)
      
      let errorMessage = 'Failed to process subscription'
      let statusCode = 500
  
      if (error instanceof Error) {
        if (error.message.includes('Missing required fields')) {
          errorMessage = error.message
          statusCode = 400
        } else if (error.message.includes('Invalid email format')) {
          errorMessage = error.message
          statusCode = 400
        } else if (error.message.includes('All subscription methods failed')) {
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