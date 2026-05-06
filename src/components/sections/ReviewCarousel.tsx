'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  {
    name: 'Alexander Sterling',
    role: 'VIP Member',
    text: 'An absolute masterpiece of hospitality. The hyper-personalized room controls and the attention to detail from the staff made my stay unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    name: 'Isabella Rossi',
    role: 'Travel Journalist',
    text: 'The glassmorphism design isnt just for show—it creates an ambient environment that feels both futuristic and incredibly comforting.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    name: 'David Chen',
    role: 'Tech Executive',
    text: 'Finally a hotel that understands modern luxury. Seamless check-in, intuitive AI assistance, and the most comfortable bed Ive ever slept in.',
    rating: 4.9,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  }
]

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 px-6 bg-accent/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Quote className="w-[600px] h-[600px] absolute -top-32 -left-32 text-accent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent font-playfair text-lg tracking-[0.3em] uppercase mb-4">Guest Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold">Voices of <span className="text-gold">Excellence</span></h3>
        </div>

        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-card p-12 md:p-20 text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(reviews[index].rating) ? 'text-gold fill-gold' : 'text-white/20'}`} />
                ))}
              </div>

              <p className="text-xl md:text-3xl font-playfair italic leading-relaxed mb-12">
                "{reviews[index].text}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent p-1">
                  <img src={reviews[index].avatar} alt={reviews[index].name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="font-bold text-lg tracking-widest uppercase">{reviews[index].name}</h4>
                <p className="text-xs text-accent uppercase tracking-widest mt-1">{reviews[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20">
             <button onClick={() => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent transition-colors group">
               <ChevronLeft className="w-6 h-6 group-hover:text-background" />
             </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-20">
             <button onClick={() => setIndex((prev) => (prev + 1) % reviews.length)} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent transition-colors group">
               <ChevronRight className="w-6 h-6 group-hover:text-background" />
             </button>
          </div>
        </div>
      </div>
    </section>
  )
}
