import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Scissors, Sparkles, Upload, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      
      <div className="relative">
        <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/80 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600">
                  <Scissors className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  SnappClip
                </span>
              </div>
              <Link href="/dashboard">
                <Button 
                  className="h-9 rounded-lg bg-white px-4 text-sm font-medium text-slate-950 transition-all hover:bg-white/90"
                >
                  Launch App
                  <Zap className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <main>
          <section className="relative px-6 pb-24 pt-20 sm:pb-32 sm:pt-24 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-fuchsia-500 to-purple-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm backdrop-blur-xl">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500/20">
                    <Sparkles className="h-3 w-3 text-fuchsia-400" />
                  </div>
                  <span className="text-slate-300">Powered by AI</span>
                </div>
                
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Turn videos into
                  <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    viral clips
                  </span>
                  in seconds
                </h1>
                
                <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400">
                  AI-powered video editing that automatically splits your content into engaging clips optimized for TikTok, Instagram Reels, and YouTube Shorts.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/dashboard">
                    <Button 
                      size="lg" 
                      className="group h-12 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-8 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-all hover:shadow-xl hover:shadow-fuchsia-500/40"
                    >
                      Start for free
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-12 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Watch demo
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-1 rounded-full bg-fuchsia-500"></div>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-1 rounded-full bg-purple-500"></div>
                    <span>Process in minutes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-1 rounded-full bg-pink-500"></div>
                    <span>Free forever plan</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  How it works
                </h2>
                <p className="text-lg text-slate-400">
                  Three simple steps to viral content
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600">
                    <Upload className="h-7 w-7 text-white" />
                  </div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-fuchsia-400">Step 01</div>
                  <h3 className="mb-3 text-xl font-semibold text-white">Upload video</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Drag and drop your long-form content. Support for all major formats up to 30 minutes.
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">Step 02</div>
                  <h3 className="mb-3 text-xl font-semibold text-white">AI processing</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Advanced AI transcribes, analyzes, and identifies the most engaging moments automatically.
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-600">
                    <Scissors className="h-7 w-7 text-white" />
                  </div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-pink-400">Step 03</div>
                  <h3 className="mb-3 text-xl font-semibold text-white">Download clips</h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Get perfectly formatted clips with AI-generated titles, captions, and hashtags ready to post.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl sm:p-16">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-purple-500/10"></div>
                
                <div className="relative">
                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to go viral?
                  </h2>
                  <p className="mb-8 text-lg text-slate-400">
                    Join creators transforming their content with AI
                  </p>
                  <Link href="/dashboard">
                    <Button 
                      size="lg" 
                      className="h-12 rounded-xl bg-white px-8 text-base font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all hover:shadow-xl hover:shadow-white/20"
                    >
                      Start for free
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="mt-6 text-sm text-slate-500">
                    No credit card required
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5 py-12">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-sm text-slate-500">&copy; 2026 SnappClip. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
