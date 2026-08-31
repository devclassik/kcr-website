'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Github, 
  Twitter, 
  Linkedin, 
  CheckCircle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-100 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 text-slate-600 dark:text-slate-400 relative overflow-hidden transition-colors duration-300">
      {/* Subtle Glow Effect background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-indigo-600/10 via-sky-500/10 to-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src="/kcr-logo.png" alt="KCR Nig Ltd Logo" className="w-full h-full object-cover rounded-[10px]" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                KCR <span className="text-indigo-600 dark:text-indigo-400">NIG LTD</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              The next-generation tech platform for KCR Nig Ltd empowering modern web applications with modular plugins, instant Paystack invoicing, and automated revenue workflow engines.
            </p>
            <div className="flex items-center gap-4 pt-2 text-indigo-700 dark:text-indigo-300">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-slate-800 dark:text-slate-300">256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-mono">
                <CreditCard className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span className="text-slate-800 dark:text-slate-300">Paystack Verified</span>
              </div>
            </div>
          </div>

          {/* Nav Links 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plugins" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">WebApp Plugins</Link>
              </li>
              <li>
                <Link href="/metrics" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Platform Metrics & Reviews</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/metrics" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Platform Trust Hub</Link>
              </li>

            </ul>
          </div>

          {/* Nav Links 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">Developers & Docs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Architecture</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Webhook Reference</Link>
              </li>
              <li>
                <Link href="/plugins" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Paystack SDK Guide</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Enterprise SLA</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">Newsletter</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Get updates on new WebApp plugins and Paystack features.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="kolamajawole@gmail.com"
                className="w-full px-3 py-2 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />

              <button
                type="submit"
                className="w-full py-2 rounded-xl text-xs font-semibold btn-purple-glow cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
            <span className="font-mono text-slate-700 dark:text-slate-300">All Paystack Gateway Systems Operational (99.99%)</span>
          </div>
          <p className="text-slate-500">
            © {new Date().getFullYear()} KCR Nig Ltd Platform. Payment Gateway powered by Paystack.
          </p>
        </div>
      </div>
    </footer>
  );
};

