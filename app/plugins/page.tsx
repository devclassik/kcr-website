'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { PluginsMarketplace } from '../../components/PluginsMarketplace';
import { ServicesSection } from '../../components/ServicesSection';
import { INITIAL_PLUGINS } from '../../data/pluginsData';
import { WebAppPlugin } from '../../types/plugin';

export default function PluginsPage() {
  const [plugins, setPlugins] = useState<WebAppPlugin[]>(INITIAL_PLUGINS);

  const handleUpdatePlugin = (updated: WebAppPlugin) => {
    setPlugins(prev => prev.map(p => (p.id === updated.id ? updated : p)));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-1 space-y-12">
        <PluginsMarketplace
          plugins={plugins}
          onUpdatePlugin={handleUpdatePlugin}
        />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
