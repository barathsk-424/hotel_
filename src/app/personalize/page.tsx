export default function PersonalizePage() {
  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">Personalize Your <span className="text-gold">Stay</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Select Your Mood</h3>
            <div className="space-y-4">
              {['Romantic', 'Productive', 'Relaxed'].map(mood => (
                <div key={mood} className="p-4 border border-white/10 rounded-lg cursor-pointer hover:border-accent/50 transition-colors flex items-center justify-between">
                  <span>{mood}</span>
                  <div className="w-4 h-4 rounded-full border border-white/30" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Atmosphere Control</h3>
            <div className="space-y-8 mt-8">
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Temperature</span>
                  <span className="text-accent">22°C</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[60%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Lighting Intensity</span>
                  <span className="text-accent">40%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[40%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="btn-gold mt-12 px-12 py-4">Save Preferences</button>
      </div>
    </div>
  );
}
