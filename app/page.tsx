import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Scissors, Sparkles, Upload, Video, Wand2, TrendingUp, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative">
        <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 opacity-75 blur-lg"></div>
                  <Scissors className="relative h-10 w-10 text-cyan-400" />
                </div>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-3xl font-black tracking-tight text-transparent">
                  SnappClip
                </span>
              </div>
              <Link href="/dashboard">
                <Button 
                  className="group relative overflow-hidden border-0 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/75"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Launch App
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <main>
          <section className="relative px-4 py-32 sm:px-6 lg:px-8">
            <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl"></div>
            
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 backdrop-blur-sm">
                  <Star className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-300">AI-Powered Video Magic</span>
                </div>
                
                <h1 className="mb-8 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                  <span className="block text-white">Transform</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Long Videos
                  </span>
                  <span className="block text-white">Into Viral Clips</span>
                </h1>
                
                <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-400 sm:text-2xl">
                  Harness the power of AI to automatically split, enhance, and optimize your content for 
                  <span className="font-semibold text-white"> TikTok</span>,
                  <span className="font-semibold text-white"> Instagram Reels</span>, and
                  <span className="font-semibold text-white"> YouTube Shorts</span>.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link href="/dashboard">
                    <Button 
                      size="lg" 
                      className="group relative h-16 overflow-hidden border-0 bg-gradient-to-r from-cyan-500 to-purple-600 px-12 text-lg font-bold text-white shadow-2xl shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-purple-500/75"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <Sparkles className="h-6 w-6" />
                        Start Creating Free
                      </span>
                      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    </Button>
                  </Link>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-16 border-2 border-white/10 bg-white/5 px-12 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <Video className="mr-2 h-6 w-6" />
                    Watch Demo
                  </Button>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    <span>Process in minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    <span>10x engagement boost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wand2 className="h-5 w-5 text-pink-400" />
                    <span>AI-powered editing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-20 text-center">
                <h2 className="mb-4 text-5xl font-black text-white">
                  How It Works
                </h2>
                <p className="text-xl text-gray-400">
                  Three simple steps to viral content
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="group relative overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-950/50 to-black p-8 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl"></div>
                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/50">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-sm font-bold text-cyan-400">STEP 01</div>
                    <h3 className="mb-4 text-2xl font-bold text-white">Upload Your Video</h3>
                    <p className="leading-relaxed text-gray-400">
                      Simply drag and drop your long-form content. We support all major formats up to 30 minutes.
                    </p>
                  </div>
                </Card>

                <Card className="group relative overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-black p-8 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl"></div>
                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/50">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-sm font-bold text-purple-400">STEP 02</div>
                    <h3 className="mb-4 text-2xl font-bold text-white">AI Magic</h3>
                    <p className="leading-relaxed text-gray-400">
                      Our advanced AI transcribes, analyzes, and identifies the most engaging moments automatically.
                    </p>
                  </div>
                </Card>

                <Card className="group relative overflow-hidden border border-pink-500/20 bg-gradient-to-br from-pink-950/50 to-black p-8 backdrop-blur-sm transition-all hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/20">
                  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-pink-500/20 to-transparent blur-2xl"></div>
                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/50">
                      <Scissors className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-sm font-bold text-pink-400">STEP 03</div>
                    <h3 className="mb-4 text-2xl font-bold text-white">Export & Share</h3>
                    <p className="leading-relaxed text-gray-400">
                      Download perfectly formatted clips with AI-generated titles, captions, and hashtags ready to post.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/50 via-black to-cyan-900/50 p-16 text-center backdrop-blur-xl">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl"></div>
                
                <div className="relative">
                  <h2 className="mb-6 text-5xl font-black text-white">
                    Ready to Go Viral?
                  </h2>
                  <p className="mb-10 text-xl text-gray-300">
                    Join thousands of creators transforming their content with AI
                  </p>
                  <Link href="/dashboard">
                    <Button 
                      size="lg" 
                      className="h-16 border-0 bg-white px-12 text-lg font-bold text-black shadow-2xl shadow-white/20 transition-all hover:scale-105 hover:shadow-white/30"
                    >
                      <Zap className="mr-2 h-6 w-6" />
                      Get Started Free
                    </Button>
                  </Link>
                  <p className="mt-6 text-sm text-gray-500">
                    No credit card required • Free forever plan available
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5 bg-black/50 py-12 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 text-center text-gray-500 sm:px-6 lg:px-8">
            <p className="text-sm">&copy; 2026 SnappClip. All rights reserved. Powered by AI.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
