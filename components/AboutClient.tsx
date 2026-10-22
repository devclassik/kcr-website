'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Compass,
  Code2,
  Award,
  Users,
  Building2,
  MapPin,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Layers,
  Database,
  Terminal,
  Grid,
  HeartHandshake,
  TrendingUp,
  Globe,
  Radio,
  FileCheck2,
  Lock,
  Mail,
  Phone,
  Rocket,
  CreditCard
} from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

const IMPACT_METRICS: MetricItem[] = [
  {
    value: '99.99%',
    label: 'Webhook & API SLA',
    subtext: 'High-availability automated payment callbacks with zero downtime'
  },
  {
    value: '774 LGAs',
    label: 'Complete Nigerian GIS Coverage',
    subtext: 'High-precision GeoJSON boundaries across all 36 States + FCT'
  },
  {
    value: '50+',
    label: 'Enterprise & Public Deployments',
    subtext: 'Mission-critical systems across fintech, education & governance'
  },
  {
    value: '< 15ms',
    label: 'RBAC Authorization Guard',
    subtext: 'Near-instant zero-trust middleware verification speed'
  }
];

const MILESTONES = [
  {
    year: '2021',
    title: 'Genesis of KCR Nig Ltd',
    tagline: 'Company Inception in Lagos',
    description:
      'Kolamajawole C-Renee Ent Ltd was incorporated with a clear mandate: deliver mission-critical software engineering, resilient cloud architectures, and bespoke enterprise systems for Nigerian businesses.',
    tags: ['Incorporation', 'Enterprise Systems', 'Lagos Hub']
  },
  {
    year: '2023',
    title: 'Launch of DevClassic Modular Engines',
    tagline: 'Turnkey Developer Plugins',
    description:
      'Released the initial modular developer engines—devclassic-rbac and devclassic-notify—enabling Next.js and Node.js teams to eliminate boilerplate authorization and multi-channel messaging overhead.',
    tags: ['npm Packages', 'RBAC & ABAC', 'Termii SMS Integration']
  },
  {
    year: '2024',
    title: 'Paystack Automated Billing Engine',
    tagline: 'Fintech & Invoicing Automation',
    description:
      'Engineered an automated cryptographic invoice generator with 7.5% NGN VAT compliance, instant Paystack inline checkout, automated PDF dispatch, and HMAC SHA512 webhook reconciliation.',
    tags: ['Paystack Verified', 'Cryptographic Invoices', 'Fintech SLA']
  },
  {
    year: '2025',
    title: 'Nigeria 774 LGA Geospatial Engine',
    tagline: 'Zero-Cost GIS Mapping Platform',
    description:
      'Published devclassic-map, curating verified GeoJSON polygon topologies for all 774 Local Government Areas, powering offline choropleth maps, health outreach, and demographic logistics.',
    tags: ['774 LGAs GeoJSON', 'Choropleth Visualizer', 'Leaflet Engine']
  },
  {
    year: '2026',
    title: 'National Standards & Institutional Scale',
    tagline: 'Federal Education & Governance Reforms',
    description:
      'Partnered on nationwide quality frameworks including NSSEC senior secondary benchmarking, NTI accelerated teacher professionalisation (ATPP), and Google AI in pedagogy training across Nigeria’s 6 geopolitical zones.',
    tags: ['NSSEC Benchmarking', 'Google AI Pedagogy', 'National Impact']
  }
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Security by Default',
    description:
      'Security is never an afterthought. Every layer—from role-based authorization matrices to SHA512 payment webhooks and 256-bit SSL—is engineered with defense-in-depth principles.'
  },
  {
    icon: Zap,
    title: 'Developer Velocity & Ergonomics',
    description:
      'We believe software tools should be effortless to adopt. Our plugins mount in minutes, provide full TypeScript inference, and minimize operational cognitive load.'
  },
  {
    icon: Target,
    title: 'Localized Precision & Relevance',
    description:
      'We build specifically for the African context—integrating local payment gateways like Paystack, local SMS telcos via Termii, and exact 774 LGA boundary maps with no dollar subscription bloat.'
  },
  {
    icon: Award,
    title: 'Verifiable Integrity & SLA Guarantees',
    description:
      'From cryptographic QR invoice stamps to transparent uptime dashboards and 15-minute ticket resolution, we back every product with accountable engineering.'
  }
];

export function AboutClient() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'philosophy'>('mission');
  const [selectedMilestone, setSelectedMilestone] = useState(MILESTONES[4]);

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden cyber-grid border-b border-slate-200/80 dark:border-slate-800">
          {/* Subtle Glow Orbs */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-20 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Heading & Introduction */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 backdrop-blur-md shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase">
                    Architectural Platform • About KCR Nig Ltd
                  </span>
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  Engineering Africa’s Next-Gen{' '}
                  <span className="text-purple-gradient">Software Infrastructure</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  <strong className="text-slate-900 dark:text-white font-bold block mb-1">
                    Kolamajawole C-Renee Ent Ltd — Building Solutions. Deploying Success.
                  </strong>
                  Headquartered in Lagos, Nigeria, KCR Nig Ltd is a pioneering enterprise software architecture firm and developer platform. We empower modern teams with turnkey web plugins, automated Paystack billing engines, nationwide GIS mapping systems, and institutional-grade technology governance.
                </p>

                {/* Call-to-action buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/plugins"
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm btn-purple-glow btn-shimmer-relative group cursor-pointer"
                  >
                    <Grid className="w-4 h-4 icon-spin-hover" />
                    <span>Explore Plugins Directory</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm btn-cyber-outline group cursor-pointer"
                  >
                    <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Partner With Our Engineers</span>
                  </Link>
                </div>

                {/* Quick Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Zero-Trust RBAC Guards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>Paystack Verified SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span>Lekki Innovation Hub</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Showcase of Lagos Hub */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl glass-panel group">
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                    <img
                      src="/kcr-lagos-hub.jpg"
                      alt="KCR Nig Ltd Lagos Innovation Hub"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>

                  {/* Hub Info Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <div>
                          <p className="text-xs font-bold font-mono uppercase tracking-wider text-indigo-300">
                            Lagos Innovation Hub & Lab
                          </p>
                          <p className="text-[11px] text-slate-300">
                            14 Lekki Phase 1 Tech Expressway, Lagos, Nigeria
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-indigo-600/60 border border-indigo-400/40 text-white">
                        HQ ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* IMPACT METRICS BAR */}
        <section className="py-12 bg-slate-50 dark:bg-[#0B0F19]/80 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {IMPACT_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-500/40 transition-all duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                    {metric.value}
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-2">
                    {metric.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {metric.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION, VISION & PHILOSOPHY INTERACTIVE TABS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Why KCR Nig Ltd Exists
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              We bridge modern web architectural rigor with localized African operational realities to build resilient, long-lasting systems.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            {/* Tabs Control */}
            <div className="flex flex-wrap items-center justify-center gap-3 pb-8 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'mission'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'vision'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                <Compass className="w-4 h-4" />
                <span>Our Vision</span>
              </button>

              <button
                onClick={() => setActiveTab('philosophy')}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'philosophy'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </button>
            </div>

            {/* Tab Body */}
            <div className="pt-8">
              {activeTab === 'mission' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fadeIn">
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Eliminating Technical Friction for African Growth
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Our mission is to build hardened, production-tested software components and billing infrastructure so Nigerian and African engineering teams never have to waste weeks reinventing basic authorization matrices, SMS gateways, or invoicing pipelines.
                    </p>
                    <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Empowering startups and enterprises with turnkey open-source and proprietary developer plugins.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Ensuring instant compliance with Nigerian financial laws, 7.5% VAT calculation, and Paystack settlement protocols.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Modernizing public sector institutions with transparent digital benchmarks and audit trails.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-4 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-3">
                    <p className="text-xs font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400">
                      Core Mission Mandate
                    </p>
                    <blockquote className="text-sm italic text-slate-800 dark:text-slate-200 font-serif">
                      "We build tools that let engineers build their businesses faster, safer, and with zero architectural debt."
                    </blockquote>
                    <p className="text-xs text-slate-500 font-mono">— KCR Core Architecture Board</p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fadeIn">
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      The Premier Standard for African Enterprise Engineering
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      We envision a tech ecosystem where African developers build with zero compromises—leveraging local payment rails, hyper-accurate geographic data, and zero-trust security that compete with the finest software standards in Silicon Valley and Europe.
                    </p>
                    <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>Expanding African GIS mapping to all 54 African countries with localized demographic overlays.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>Standardizing automated billing and cryptographic invoice verification across cross-border African trade.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>Accelerating national educational standards and AI in pedagogy training across 100,000+ classrooms.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-4 p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/50 space-y-3">
                    <p className="text-xs font-mono font-bold uppercase text-sky-600 dark:text-sky-400">
                      Vision Target 2030
                    </p>
                    <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold">
                      Powering 1,000,000+ daily API transactions and serving as the default plug-in layer for every high-growth African web app.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fadeIn">
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Engineering Without Shortcuts
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      We treat code not as disposable scripts, but as long-term institutional infrastructure. Our software enforces strict separation of concerns, defensive programming, explicit typing, and transparent cryptographic verification.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 dark:text-slate-300">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-white mb-1">Defense-in-Depth</strong>
                        Role hierarchies, attribute validation, and token expiration are checked at every entry point.
                      </div>
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-white mb-1">Zero Overhead</strong>
                        Our plugins are compiled tree-shakable ES modules that introduce sub-15ms runtime delay.
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-4 p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/50 space-y-3">
                    <p className="text-xs font-mono font-bold uppercase text-purple-600 dark:text-purple-400">
                      Architectural Code of Honor
                    </p>
                    <p className="text-sm text-slate-800 dark:text-slate-200 italic">
                      "If an invoice cannot be mathematically verified via SHA256/512 or QR scan, it does not leave our server."
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* CORE VALUES GRID */}
        <section className="py-16 bg-slate-50 dark:bg-[#0B0F19]/60 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                Guiding Values
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Principles That Drive Every Build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXECUTIVE LEADERSHIP SPOTLIGHT */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Meet the Architect Behind KCR
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Guided by experienced systems architects dedicated to building sustainable software infrastructure.
            </p>
          </div>

          {/* CTO / Founder Featured Card */}
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-10">

              {/* Photo Column */}
              <div className="md:col-span-5 relative">
                <div className="aspect-square w-full rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-lg relative bg-slate-900">
                  <img
                    src="/kolamajawole-cto.jpg"
                    alt="Kolamajawole C-Renee, Founder & Chief Technology Officer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <p className="font-bold text-sm">Kolamajawole C-Renee</p>
                    <p className="text-indigo-300 font-mono text-[11px]">Chief Technology Officer</p>
                  </div>
                </div>
              </div>

              {/* Bio & Credentials Column */}
              <div className="md:col-span-7 space-y-5 text-left">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    Founder & Principal Systems Architect
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white pt-2">
                    Kolamajawole C-Renee
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Enterprise Software Architect • Next.js & Paystack Specialist
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  With over a decade of specialized experience in distributed cloud architectures, zero-trust RBAC authorization, and automated billing protocols, Kolamajawole founded KCR Nig Ltd to provide Nigerian developers and public institutions with high-reliability software tooling.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  He spearheaded the creation of the <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">devclassic-*</span> modular suite and serves as a technical advisor on digital secondary school benchmarks and automated payment reconciliation.
                </p>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    Web applications
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    Mobile Applications
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    RBAC / ABAC Security
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    GIS 774 LGA Topology
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    etc
                  </span>
                </div>

                {/* Direct Contact Buttons */}
                <div className="flex items-center gap-4 pt-3 text-xs">
                  <a
                    href="mailto:kolamajawole@gmail.com"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Kolamajawole</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800"
                  >
                    <span>Request Consultation</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* INNOVATION TIMELINE / MILESTONES */}
        <section className="py-20 bg-slate-50 dark:bg-[#0B0F19]/80 border-t border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Our Journey of Innovation
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                From a bespoke software agency to Africa's modular developer platform and national systems partner.
              </p>
            </div>

            {/* Timeline Year Selectors */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-6 scrollbar-none">
              {MILESTONES.map((m) => {
                const isSelected = selectedMilestone.year === m.year;
                return (
                  <button
                    key={m.year}
                    onClick={() => setSelectedMilestone(m)}
                    className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer shrink-0 border ${isSelected
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-indigo-500 shadow-md shadow-indigo-500/30 scale-105'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                      }`}
                  >
                    {m.year}
                  </button>
                );
              })}
            </div>

            {/* Active Milestone Card */}
            <div className="max-w-3xl mx-auto mt-6 glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    {selectedMilestone.tagline}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {selectedMilestone.title}
                  </h3>
                </div>
                <span className="px-4 py-1.5 rounded-full text-base font-extrabold font-mono bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {selectedMilestone.year}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-5">
                {selectedMilestone.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-6">
                <span className="text-xs font-mono text-slate-400 mr-2">Key Highlights:</span>
                {selectedMilestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* THE 4 SPECIALIZED ENGINEERING PODS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              Organization Structure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Specialized Engineering Pods
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Cross-functional technical guilds focused on specific domains of digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pod 1 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Fintech & Webhook Reconciliation Pod
                  </h4>
                  <p className="text-xs font-mono text-slate-500">Paystack SDK • HMAC SHA512 • Invoicing Hub</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Maintains KCR's automated invoice creation engine, mathematical tax rounding (7.5% NGN VAT), multi-currency conversions, QR cryptographic stamping, and zero-loss webhook retry pipelines.
              </p>
            </div>

            {/* Pod 2 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Core Security & Plugin Engineering
                  </h4>
                  <p className="text-xs font-mono text-slate-500">devclassic-rbac • devclassic-notify • TypeScript</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated to maintaining open-source and enterprise npm libraries, zero-trust RBAC/ABAC middleware guards, hierarchical role trees, and omni-channel messaging dispatch.
              </p>
            </div>

            {/* Pod 3 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    GIS & Geospatial Topology Guild
                  </h4>
                  <p className="text-xs font-mono text-slate-500">774 Nigerian LGAs • GeoJSON • Leaflet & MapLibre</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Curates vector polygon datasets for Nigeria's 774 Local Government Areas, enabling instant offline choropleth demographic rendering with zero third-party mapbox licensing fees.
              </p>
            </div>

            {/* Pod 4 */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-4 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Public Sector & Institutional Modernization
                  </h4>
                  <p className="text-xs font-mono text-slate-500">NSSEC Standards • M&E Frameworks • Teacher Portals</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Engineers large-scale institutional monitoring, evaluation software, and compliance portals for federal commissions, including senior secondary school benchmarks and Google AI pedagogy integrations.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-[#0B0F19] text-white border-t border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              Ready to Build Together?
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Let's Deploy Modern Software Solutions for Your Enterprise
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need turnkey WebApp plugins, custom Paystack payment integration, or national-scale public sector architecture, our team in Lagos is ready to collaborate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/plugins"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-xl shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Grid className="w-5 h-5" />
                <span>Explore WebApp Plugins</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>Schedule a Consultation</span>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>14 Lekki Phase 1 Tech Expressway, Lagos</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>+234 (0) 1 800-KCR-NIG</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>kolamajawole@gmail.com</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
