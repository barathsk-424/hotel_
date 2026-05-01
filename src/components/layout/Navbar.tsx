'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-playfair font-bold text-[#0B1120]">
            L
          </div>
          <span className="text-xl font-playfair font-bold text-white tracking-wider">LUXSTAY</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {['Suites', 'Dining', 'Personalize', 'About'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Login
          </Link>
          <button className="btn-gold !px-5 !py-2 !text-xs uppercase tracking-widest whitespace-nowrap">
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
