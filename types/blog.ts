export type BlogCategory = 
  | 'All'
  | 'Engineering & Architecture'
  | 'RBAC & Security'
  | 'Notifications & Messaging'
  | 'GIS & Mapping'
  | 'Fintech & Invoicing'
  | 'Education & Infrastructure'
  | 'Public Sector & News';

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  company?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Exclude<BlogCategory, 'All'>;
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  tags: string[];
  status: 'published' | 'draft';
  featured?: boolean;
  views?: number;
  likes?: number;
  updatedAt?: string;
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'views' | 'likes' | 'updatedAt'> & {
  id?: string;
};
