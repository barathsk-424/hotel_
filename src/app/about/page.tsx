export default function AboutPage() {
  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">About <span className="text-gold">LuxStay Nexus</span></h1>
        <div className="glass p-12 rounded-2xl text-left space-y-6 text-muted-foreground leading-relaxed">
          <p>
            LuxStay Nexus was founded on the principle that true luxury is deeply personal. We believe that your environment should adapt to you, not the other way around.
          </p>
          <p>
            Our flagship property features 45 bespoke suites, each equipped with our proprietary Ambient Intelligence engine. This system allows you to harmonize every aspect of your stay—from the scent profile of your room to the exact HZ frequency of your background soundscape.
          </p>
          <p>
            Welcome to the new standard of hospitality. Welcome home.
          </p>
        </div>
      </div>
    </div>
  );
}
