import { BlogPost, BlogPostInput } from '../types/blog';
import { INITIAL_BLOG_POSTS } from '../data/blogData';

const STORAGE_KEY = 'kcr_blog_posts_v5';
const ADMIN_MODE_KEY = 'kcr_admin_mode_enabled';

export function sortPostsChronologically(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => {
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : new Date(a.publishedAt || 0).getTime();
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : new Date(b.publishedAt || 0).getTime();
    return timeB - timeA;
  });
}

export function getStoredPosts(): BlogPost[] {
  if (typeof window === 'undefined') {
    return sortPostsChronologically(INITIAL_BLOG_POSTS);
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const sorted = sortPostsChronologically(INITIAL_BLOG_POSTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
      return sorted;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return sortPostsChronologically(parsed);
    }
    const sorted = sortPostsChronologically(INITIAL_BLOG_POSTS);
    return sorted;
  } catch (err) {
    console.warn('Failed to parse blog posts from localStorage', err);
    return sortPostsChronologically(INITIAL_BLOG_POSTS);
  }
}

export function saveAllPosts(posts: BlogPost[]): void {
  if (typeof window === 'undefined') return;
  try {
    const sorted = sortPostsChronologically(posts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
    window.dispatchEvent(new Event('kcr-blog-updated'));
  } catch (err) {
    console.error('Failed to save blog posts to localStorage', err);
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getStoredPosts();
  return posts.find((p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug);
}

export function savePost(postInput: BlogPostInput): BlogPost {
  const posts = getStoredPosts();
  const isEditing = Boolean(postInput.id && posts.some((p) => p.id === postInput.id));

  let finalPost: BlogPost;

  if (isEditing) {
    const existing = posts.find((p) => p.id === postInput.id)!;
    finalPost = {
      ...existing,
      ...postInput,
      id: existing.id,
      updatedAt: new Date().toISOString().split('T')[0],
      slug: postInput.slug.trim() || existing.slug,
    };
    const updated = posts.map((p) => (p.id === existing.id ? finalPost : p));
    saveAllPosts(updated);
  } else {
    const generatedSlug = (postInput.slug || postInput.title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const nowIso = new Date().toISOString();
    finalPost = {
      ...postInput,
      id: `blog-post-${Date.now()}`,
      slug: generatedSlug || `post-${Date.now()}`,
      views: 1,
      likes: 0,
      createdAt: nowIso,
      publishedAt: postInput.publishedAt || nowIso.split('T')[0],
      updatedAt: nowIso.split('T')[0],
      featured: postInput.featured !== undefined ? postInput.featured : true,
    };
    // Prepend directly to top
    const updated = [finalPost, ...posts];
    saveAllPosts(updated);
  }

  return finalPost;
}

export function deletePost(id: string): boolean {
  const posts = getStoredPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length !== posts.length) {
    saveAllPosts(filtered);
    return true;
  }
  return false;
}

export function togglePostLike(id: string): number {
  const posts = getStoredPosts();
  let updatedLikes = 0;
  const updated = posts.map((p) => {
    if (p.id === id) {
      updatedLikes = (p.likes || 0) + 1;
      return { ...p, likes: updatedLikes };
    }
    return p;
  });
  saveAllPosts(updated);
  return updatedLikes;
}

export function resetBlogPostsToDefault(): BlogPost[] {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_BLOG_POSTS));
    window.dispatchEvent(new Event('kcr-blog-updated'));
  }
  return INITIAL_BLOG_POSTS;
}

export function getAdminMode(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(ADMIN_MODE_KEY) === 'true';
}

export function setAdminMode(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ADMIN_MODE_KEY, enabled ? 'true' : 'false');
  window.dispatchEvent(new Event('kcr-admin-mode-toggled'));
}
