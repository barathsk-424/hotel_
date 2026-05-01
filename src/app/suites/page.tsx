import Navbar from "@/components/layout/Navbar";

export default function SuitesPage() {
  const suites = [
    { name: "Celestial Penthouse", price: "$2,400", description: "Panoramic city views with a private infinity pool." },
    { name: "Zen Garden Suite", price: "$1,800", description: "Minimalist sanctuary with indoor waterfall and meditation area." },
    { name: "Nebula Executive", price: "$1,200", description: "High-tech productivity hub with smart lighting and soundproofing." }
  ];

  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Our <span className="text-gold">Exclusive Suites</span></h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Each room is a masterpiece of design, awaiting your personalization.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <div key={suite.name} className="glass-card overflow-hidden group">
              <div className="h-64 bg-white/5 relative">
                {/* Placeholder for room image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 italic">Room Visual Coming Soon</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">{suite.name}</h3>
                <p className="text-accent font-semibold mb-4">{suite.price} / Night</p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{suite.description}</p>
                <button className="w-full btn-gold !py-3">Select Suite</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
