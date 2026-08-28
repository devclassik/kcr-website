export interface PluginOption {
  id: string;
  name: string;
  type: 'boolean' | 'string' | 'select';
  value: string | boolean;
  options?: string[];
  description: string;
}

export interface WebAppPlugin {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'Interactive Maps & GIS' | 'Rich Text Editors' | 'Payments & Invoicing' | 'Cloud & Security' | 'Engineering Services' | 'Payments & Billing' | 'AI & Automation' | 'Security & Auth' | 'Realtime & Chat' | 'Data & Analytics';
  rating: number;
  reviewsCount: number;
  downloads: string;
  version: string;
  author: string;
  authorVerified: boolean;
  iconName: string;
  installed: boolean;
  active: boolean;
  price: string; // e.g. "Free" or "₦15,000 / mo"
  tags: string[];
  features: string[];
  configOptions: PluginOption[];
  badge?: string;
}
