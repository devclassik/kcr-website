'use me';
'use client';

import React from 'react';
import Link from 'next/link';
import {
  Zap,
  Sparkles,
  CreditCard,
  Grid,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden cyber-grid">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-purple-pulse" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-md transition-colors duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" />
              <span className="text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase">
                KCR Plugin Engine & Tech Solutions
              </span>
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Interactive <span className="text-purple-gradient">Map Breakdowns</span>, Blog Editors & <span className="text-cyber-neon">WebApp Plugins</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-semibold block mb-1">Kolamajawole C-Renee Ent Ltd — Building Solutions. Deploying Success.</strong>
              Supercharge your web & mobile applications with turnkey GeoJSON map choropleths (Nigeria 36 States/774 LGAs, Africa, World), Rich text blog editors, and custom enterprise software engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/plugins"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm btn-purple-glow btn-shimmer-relative group"
              >
                <Grid className="w-5 h-5 icon-spin-hover" />
                <span>Explore Plugins Catalog</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm btn-cyber-outline group"
              >
                <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400 icon-spin-hover" />
                <span>Request Tech Engineering</span>
              </Link>
            </div>


            {/* Trust Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs text-slate-700 dark:text-slate-300">Nigeria & Africa GIS Maps</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs text-slate-700 dark:text-slate-300">Rich Text Blog Editors</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span className="text-xs text-slate-700 dark:text-slate-300">Full-Stack Tech Jobs</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Tech Visual Panel */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 rounded-3xl relative z-10 border border-slate-200 dark:border-slate-800 shadow-2xl animate-float card-border-glow">

              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">kcr-plugin-loader.tsx</span>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  LIVE ENGINE
                </span>
              </div>

              {/* Simulated Plugin Showcase Panel */}
              <div className="space-y-4">

                {/* Active Map Plugin Card */}
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <Grid className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">Nigeria 36 State & LGA Map</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Interactive GeoJSON Choropleth</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200">
                    FEATURED
                  </span>
                </div>

                {/* Simulated Editor Plugin Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">BLOG WYSIWYG MODULE</span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800/40">READY</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">TinyMCE & Markdown</p>
                      <p className="text-lg font-extrabold text-slate-900 dark:text-white">Rich Text Blog Editor</p>
                    </div>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">React / Next.js</span>
                  </div>

                  {/* Plugin Action Button */}
                  <div className="pt-2">
                    <Link
                      href="/plugins"
                      className="w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 btn-purple-glow"
                    >
                      <Zap className="w-4 h-4 text-white" />
                      <span>Browse Maps & Editor Demos</span>
                    </Link>
                  </div>
                </div>

                {/* Activity Feed log item */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>GeoJSON Map Vector Rendered</span>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">0.02s</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-xl transition-colors duration-300">
          <div className="text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">₦48,500,000+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Paystack Volume Processed</div>
          </div>
          <div className="text-center space-y-1 border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">84,200+</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">WebApp Plugins Installed</div>
          </div>
          <div className="text-center space-y-1 border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">&lt; 2.8 sec</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Average Paystack Speed</div>
          </div>
          <div className="text-center space-y-1 border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">99.99%</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Gateway Uptime SLA</div>
          </div>
        </div>

      </div>
    </section>
  );
};

