'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Star, MessageSquare, Heart, ShieldCheck } from 'lucide-react'

export default function FeedbackSection() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('success'), 2000)
  }

  return (
    <section id="feedback" className="py-32 px-6 bg-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-accent font-playfair text-lg tracking-[0.3em] uppercase mb-4">Connect With Us</h2>
              <h3 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Your Voice <span className="text-gold">Matters</span></h3>
              <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg">
                Whether it's a whisper of praise or a suggestion for excellence, we are here to listen. Experience the LuxStay commitment to service.
              </p>
            </div>

            <div className="flex gap-12 pt-4">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white">4.9</p>
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Average Guest Rating</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white">2.5k+</p>
                <p className="text-accent text-lg italic font-playfair">Stories Shared</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Since Opening</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-white/10 relative"
          >
            {status === 'success' ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-accent animate-pulse" />
                </div>
                <h4 className="text-2xl font-playfair font-bold text-white">Thank You for Your Feedback</h4>
                <p className="text-white/50 text-sm max-w-xs">Your message has been received by our guest experience team. We will respond to your request shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-accent text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 block">How would you rate your experience?</label>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-125"
                      >
                        <Star 
                          className={cn(
                            "w-8 h-8 transition-colors",
                            (hover || rating) >= star ? "text-gold fill-gold" : "text-white/10"
                          )} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Mr. Barath"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="skbarath424@gmail.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Message or Review</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your experience or ask a question..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all resize-none"
                  />
                </div>

                <button 
                  disabled={status === 'sending'}
                  className="btn-gold w-full flex items-center justify-center gap-3 !py-5 uppercase tracking-[0.2em] font-bold text-xs group"
                >
                  {status === 'sending' ? 'Sending...' : (
                    <>
                      Submit Feedback <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
                   <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/20">
                     <ShieldCheck className="w-3 h-3 text-accent/40" /> Private Data Protection
                   </div>
                   <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest text-white/20">
                     <MessageSquare className="w-3 h-3 text-accent/40" /> 24/7 Response Time
                   </div>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
