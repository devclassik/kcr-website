'use client';

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContactForm } from './ContactForm';

export function ContactClient() {
  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
