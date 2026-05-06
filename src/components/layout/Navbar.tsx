'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X, Globe, User, LogOut, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Navbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()
    
    // Force remove light theme to lock to dark mode
    document.documentElement.classList.remove('light')
    
    window.addEventListener('scroll', handleScroll)
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user ?? null)
    })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    localStorage.removeItem('isLoggedIn')
    setUser(null)
    router.push('/')
  }

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-500",
        isScrolled ? "py-4 glass border-b border-white/10" : "py-8"
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 px-6">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-playfair font-bold text-[#0B1120] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            L
          </div>
          <span className="text-2xl font-playfair font-bold text-white tracking-[0.2em] group-hover:text-gold transition-colors">LUXSTAY</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {[
            { name: 'Home', href: '/#home' },
            { name: 'Suites', href: '/#suites' },
            { name: 'Dining', href: '/#dining' },
            { name: 'Menu', href: '/menu' },
            { name: 'Offers', href: '/#offers' },
            { name: 'Location', href: '/#location' },
            { name: 'Feedback', href: '/#feedback' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-accent transition-all duration-300 relative group/link"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
            <button className="text-white/60 hover:text-accent transition-colors flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-[10px] uppercase font-bold tracking-widest hidden lg:inline">EN</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center gap-3 text-white group cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest">{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                    <span className="text-[8px] text-accent uppercase tracking-tighter">Premium Resident</span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-white/30" />
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-white/50 hover:text-accent transition-colors p-2"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                <User className="w-4 h-4" />
                Sign In
              </Link>
            )}
            <Link 
              href="/book" 
              className="btn-gold !px-6 !py-3 !text-[10px] uppercase tracking-[0.2em]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6 text-center">
              {['Home', 'Suites', 'Dining', 'Menu', 'Offers', 'Location', 'Feedback'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'Menu' ? '/menu' : `/#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-playfair tracking-widest text-white hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="flex justify-center gap-8 pt-6 border-t border-white/10">
                 {user ? (
                   <button onClick={handleLogout} className="flex items-center gap-2 text-white"><LogOut className="w-4 h-4" /> Logout</button>
                 ) : (
                   <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-white"><User className="w-4 h-4" /> Sign In</Link>
                 )}
                 <button className="flex items-center gap-2 text-white"><Globe className="w-4 h-4" /> EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
