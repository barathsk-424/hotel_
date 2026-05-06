'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, Users, Home, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState, useEffect } from 'react'

const roomPrices: Record<string, number> = {
  'Presidential Zenith Suite': 95000,
  'Executive Garden Villa': 65000,
  'Zen Harmony Room': 35000
}

function BookingContent() {
  const searchParams = useSearchParams()
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const checkIn = searchParams.get('in') || 'Not selected'
  const checkOut = searchParams.get('out') || 'Not selected'
  const guests = searchParams.get('guests') || '2 Adults, 1 Room'
  const roomType = searchParams.get('room') || 'Presidential Zenith Suite'

  const pricePerNight = roomPrices[roomType] || 35000
  
  // Calculate nights
  const getNights = () => {
    if (checkIn === 'Not selected' || checkOut === 'Not selected') return 3 // Default
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 1
  }

  const nights = getNights()
  const subtotal = pricePerNight * nights
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + tax

  const handleConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto pt-40 pb-20 px-6 text-center"
      >
        <div className="glass-card p-12 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-playfair font-bold text-white">Residency <span className="text-gold">Confirmed</span></h1>
          <p className="text-white/60 leading-relaxed">
            Your sanctuary is prepared. A confirmation details package has been sent to your residency portal and email address. 
            We look forward to welcoming you home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/" className="btn-gold !px-10">Return Home</Link>
            <button className="btn-outline !px-10">Download Receipt</button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">Complete Your <span className="text-gold">Sanctuary</span></h1>
              <p className="text-white/50 tracking-wide">Please provide your details to secure your celestial stay at LuxStay Nexus.</p>
            </div>

            <div className="glass-card p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-accent">Special Requests</label>
                <textarea rows={4} placeholder="E.g., champagne on arrival, late checkout..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div className="flex items-center gap-4 p-5 bg-accent/5 rounded-2xl border border-accent/20">
                <ShieldCheck className="text-accent w-6 h-6 shrink-0" />
                <p className="text-xs text-white/50 italic leading-relaxed">Your data is secured with bank-grade 256-bit encryption and our privacy guarantee.</p>
              </div>

              <button 
                onClick={handleConfirm}
                disabled={isLoading}
                className="btn-gold w-full py-5 text-sm uppercase tracking-[0.3em] font-bold group relative overflow-hidden"
              >
                <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
                  Confirm Reservation <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-2" />
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </div>
          </motion.div>

          {/* Sidebar Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass-card p-8 sticky top-32 space-y-8">
              <h3 className="text-xl font-playfair font-bold pb-6 border-b border-white/10 text-gold flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Booking Summary
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Residency</p>
                    <p className="font-bold text-sm">{roomType}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Duration</p>
                    <p className="font-bold text-sm">{checkIn} — {checkOut}</p>
                    <p className="text-[10px] text-accent mt-1">{nights} Night{nights > 1 ? 's' : ''} Stay</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Guests</p>
                    <p className="font-bold text-sm">{guests}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Subtotal ({nights} nights)</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Service Tax (5%)</span>
                  <span className="font-semibold">₹{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-4 border-t border-white/10">
                  <span className="text-gold">Total Amount</span>
                  <span className="text-white font-playfair tracking-wider">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-[10px] text-center text-white/20 uppercase tracking-widest leading-relaxed">
                {checkIn !== 'Not selected' ? 
                  `Free cancellation before ${new Date(new Date(checkIn).getTime() - 48*60*60*1000).toLocaleDateString()}` : 
                  'Flexible cancellation policy applies'
                }
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-mesh text-white font-inter">
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <BookingContent />
      </Suspense>
    </main>
  )
}
