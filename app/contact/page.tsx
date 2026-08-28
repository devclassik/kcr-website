'use me';
'use client';

import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ContactForm } from '../../components/ContactForm';

export default function ContactPage() {
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

