import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Deskboard. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-zinc-200">Features</a>
            <a href="#get-started" className="hover:text-zinc-200">Get Started</a>
            <a href="#" className="hover:text-zinc-200">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
