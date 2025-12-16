import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client if environment variables are not set
const mockClient = {
  auth: {
    signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
    signOut: () => Promise.resolve({ error: null }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
    update: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
    delete: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
  })
}

export const supabase = (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project') || supabaseAnonKey.includes('your-anon-key'))
  ? mockClient as any
  : createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image_url?: string
  category: string
  registration_link?: string
  end_time?: string
  created_at: string
  updated_at: string
  created_by: string
}

export interface NewsArticle {
  id: string
  title: string
  content: string
  excerpt: string
  image_url?: string
  category: string
  author: string
  published_at: string
  created_at: string
  updated_at: string
  created_by: string
}

export interface Story {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  role?: string
  image_url?: string
  category: string
  tags: string[]
  read_time: string
  published_at: string
  created_at: string
  updated_at: string
  created_by: string
}