'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LogIn, UserPlus, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) throw authError

      if (data.user) {
        localStorage.setItem('isLoggedIn', 'true')
        // Optimistic redirect for perceived speed
        router.push('/')
        router.refresh()
      }
    } catch (err: any) {
      if (err.message?.includes('Email not confirmed')) {
        setError('Your residency has not been verified yet. Please check your email for the activation link.')
      } else {
        setError(err.message || 'Authentication failed')
      }
      console.error('Login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first.')
      return
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (resetError) throw resetError
      
      setSuccess('A sanctuary reset link has been dispatched to your email.')
    } catch (err: any) {
      setError(err.message || 'Failed to send reset link')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-mesh flex flex-col items-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Return to Sanctuary</span>
        </Link>

        <div className="glass-card p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          
          <div className="text-center mb-10">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 border border-accent/20"
            >
              <LogIn className="w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">Welcome <span className="text-gold">Home</span></h1>
            <p className="text-white/50 text-sm tracking-wide">Enter your private residency portal</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs text-center animate-shake">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-xl text-accent text-xs text-center">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="concierge@luxstay.com" 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10" 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Password</label>
                <button 
                  type="button" 
                  onClick={handleForgotPassword}
                  className="text-[10px] uppercase tracking-widest text-white/30 hover:text-accent transition-colors"
                >
                  Forgot?
                </button>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-gold !py-4 mt-4 group relative overflow-hidden disabled:opacity-50"
            >
              <span className={isLoading ? 'opacity-0' : 'opacity-100 flex items-center justify-center gap-2'}>
                Login to Portal <Sparkles className="w-4 h-4" />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </button>
          </form>



          <div className="mt-10 flex items-center justify-center gap-3 p-4 bg-accent/5 rounded-2xl border border-accent/10">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <p className="text-[10px] text-white/50 uppercase tracking-widest leading-relaxed">Secured by LuxStay Cloud Infrastructure</p>
          </div>
        </div>

        <p className="mt-8 text-center text-white/30 text-sm">
          New to the Nexus? <Link href="/register" className="text-accent hover:underline">Apply for Residency</Link>
        </p>
      </motion.div>
    </main>
  )
}
