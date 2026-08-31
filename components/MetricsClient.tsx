'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { InvoiceHub } from './InvoiceHub';
import { INITIAL_INVOICES } from '../data/invoicesData';
import { Invoice } from '../types/invoice';

export function MetricsClient() {
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_INVOICES);

  const handleCreateInvoice = (newInv: Invoice) => {
    setInvoices((prev) => [newInv, ...prev]);
  };

  const handlePaymentSuccess = (invoiceId: string, paystackRef: string, paymentMethod: string) => {
    setInvoices((prev) =>
      prev.map((inv) => {
        if (inv.id === invoiceId) {
          return {
            ...inv,
            status: 'PAID',
            paystackRef,
            paidAt: new Date().toLocaleString(),
            paymentChannel: paymentMethod,
          };
        }
        return inv;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)] transition-colors duration-300 flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <InvoiceHub
          invoices={invoices}
          onCreateInvoice={handleCreateInvoice}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </main>
      <Footer />
    </div>
  );
}
