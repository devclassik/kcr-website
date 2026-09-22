'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types/blog';
import { Clock, Calendar, ArrowRight, Edit3, Trash2, Eye, Heart, Sparkles } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  isAdmin?: boolean;
  onEdit?: (post: BlogPost) => void;
  onDelete?: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  isAdmin = false,
  onEdit,
  onDelete,
}) => {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

        {/* Category Badge & Status */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-indigo-600/90 text-white shadow-sm backdrop-blur-md">
            {post.category}
          </span>
          {post.status === 'draft' && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm">
              Draft
            </span>
          )}
          {post.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-emerald-500 text-white shadow-sm">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>

        {/* Read Time */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/70 text-slate-200 text-[11px] font-mono backdrop-blur-sm">
          <Clock className="w-3 h-3 text-indigo-400" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div className="space-y-3">
          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </div>
            <div className="flex items-center gap-3">
              {post.views !== undefined && (
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {post.views}
                </span>
              )}
              {post.likes !== undefined && (
                <span className="flex items-center gap-1 text-pink-500">
                  <Heart className="w-3 h-3 fill-current" />
                  {post.likes}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <Link href={`/blog/${post.slug}`} className="block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <h3 className="font-bold text-lg leading-snug line-clamp-2 text-slate-900 dark:text-white">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer info & Actions */}
        <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
          {/* Author */}
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-indigo-500/30 shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                {post.author.name}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {post.author.role}
              </p>
            </div>
          </div>

          {/* Admin Controls or Read Link */}
          {isAdmin ? (
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onEdit?.(post);
                }}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Edit Post"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onDelete?.(post);
                }}
                className="p-1.5 rounded-lg text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                title="Delete Post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-all"
            >
              <span>Read</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
