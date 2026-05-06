'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Utensils, Wine, Coffee, Clock, Star, Heart } from 'lucide-react'
import Link from 'next/link'

const menuData = {
  appetizers: [
    { name: 'Oyster Imperial', price: '3,500', desc: 'Fresh Atlantic oysters, gold leaf, caviar', icon: <Wine className="w-5 h-5" /> },
    { name: 'Truffle Scallops', price: '4,200', desc: 'Pan-seared scallops, black truffle foam, microgreens', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Foie Gras Terrine', price: '5,500', desc: 'Duck liver terrine, fig chutney, toasted brioche', icon: <Utensils className="w-5 h-5" /> },
  ],
  mains: [
    { name: 'Truffle Wagyu', price: '9,500', desc: 'A5 Wagyu, shaved black truffle, red wine jus', icon: <Utensils className="w-5 h-5" />, popular: true },
    { name: 'Saffron Risotto', price: '2,800', desc: 'Arborio rice, Persian saffron, aged parmesan', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Lobster Thermidor', price: '8,200', desc: 'Atlantic lobster, brandy cream, gruyère crust', icon: <Wine className="w-5 h-5" /> },
    { name: 'Wild Mushroom Pasta', price: '3,100', desc: 'Handmade pappardelle, porcini, pine nuts', icon: <Utensils className="w-5 h-5" /> },
  ],
  desserts: [
    { name: 'Gold Chocolate Sphere', price: '2,500', desc: 'Valrhona chocolate, hot caramel, hazelnut praline', icon: <Coffee className="w-5 h-5" /> },
    { name: 'Lavender Crème Brûlée', price: '1,800', desc: 'Infused cream, honeycomb, fresh berries', icon: <Coffee className="w-5 h-5" /> },
  ]
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-mesh py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <Link href="/#dining" className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Dining</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4"
          >
            The <span className="text-gold">Seasonal</span> Menu
          </motion.h1>
          <p className="text-white/50 tracking-[0.2em] uppercase text-xs font-bold">Curated Excellence by Chef de Cuisine</p>
        </div>

        {/* Sections */}
        <div className="space-y-24">
          
          {/* Appetizers */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl font-playfair font-bold text-accent">L'Entrée</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-8">
              {menuData.appetizers.map((item, idx) => (
                <MenuCard key={item.name} item={item} idx={idx} />
              ))}
            </div>
          </section>

          {/* Mains */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl font-playfair font-bold text-accent">Le Plat Principal</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-8">
              {menuData.mains.map((item, idx) => (
                <MenuCard key={item.name} item={item} idx={idx} />
              ))}
            </div>
          </section>

          {/* Desserts */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-2xl font-playfair font-bold text-accent">Le Dessert</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-8">
              {menuData.desserts.map((item, idx) => (
                <MenuCard key={item.name} item={item} idx={idx} />
              ))}
            </div>
          </section>

        </div>

        {/* Footer Info */}
        <div className="mt-32 p-10 glass rounded-[2.5rem] text-center border border-accent/20">
          <h4 className="text-gold font-playfair text-2xl mb-4 italic">A Culinary Journey Awaits</h4>
          <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">Please inform our concierge of any dietary requirements or allergies. All prices are inclusive of service charges.</p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent">
              <Clock className="w-4 h-4" /> Dinner Service: 18:00 - 23:00
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent">
              <Star className="w-4 h-4" /> Michelin Guide 2026
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

function MenuCard({ item, idx }: { item: any, idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group"
    >
      <div className="flex items-start justify-between gap-6 mb-2">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors flex items-center gap-3">
              {item.name}
              {item.popular && (
                <span className="text-[8px] bg-gold/20 text-gold px-2 py-1 rounded-full uppercase tracking-tighter">Chef's Signature</span>
              )}
            </h3>
            <p className="text-white/40 text-sm italic">{item.desc}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gold font-bold text-xl">₹{item.price}</p>
          <button className="text-[8px] uppercase tracking-widest text-white/20 hover:text-accent mt-1 flex items-center gap-1 ml-auto transition-colors">
            <Heart className="w-2 h-2" /> Favorite
          </button>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-4" />
    </motion.div>
  )
}
