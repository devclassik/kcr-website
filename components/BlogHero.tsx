'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types/blog';
import { Sparkles, ArrowRight, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface BlogHeroProps {
  featuredPost?: BlogPost;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ featuredPost }) => {
  if (!featuredPost) return null;

  return (
    <section className="relative w-full rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-[#0B0F19] text-white p-6 sm:p-8 lg:p-12 shadow-2xl mb-12">
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Post Details */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Featured Technical Insight
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 backdrop-blur-md">
              {featuredPost.category}
            </span>
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight group-hover:text-indigo-300 transition-colors">
              {featuredPost.title}
            </h1>
          </Link>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 max-w-2xl">
            {featuredPost.excerpt}
          </p>

          {/* Author and metadata */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2.5">
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                className="w-8 h-8 rounded-full object-cover border border-indigo-400/40"
              />
              <div>
                <p className="text-white font-semibold font-sans text-xs">
                  {featuredPost.author.name}
                </p>
                <p className="text-[10px] text-slate-400 font-sans">
                  {featuredPost.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>{featuredPost.publishedAt}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{featuredPost.readTime}</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-3">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Cover image preview */}
        <div className="lg:col-span-5">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative block aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={featuredPost.coverImage || 'kfc.jpg'}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-indigo-950/20 group-hover:opacity-0 transition-opacity" />
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Engineering Whitepaper</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
