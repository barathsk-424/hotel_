'use client'

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login functionality coming soon! Please use Google login for now.');
  };

  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center px-6">
      <div className="glass-card p-12 w-full max-w-md text-center">
        <h1 className="text-3xl font-playfair font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-muted-foreground mb-8">Login to your private concierge.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="text-xs uppercase tracking-widest text-accent mb-2 block">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="name@example.com" 
              autoComplete="email"
              className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white focus:outline-none focus:border-accent/50" 
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-accent mb-2 block">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••" 
              autoComplete="current-password"
              className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white focus:outline-none focus:border-accent/50" 
            />
          </div>
          
          <button type="submit" className="w-full btn-gold mt-4 hover:scale-[1.02] active:scale-[0.98] transition-transform">
            Login
          </button>
        </form>
        
        <div className="mt-6 flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex-1 h-px bg-white/10" />
          <span>OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        
        <button 
          onClick={() => alert('Google Login coming soon!')}
          className="w-full glass mt-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.64 24.55c0-1.65-.15-3.23-.42-4.75H24v9h12.75c-.55 2.85-2.15 5.25-4.57 6.87l7.1 5.5c4.15-3.83 6.54-9.47 6.54-16.62z"/><path fill="#FBBC05" d="M10.54 28.55c-.48-1.45-.76-2.99-.76-4.55s.27-3.1.76-4.55l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.98-6.23z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.1-5.5c-2.15 1.45-4.92 2.31-8.79 2.31-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
