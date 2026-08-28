'use me';
'use client';

import React, { useState } from 'react';
import { WebAppPlugin } from '../types/plugin';
import { PluginConfigModal } from './PluginConfigModal';
import { 
  Grid, 
  Search, 
  Sliders, 
  Star, 
  Download, 
  CheckCircle2, 
  CreditCard, 
  Bot, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  FolderLock,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

const CATEGORIES = [
  'All Plugins',
  'Interactive Maps & GIS',
  'Rich Text Editors',
  'Payments & Invoicing',
  'Cloud & Security',
  'Engineering Services'
];

interface PluginsMarketplaceProps {
  plugins: WebAppPlugin[];
  onUpdatePlugin: (plugin: WebAppPlugin) => void;
}

export const PluginsMarketplace: React.FC<PluginsMarketplaceProps> = ({
  plugins,
  onUpdatePlugin
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Plugins');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalPlugin, setActiveModalPlugin] = useState<WebAppPlugin | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'CreditCard': return CreditCard;
      case 'Bot': return Bot;
      case 'ShieldCheck': return ShieldCheck;
      case 'MessageSquare': return MessageSquare;
      case 'TrendingUp': return TrendingUp;
      case 'FolderLock': return FolderLock;
      default: return Zap;
    }
  };

  const filteredPlugins = plugins.filter(plugin => {
    const matchesCategory = selectedCategory === 'All Plugins' || plugin.category === selectedCategory;
    const matchesSearch = plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          plugin.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          plugin.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleInstall = (plugin: WebAppPlugin) => {
    const updated = {
      ...plugin,
      installed: !plugin.installed,
      active: !plugin.installed ? true : false
    };
    onUpdatePlugin(updated);
  };

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-indigo-500/20 dark:border-[#A855F7]/20 transition-colors duration-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-[#7C3AED]/20 border border-indigo-500/30 dark:border-[#A855F7]/40 text-xs font-mono text-indigo-700 dark:text-[#C084FC] mb-3">
              <Grid className="w-3.5 h-3.5" />
              <span>Modular Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              WebApp <span className="text-purple-gradient">Plugins Marketplace</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Turnkey GeoJSON map breakdowns (Nigeria, Africa, World), TinyMCE blog editors, and custom software engineering modules.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Nigeria map, TinyMCE, GIS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-inner transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                  : 'bg-slate-200/80 dark:bg-[#13082C]/60 text-slate-700 dark:text-[#9CA3AF] hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-[#1E0F3D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Plugins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlugins.map((plugin, index) => {
            const IconComponent = getIcon(plugin.iconName);
            return (
              <div
                key={plugin.id}
                data-aos="zoom-in-up"
                data-aos-delay={(index % 3) * 100}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group card-border-glow"
              >

                <div className="space-y-4">
                  
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-100 to-purple-100 dark:from-[#1D0C42] dark:to-[#2E1260] border border-indigo-300 dark:border-[#A855F7]/40 flex items-center justify-center text-indigo-600 dark:text-[#C084FC] icon-spin-hover shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>


                    {plugin.badge && (
                      <span className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider rounded-full bg-pink-500/10 dark:bg-[#EC4899]/20 text-pink-600 dark:text-[#F472B6] border border-pink-500/30 dark:border-[#EC4899]/40 shadow-sm shrink-0">
                        {plugin.badge}
                      </span>
                    )}
                  </div>

                  {/* Plugin Title & Stats */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-[#E9D5FF] transition-colors leading-snug">
                      {plugin.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-[#9CA3AF] pt-0.5">
                      <span className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-semibold">{plugin.rating}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-[#C084FC]" />
                        <span>{plugin.downloads}</span>
                      </span>
                    </div>
                  </div>

                  {/* Plugin Visual Preview Image */}
                  {plugin.previewImage && (
                    <div className="w-full h-36 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative group-hover:border-indigo-500/50 transition-all duration-300 shadow-sm bg-slate-950">
                      <img
                        src={plugin.previewImage}
                        alt={`${plugin.name} Preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                        <span className="text-[10px] font-mono text-white bg-indigo-600/90 px-2 py-0.5 rounded-md backdrop-blur-sm">
                          Live UI Preview
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tagline */}
                  <p className="text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed line-clamp-2">
                    {plugin.tagline}
                  </p>


                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {plugin.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-indigo-50 dark:bg-[#180A38] text-indigo-700 dark:text-[#C084FC] border border-indigo-200 dark:border-[#A855F7]/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-[#A855F7]/20 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-mono text-slate-500 dark:text-[#9CA3AF]">Price: </span>
                    <span className="font-bold text-slate-900 dark:text-white">{plugin.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalPlugin(plugin)}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-[#1A0B36] text-slate-700 dark:text-[#C084FC] hover:bg-slate-200 dark:hover:bg-[#2A1058] transition-colors cursor-pointer"
                      title="Configure Plugin"
                    >
                      <Sliders className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => toggleInstall(plugin)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        plugin.installed
                          ? 'bg-emerald-500/20 text-emerald-700 dark:text-[#10B981] border border-emerald-500/40 hover:bg-emerald-500/30'
                          : 'btn-purple-glow'
                      }`}
                    >
                      {plugin.installed ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Active</span>
                        </>
                      ) : (
                        <span>Install</span>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>


      </div>

      {/* Configuration Modal */}
      <PluginConfigModal
        plugin={activeModalPlugin}
        onClose={() => setActiveModalPlugin(null)}
        onSave={onUpdatePlugin}
      />
    </section>
  );
};
