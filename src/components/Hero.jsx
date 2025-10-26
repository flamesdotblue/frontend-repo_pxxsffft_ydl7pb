import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-400" />
          Introducing Deskboard
        </span>
        <h1 className="font-semibold tracking-tight text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
          Turn your folders into a flexible, beautiful workspace
        </h1>
        <p className="mt-5 max-w-2xl text-zinc-300 sm:text-lg">
          Arrange files exactly how you like, pin quick actions, and drop in live widgets. Deskboard brings order and delight to your daily workflow.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-medium text-zinc-950 shadow transition hover:bg-amber-400">
            <Rocket className="h-5 w-5" />
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-5 py-3 font-medium text-zinc-200 backdrop-blur transition hover:bg-zinc-800/60">
            See Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
