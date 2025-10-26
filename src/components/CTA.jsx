import React from 'react';

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/40 p-10 text-center">
          <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

          <h3 className="text-3xl font-semibold tracking-tight">Bring calm to your desktop</h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">Install Deskboard and turn any folder into a productive, playful workspace with files and widgets together.</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="rounded-lg bg-amber-500 px-5 py-3 font-medium text-zinc-950 shadow transition hover:bg-amber-400">Download for Desktop</a>
            <a href="#" className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-5 py-3 font-medium text-zinc-200 backdrop-blur transition hover:bg-zinc-800/60">Watch Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
