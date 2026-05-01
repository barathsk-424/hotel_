import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold">Real-time Personalization</h3>
            <p className="text-muted-foreground">Adjust your room's lighting, temperature, and music from anywhere before you even arrive.</p>
          </div>
          
          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils-crosses"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a1.5 1.5 0 0 0-2.1 2.1L12.9 17c.3.3.3.8 0 1.1l-5.3 5.3L10 21.1l5.3-5.3c.3-.3.8-.3 1.1 0l2.3 2.3c.3.3.3.8 0 1.1L17 21l3.3 3.3a1.5 1.5 0 0 0 2.1-2.1L19.1 19l2.3-2.3c.3-.3.3-.8 0-1.1l-2.3-2.3c-.3-.3-.8-.3-1.1 0l-5.3 5.3-2.7-2.7 5.3-5.3c.3-.3.3-.8 0-1.1Z"/><path d="m3 21 8-8"/><path d="m13 11 8-8"/></svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold">Curated Dining</h3>
            <p className="text-muted-foreground">Order from our award-winning menu with live kitchen tracking and dietary synchronization.</p>
          </div>

          <div className="glass-card p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold">Zero-Touch Check-in</h3>
            <p className="text-muted-foreground">Secure, seamless, and frictionless. Your mobile device is your key to an unparalleled stay.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
