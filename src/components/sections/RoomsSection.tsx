'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Wifi, Tv, Wind, Coffee, Star, ArrowRight, X, Maximize2, ShieldCheck, Waves } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assets'

const rooms = [
  {
    id: 1,
    name: 'Presidential Zenith Suite',
    price: '95,000',
    image: assetPath('/penthouse.png'),
    features: ['Panoramic View', 'Private Butler', 'Smart Control'],
    rating: 4.9,
    category: 'Luxury',
    longDesc: 'The pinnacle of celestial living. Our Presidential Zenith Suite offers an unparalleled 360-degree view of the skyline, featuring a private infinity pool, a 24/7 dedicated butler, and state-of-the-art bio-metric security.',
    specs: { area: '250m²', bed: 'King Imperial', view: 'Skyline & Ocean' }
  },
  {
    id: 2,
    name: 'Executive Garden Villa',
    price: '65,000',
    image: assetPath('/executive.png'),
    features: ['Private Pool', 'Garden Access', 'Outdoor Shower'],
    rating: 4.8,
    category: 'Villa',
    longDesc: 'A sanctuary of peace and privacy. The Executive Garden Villa blends indoor elegance with outdoor serenity, featuring a lush private garden, an artisanal outdoor shower, and a temperature-controlled plunge pool.',
    specs: { area: '180m²', bed: 'California King', view: 'Tropical Gardens' }
  },
  {
    id: 3,
    name: 'Zen Harmony Room',
    price: '35,000',
    image: assetPath('/zen.png'),
    features: ['Minimalist Design', 'Tea Station', 'Yoga Mat'],
    rating: 4.7,
    category: 'Boutique',
    longDesc: 'Designed for the mindful traveler. The Zen Harmony Room focuses on essential luxury and tranquility, featuring sound-proofed walls, a premium organic tea station, and a dedicated meditation corner.',
    specs: { area: '65m²', bed: 'Premium Queen', view: 'Zen Courtyard' }
  }
]

export default function RoomsSection() {
  const [filter, setFilter] = useState('All')
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  return (
    <section id="suites" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-accent font-playfair text-lg tracking-[0.3em] uppercase mb-4">Our Residences</h2>
            <h3 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Discovery of <span className="text-gold">Sanctuary</span></h3>
            <p className="text-white/50 text-lg font-light leading-relaxed">Each suite is a masterpiece of design, offering a unique sensory journey tailored to your preferences.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Luxury', 'Villa', 'Boutique'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${
                  filter === cat ? 'btn-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'glass hover:bg-white/10 text-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.filter(r => filter === 'All' || r.category === filter).map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden rounded-t-[1.5rem]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 glass px-3 py-1 rounded-full flex items-center gap-2">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-xs font-bold">{room.rating}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-transparent to-transparent">
                  <p className="text-gold font-bold text-2xl">₹{room.price} <span className="text-[10px] font-normal text-white/50 uppercase tracking-[0.2em] ml-2">/ Night</span></p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-playfair font-bold mb-6 group-hover:text-accent transition-colors">{room.name}</h4>
                
                <div className="flex flex-wrap gap-6 mb-8 text-white/50">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-accent" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">WiFi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-accent" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{room.specs.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-accent" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">Pool</span>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between gap-4">
                  <button 
                    onClick={() => setSelectedRoom(room)}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-all duration-300 flex items-center gap-2"
                  >
                    Details <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                  <Link 
                    href={`/book?room=${encodeURIComponent(room.name)}`} 
                    className="btn-gold !px-8 !py-3 !text-[10px] uppercase tracking-widest text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-6 sm:p-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass max-w-5xl w-full max-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image src={selectedRoom.image} alt={selectedRoom.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
              </div>

              <div className="p-8 md:p-12 flex-1 overflow-y-auto custom-scrollbar bg-background/80">
                <h2 className="text-accent font-playfair text-sm tracking-[0.4em] uppercase mb-4">{selectedRoom.category} Excellence</h2>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-8 leading-tight">{selectedRoom.name}</h3>
                
                <p className="text-white/60 text-lg font-light leading-relaxed mb-10 italic">
                  "{selectedRoom.longDesc}"
                </p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Residency Area</p>
                    <p className="text-xl font-bold text-gold">{selectedRoom.specs.area}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Master Bed</p>
                    <p className="text-xl font-bold text-gold">{selectedRoom.specs.bed}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Signature View</p>
                    <p className="text-xl font-bold text-gold">{selectedRoom.specs.view}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-2">Star Rating</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <p className="text-xl font-bold text-gold">{selectedRoom.rating}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-white/10">
                   <Link 
                    href={`/book?room=${encodeURIComponent(selectedRoom.name)}`}
                    onClick={() => setSelectedRoom(null)}
                    className="btn-gold !py-5 flex-1 text-center text-sm font-bold uppercase tracking-widest"
                   >
                     Reserve for ₹{selectedRoom.price}
                   </Link>
                   <div className="flex items-center gap-3 text-white/40 px-4">
                     <ShieldCheck className="w-5 h-5 text-accent" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Instant Confirmation</span>
                   </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-xl -z-1" onClick={() => setSelectedRoom(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
