"use client";

import { useState } from "react";

const designs = [
  {
    id: "2-improved",
    name: "Neubrutalism (Font Migliorato)",
    description: "Bright colors • Bold shadows • Font moderno Geist",
    component: () => (
      <div className="min-h-screen bg-yellow-50">
        <nav className="border-b-4 border-black bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 border-4 border-black bg-gradient-to-br from-pink-400 to-purple-500"></div>
                <h1 className="text-2xl font-bold text-black">SnappClip</h1>
              </div>
              <button className="border-4 border-black bg-pink-400 px-6 py-2.5 font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Launch App
              </button>
            </div>
          </div>
        </nav>
        <main className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-block border-4 border-black bg-purple-400 px-4 py-1.5 font-semibold">
              ✨ AI Powered
            </div>
            <h1 className="mb-6 text-6xl font-bold leading-tight text-black">
              Turn videos into<br/>
              <span className="inline-block border-4 border-black bg-gradient-to-r from-pink-400 to-orange-400 px-4 py-1">viral clips</span>
            </h1>
            <p className="mb-10 text-xl text-gray-700">
              AI-powered editing for TikTok, Reels & YouTube Shorts
            </p>
            <button className="border-4 border-black bg-pink-400 px-12 py-4 text-lg font-semibold text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Start for free →
            </button>
            
            <div className="mt-24 grid gap-6 md:grid-cols-3">
              <div className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-cyan-400 text-2xl">
                  📤
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">Upload</h3>
                <p className="text-sm text-gray-700">
                  Drag and drop your video
                </p>
              </div>
              
              <div className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-purple-400 text-2xl">
                  ✨
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">AI Magic</h3>
                <p className="text-sm text-gray-700">
                  Automatic processing
                </p>
              </div>
              
              <div className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-pink-400 text-2xl">
                  ✂️
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">Download</h3>
                <p className="text-sm text-gray-700">
                  Get your viral clips
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    ),
  },
  {
    id: "4",
    name: "Cyberpunk Neon",
    description: "Dark + Neon • Monospace • Futuristic",
    component: () => (
      <div className="min-h-screen bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <nav className="relative border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 animate-pulse border-2 border-cyan-400 bg-cyan-400/20"></div>
                <h1 className="font-mono text-xl font-bold tracking-wider text-cyan-400">SNAPPCLIP</h1>
              </div>
              <button className="border border-cyan-400 bg-cyan-400/10 px-6 py-2 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-cyan-400/20">
                &gt; LAUNCH_APP
              </button>
            </div>
          </div>
        </nav>
        <main className="relative px-6 py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-block border border-pink-500 bg-pink-500/10 px-4 py-1 font-mono text-sm text-pink-400">
              [ AI_POWERED ]
            </div>
            <h1 className="mb-6 font-mono text-6xl font-black uppercase leading-tight tracking-tight">
              <span className="text-white">TRANSFORM_</span><br/>
              <span className="animate-pulse text-cyan-400">VIDEOS_</span><br/>
              <span className="text-pink-400">INTO_CLIPS</span>
            </h1>
            <p className="mb-12 font-mono text-lg text-gray-400">
              &gt; Automatic splitting | AI captions | Viral optimization
            </p>
            <button className="border-2 border-cyan-400 bg-cyan-400/20 px-12 py-4 font-mono text-lg font-bold uppercase text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:bg-cyan-400/30">
              &gt; START_NOW
            </button>
            
            <div className="mt-24 grid gap-6 md:grid-cols-3">
              <div className="border border-cyan-500/30 bg-cyan-950/20 p-6 backdrop-blur-sm">
                <div className="mb-4 font-mono text-sm text-cyan-400">[ STEP_01 ]</div>
                <h3 className="mb-2 font-mono text-lg font-bold text-white">UPLOAD_VIDEO</h3>
                <p className="font-mono text-sm text-gray-400">
                  &gt; Drag and drop
                </p>
              </div>
              
              <div className="border border-purple-500/30 bg-purple-950/20 p-6 backdrop-blur-sm">
                <div className="mb-4 font-mono text-sm text-purple-400">[ STEP_02 ]</div>
                <h3 className="mb-2 font-mono text-lg font-bold text-white">AI_PROCESS</h3>
                <p className="font-mono text-sm text-gray-400">
                  &gt; Automatic magic
                </p>
              </div>
              
              <div className="border border-pink-500/30 bg-pink-950/20 p-6 backdrop-blur-sm">
                <div className="mb-4 font-mono text-sm text-pink-400">[ STEP_03 ]</div>
                <h3 className="mb-2 font-mono text-lg font-bold text-white">DOWNLOAD_CLIPS</h3>
                <p className="font-mono text-sm text-gray-400">
                  &gt; Get viral content
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    ),
  },
];

export default function ComparePage() {
  const [selected, setSelected] = useState<number | null>(null);

  if (selected !== null) {
    const SelectedDesign = designs[selected].component;
    return (
      <div className="relative">
        <div className="fixed left-4 top-4 z-50">
          <button
            onClick={() => setSelected(null)}
            className="rounded-lg bg-black/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl hover:bg-black"
          >
            ← Indietro
          </button>
        </div>
        <SelectedDesign />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Design 2 vs Design 4
          </h1>
          <p className="text-lg text-slate-400">
            Clicca per vedere a schermo intero
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {designs.map((design, index) => (
            <button
              key={design.id}
              onClick={() => setSelected(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-3xl font-black text-white">
                  {index === 0 ? "2" : "4"}
                </div>
                <div className="text-sm font-semibold text-fuchsia-400">
                  Click per preview →
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                {design.name}
              </h3>
              <p className="text-slate-400">
                {design.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Quale preferisci?
          </h2>
          <p className="text-slate-400">
            Design 2 (Neubrutalism con font moderno) o Design 4 (Cyberpunk)?
          </p>
        </div>
      </div>
    </div>
  );
}
