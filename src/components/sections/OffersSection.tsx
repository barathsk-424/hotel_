'use client'

import { motion } from 'framer-motion'
import { Gift, Sparkles, Heart, Zap } from 'lucide-react'
import Link from 'next/link'

const offers = [
  {
    title: 'Weekend Escape',
    desc: '30% off on all suites including gourmet breakfast and spa access.',
    icon: <Gift className="w-6 h-6" />,
    badge: 'Limited Time',
    color: 'from-accent/20 to-accent/5'
  },
  {
    title: 'Honeymoon Magic',
    desc: 'Romantic dinner under stars, flower decor, and late checkout.',
    icon: <Heart className="w-6 h-6" />,
    badge: 'Popular',
    color: 'from-pink-500/10 to-pink-500/5'
  },
  {
    title: 'Corporate Luxe',
    desc: 'Full-day boardroom access and private lounge dining included.',
    icon: <Zap className="w-6 h-6" />,
    badge: 'Business',
    color: 'from-blue-500/10 to-blue-500/5'
  }
]

export default function OffersSection() {
  return (
    <section id="offers" className="py-32 px-6 bg-mesh/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-playfair text-lg tracking-[0.3em] uppercase mb-4"
          >
            Special Privileges
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-playfair font-bold"
          >
            Unforgettable <span className="text-gold">Moments</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[3rem] glass group relative overflow-hidden flex flex-col border border-white/5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                  {offer.icon}
                </div>
                
                <span className="text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 bg-accent/10 text-accent rounded-full mb-6 inline-block w-fit">
                  {offer.badge}
                </span>
                
                <h4 className="text-2xl font-playfair font-bold mb-4">{offer.title}</h4>
                <p className="text-white/40 leading-relaxed mb-10 font-light italic">"{offer.desc}"</p>
                
                <Link 
                  href={`/book?offer=${encodeURIComponent(offer.title)}`}
                  className="mt-auto flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-gold transition-colors group/link"
                >
                  Claim Offer <Sparkles className="w-4 h-4 transition-transform group-hover/link:scale-125" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
