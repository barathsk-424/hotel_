import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Don't throw when credentials are missing (e.g. on static GitHub Pages hosting)
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createSupabaseClient(supabaseUrl, supabaseAnonKey)
  : null
