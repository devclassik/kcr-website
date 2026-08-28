'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Cloud,
  Code2,
  Smartphone,
  Globe,
  MapPin,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Tag,
  ShieldCheck,
  Zap,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  gradient: string;
  iconColor: string;
  badgeColor: string;
  description: string;
  tags: string[];
  quoteText: string;
  highlights: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-infra',
    title: 'Cloud Infrastructure & DevOps',
    category: 'Cloud & System Admin',
    icon: Cloud,
    gradient: 'from-sky-500/10 via-indigo-500/5 to-transparent',
    iconColor: 'text-sky-600 dark:text-sky-400',
    badgeColor: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-500/30',
    description: 'Scalable cloud server architecture, AWS S3 bucket vaults, Kubernetes clusters, SSL encryption, and automated CI/CD deployment pipelines.',
    tags: ['AWS S3', 'Kubernetes', 'CI/CD', 'Docker', 'Cloudflare', 'SSL'],
    quoteText: 'Custom Quote • From ₦75,000',
    highlights: [
      'AWS & DigitalOcean zero-downtime server setups',
      'Automated SSL & DNS routing with 99.99% SLA',
      'Encrypted S3 media vault & database backups'
    ]
  },
  {
    id: 'software-engineering',
    title: 'Full-Stack Software Engineering',
    category: 'Engineering & WebApps',
    icon: Code2,
    gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    badgeColor: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
    description: 'Bespoke web application development, microservice APIs, Next.js 16, React, Node.js, Python FastAPI, and high-concurrency database engineering.',
    tags: ['Next.js 16', 'React', 'Python FastAPI', 'Node.js', 'PostgreSQL'],
    quoteText: 'Custom Quote • From ₦150,000',
    highlights: [
      'Custom React & Next.js enterprise web applications',
      'High-throughput RESTful & GraphQL backend APIs',
      'Scalable database design & real-time webhooks'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    category: 'iOS & Android Native',
    icon: Smartphone,
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    badgeColor: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    description: 'High-performance iOS Swift & Android native applications, Flutter cross-platform mobile apps, push notifications, and App Store publishing.',
    tags: ['iOS Swift', 'Android', 'Flutter', 'Push Notifications', 'App Store'],
    quoteText: 'Custom Quote • From ₦500,000',
    highlights: [
      'Seamless Flutter cross-platform mobile experiences',
      'Native push notifications & offline sync capabilities',
      'Full App Store & Google Play Store release management'
    ]
  },
  {
    id: 'corporate-websites',
    title: 'Corporate Website & Web Engineering',
    category: 'Web Design & SEO',
    icon: Globe,
    gradient: 'from-purple-500/10 via-pink-500/5 to-transparent',
    iconColor: 'text-purple-600 dark:text-purple-400',
    badgeColor: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30',
    description: 'Ultra-fast Next.js corporate websites with custom design systems, Google SEO ranking optimization, TinyMCE blog CMS, and mobile responsiveness.',
    tags: ['Next.js', 'SEO Optimization', 'Custom Design', 'CMS', 'Responsive'],
    quoteText: 'Custom Quote • From ₦85,000',
    highlights: [
      'Tailored high-impact visual design & glassmorphism UI',
      'Google Lighthouse 95+ performance & SEO scores',
      'TinyMCE blog CMS & contact ticketing integration'
    ]
  },
  {
    id: 'gis-spatial-tools',
    title: 'GIS & Custom Spatial WebApp Tools',
    category: 'Maps & Spatial Data',
    icon: MapPin,
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    iconColor: 'text-amber-600 dark:text-amber-400',
    badgeColor: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30',
    description: 'Interactive Nigeria 36 States & 774 LGAs GeoJSON choropleth maps, D3.js data visualizations, electoral territory breakdowns, and sales mapping.',
    tags: ['Nigeria GeoJSON', '774 LGAs', 'Choropleth', 'D3.js', 'Spatial Data'],
    quoteText: 'Custom Quote • From ₦250,000',
    highlights: [
      'High-resolution 36 Nigerian state vector layers & 774 LGAs',
      'Click-to-drilldown demographic & sales territory maps',
      'Export state map selections as PNG, SVG, or JSON'
    ]
  },
  {
    id: 'paystack-invoicing',
    title: 'Paystack Payment & Invoicing Gateway',
    category: 'Fintech & Revenue',
    icon: CreditCard,
    gradient: 'from-teal-500/10 via-emerald-500/5 to-transparent',
    iconColor: 'text-teal-600 dark:text-teal-400',
    badgeColor: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/30',
    description: 'Smart inline Paystack checkout, USSD (*737#), automated cryptographic invoice PDF generator, instant receipts, and webhook listeners.',
    tags: ['Paystack API', 'USSD *737#', 'Invoices', 'Webhooks', 'PDF Generator'],
    quoteText: 'Custom Quote • From 35,000',
    highlights: [
      'Paystack inline modal with card, USSD & transfer options',
      'Automated cryptographic invoice PDF generator',
      'Instant webhook synchronization to Next.js App Router'
    ]
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-[#7C3AED]/20 border border-indigo-500/30 dark:border-[#A855F7]/40 text-xs font-mono text-indigo-700 dark:text-[#C084FC] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kolamajawole C-Renee Ent Ltd Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Engineering Services & <span className="text-cyber-neon">Custom Solutions</span>
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Beyond modular plugins, we engineer cloud infrastructure, full-stack software, mobile apps, and custom websites tailored to your enterprise scope.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs btn-purple-glow cursor-pointer shadow-lg hover:shadow-indigo-500/30 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Request Custom Proposal</span>
          </Link>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 border border-slate-200 dark:border-slate-800 relative overflow-hidden group bg-gradient-to-br ${service.gradient} animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="space-y-4">

                  {/* Top Bar: Icon & Price Quote Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center ${service.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-full border ${service.badgeColor} shadow-sm shrink-0 flex items-center gap-1`}>
                      <Tag className="w-3 h-3" />
                      <span>{service.quoteText}</span>
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      {service.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-200/80 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Action Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-2.5 rounded-xl text-xs font-bold btn-purple-glow flex items-center justify-center gap-2 group-hover:shadow-indigo-500/40 cursor-pointer"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
