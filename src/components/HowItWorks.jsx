import React from 'react';
import { Folder, Move, Gauge } from 'lucide-react';

const steps = [
  {
    icon: Folder,
    title: 'Pick a Folder',
    desc: 'Start with any folder you already use. Deskboard reads it live — no copying needed.'
  },
  {
    icon: Move,
    title: 'Arrange Your Board',
    desc: 'Drag files into sections, create stacks, and drop in widgets for context.'
  },
  {
    icon: Gauge,
    title: 'Work at Lightspeed',
    desc: 'Open, rename, tag, and search with instant actions and keyboard shortcuts.'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">From cluttered folders to a clean, customizable workspace in minutes.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 text-center backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-emerald-400">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
