'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BlogPost, BlogCategory, BlogPostInput } from '../types/blog';
import { BLOG_CATEGORIES } from '../data/blogData';
import { 
  getStoredPosts, 
  savePost, 
  deletePost, 
  resetBlogPostsToDefault, 
  getAdminMode, 
  setAdminMode 
} from '../lib/blogStorage';
import { BlogCard } from './BlogCard';
import { BlogHero } from './BlogHero';
import { BlogAdminModal } from './BlogAdminModal';
import { 
  Search, 
  Plus, 
  Shield, 
  ShieldCheck, 
  RotateCcw, 
  SlidersHorizontal, 
  Sparkles, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Trash2, 
  Edit3, 
  Eye, 
  Filter,
  Lock,
  ChevronDown
} from 'lucide-react';

export function BlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminDrawer, setShowAdminDrawer] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // Deletion confirm state
  const [deletingPost, setDeletingPost] = useState<BlogPost | null>(null);

  // Success feedback toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Hydrate from localStorage on client
  useEffect(() => {
    setPosts(getStoredPosts());
    setIsAdmin(getAdminMode());

    const handleBlogUpdate = () => {
      setPosts(getStoredPosts());
    };

    const handleAdminToggle = () => {
      setIsAdmin(getAdminMode());
    };

    window.addEventListener('kcr-blog-updated', handleBlogUpdate);
    window.addEventListener('kcr-admin-mode-toggled', handleAdminToggle);

    return () => {
      window.removeEventListener('kcr-blog-updated', handleBlogUpdate);
      window.removeEventListener('kcr-admin-mode-toggled', handleAdminToggle);
    };
  }, []);

  const toggleAdmin = () => {
    const nextState = !isAdmin;
    setIsAdmin(nextState);
    setAdminMode(nextState);
    showToast(nextState ? 'Admin Mode Activated. CRUD capabilities enabled.' : 'Admin Mode Deactivated.');
  };

  const handleCreateNew = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleSavePost = (data: BlogPostInput) => {
    const saved = savePost(data);
    setPosts(getStoredPosts());
    showToast(data.id ? `Updated "${saved.title}"` : `Published "${saved.title}"`);
  };

  const handleDeleteConfirm = () => {
    if (!deletingPost) return;
    deletePost(deletingPost.id);
    setPosts(getStoredPosts());
    showToast(`Deleted "${deletingPost.title}"`);
    setDeletingPost(null);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all blog articles back to initial seed data? Custom changes will be cleared.')) {
      const reset = resetBlogPostsToDefault();
      setPosts(reset);
      showToast('Blog articles reset to default seed data.');
    }
  };

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Visibility rule: if not admin, hide drafts
      if (!isAdmin && post.status === 'draft') return false;

      // Category filter
      if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(q);
        const matchExcerpt = post.excerpt.toLowerCase().includes(q);
        const matchTags = post.tags?.some((t) => t.toLowerCase().includes(q));
        const matchAuthor = post.author.name.toLowerCase().includes(q);
        if (!matchTitle && !matchExcerpt && !matchTags && !matchAuthor) return false;
      }

      return true;
    });
  }, [posts, selectedCategory, searchQuery, isAdmin]);

  // Find featured post for top hero (prioritizes 250,000 teachers story)
  const featuredPost = useMemo(() => {
    return (
      posts.find((p) => (p.id === 'blog-post-teacher-training' || p.title.includes('250,000')) && p.status === 'published') ||
      posts.find((p) => p.featured && p.status === 'published') ||
      posts.find((p) => p.status === 'published')
    );
  }, [posts]);

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      {/* Floating Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-[250] flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 border border-slate-700 shadow-2xl backdrop-blur-md text-xs font-semibold animate-slideUp">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering Publications & Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              KCR Nig Ltd <span className="text-purple-gradient">Technical Blog</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              In-depth engineering whitepapers, authorization architecture guides, Nigerian GIS breakdowns, and Paystack fintech automation workflows.
            </p>
          </div>

          {/* Admin Controls Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Admin Toggle */}
            <button
              onClick={toggleAdmin}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                isAdmin
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/40'
                  : 'bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
              title="Toggle Admin Mode to Create, Edit, and Delete Articles"
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Admin Mode: ON</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-slate-400" />
                  <span>Admin Mode: OFF</span>
                </>
              )}
            </button>

            {/* If Admin: New Article button */}
            {isAdmin && (
              <>
                <button
                  onClick={handleCreateNew}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-md shadow-indigo-500/25 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Article</span>
                </button>

                <button
                  onClick={() => setShowAdminDrawer(!showAdminDrawer)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                  title="Manage all articles in admin table"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Manager ({posts.length})</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAdminDrawer ? 'rotate-180' : ''}`} />
                </button>
              </>
            )}

            {/* Reset Defaults button */}
            <button
              onClick={handleResetDefaults}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
              title="Reset Articles to Seed Defaults"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Collapsible Admin Drawer (Article Manager Table) */}
        {isAdmin && showAdminDrawer && (
          <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-indigo-500/30 shadow-lg space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Admin Article Operations Matrix
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {posts.filter((p) => p.status === 'published').length} Published • {posts.filter((p) => p.status === 'draft').length} Drafts
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300 font-sans border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    <th className="pb-3 font-semibold">Title</th>
                    <th className="pb-3 font-semibold">Category</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold">Read Time</th>
                    <th className="pb-3 font-semibold">Author</th>
                    <th className="pb-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
                  {posts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-900 dark:text-white max-w-xs truncate">
                        {p.title}
                      </td>
                      <td className="py-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-2.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            p.status === 'published'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="py-2.5 font-mono text-[11px]">{p.readTime}</td>
                      <td className="py-2.5">{p.author.name}</td>
                      <td className="py-2.5 text-right space-x-1.5">
                        <button
                          onClick={() => handleEdit(p)}
                          className="px-2 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setDeletingPost(p)}
                          className="px-2 py-1 rounded-md text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Featured Hero Banner */}
        <div className="mt-8">
          <BlogHero featuredPost={featuredPost} />
        </div>

        {/* Filter Bar: Categories + Search */}
        <div className="space-y-4 my-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical articles, topics, authors..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Post Count Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}</span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                selectedCategory === 'All'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              All Topics ({posts.filter((p) => isAdmin || p.status === 'published').length})
            </button>

            {BLOG_CATEGORIES.map((cat) => {
              const count = posts.filter(
                (p) => p.category === cat && (isAdmin || p.status === 'published')
              ).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                isAdmin={isAdmin}
                onEdit={handleEdit}
                onDelete={(p) => setDeletingPost(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto mb-4">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching technical articles found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mt-1.5">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Admin Create / Edit Modal */}
      <BlogAdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
        editingPost={editingPost}
      />

      {/* Delete Confirmation Modal */}
      {deletingPost && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Delete Article Confirmation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Are you sure you want to delete <span className="font-semibold text-slate-800 dark:text-slate-200">"{deletingPost.title}"</span>? This action can be undone by clicking "Reset to Defaults".
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeletingPost(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20 transition-colors"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
