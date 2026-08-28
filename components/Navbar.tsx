'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import {
  Zap,
  Grid,
  FileText,
  HelpCircle,
  Mail,
  Sun,
  Moon,
  Sparkles,
  Star,
} from 'lucide-react';

interface NavbarProps {
  isTestMode?: boolean;
  onToggleTestMode?: () => void;
  unpaidCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  isTestMode = true,
  onToggleTestMode,
  unpaidCount = 2
}) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks: { name: string; href: string; icon: any; badge?: number }[] = [
    { name: 'Home', href: '/', icon: Zap },
    { name: 'How It Works', href: '/how-it-works', icon: HelpCircle },
    { name: 'Plugins Directory', href: '/plugins', icon: Grid },
    { name: 'Platform Metrics', href: '/metrics', icon: Star },
    { name: 'Contact & Support', href: '/contact', icon: Mail },
  ];



  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 dark:bg-[#0B0F19]/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 p-0.5 shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300">
            <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center overflow-hidden">
              <img src="/kcr-logo.png" alt="KCR Nig Ltd Logo" className="w-full h-full object-cover rounded-[10px] group-hover:scale-105 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
                KCR <span className="text-indigo-600 dark:text-indigo-400">NIG LTD</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-wide">
              Plugin Engine
            </span>
          </div>
        </Link>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors duration-300">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
                <span>{link.name}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-pink-500 text-white animate-pulse">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Light / Dark Mode Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-2xl text-xs font-bold tracking-wide transition-all duration-300 border bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-800 shadow-sm hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
          >
            <div className="w-5 h-5 rounded-lg flex items-center justify-center bg-white dark:bg-slate-800 shadow-inner">
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400 transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-600 transition-transform group-hover:-rotate-12" />
              )}
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider hidden sm:inline">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Sub-Navigation */}
      <div className="lg:hidden flex items-center justify-around bg-slate-50 dark:bg-[#0B0F19] border-t border-slate-200 dark:border-slate-800 px-2 py-2 transition-colors duration-300">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] font-medium transition-colors ${isActive ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-slate-600 dark:text-slate-400'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.name.split(' ')[0]}</span>
            </Link>
          );
        })}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Mode"
          className="flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] font-medium text-slate-600 dark:text-slate-400 cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  );
};

