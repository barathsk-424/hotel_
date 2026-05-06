import { supabase } from './src/lib/supabase.js'

async function testConnection() {
  try {
    const { data, error } = await supabase.from('rooms').select('count', { count: 'exact', head: true })
    if (error) {
      if (error.code === 'PGRST116') {
        console.log('✅ Connected to Supabase! (Table "rooms" not found, which is expected before schema setup)')
      } else {
        console.error('❌ Supabase connection error:', error.message)
      }
    } else {
      console.log('✅ Connected to Supabase! Found tables.')
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err.message)
  }
}

testConnection()
