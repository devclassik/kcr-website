'use me';
'use client';

import React, { useState } from 'react';
import { 
  Download, 
  Cpu, 
  Users, 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  Search, 
  Plus, 
  Zap, 
  Grid, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  Check,
  X
} from 'lucide-react';

interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  rating: number;
  date: string;
  category: string;
  title: string;
  comment: string;
  verified: boolean;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Adebayo Olumide',
    role: 'Lead Architect',
    company: 'FintechNG Systems',
    avatarBg: 'bg-indigo-600',
    rating: 5,
    date: '2 days ago',
    category: 'Interactive Maps & GIS',
    title: 'The Nigeria 36 State & 774 LGA GeoJSON saved us months!',
    comment: 'Integrating KCR Nig Ltd’s Nigeria map plugin into our Next.js dashboard was effortless. Clean boundaries, fast rendering, zero lag.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Chidimma Eze',
    role: 'Senior Fullstack Dev',
    company: 'Lagos Pay Technologies',
    avatarBg: 'bg-emerald-600',
    rating: 5,
    date: '1 week ago',
    category: 'Payments & Invoicing',
    title: 'Paystack Smart Gateway integration is flawless',
    comment: 'Zero-redirect Inline Paystack checkout with instant cryptographic receipt generation. Our automated billing now processes seamlessly.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Dr. Marcus Vance',
    role: 'CTO',
    company: 'Vance Tech Ventures',
    avatarBg: 'bg-sky-600',
    rating: 5,
    date: '2 weeks ago',
    category: 'Rich Text Editors',
    title: 'Best TinyMCE & Markdown Blog Editor Plugin',
    comment: 'Our editorial content team loves the TinyMCE integration. Embedded image uploads and real-time preview work out of the box.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Funke Akindele',
    role: 'Product Director',
    company: 'AfriCart E-Commerce',
    avatarBg: 'bg-purple-600',
    rating: 5,
    date: '3 weeks ago',
    category: 'Engineering Services',
    title: 'Exceptional Turnkey Engineering & Support',
    comment: 'KCR Nig Ltd delivered enterprise webhooks SLA and custom GIS spatial tools with 99.99% uptime guarantee. Highly recommended!',
    verified: true
  }
];

const PLATFORMS_LIST = [
  'Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Express',
  'Python FastAPI', 'Django', 'Vue 3', 'Laravel 11', 'Flutter',
  'Android Native', 'iOS Swift', 'Paystack API v1', 'TailwindCSS'
];

interface InvoiceHubProps {
  invoices?: any[];
  onCreateInvoice?: (newInvoice: any) => void;
  onPaymentSuccess?: (invoiceId: string, paystackRef: string, paymentMethod: string) => void;
}

export const InvoiceHub: React.FC<InvoiceHubProps> = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState<boolean>(false);

  // New Review Form State
  const [author, setAuthor] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Interactive Maps & GIS');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const filteredReviews = reviews.filter(rev => {
    const matchesCat = selectedCategory === 'All' || rev.category === selectedCategory;
    const matchesSearch = rev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rev.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rev.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rev.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !title || !comment) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author,
      role: 'Verified Developer',
      company: company || 'Tech Firm',
      avatarBg: 'bg-indigo-600',
      rating,
      date: 'Just now',
      category,
      title,
      comment,
      verified: true
    };

    setReviews([newRev, ...reviews]);
    setIsWriteReviewOpen(false);
    // Reset form
    setAuthor('');
    setCompany('');
    setTitle('');
    setComment('');
  };

  return (
    <section className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-[#7C3AED]/20 border border-indigo-500/30 dark:border-[#A855F7]/40 text-xs font-mono text-indigo-700 dark:text-[#C084FC] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Platform Trust & Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Trusted Performance & <span className="text-cyber-neon">Verified Reviews</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Powering enterprise web applications with turnkey GeoJSON choropleth maps, TinyMCE blog editors, and high-performance WebApp plugins.
            </p>
          </div>

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs btn-purple-glow cursor-pointer shadow-lg hover:shadow-indigo-500/30"
          >
            <Star className="w-4 h-4 text-amber-300 fill-current" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* 4 Core Metric Highlight Cards with Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Downloads */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-3 border-l-4 border-l-indigo-600 dark:border-l-indigo-400 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>ACTIVE DOWNLOADS</span>
              <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Download className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              350,000+
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Nigeria Map GeoJSON, TinyMCE Editor & WebApp Plugin Package Downloads
            </p>
          </div>

          {/* Card 2: Platform Supporters */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-3 border-l-4 border-l-sky-500 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>SUPPORTED PLATFORMS</span>
              <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              65+
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Frameworks & Tech Stacks Supported (Next.js, React, Python, Laravel, Node)
            </p>
          </div>

          {/* Card 3: Happy Customers */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-3 border-l-4 border-l-emerald-500 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>HAPPY CUSTOMERS</span>
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              18,400+
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Enterprise Developers, Startups & Verified Business Accounts
            </p>
          </div>

          {/* Card 4: Ratings & Reviews */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl space-y-3 border-l-4 border-l-amber-500 relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>VERIFIED REVIEWS</span>
              <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono group-hover:text-amber-500 transition-colors">4.9</span>
              <span className="text-xs text-amber-500 font-bold">/ 5.0 Rating</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Based on 4,250+ 5-star customer ratings across plugins & GIS tools
            </p>
          </div>

        </div>


        {/* Supported Ecosystem Badges Carousel Banner */}
        <div className="glass-panel p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Supported Frameworks & Platform Integrations
            </span>
            <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">100% Zero-Latency Plug & Play</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {PLATFORMS_LIST.map((platform, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-200/80 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:scale-105 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-500 transition-all duration-200 cursor-default shadow-sm"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Section Filter & Search */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/80 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/20 w-full sm:w-auto overflow-x-auto">
              {['All', 'Interactive Maps & GIS', 'Rich Text Editors', 'Payments & Invoicing', 'Engineering Services'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md scale-105'
                      : 'text-slate-700 dark:text-[#9CA3AF] hover:text-indigo-600 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 dark:text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews, features, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-[#13082C]/80 border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

          </div>

          {/* Testimonial Cards Grid with Scroll Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((rev, index) => (
              <div
                key={rev.id}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >

                <div className="space-y-3">
                  
                  {/* Rating Stars & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-md bg-indigo-50 dark:bg-[#180A38] text-indigo-700 dark:text-[#C084FC] border border-indigo-200 dark:border-[#A855F7]/20">
                      {rev.category}
                    </span>
                  </div>

                  {/* Review Title */}
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    "{rev.title}"
                  </h3>

                  {/* Review Quote Body */}
                  <p className="text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed italic">
                    "{rev.comment}"
                  </p>

                </div>

                {/* Author Info Footer */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${rev.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-md`}>
                      {rev.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.verified && (
                          <span title="Verified Customer">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {rev.role} • <span className="font-semibold text-slate-700 dark:text-slate-300">{rev.company}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{rev.date}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Write Review Modal */}
      {isWriteReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-slate-50 dark:bg-[#0E0620] border border-slate-300 dark:border-[#A855F7]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-[#A855F7]/20 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Submit Verified Review</h3>
              </div>
              <button
                onClick={() => setIsWriteReviewOpen(false)}
                className="p-1.5 rounded-xl bg-slate-200 dark:bg-[#1A0B36] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Oluwaseun Adeleke"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">Company / Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. Lagos Tech Lab"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">Plugin Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Interactive Maps & GIS">Interactive Maps & GIS</option>
                    <option value="Rich Text Editors">Rich Text Editors</option>
                    <option value="Payments & Invoicing">Payments & Invoicing</option>
                    <option value="Engineering Services">Engineering Services</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value={5}>5 Stars (Excellent)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Good)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">Review Headline *</label>
                <input
                  type="text"
                  required
                  placeholder="Summarize your experience with KCR Nig Ltd plugins"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-900 dark:text-white block mb-1">Detailed Review *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share details about performance, GIS mapping, or integration speed..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl text-xs font-bold btn-purple-glow cursor-pointer"
                >
                  Submit Review
                </button>
              </div>

            </form>

          </div>
        </div>
      )}
    </section>
  );
};
