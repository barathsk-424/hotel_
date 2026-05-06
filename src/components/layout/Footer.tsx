'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Send, Globe, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-32 pb-12 px-6 bg-[#0B1120] overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-playfair font-bold text-[#0B1120] text-xl group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                L
              </div>
              <span className="text-3xl font-playfair font-bold text-white tracking-[0.2em] group-hover:text-gold transition-colors">LUXSTAY</span>
            </Link>
            
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-sm">
              Defining the next era of luxury hospitality through emotion, technology, and timeless design. Your sanctuary awaits.
            </p>

            <div className="flex gap-6">
              {[
                { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                ), href: "#" },
                { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                ), href: "#" },
                { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                ), href: "#" },
                { icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                ), href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h5 className="text-accent uppercase tracking-[0.3em] font-bold text-[10px]">The Sanctuary</h5>
            <ul className="space-y-4">
              {['Suites', 'Dining', 'Wellness', 'Experiences', 'Offers'].map((item) => (
                <li key={item}>
                  <Link href={`/#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-8">
            <h5 className="text-accent uppercase tracking-[0.3em] font-bold text-[10px]">Registry</h5>
            <ul className="space-y-4">
              {['Our Story', 'Sustainability', 'Careers', 'Media Kit', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/40 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <h5 className="text-accent uppercase tracking-[0.3em] font-bold text-[10px]">Elite Circle</h5>
            <p className="text-sm text-white/40 leading-relaxed">
              Join our exclusive inner circle for seasonal reveals and celestial offers.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-accent/50 transition-all placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-accent text-[#0B1120] hover:bg-gold transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-white/20 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-accent/40" />
              Privacy Guaranteed
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <p className="text-[10px] uppercase tracking-widest text-white/20">© 2026 LuxStay Nexus. All Rights Reserved.</p>
            <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-white/20 font-bold">
               <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
               <Link href="#" className="hover:text-accent transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-accent transition-colors">
              <Globe className="w-4 h-4" /> English (US)
            </button>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all duration-300 group"
            >
              <ArrowUpRight className="w-5 h-5 -rotate-45 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  )
}
