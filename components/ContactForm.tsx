'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import {
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  MapPin,
  Phone,
  ShieldCheck,
  ChevronDown,
  Bot,
  Sparkles,
  Zap
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('Paystack Integration Consultation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-[#7C3AED]/20 border border-indigo-500/30 dark:border-[#A855F7]/40 text-xs font-mono text-indigo-700 dark:text-[#C084FC]">
            <Mail className="w-3.5 h-3.5" />
            <span>24/7 Dedicated Platform Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Get in Touch with <span className="text-cyber-neon">KCR Nig Ltd</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF]">
            Have questions about integrating Paystack Smart Gateway or custom WebApp plugin development? Speak directly with our core engineering team.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Form Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-[#A855F7]/40 transition-colors flex flex-col justify-between shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 my-auto">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-[#10B981]/20 border border-emerald-500 text-emerald-600 dark:text-[#10B981] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Support Ticket Dispatched!</h3>
                <p className="text-xs text-slate-600 dark:text-[#9CA3AF] max-w-md mx-auto">
                  Thank you, <span className="text-slate-900 dark:text-white font-semibold">{fullName}</span>. Ticket <span className="font-mono text-indigo-600 dark:text-[#C084FC]">#TCK-2026-9812</span> has been assigned to a Paystack Integration Specialist. We will reply within 30 minutes.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold btn-purple-glow mt-4 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send Enterprise Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-900 dark:text-white">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Funke Akindele"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-900 dark:text-white">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="kolamajawole@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-900 dark:text-white">Company / Project</label>
                      <input
                        type="text"
                        placeholder="e.g. Lagos Tech Arena"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-900 dark:text-white">Inquiry Type</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option value="Paystack Integration Consultation">Paystack Integration Consultation</option>
                        <option value="Custom WebApp Plugin Request">Custom WebApp Plugin Request</option>
                        <option value="Enterprise Invoicing & Webhook SLA">Enterprise Invoicing & Webhook SLA</option>
                        <option value="Security & Fraud Shield Audit">Security & Fraud Shield Audit</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-900 dark:text-white">Message / Technical Specs *</label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Describe your platform requirements, expected monthly payment volume, or plugin needs..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-extrabold text-sm btn-purple-glow flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit Ticket to Core Team</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">


            {/* Contact Card 1 */}
            <div className="glass-panel p-6 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800 shadow-md">
              <h4 className="text-sm font-mono font-bold uppercase text-indigo-600 dark:text-[#C084FC] flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Headquarters & Labs</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-indigo-600 dark:text-[#C084FC] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Lagos Innovation Hub</p>
                    <p className="text-slate-600 dark:text-[#9CA3AF]">14 Lekki Phase 1 Tech Expressway, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-600 dark:text-[#C084FC]" />
                  <a href="mailto:kolamajawole@gmail.com" className="font-mono text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-[#C084FC] transition-colors">
                    kolamajawole@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-indigo-600 dark:text-[#C084FC]" />
                  <span className="font-mono text-slate-900 dark:text-white">+234 (0) 1 800-KCR-NIG</span>
                </div>
              </div>
            </div>

            {/* Contact Card 2: Support SLA & Resolution Guarantee */}
            <div className="glass-panel p-6 rounded-3xl space-y-4 border border-indigo-500/30 dark:border-[#A855F7]/30 shadow-md bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5">

              <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Support SLA & Resolution Guarantee</span>
                </h4>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" title="Engineers Active" />
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold font-mono flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">24/7 Response Guarantee</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Round-the-clock platform support & engineer dispatch</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold font-mono flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">&lt; 15 Min Resolution Time</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Sub-15 minute average ticket resolution for high-priority items</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold font-mono flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">99.99% Webhook & API SLA</p>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">Zero downtime guarantee for Paystack payment webhooks</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* FAQ Accordion Section */}
        <div className="space-y-6 pt-10 border-t border-slate-200 dark:border-[#A855F7]/20">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-600 dark:text-[#9CA3AF]">Everything you need to know about Paystack invoicing and WebApp plugins.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-slate-100 dark:bg-[#13082C] border border-slate-200 dark:border-[#A855F7]/20 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-[#C084FC] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-indigo-600 dark:text-[#C084FC] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed border-t border-slate-200 dark:border-[#A855F7]/10 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
