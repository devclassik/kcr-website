'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PluginsMarketplace } from './PluginsMarketplace';
import { ServicesSection } from './ServicesSection';
import { INITIAL_PLUGINS } from '../data/pluginsData';
import { WebAppPlugin } from '../types/plugin';

export function PluginsClient() {
  const [plugins, setPlugins] = useState<WebAppPlugin[]>(INITIAL_PLUGINS);

  const handleUpdatePlugin = (updated: WebAppPlugin) => {
    setPlugins((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-clip">
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
