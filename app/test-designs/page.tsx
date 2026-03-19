"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Scissors, Sparkles, Upload, Video } from "lucide-react";

const designs = [
  {
    id: 1,
    name: "Brutalist Minimal",
    description: "Black/White/Lime • Sharp edges • Bold typography",
    component: () => (
      <div className="min-h-screen bg-black">
        <nav className="border-b-4 border-lime-400 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-black uppercase tracking-tighter text-white">SNAPPCLIP</h1>
              <button className="border-4 border-lime-400 bg-lime-400 px-6 py-2 font-black uppercase text-black hover:bg-black hover:text-lime-400">
                LAUNCH
              </button>
            </div>
          </div>
        </nav>
        <main className="px-6 py-32">
          <div className="mx-auto max-w-5xl">
            <div className="border-8 border-white bg-black p-12 text-center">
              <h2 className="mb-6 text-7xl font-black uppercase leading-none tracking-tighter text-white">
                AI VIDEO<br/>CLIPS IN<br/>
                <span className="text-lime-400">SECONDS</span>
              </h2>
              <p className="mb-8 text-xl text-gray-400">
                Automatic splitting • AI captions • Viral optimization
              </p>
              <button className="border-4 border-lime-400 bg-lime-400 px-12 py-4 text-xl font-black uppercase text-black hover:bg-black hover:text-lime-400">
                START FREE
              </button>
            </div>
          </div>
        </main>
      </div>
    ),
  },
  {
    id: 2,
    name: "Neubrutalism Colorful",
    description: "Bright colors • Bold shadows • Playful",
    component: () => (
      <div className="min-h-screen bg-yellow-50">
        <nav className="border-b-4 border-black bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 border-4 border-black bg-gradient-to-br from-pink-400 to-purple-500"></div>
                <h1 className="text-2xl font-black text-black">SnappClip</h1>
              </div>
              <button className="border-4 border-black bg-pink-400 px-6 py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Launch App
              </button>
            </div>
          </div>
        </nav>
        <main className="px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block border-4 border-black bg-purple-400 px-4 py-1 font-bold">
              ✨ AI POWERED
            </div>
            <h1 className="mb-6 text-6xl font-black leading-tight text-black">
              Turn videos into<br/>
              <span className="inline-block border-4 border-black bg-gradient-to-r from-pink-400 to-orange-400 px-4">viral clips</span>
            </h1>
            <p className="mb-10 text-xl text-gray-700">
              AI-powered editing for TikTok, Reels & Shorts
            </p>
            <button className="border-4 border-black bg-pink-400 px-12 py-4 text-xl font-bold text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Start for free →
            </button>
          </div>
        </main>
      </div>
    ),
  },
  {
    id: 3,
    name: "Minimal Swiss",
    description: "B&W + Red • Clean typography • Swiss design",
    component: () => (
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-medium tracking-tight">SnappClip</h1>
              <button className="rounded-full bg-red-600 px-6 py-2 text-sm font-medium text-white hover:bg-red-700">
                Launch
              </button>
            </div>
          </div>
        </nav>
        <main className="px-6 py-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-7xl font-light leading-none tracking-tight text-black">
              AI video<br/>
              editing for<br/>
              <span className="font-bold text-red-600">creators</span>
            </h1>
            <p className="mb-12 max-w-md text-lg leading-relaxed text-gray-600">
              Automatically split long videos into optimized clips for social media. Powered by artificial intelligence.
            </p>
            <div className="flex gap-4">
              <button className="rounded-full bg-black px-8 py-3 font-medium text-white hover:bg-gray-800">
                Start free trial
              </button>
              <button className="rounded-full border border-gray-300 px-8 py-3 font-medium text-black hover:bg-gray-50">
                Watch demo
              </button>
            </div>
          </div>
        </main>
      </div>
    ),
  },
  {
    id: 4,
    name: "Cyberpunk Neon",
    description: "Dark + Neon • Monospace font • Futuristic",
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
          </div>
        </main>
      </div>
    ),
  },
  {
    id: 5,
    name: "Modern Gradient",
    description: "Vivid gradients • Smooth • Contemporary",
    component: () => (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <nav className="border-b border-white/10 bg-white/10 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">SnappClip</h1>
              <button className="rounded-2xl bg-white px-6 py-2 font-semibold text-purple-600 hover:bg-white/90">
                Launch App
              </button>
            </div>
          </div>
        </nav>
        <main className="px-6 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
              <span>✨</span> Powered by AI
            </div>
            <h1 className="mb-6 text-7xl font-bold leading-tight text-white">
              Create viral clips<br/>
              in seconds
            </h1>
            <p className="mb-12 text-xl text-white/80">
              AI-powered video editing for TikTok, Instagram Reels & YouTube Shorts
            </p>
            <div className="flex justify-center gap-4">
              <button className="rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-purple-600 shadow-2xl shadow-black/20 hover:scale-105">
                Start for free
              </button>
              <button className="rounded-2xl border-2 border-white/30 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-xl hover:bg-white/20">
                Watch demo
              </button>
            </div>
          </div>
        </main>
      </div>
    ),
  },
];

export default function TestDesigns() {
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
            ← Back to all designs
          </button>
        </div>
        <SelectedDesign />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Choose Your Design
          </h1>
          <p className="text-lg text-slate-400">
            Click on any design to see it fullscreen
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, index) => (
            <button
              key={design.id}
              onClick={() => setSelected(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:scale-105 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-2xl font-black text-white">
                  {design.id}
                </div>
                <div className="text-sm font-semibold text-fuchsia-400">
                  Click to preview →
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {design.name}
              </h3>
              <p className="text-sm text-slate-400">
                {design.description}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-2xl font-bold text-white">
            Quale ti piace di più?
          </h2>
          <p className="text-slate-400">
            Clicca su un design per vederlo a schermo intero, poi dimmi quale preferisci (1-5)
          </p>
        </div>
      </div>
    </div>
  );
}
