'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Maximize2, PlayCircle } from 'lucide-react'

const images = [
  { id: 1, src: '/hero.png', title: 'Grand Lobby', size: 'large' },
  { id: 2, src: '/zen.png', title: 'Wellness Spa', size: 'small' },
  { id: 3, src: '/executive.png', title: 'Infinity Pool', size: 'small' },
  { id: 4, src: '/penthouse.png', title: 'Sky Lounge', size: 'medium' },
  { id: 5, src: '/hero.png', title: 'Culinary Studio', size: 'medium' },
]

export default function GallerySection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 bg-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-playfair text-lg tracking-[0.4em] uppercase mb-4"
          >
            Visual Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-playfair font-bold"
          >
            Capturing the <span className="text-gold">Essence</span>
          </motion.h3>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[800px] md:h-[1000px]">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                img.size === 'medium' ? 'md:col-span-2' : ''
              }`}
              onClick={() => setActive(img.id)}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-full mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-playfair text-xl font-bold tracking-widest">{img.title}</p>
              </div>

              {/* Special Badge for Video */}
              {img.id === 1 && (
                <div className="absolute bottom-6 right-6 flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <PlayCircle className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Video Preview</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox placeholder logic */}
      {active && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-10 cursor-zoom-out"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden">
             <Image src={images.find(i => i.id === active)?.src || ''} alt="Active" fill className="object-contain" />
          </div>
          <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-bold">Close Escape</button>
        </motion.div>
      )}
    </section>
  )
}
