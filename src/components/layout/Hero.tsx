'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import heroImg from '../../../public/hero.png'
import BookingWidget from '../booking/BookingWidget'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src={heroImg} 
          alt="Luxury Hotel Hero" 
          fill 
          className="object-cover brightness-50"
          priority
        />
      </motion.div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-1" />
      <div className="absolute inset-0 bg-white/40 opacity-0 light:opacity-100 transition-opacity duration-500 z-1" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-accent font-playfair text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Indulge in Timeless Luxury
          </motion.h2>
          
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Elevate Your <br className="hidden md:block" />
            <span className="text-gold">Stay to Art</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Experience LuxStay Nexus—where every detail is curated to resonate with your soul. 
            Hyper-personalized service meets legendary hospitality.
          </p>
        </motion.div>

        {/* Booking Widget */}
        <BookingWidget />
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 group-hover:text-accent transition-colors">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent group-hover:h-20 transition-all duration-500" />
      </motion.div>
    </section>
  )
}
