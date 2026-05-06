'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserPlus, ArrowLeft, ShieldCheck, Sparkles, Mail, Lock, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function RegisterPage() {
  const router = useRouter()
  const supabase = createClient()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
          }
        }
      })

      if (signUpError) throw signUpError

      if (data.user) {
        localStorage.setItem('isLoggedIn', 'true')
        setSuccess('Application submitted! Redirecting to sanctuary...')
        // Delay slightly so user can read success message, then redirect
        setTimeout(() => {
          router.push('/')
          router.refresh()
        }, 1500)
      }
    } catch (err: any) {
      setError(err.message || 'Registration failed')
      console.error('Registration error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-mesh flex flex-col items-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg"
      >
        <Link href="/login" className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Login</span>
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
              <UserPlus className="w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">Apply for <span className="text-gold">Residency</span></h1>
            <p className="text-white/50 text-sm tracking-wide">Join the elite LuxStay Nexus circle</p>
          </div>
          
          {success && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-xl text-accent text-xs text-center">
              {success}
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs text-center animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="concierge@luxstay.com" 
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="password" 
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl text-white focus:outline-none focus:border-accent transition-all placeholder:text-white/10" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full btn-gold !py-4 mt-6 group relative overflow-hidden disabled:opacity-50"
            >
              <span className={isLoading ? 'opacity-0' : 'opacity-100 flex items-center justify-center gap-2'}>
                Submit Application <Sparkles className="w-4 h-4" />
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
            <p className="text-[10px] text-white/50 uppercase tracking-widest leading-relaxed">Identity verification required upon arrival</p>
          </div>
        </div>

        <p className="mt-8 text-center text-white/30 text-sm">
          Already a resident? <Link href="/login" className="text-accent hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </main>
  )
}
