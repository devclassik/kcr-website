'use me';
'use client';

import React, { useState } from 'react';
import { Invoice, InvoiceItem } from '../types/invoice';
import { X, Plus, Trash2, FileText, Check } from 'lucide-react';

interface CreateInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateInvoice: (newInvoice: Invoice) => void;
}

export const CreateInvoiceModal: React.FC<CreateInvoiceModalProps> = ({
  isOpen,
  onClose,
  onCreateInvoice
}) => {
  if (!isOpen) return null;

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [taxRate, setTaxRate] = useState<number>(7.5);
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: 'item-1',
      description: 'Paystack Smart Gateway Enterprise Subscription',
      quantity: 1,
      unitPrice: 150000,
      total: 150000
    }
  ]);

  const handleAddItem = () => {
    setItems(prev => [
      ...prev,
      {
        id: `item-${Date.now()}`,
        description: 'New WebApp Plugin Integration Service',
        quantity: 1,
        unitPrice: 50000,
        total: 50000
      }
    ]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length <= 1) return;
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const handleItemChange = (id: string, field: keyof InvoiceItem, val: any) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const updated = { ...item, [field]: val };
          if (field === 'quantity' || field === 'unitPrice') {
            updated.total = Number(updated.quantity) * Number(updated.unitPrice);
          }
          return updated;
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.total, 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const totalAmount = subtotal + taxAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientCompany) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newInv: Invoice = {
      id: `inv-${randomNum}`,
      invoiceNumber: `INV-2026-${randomNum}`,
      clientName,
      clientEmail,
      clientCompany,
      date: new Date().toISOString().split('T')[0],
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'UNPAID',
      currency,
      subtotal,
      taxRate,
      taxAmount,
      totalAmount,
      notes: 'Generated via KCR Nig Ltd Invoice Hub. Paystack Smart Gateway enabled.',
      items
    };

    onCreateInvoice(newInv);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-slate-50 dark:bg-[#0E0620] border border-slate-300 dark:border-[#A855F7]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative max-h-[90vh] overflow-y-auto transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-[#A855F7]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-[#1A0B36] border border-slate-300 dark:border-[#A855F7]/40 flex items-center justify-center text-indigo-600 dark:text-[#C084FC]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Generate Tech Invoice</h3>
              <p className="text-xs text-slate-500 dark:text-[#9CA3AF]">Create invoice with Paystack Checkout integration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200 dark:bg-[#1A0B36] text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="py-6 space-y-6">
          
          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-900 dark:text-white">Client Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Babatunde Raji"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-[#C084FC]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-900 dark:text-white">Client Email *</label>
              <input
                type="email"
                required
                placeholder="babatunde@techfirm.ng"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-[#C084FC]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-900 dark:text-white">Company Name *</label>
              <input
                type="text"
                required
                placeholder="TechFirm West Africa"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-[#C084FC]"
              />
            </div>
          </div>

          {/* Line Items Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-[#C084FC]">
                Itemized Plugin Services
              </h4>
              <button
                type="button"
                onClick={handleAddItem}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-[#1A0B36] text-indigo-600 dark:text-[#C084FC] hover:bg-slate-300 dark:hover:bg-[#2A1058] flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 items-center p-3 rounded-xl bg-slate-100/90 dark:bg-[#13082C]/60 border border-slate-300 dark:border-[#A855F7]/20">
                  <div className="col-span-6">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-[#0B0418] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-[#C084FC]"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, 'quantity', Number(e.target.value))}
                      className="w-full px-2 py-1.5 rounded-lg bg-white dark:bg-[#0B0418] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white text-center focus:outline-none focus:border-indigo-500 dark:focus:border-[#C084FC]"
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="number"
                      min="0"
                      value={item.unitPrice}
                      onChange={(e) => handleItemChange(item.id, 'unitPrice', Number(e.target.value))}
                      className="w-full px-2 py-1.5 rounded-lg bg-white dark:bg-[#0B0418] border border-slate-300 dark:border-[#A855F7]/30 text-xs text-slate-900 dark:text-white text-right focus:outline-none focus:border-indigo-500 dark:focus:border-[#C084FC]"
                    />
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1 text-red-600 dark:text-[#EF4444] hover:bg-red-100 dark:hover:bg-[#EF4444]/20 rounded-md cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtotal & Summary */}
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#13082C] border border-slate-300 dark:border-[#A855F7]/30 flex flex-col sm:flex-row justify-between items-end gap-4">
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-600 dark:text-[#9CA3AF]">Currency:</span>
                <button
                  type="button"
                  onClick={() => setCurrency(currency === 'NGN' ? 'USD' : 'NGN')}
                  className="px-2.5 py-0.5 rounded bg-indigo-600 dark:bg-[#7C3AED]/40 text-white font-mono font-bold cursor-pointer"
                >
                  {currency}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600 dark:text-[#9CA3AF]">VAT Tax Rate:</span>
                <span className="font-mono text-slate-900 dark:text-white">7.5%</span>
              </div>
            </div>

            <div className="text-right space-y-1">
              <p className="text-xs text-slate-600 dark:text-[#9CA3AF]">Subtotal: <span className="font-mono text-slate-900 dark:text-white">{currency === 'NGN' ? '₦' : '$'}{subtotal.toLocaleString()}</span></p>
              <p className="text-xs text-slate-600 dark:text-[#9CA3AF]">Tax (7.5%): <span className="font-mono text-slate-900 dark:text-white">{currency === 'NGN' ? '₦' : '$'}{taxAmount.toLocaleString()}</span></p>
              <p className="text-xl font-extrabold text-indigo-600 dark:text-[#C084FC]">Total: {currency === 'NGN' ? '₦' : '$'}{totalAmount.toLocaleString()}</p>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-[#A855F7]/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-[#1A0B36] text-slate-700 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold btn-purple-glow cursor-pointer"
            >
              Create Invoice & Enable Paystack
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

