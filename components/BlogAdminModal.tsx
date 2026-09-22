'use client';

import React, { useState, useEffect } from 'react';
import { BlogPost, BlogPostInput } from '../types/blog';
import { BLOG_CATEGORIES, BLOG_COVER_PRESETS } from '../data/blogData';
import { 
  X, 
  Sparkles, 
  Image as ImageIcon, 
  FileText, 
  Tag, 
  User, 
  Clock, 
  Check, 
  Eye, 
  Code, 
  Heading, 
  Quote, 
  List, 
  AlertCircle 
} from 'lucide-react';

interface BlogAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (postData: BlogPostInput) => void;
  editingPost?: BlogPost | null;
}

export const BlogAdminModal: React.FC<BlogAdminModalProps> = ({
  isOpen,
  onClose,
  onSave,
  editingPost,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  
  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState(BLOG_CATEGORIES[0]);
  const [coverImage, setCoverImage] = useState(BLOG_COVER_PRESETS[0].url);
  const [customCoverUrl, setCustomCoverUrl] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [tagsInput, setTagsInput] = useState('');
  const [status, setStatus] = useState<'published' | 'draft'>('published');
  const [featured, setFeatured] = useState(false);
  const [authorName, setAuthorName] = useState('Kolamajawole C-Renee');
  const [authorRole, setAuthorRole] = useState('Chief Technology Officer');
  const [authorAvatar, setAuthorAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80');
  const [authorBio, setAuthorBio] = useState('Enterprise Systems Architect at KCR Nig Ltd.');
  const [content, setContent] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-fill or reset when modal opens or editingPost changes
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setSlug(editingPost.slug);
      setExcerpt(editingPost.excerpt);
      setCategory(editingPost.category);
      setCoverImage(editingPost.coverImage);
      setCustomCoverUrl(editingPost.coverImage);
      setReadTime(editingPost.readTime || '5 min read');
      setTagsInput(editingPost.tags ? editingPost.tags.join(', ') : '');
      setStatus(editingPost.status);
      setFeatured(Boolean(editingPost.featured));
      setAuthorName(editingPost.author.name);
      setAuthorRole(editingPost.author.role);
      setAuthorAvatar(editingPost.author.avatar);
      setAuthorBio(editingPost.author.bio || '');
      setContent(editingPost.content);
    } else {
      setTitle('');
      setSlug('');
      setExcerpt('');
      setCategory(BLOG_CATEGORIES[0]);
      setCoverImage(BLOG_COVER_PRESETS[0].url);
      setCustomCoverUrl('');
      setReadTime('5 min read');
      setTagsInput('Next.js, Architecture, Plugins');
      setStatus('published');
      setFeatured(false);
      setAuthorName('Kolamajawole C-Renee');
      setAuthorRole('Chief Technology Officer');
      setAuthorAvatar('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80');
      setAuthorBio('Enterprise Systems Architect at KCR Nig Ltd.');
      setContent(`### Architecture Overview\n\nProvide an introductory overview of the architectural requirements and engineering context.\n\n\`\`\`typescript\n// Example code snippet\nexport function initializeService() {\n  console.log("Service operational");\n}\n\`\`\`\n\n### Key Benefits\n\n- Zero latency overhead\n- Seamless developer ergonomics\n- Production-ready observability\n\n> "Security and reliability are non-negotiable foundations for modern enterprise infrastructure."`);
    }
    setErrorMsg('');
    setActiveTab('editor');
  }, [editingPost, isOpen]);

  // Live slug auto-generation when typing title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingPost || !slug) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generated);
    }
  };

  // Estimate read time dynamically
  const handleContentChange = (val: string) => {
    setContent(val);
    const words = val.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    setReadTime(`${minutes} min read`);
  };

  // Formatting helpers for content textarea
  const insertText = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('blog-content-input') as HTMLTextAreaElement | null;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const replacement = `${prefix}${selected || 'Sample Text'}${suffix}`;
    const newContent = content.substring(0, start) + replacement + content.substring(end);
    setContent(newContent);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selected.length || 11));
    }, 50);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Please enter a valid blog post title.');
      return;
    }
    if (!excerpt.trim()) {
      setErrorMsg('Please enter a brief summary / excerpt.');
      return;
    }
    if (!content.trim()) {
      setErrorMsg('Blog post content cannot be empty.');
      return;
    }

    const tagsArray = tagsInput
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter((t) => t.length > 0);

    const payload: BlogPostInput = {
      ...(editingPost?.id ? { id: editingPost.id } : {}),
      title: title.trim(),
      slug: (slug.trim() || title)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
      excerpt: excerpt.trim(),
      category,
      coverImage: customCoverUrl.trim() || coverImage,
      readTime,
      tags: tagsArray.length > 0 ? tagsArray : ['Engineering', 'KCR'],
      status,
      featured,
      author: {
        name: authorName.trim() || 'KCR Engineering Team',
        role: authorRole.trim() || 'Technical Contributor',
        avatar: authorAvatar.trim() || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        bio: authorBio.trim(),
      },
      content,
      publishedAt: editingPost?.publishedAt || new Date().toISOString().split('T')[0],
    };

    onSave(payload);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingPost ? 'Edit Blog Article' : 'Create New Technical Article'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                KCR Nig Ltd Admin CMS & Publishing Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Editor / Preview tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'editor'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Editor
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Preview</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'editor' ? (
            <form id="blog-admin-form" onSubmit={handleSave} className="space-y-6">
              
              {/* Title & Slug */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Scaling Next.js 16 Applications with Enterprise RBAC"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div className="md:col-span-4 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="scaling-nextjs-16-rbac"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 text-xs font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Summary / Excerpt *
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  placeholder="Provide a concise 1-2 sentence executive overview of the key concepts discussed."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Category, Status, Featured, Read Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-indigo-500"
                  >
                    {BLOG_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Publishing Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-indigo-500"
                  >
                    <option value="published">Published (Live)</option>
                    <option value="draft">Draft (Admin Only)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1.5 flex flex-col justify-end pb-1">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                    />
                    <span>Highlight as Featured</span>
                  </label>
                </div>
              </div>

              {/* Cover Image Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Cover Image Selection
                </label>
                
                {/* Presets Gallery */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {BLOG_COVER_PRESETS.map((preset) => {
                    const isSelected = (customCoverUrl.trim() || coverImage) === preset.url;
                    return (
                      <button
                        type="button"
                        key={preset.name}
                        onClick={() => {
                          setCoverImage(preset.url);
                          setCustomCoverUrl('');
                        }}
                        className={`group relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-500/40 scale-95'
                            : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100'
                        }`}
                        title={preset.name}
                      >
                        <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                        {isSelected && (
                          <div className="absolute inset-0 bg-indigo-600/40 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Custom URL Input */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="url"
                    value={customCoverUrl}
                    onChange={(e) => setCustomCoverUrl(e.target.value)}
                    placeholder="Or enter custom image URL (https://...)"
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-indigo-500"
                  />
                  {(customCoverUrl || coverImage) && (
                    <img
                      src={customCoverUrl.trim() || coverImage}
                      alt="Preview"
                      className="w-10 h-8 rounded-lg object-cover border border-slate-300 dark:border-slate-700"
                    />
                  )}
                </div>
              </div>

              {/* Author & Tags */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Author Role / Title
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="Next.js, RBAC, Cloud"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>

              {/* Content Editor with Quick Insert Toolbar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Article Body (Markdown Supported) *
                  </label>
                  
                  {/* Quick Format Toolbar */}
                  <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                    <button
                      type="button"
                      onClick={() => insertText('### ')}
                      className="px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold"
                      title="Insert Heading 3"
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText('**', '**')}
                      className="px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold"
                      title="Bold Text"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText('\n```typescript\n', '\n```\n')}
                      className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      title="Code Block"
                    >
                      <Code className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText('\n> ')}
                      className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      title="Blockquote"
                    >
                      <Quote className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText('\n- ')}
                      className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
                      title="Bullet List"
                    >
                      <List className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <textarea
                  id="blog-content-input"
                  value={content}
                  onChange={(e) => handleContentChange(e.target.value)}
                  rows={12}
                  placeholder="Write in markdown syntax. Use ### for subheadings, ``` for code blocks, and > for blockquotes."
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm font-mono leading-relaxed focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

            </form>
          ) : (
            /* Live Preview Mode */
            <div className="space-y-6 max-w-2xl mx-auto py-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <img
                  src={customCoverUrl.trim() || coverImage}
                  alt={title || 'Preview'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white">
                  {category}
                </div>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {title || 'Untitled Article'}
                </h1>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 italic">
                  {excerpt || 'No excerpt provided.'}
                </p>
              </div>

              <div className="flex items-center gap-3 py-3 border-y border-slate-200 dark:border-slate-800 text-xs">
                <img
                  src={authorAvatar}
                  alt={authorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{authorName}</p>
                  <p className="text-slate-500">{authorRole} • {readTime}</p>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300 space-y-4 whitespace-pre-wrap">
                {content || 'Start typing in the editor to see preview content here.'}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {editingPost ? `Editing ID: ${editingPost.id}` : 'Status: Ready to publish'}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-md shadow-indigo-500/20 active:scale-95 transition-all"
            >
              <Check className="w-4 h-4" />
              <span>{editingPost ? 'Update Article' : 'Publish Article'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
