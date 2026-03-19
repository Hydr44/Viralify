import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <nav className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 border-4 border-black bg-gradient-to-br from-pink-400 to-purple-500"></div>
              <h1 className="text-2xl font-bold text-black">SnappClip</h1>
            </div>
            <Link href="/dashboard">
              <button className="border-4 border-black bg-pink-400 px-6 py-2.5 font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Launch App
              </button>
            </Link>
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
          <Link href="/dashboard">
            <button className="border-4 border-black bg-pink-400 px-12 py-4 text-lg font-semibold text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Start for free →
            </button>
          </Link>
          
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

          <div className="mt-24 border-4 border-black bg-white p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-4 text-3xl font-bold text-black">
              Ready to go viral?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Join thousands of creators transforming their content with AI
            </p>
            <Link href="/dashboard">
              <button className="border-4 border-black bg-pink-400 px-10 py-3 text-base font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Get started free
              </button>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              No credit card required
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t-4 border-black bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold text-black">&copy; 2026 SnappClip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
