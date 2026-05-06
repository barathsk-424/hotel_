'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Utensils, Wine, Coffee, Clock } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { name: 'Oyster Imperial', price: '3,500', desc: 'Fresh Atlantic oysters, gold leaf, caviar', icon: <Wine /> },
  { name: 'Truffle Wagyu', price: '9,500', desc: 'A5 Wagyu, shaved black truffle, red wine jus', icon: <Utensils /> },
  { name: 'Saffron Risotto', price: '2,800', desc: 'Arborio rice, Persian saffron, aged parmesan', icon: <Utensils /> },
]

export default function DiningSection() {
  return (
    <section id="dining" className="py-32 px-6 bg-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] rounded-[3rem] overflow-hidden group"
          >
            <Image 
              src="/hero.png" 
              alt="Fine Dining" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-3xl" data-theme="dark">
              <h4 className="text-2xl font-playfair font-bold mb-2">The Celestial Table</h4>
              <p className="text-white/70 text-sm mb-4">Michelin-star culinary experience with a view of the skyline.</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
                  <Clock className="w-4 h-4" /> 18:00 - 23:00
                </div>
                <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
                  <Utensils className="w-4 h-4" /> Reservation Required
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-accent font-playfair text-lg tracking-[0.3em] uppercase mb-4">Culinary Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-8">Art on a <span className="text-gold">Plate</span></h3>
              <p className="text-muted-foreground leading-relaxed">Our chefs masterfully blend international flavors with local ingredients to create a symphony for your palate.</p>
            </div>

            <div className="space-y-6">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-between p-6 glass-card group cursor-pointer"
                >
                  <div className="flex gap-6 items-center">
                    <div className="text-accent w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold group-hover:text-accent transition-colors">{item.name}</h5>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <p className="text-gold font-bold text-xl">₹{item.price}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/menu" className="btn-outline w-full group text-center block">
              View Full Seasonal Menu <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
