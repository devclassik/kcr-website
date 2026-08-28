'use me';
'use client';

import React from 'react';
import { Invoice } from '../types/invoice';
import { CheckCircle2, Download, Printer, X, ShieldCheck, Zap } from 'lucide-react';

interface ReceiptModalProps {
  invoice: Invoice | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ invoice, onClose }) => {
  if (!invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-lg bg-[#0E0620] border border-[#10B981]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.3)] relative overflow-hidden">
        
        {/* Top Glow Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg.gradient-to-r from-[#10B981] via-[#00F0FF] to-[#7C3AED]" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#A855F7]/20">
          <div className="flex items-center gap-2 text-[#10B981]">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Official Paystack Receipt</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1A0B36] text-[#9CA3AF] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-xs font-mono text-[#9CA3AF]">TRANSACTION REFERENCE</p>
            <p className="text-lg font-mono font-bold text-[#00F0FF]">{invoice.paystackRef || 'TRX_PAYSTACK_84920194'}</p>
            <p className="text-3xl font-extrabold text-white pt-2">
              {invoice.currency === 'NGN' ? '₦' : '$'}{invoice.totalAmount.toLocaleString()}
            </p>
            <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-bold font-mono mt-1">
              STATUS: SETTLED & VERIFIED
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#13082C] border border-[#A855F7]/20 space-y-2.5 text-xs">
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">Paid By:</span>
              <span className="font-bold text-white">{invoice.clientName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">Company:</span>
              <span className="font-bold text-white">{invoice.clientCompany}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">Payment Channel:</span>
              <span className="font-bold text-[#C084FC]">{invoice.paymentChannel || 'Paystack Card Online'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9CA3AF]">Timestamp:</span>
              <span className="font-mono text-white">{invoice.paidAt || new Date().toLocaleString()}</span>
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#A855F7]/20">
          <button
            onClick={handlePrint}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-[#1A0B36] text-[#C084FC] border border-[#A855F7]/30 hover:bg-[#2A1058] flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print Receipt</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold btn-purple-glow"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
