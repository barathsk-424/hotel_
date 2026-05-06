'use client'

import Hero from "@/components/layout/Hero";
import RoomsSection from "@/components/sections/RoomsSection";
import GallerySection from "@/components/sections/GallerySection";
import OffersSection from "@/components/sections/OffersSection";
import ReviewCarousel from "@/components/sections/ReviewCarousel";
import LocationSection from "@/components/sections/LocationSection";
import DiningSection from "@/components/sections/DiningSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import AIHelpbot from "@/components/features/AIHelpbot";
import FloatingWhatsApp from "@/components/features/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[110] origin-left"
        style={{ scaleX }}
      />

      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <RoomsSection />
      </motion.div>

      <DiningSection />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <OffersSection />
      </motion.div>

      <GallerySection />

      <ReviewCarousel />

      <FeedbackSection />

      <LocationSection />

      <Footer />

      {/* Floating Features */}
      <AIHelpbot />
      <FloatingWhatsApp />

      {/* Sticky Mobile Book CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 glass border-t border-white/10">
        <Link href="/book" className="btn-gold w-full py-4 text-sm uppercase tracking-widest shadow-2xl block text-center">
          Book Your Sanctuary
        </Link>
      </div>
    </div>
  );
}
