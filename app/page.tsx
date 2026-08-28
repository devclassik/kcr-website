'use me';
'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { PluginsMarketplace } from '../components/PluginsMarketplace';
import { ServicesSection } from '../components/ServicesSection';
import { InvoiceHub } from '../components/InvoiceHub';
import { Footer } from '../components/Footer';
import { INITIAL_PLUGINS } from '../data/pluginsData';
import { INITIAL_INVOICES } from '../data/invoicesData';
import { WebAppPlugin } from '../types/plugin';
import { Invoice } from '../types/invoice';
import { Zap, Sparkles, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [plugins, setPlugins] = useState<WebAppPlugin[]>(INITIAL_PLUGINS);
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_INVOICES);
  const [isTestMode, setIsTestMode] = useState(true);

  const handleUpdatePlugin = (updated: WebAppPlugin) => {
    setPlugins(prev => prev.map(p => (p.id === updated.id ? updated : p)));
  };

  const handleCreateInvoice = (newInv: Invoice) => {
    setInvoices(prev => [newInv, ...prev]);
  };

  const handlePaymentSuccess = (invoiceId: string, paystackRef: string, paymentMethod: string) => {
    setInvoices(prev =>
      prev.map(inv => {
        if (inv.id === invoiceId) {
          return {
            ...inv,
            status: 'PAID',
            paystackRef,
            paidAt: new Date().toLocaleString(),
            paymentChannel: paymentMethod
          };
        }
        return inv;
      })
    );
  };

  const unpaidCount = invoices.filter(i => i.status === 'UNPAID' || i.status === 'OVERDUE').length;

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Navbar */}
      <Navbar
        isTestMode={isTestMode}
        onToggleTestMode={() => setIsTestMode(!isTestMode)}
        unpaidCount={unpaidCount}
      />

      {/* Main Page Content */}
      <main className="flex-1 space-y-12">
        
        {/* Tech Hero */}
        <Hero />

        {/* Plugins Marketplace Teaser */}
        <div className="bg-slate-100/50 dark:bg-[#0A0416]/50 border-y border-slate-200/60 dark:border-[#A855F7]/15 py-8 transition-colors duration-300">
          <PluginsMarketplace
            plugins={plugins}
            onUpdatePlugin={handleUpdatePlugin}
          />
        </div>

        {/* Engineering Services & Custom Solutions Showcase */}
        <ServicesSection />

        {/* Invoice & Paystack Gateway Section */}
        <InvoiceHub
          invoices={invoices}
          onCreateInvoice={handleCreateInvoice}
          onPaymentSuccess={handlePaymentSuccess}
        />


        {/* Enterprise Integration Callout Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-indigo-500/30 dark:border-[#A855F7]/40 relative overflow-hidden bg-gradient-to-r from-indigo-900/20 via-slate-900/30 to-blue-900/20 dark:from-[#180A38] dark:via-[#240C52] dark:to-[#12072A]">
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 dark:bg-[#7C3AED]/30 border border-indigo-500/30 dark:border-[#C084FC]/40 text-xs font-mono text-indigo-700 dark:text-[#E9D5FF]">
                  <CreditCard className="w-3.5 h-3.5 text-indigo-600 dark:text-[#00F0FF]" />
                  <span>Ready for Live Paystack Production Keys</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Need Custom Paystack Integration or Enterprise Plugins?
                </h2>
                <p className="text-sm text-slate-600 dark:text-[#9CA3AF] max-w-xl">
                  Connect your business to instant Paystack payouts, custom webhooks SLA, and automated invoice routing.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl font-extrabold text-sm btn-purple-glow flex items-center gap-2"
                >
                  <span>Talk to Core Engineers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

