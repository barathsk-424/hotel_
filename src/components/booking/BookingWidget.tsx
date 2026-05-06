'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, Home, Search } from 'lucide-react'
import Link from 'next/link'

export default function BookingWidget() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2 Adults, 1 Room',
    roomType: 'Presidential Zenith Suite'
  })

  const checkInRef = useRef<HTMLInputElement>(null)
  const checkOutRef = useRef<HTMLInputElement>(null)

  const handleDateClick = (ref: React.RefObject<HTMLInputElement | null>) => {
    const el: any = ref.current
    if (el) {
      try {
        if (el.showPicker) {
          el.showPicker()
        } else {
          el.focus()
          el.click()
        }
      } catch (e) {
        el.focus()
        el.click()
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-6xl mx-auto mt-12 px-4"
    >
      <div className="glass p-2 rounded-[2rem] shadow-2xl relative overflow-hidden group">
        <div className="flex flex-col xl:flex-row items-center gap-2 relative z-10">
          
          {/* Check-in */}
          <div 
            className="flex-1 w-full p-4 lg:p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-3 lg:gap-4 group/item"
            onClick={() => handleDateClick(checkInRef)}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:scale-110 transition-transform">
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1">Check-in</p>
              <input 
                ref={checkInRef}
                type="date" 
                value={bookingData.checkIn}
                onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                className="w-full bg-transparent text-xs lg:text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer placeholder:text-white/20"
              />
              {!bookingData.checkIn && <p className="text-[10px] text-white/30 absolute pointer-events-none mt-[-18px]">Select Date</p>}
            </div>
          </div>

          <div className="hidden xl:block w-px h-10 bg-white/10" />

          {/* Check-out */}
          <div 
            className="flex-1 w-full p-4 lg:p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-3 lg:gap-4 group/item"
            onClick={() => handleDateClick(checkOutRef)}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:scale-110 transition-transform">
              <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left flex-1 relative">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1">Check-out</p>
              <input 
                ref={checkOutRef}
                type="date" 
                value={bookingData.checkOut}
                onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                className="w-full bg-transparent text-xs lg:text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer"
              />
              {!bookingData.checkOut && <p className="text-[10px] text-white/30 absolute pointer-events-none mt-[-18px]">Select Date</p>}
            </div>
          </div>

          <div className="hidden xl:block w-px h-10 bg-white/10" />

          {/* Guests */}
          <div className="flex-1 w-full p-4 lg:p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-3 lg:gap-4 group/item relative">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:scale-110 transition-transform">
              <Users className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1">Guests</p>
              <select 
                value={bookingData.guests}
                onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                className="w-full bg-transparent text-xs lg:text-sm font-semibold text-foreground focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="1 Adult, 1 Room" className="bg-[#0B1120]">1 Adult, 1 Room</option>
                <option value="2 Adults, 1 Room" className="bg-[#0B1120]">2 Adults, 1 Room</option>
                <option value="2 Adults, 2 Rooms" className="bg-[#0B1120]">2 Adults, 2 Rooms</option>
                <option value="4 Adults, 2 Rooms" className="bg-[#0B1120]">4 Adults, 2 Rooms</option>
              </select>
            </div>
          </div>

          <div className="hidden xl:block w-px h-10 bg-white/10" />

          {/* Room Type */}
          <div className="flex-1 w-full p-4 lg:p-6 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-3 lg:gap-4 group/item relative">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:scale-110 transition-transform">
              <Home className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1">Room Type</p>
              <select 
                value={bookingData.roomType}
                onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
                className="w-full bg-transparent text-xs lg:text-sm font-semibold text-foreground focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="Presidential Zenith Suite" className="bg-[#0B1120]">Zenith Suite</option>
                <option value="Executive Garden Villa" className="bg-[#0B1120]">Garden Villa</option>
                <option value="Zen Harmony Room" className="bg-[#0B1120]">Harmony Room</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <Link 
            href={`/book?in=${bookingData.checkIn}&out=${bookingData.checkOut}&guests=${encodeURIComponent(bookingData.guests)}&room=${encodeURIComponent(bookingData.roomType)}`} 
            className="btn-gold w-full xl:w-auto h-16 xl:h-20 px-8 xl:px-12 rounded-2xl flex items-center justify-center gap-3 group/btn shrink-0"
          >
            <Search className="w-5 h-5 xl:w-6 xl:h-6 transition-transform group-hover/btn:scale-110" />
            <span className="font-bold tracking-[0.2em] uppercase text-[10px] xl:text-xs whitespace-nowrap">Check Availability</span>
          </Link>
        </div>

        {/* Decorative background pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
      </div>
    </motion.div>
  )
}
