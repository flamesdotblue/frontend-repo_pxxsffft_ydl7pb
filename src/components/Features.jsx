import React from 'react';
import { LayoutDashboard, Folder, Puzzle, Zap } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Arrange Anything',
    desc: 'Drag, stack, and snap files into clean boards. Keep what matters front and center.'
  },
  { icon: Folder, title: 'Folder-Native', desc: 'Works directly on top of your real folders — no imports, no lock-in.' },
  { icon: Puzzle, title: 'Live Widgets', desc: 'Add clocks, notes, todos, and stats alongside your files for a unified view.' },
  { icon: Zap, title: 'Quick Actions', desc: 'One-click open, favorite, tag, or share. Keyboard-first for speed.' }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Features that feel delightful</h2>
            <p className="mt-3 max-w-2xl text-zinc-400">A calm, focused space to organize your work without fighting your tools.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur transition hover:border-amber-500/30">
              <div className="mb-4 inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-amber-400">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl transition duration-300 group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
