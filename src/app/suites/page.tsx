import Image from "next/image";

import penthouseImg from '../../../public/penthouse.png';
import zenImg from '../../../public/zen.png';
import executiveImg from '../../../public/executive.png';

export default function SuitesPage() {
  const suites = [
    { 
      name: "Celestial Penthouse", 
      price: "$2,400", 
      image: penthouseImg,
      description: "Panoramic city views with a private infinity pool." 
    },
    { 
      name: "Zen Garden Suite", 
      price: "$1,800", 
      image: zenImg,
      description: "Minimalist sanctuary with indoor waterfall and meditation area." 
    },
    { 
      name: "Nebula Executive", 
      price: "$1,200", 
      image: executiveImg,
      description: "High-tech productivity hub with smart lighting and soundproofing." 
    }
  ];


  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">Our <span className="text-gold">Exclusive Suites</span></h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Each room is a masterpiece of design, awaiting your personalization.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <div key={suite.name} className="glass-card overflow-hidden group">
              <div className="h-64 relative">
                <Image 
                  src={suite.image} 
                  alt={suite.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">{suite.name}</h3>
                <p className="text-accent font-semibold mb-4">{suite.price} / Night</p>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{suite.description}</p>
                <button className="w-full btn-gold !py-3 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  Select Suite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
