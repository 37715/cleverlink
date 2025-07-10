import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
})

// Database table names
export const TABLES = {
  FORM_SUBMISSIONS: 'form_submissions',
  EMAIL_SIGNUPS: 'email_signups'
} as const

// Type definitions
export interface FormSubmission {
  id?: string
  name: string
  email: string
  selected_service: string
  company_name?: string
  problems: string
  additional_info?: string
  created_at?: string
}

export interface EmailSignup {
  id?: string
  email: string
  created_at?: string
}

// Helper function to test database connection
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from(TABLES.EMAIL_SIGNUPS).select('count', { count: 'exact', head: true })
    if (error) {
      console.error('Database connection test failed:', error)
      return false
    }
    console.log('Database connection successful')
    return true
  } catch (error) {
    console.error('Database connection test error:', error)
    return false
  }
} 