import { createBrowserClient } from '@supabase/ssr'

// A no-op mock so pages that reference supabase.auth don't crash
// when credentials are missing (e.g. on static GitHub Pages hosting).
const noopAuth = {
  getUser: async () => ({ data: { user: null }, error: null }),
  getSession: async () => ({ data: { session: null }, error: null }),
  signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Supabase is not configured' } }),
  signUp: async () => ({ data: { user: null, session: null }, error: { message: 'Supabase is not configured' } }),
  signOut: async () => ({ error: null }),
  resetPasswordForEmail: async () => ({ error: { message: 'Supabase is not configured' } }),
  onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
}

const noopClient = {
  auth: noopAuth,
  from: () => ({ select: () => ({ data: null, error: null }) }),
}

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials missing. Auth features are disabled.')
    return noopClient as any
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
