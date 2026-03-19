import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Scissors, Sparkles, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold text-white">SnappClip</span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
                Turn Long Videos Into
                <span className="block bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Viral Clips
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-purple-100">
                AI-powered video editing that automatically splits your content into engaging clips optimized for TikTok, Instagram Reels, and YouTube Shorts.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Creating
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">1. Upload Your Video</h3>
                <p className="text-purple-200">
                  Drag and drop your long-form video. We support videos up to 30 minutes.
                </p>
              </Card>

              <Card className="border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-500">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">2. AI Processing</h3>
                <p className="text-purple-200">
                  Our AI analyzes your content, transcribes audio, and identifies the most engaging moments.
                </p>
              </Card>

              <Card className="border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                  <Scissors className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">3. Download Clips</h3>
                <p className="text-purple-200">
                  Get multiple ready-to-post clips with AI-generated titles, captions, and hashtags.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-12 text-center backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Ready to Go Viral?
              </h2>
              <p className="mb-8 text-xl text-purple-100">
                Join thousands of creators turning their content into viral clips.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-purple-200 sm:px-6 lg:px-8">
          <p>&copy; 2026 SnappClip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
