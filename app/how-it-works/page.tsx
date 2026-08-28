'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { 
  Zap, 
  Grid, 
  FileText, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Play,
  Copy,
  Check,
  Sparkles,
  Layers,
  Lock,
  Radio,
  ExternalLink
} from 'lucide-react';

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeCodeTab, setActiveCodeTab] = useState<'next' | 'node' | 'python' | 'curl'>('next');
  const [webhookSimulated, setWebhookSimulated] = useState(false);
  const [copied, setCopied] = useState(false);

  const steps = [
    {
      num: 1,
      title: 'Install WebApp Plugins',
      subtitle: 'Plug-and-play architecture',
      description: 'Select plugins like Nigeria GeoJSON Maps, TinyMCE Blog Editors, or Paystack Gateways. Toggle activation in Next.js without editing core routing.',
      icon: Grid,
      badge: 'Step 1 • Integration'
    },
    {
      num: 2,
      title: 'Generate Itemized Invoice',
      subtitle: 'Usage biller & VAT calculator',
      description: 'Our engine auto-calculates line items, 7.5% NGN VAT tax, applies currency conversions, and stamps a cryptographic QR verification code.',
      icon: FileText,
      badge: 'Step 2 • Billing Engine'
    },
    {
      num: 3,
      title: 'Paystack Instant Checkout',
      subtitle: 'Inline zero-redirect payment',
      description: 'Customers pay via Paystack Inline JS modal supporting Master/Visa Cards, Bank Transfer, USSD (*737#), and Apple Pay.',
      icon: CreditCard,
      badge: 'Step 3 • Settlement'
    },
    {
      num: 4,
      title: 'Automated Webhook Delivery',
      subtitle: 'SHA512 verified reconciliation',
      description: 'Paystack dispatches event `charge.success`. Signature is validated, invoice status becomes PAID, and instant receipts are generated.',
      icon: CheckCircle2,
      badge: 'Step 4 • Webhook SLA'
    }
  ];

  const codeSnippets = {
    next: `// app/api/paystack/checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { invoiceId, email, amount } = await req.json();

  // Initialize Paystack Smart Gateway
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: \`Bearer \${process.env.PAYSTACK_SECRET_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      amount: amount * 100, // Amount in kobo
      callback_url: 'https://kcrnigltd.com/metrics',
      metadata: { invoiceId }
    })
  });

  const data = await response.json();
  return NextResponse.json(data);
}`,
    node: `// server.js - Node.js Express Paystack Webhook Handler
const express = require('express');
const crypto = require('crypto');
const app = express();

app.post('/webhooks/paystack', express.json(), (req, res) => {
  const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET)
                    .update(JSON.stringify(req.body)).digest('hex');
  
  if (hash === req.headers['x-paystack-signature']) {
    const event = req.body;
    if (event.event === 'charge.success') {
      console.log('Invoice Settled:', event.data.metadata.invoiceId);
    }
  }
  res.sendStatus(200);
});`,
    python: `# paystack_webhook.py - FastAPI Paystack Signature Verification
from fastapi import FastAPI, Request, Header, HTTPException
import hmac, hashlib

app = FastAPI()

@app.post("/webhooks/paystack")
async def paystack_webhook(request: Request, x_paystack_signature: str = Header(None)):
    body = await request.body()
    computed_hash = hmac.new(PAYSTACK_SECRET.encode(), body, hashlib.sha512).hexdigest()
    if computed_hash != x_paystack_signature:
        raise HTTPException(status_code=400, detail="Invalid HMAC signature")
    return {"status": "success", "verified": True}`,
    curl: `# Verify Paystack Transaction via cURL Command Line
curl https://api.paystack.co/transaction/verify/TRX_PAYSTACK_84920194 \\
  -H "Authorization: Bearer sk_test_a9d4f828941094018249a" \\
  -H "Content-Type: application/json"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSimulateWebhook = () => {
    setWebhookSimulated(true);
    setTimeout(() => setWebhookSimulated(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-clip">

      <Navbar />

      <main className="flex-1 py-16 relative">
        {/* Subtle Background Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none animate-purple-pulse" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-[#7C3AED]/20 border border-indigo-500/30 dark:border-[#A855F7]/40 text-xs font-mono text-indigo-700 dark:text-[#C084FC]">
              <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-[#C084FC]" />
              <span>Technical Architecture & Workflow</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How <span className="text-cyber-neon">KCR Nig Ltd</span> Works
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Step-by-step breakdown of how WebApp Plugins connect to Next.js App Router and settle invoices with Paystack Smart Gateway.
            </p>
          </div>

          {/* Progress Bar / Interactive 4-Step Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, index) => {
                const Icon = s.icon;
                const isCurrent = activeStep === s.num;
                return (
                  <button
                    key={s.num}
                    onClick={() => setActiveStep(s.num)}
                    className={`p-6 rounded-3xl text-left border transition-all duration-300 relative overflow-hidden group cursor-pointer animate-fade-in-up ${
                      isCurrent
                        ? 'bg-indigo-600/10 dark:bg-[#180A38] border-indigo-600 dark:border-[#C084FC] shadow-[0_0_30px_rgba(99,102,241,0.25)] scale-105'
                        : 'glass-panel border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-slate-100/50 dark:hover:bg-slate-900/50'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-transform group-hover:scale-110 ${
                        isCurrent 
                          ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md' 
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {s.num}
                      </div>
                      <div className={`p-2 rounded-xl transition-colors ${
                        isCurrent ? 'bg-sky-500/20 text-sky-600 dark:text-[#00F0FF]' : 'text-slate-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-[#C084FC] block mb-1">
                      {s.badge}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                      {s.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Inspector Panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 dark:border-[#A855F7]/40 space-y-6 shadow-xl relative overflow-hidden transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-mono font-bold shadow-sm">
                    STEP 0{activeStep} DETAILED ENGINE
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {steps[activeStep - 1].title}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Engine Active • Step {activeStep} of 4</span>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
                {steps[activeStep - 1].description}
              </p>

              {/* Step Graphic Preview Bar */}
              <div className="p-4 rounded-2xl bg-slate-950 text-sky-400 border border-slate-800 font-mono text-xs flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Engine Status: Step {activeStep} / 4 Active • Paystack Signature Listener Armed</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">SHA512 HMAC Ready</span>
              </div>
            </div>
          </div>

          {/* Developer Code Integration Showcase */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-[#C084FC] mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>Zero-Latency Integration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Developer Code Integration
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Production-ready SDK integration examples for Paystack & WebApp Plugins
                </p>
              </div>

              {/* Code Language Tabs */}
              <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30">
                {(['next', 'node', 'python', 'curl'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveCodeTab(tab)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                      activeCodeTab === tab
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                        : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Block Window */}
            <div className="glass-panel rounded-3xl overflow-hidden border border-slate-300 dark:border-[#A855F7]/40 relative shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-slate-300 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400">{activeCodeTab.toUpperCase()} Integration Example</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-mono text-indigo-400 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-6 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto bg-slate-950 leading-relaxed scrollbar-thin">
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>
          </div>

          {/* Interactive Webhook Tester Terminal */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-sky-500/30 dark:border-[#00F0FF]/30 space-y-5 bg-gradient-to-br from-indigo-900/10 via-slate-900/20 to-sky-900/10 dark:from-[#12082D] dark:to-[#1E0946] shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sky-600 dark:text-[#00F0FF]" />
                  <span>Interactive Paystack Webhook Tester</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Simulate an incoming Paystack payment webhook payload right now to test signature validation.
                </p>
              </div>

              <button
                onClick={handleSimulateWebhook}
                disabled={webhookSimulated}
                className="px-6 py-3.5 rounded-2xl font-bold text-xs btn-purple-glow flex items-center gap-2 cursor-pointer shrink-0 shadow-lg hover:shadow-indigo-500/40"
              >
                <Play className="w-4 h-4 text-white" />
                <span>{webhookSimulated ? 'Dispatching Webhook...' : 'Simulate Paystack Event'}</span>
              </button>
            </div>

            {webhookSimulated ? (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-emerald-500/50 text-xs font-mono space-y-1.5 text-emerald-400 shadow-inner animate-pulse">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>[POST /api/paystack/webhook] 200 OK Response</span>
                </p>
                <p>✔ Header x-paystack-signature: sha512_89f2a049102490124a verified</p>
                <p>✔ Invoice #INV-2026-9824 automatically marked as PAID in 0.04s</p>
                <p>✔ Instant cryptographic receipt generated & dispatched to customer email</p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Webhook Listener Status: Armed & Ready</span>
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400">Click button above to trigger</span>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
