'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BlogPost, BlogPostInput } from '../types/blog';
import { 
  getStoredPosts, 
  getPostBySlug, 
  savePost, 
  deletePost, 
  togglePostLike, 
  getAdminMode, 
  setAdminMode 
} from '../lib/blogStorage';
import { BlogAdminModal } from './BlogAdminModal';
import { BlogCard } from './BlogCard';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  Twitter, 
  Linkedin, 
  Copy, 
  Check, 
  Edit3, 
  Trash2, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';

interface BlogDetailClientProps {
  slug: string;
}

export function BlogDetailClient({ slug }: BlogDetailClientProps) {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Sync post data on client
  useEffect(() => {
    const posts = getStoredPosts();
    setAllPosts(posts);
    setIsAdmin(getAdminMode());

    const current = posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug);
    if (current) {
      setPost(current);
      setLikesCount(current.likes || 0);
    }

    const handleBlogUpdate = () => {
      const updatedPosts = getStoredPosts();
      setAllPosts(updatedPosts);
      const updated = updatedPosts.find((p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug);
      if (updated) {
        setPost(updated);
        setLikesCount(updated.likes || 0);
      }
    };

    window.addEventListener('kcr-blog-updated', handleBlogUpdate);
    return () => window.removeEventListener('kcr-blog-updated', handleBlogUpdate);
  }, [slug]);

  const handleLike = () => {
    if (!post) return;
    const newCount = togglePostLike(post.id);
    setLikesCount(newCount);
    setLiked(true);
  };

  const handleCopyLink = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleShareTwitter = () => {
    if (!post || typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`"${post.title}" - Essential reading via @kcrnigltd`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    if (typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    if (!post || typeof window === 'undefined') return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this technical insight: ${post.title}\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleSaveEdit = (payload: BlogPostInput) => {
    const saved = savePost(payload);
    setPost(saved);
    if (saved.slug !== slug) {
      router.push(`/blog/${saved.slug}`);
    }
  };

  const handleDelete = () => {
    if (!post) return;
    if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      deletePost(post.id);
      router.push('/blog');
    }
  };

  // Related posts
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return allPosts
      .filter((p) => p.id !== post.id && p.status === 'published')
      .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
      .slice(0, 3);
  }, [post, allPosts]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Article Not Found
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            The article you are seeking does not exist or may have been updated.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Technical Blog</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Render markdown content blocks nicely
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeLanguage = 'typescript';

    lines.forEach((line, index) => {
      // Code block start/end
      if (line.trim().startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.trim().replace('```', '') || 'typescript';
          codeBlockContent = [];
        } else {
          inCodeBlock = false;
          const codeText = codeBlockContent.join('\n');
          elements.push(
            <div key={`code-${index}`} className="my-6 rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0F172A] shadow-xl text-xs font-mono">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-semibold text-slate-300 uppercase">{codeLanguage}</span>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(codeText)}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-emerald-400 dark:text-emerald-300 leading-relaxed">
                <code>{codeText}</code>
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // H3 Headings
      if (line.trim().startsWith('### ')) {
        const text = line.trim().replace('### ', '');
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white pt-6 pb-2 border-b border-slate-200/60 dark:border-slate-800/60">
            {text}
          </h3>
        );
        return;
      }

      // H2 Headings
      if (line.trim().startsWith('## ')) {
        const text = line.trim().replace('## ', '');
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pt-8 pb-3">
            {text}
          </h2>
        );
        return;
      }

      // Blockquotes
      if (line.trim().startsWith('> ')) {
        const text = line.trim().replace('> ', '');
        elements.push(
          <div key={`quote-${index}`} className="my-5 p-4 sm:p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border-l-4 border-indigo-600 text-slate-800 dark:text-indigo-200 text-sm leading-relaxed italic">
            {text}
          </div>
        );
        return;
      }

      // Bullet points
      if (line.trim().startsWith('- ')) {
        const text = line.trim().replace('- ', '');
        elements.push(
          <div key={`bullet-${index}`} className="flex items-start gap-3 my-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed pl-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
            <span>{text}</span>
          </div>
        );
        return;
      }

      // Empty line
      if (!line.trim()) {
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={`p-${index}`} className="my-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {line}
        </p>
      );
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Top Navigation Bar: Breadcrumb + Admin Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-indigo-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 dark:text-slate-200 font-semibold truncate max-w-[200px]">
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Articles</span>
            </Link>

            {/* Admin In-Place Controls */}
            {isAdmin && (
              <div className="flex items-center gap-1.5 pl-2 border-l border-slate-300 dark:border-slate-700">
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
                  title="Edit Article"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={handleDelete}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-sm"
                  title="Delete Article"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Article Header */}
        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {post.category}
            </span>
            {post.status === 'draft' && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-amber-500 text-slate-950">
                Draft Preview
              </span>
            )}
            {post.featured && (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-white">
                <Sparkles className="w-3 h-3" /> Featured Whitepaper
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40 shadow-sm"
              />
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {post.author.role} {post.author.company && `• ${post.author.company}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{post.readTime}</span>
              </div>
              {post.views && (
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{post.views} views</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Cover Image Banner */}
        <div className="my-8 relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Article Content */}
        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
          {renderFormattedContent(post.content)}
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Social Share & Claps Bar */}
        <div className="my-10 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          {/* Likes / Claps button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                liked
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-pink-500 border border-slate-300 dark:border-slate-700'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span>{likesCount} Likes</span>
            </button>
            <span className="text-xs text-slate-500">
              {liked ? 'Thanks for applauding!' : 'Did you find this insightful?'}
            </span>
          </div>

          {/* Share Links */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-1">Share:</span>
            <button
              onClick={handleShareTwitter}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-sky-400 transition-colors"
              title="Share on X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={handleShareLinkedIn}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-indigo-500 transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors"
              title="Share via WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
              title="Copy link to clipboard"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="my-10 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/30 shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {post.author.name}
              </h3>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                {post.author.role}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {post.author.bio || 'Technical engineer and contributor to KCR Nig Ltd WebApp Plugin engines and developer infrastructure.'}
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-14 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Related Technical Whitepapers
              </h3>
              <Link
                href="/blog"
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <BlogCard key={rel.id} post={rel} />
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Admin Edit Modal */}
      <BlogAdminModal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={handleSaveEdit}
        editingPost={post}
      />

      <Footer />
    </div>
  );
}
