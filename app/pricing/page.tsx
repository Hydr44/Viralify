import Link from 'next/link';
import { PLANS } from '@/lib/stripe';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <nav className="border-b-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-10 w-10 border-4 border-black bg-gradient-to-br from-pink-400 to-purple-500"></div>
              <h1 className="text-2xl font-bold text-black">SnappClip</h1>
            </Link>
            <Link href="/dashboard">
              <button className="border-4 border-black bg-pink-400 px-6 py-2.5 font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block border-4 border-black bg-purple-400 px-4 py-1.5 font-semibold">
              💰 Pricing
            </div>
            <h1 className="mb-4 text-5xl font-bold text-black">
              Choose your plan
            </h1>
            <p className="text-xl text-gray-700">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* FREE PLAN */}
            <div className="border-4 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-black">{PLANS.FREE.name}</h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-black">${PLANS.FREE.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <ul className="mb-8 space-y-3">
                {PLANS.FREE.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/dashboard">
                <button className="w-full border-4 border-black bg-gray-200 px-6 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Get Started
                </button>
              </Link>
            </div>

            {/* PRO PLAN */}
            <div className="relative border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="border-4 border-black bg-pink-400 px-4 py-1 font-bold text-black">
                  POPULAR
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-black">{PLANS.PRO.name}</h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-black">${PLANS.PRO.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <ul className="mb-8 space-y-3">
                {PLANS.PRO.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <form action="/api/checkout" method="POST">
                <input type="hidden" name="plan" value="PRO" />
                <button 
                  type="submit"
                  className="w-full border-4 border-black bg-pink-400 px-6 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  Upgrade to Pro
                </button>
              </form>
            </div>

            {/* ENTERPRISE PLAN */}
            <div className="border-4 border-black bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-black">{PLANS.ENTERPRISE.name}</h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-black">${PLANS.ENTERPRISE.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <ul className="mb-8 space-y-3">
                {PLANS.ENTERPRISE.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <form action="/api/checkout" method="POST">
                <input type="hidden" name="plan" value="ENTERPRISE" />
                <button 
                  type="submit"
                  className="w-full border-4 border-black bg-purple-400 px-6 py-3 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  Upgrade to Enterprise
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 border-4 border-black bg-white p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="mb-2 text-2xl font-bold text-black">Need a custom plan?</h3>
            <p className="mb-4 text-gray-700">Contact us for volume pricing and custom solutions</p>
            <a 
              href="mailto:hello@snappclip.com"
              className="inline-block border-4 border-black bg-cyan-400 px-8 py-2 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Contact Sales
            </a>
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
