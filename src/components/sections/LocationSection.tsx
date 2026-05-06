'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

export default function LocationSection() {
  const openMap = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Mannivakkam+Chennai', '_blank')
  }

  return (
    <section id="location" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-accent font-playfair text-lg tracking-[0.3em] uppercase mb-4">Prime Location</h2>
              <h3 className="text-4xl md:text-7xl font-playfair font-bold mb-6">Where City <span className="text-gold">Meets Serenity</span></h3>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">Nestled in the heart of Chennai, LuxStay Nexus offers the perfect balance of metropolitan pulse and tranquil retreat.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">Our Address</h4>
                  <p className="text-white/50 text-sm leading-relaxed">Mannivakkam, Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">Concierge</h4>
                  <p className="text-white/50 text-sm leading-relaxed">+91 63746 18833 | skbarath424@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">Proximity</h4>
                  <p className="text-white/50 text-sm leading-relaxed">15 mins from Tambaram | 30 mins from Chennai International Airport</p>
                </div>
              </div>
            </div>

            <button 
              onClick={openMap}
              className="btn-gold !px-12 !py-5 uppercase tracking-[0.3em] font-bold text-xs flex items-center gap-3 group"
            >
              Get Directions <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={openMap}
            className="relative h-[600px] md:h-[700px] rounded-[3.5rem] overflow-hidden glass p-4 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.4)] cursor-pointer group/map"
          >
            {/* Map Frame */}
            <div className="w-full h-full bg-slate-900 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute inset-0 grayscale contrast-125 opacity-40 mix-blend-screen pointer-events-none">
                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop')] bg-cover opacity-20" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.8)] z-10 relative"
                  >
                    <MapPin className="w-8 h-8 text-background fill-background" />
                  </motion.div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/40 blur-sm rounded-full" />
                </div>
              </div>

              <div className="absolute top-10 left-10 glass-card p-6 rounded-3xl hidden md:block border border-accent/20">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live Status
                </div>
                <p className="text-white text-sm font-bold mb-1 tracking-wide">Chennai Gateway</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">Arrivals on schedule</p>
              </div>

              <div className="absolute bottom-10 right-10 flex gap-4">
                 <div className="glass p-3 rounded-2xl text-accent"><Clock className="w-5 h-5" /></div>
                 <div className="glass p-3 rounded-2xl text-accent"><Navigation className="w-5 h-5" /></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-accent/20 to-transparent opacity-30" />
    </section>
  )
}
