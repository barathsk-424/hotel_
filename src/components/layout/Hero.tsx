'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/hero.png" 
          alt="Luxury Hotel Hero" 
          fill 
          className="object-cover brightness-50"
          priority
        />
      </motion.div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-accent font-playfair text-xl tracking-widest uppercase mb-4">
            Welcome to the Future of Hospitality
          </h2>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-10 leading-[1.1] tracking-tight">
            Design Your <br className="hidden md:block" />
            <span className="text-gold">Private Sanctuary</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            LuxStay Nexus merges hyper-personalized comfort with emotionally intelligent design. 
            Control your mood, your scent, and your stay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-gold group relative overflow-hidden px-8 py-4 rounded-full min-w-[220px]">
              <span className="relative z-10">Reserve Your Experience</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-colors min-w-[220px]">
              Explore the Suites
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}
