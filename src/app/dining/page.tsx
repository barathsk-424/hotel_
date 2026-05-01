export default function DiningPage() {
  const menu = [
    { name: "Saffron Glazed Sea Bass", category: "Entrée", price: "$65" },
    { name: "Truffle Infused Wagyu", category: "Entrée", price: "$95" },
    { name: "Artisanal Cheese Platter", category: "Appetizer", price: "$40" }
  ];

  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">In-Room <span className="text-gold">Dining</span></h1>
        <p className="text-muted-foreground text-lg mb-12">World-class gastronomy, delivered to your private sanctuary.</p>
        
        <div className="space-y-6">
          {menu.map((item) => (
            <div key={item.name} className="glass p-6 flex justify-between items-center rounded-xl hover:bg-white/10 transition-colors">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent mb-1 block">{item.category}</span>
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-white font-playfair text-xl">{item.price}</span>
                <button className="bg-accent text-[#0B1120] w-8 h-8 rounded-full flex items-center justify-center font-bold">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
