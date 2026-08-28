'use me';
'use client';

import React from 'react';
import { Invoice } from '../types/invoice';
import { X, CreditCard, Printer, QrCode, CheckCircle2, ShieldCheck, Zap, Download } from 'lucide-react';

interface InvoiceDetailModalProps {
  invoice: Invoice | null;
  onClose: () => void;
  onPayNow: (invoice: Invoice) => void;
}

export const InvoiceDetailModal: React.FC<InvoiceDetailModalProps> = ({
  invoice,
  onClose,
  onPayNow
}) => {
  if (!invoice) return null;

  const isPaid = invoice.status === 'PAID';
  const currencySymbol = invoice.currency === 'NGN' ? '₦' : '$';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-lg text-white">KCR <span className="text-indigo-400">NIG LTD</span></span>
            <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
              {invoice.invoiceNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition-colors"
              title="Print Invoice"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Invoice Document Body */}
        <div className="py-6 space-y-8">
          
          {/* Header Metadata */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 p-6 rounded-2xl bg-[#14082D] border border-[#A855F7]/20">
            <div>
              <p className="text-[10px] font-mono text-[#9CA3AF] uppercase">Billed To</p>
              <h3 className="text-lg font-bold text-white mt-1">{invoice.clientName}</h3>
              <p className="text-xs text-[#C084FC] font-semibold">{invoice.clientCompany}</p>
              <p className="text-xs text-[#9CA3AF] mt-1">{invoice.clientEmail}</p>
              {invoice.clientAddress && (
                <p className="text-[11px] text-[#6B7280] max-w-xs mt-1">{invoice.clientAddress}</p>
              )}
            </div>

            <div className="text-right space-y-1">
              <div>
                <span className="text-[10px] font-mono text-[#9CA3AF] uppercase">Invoice Status: </span>
                <span className={`px-2.5 py-0.5 text-xs font-bold rounded ${
                  isPaid ? 'bg-[#10B981]/20 text-[#10B981]' : invoice.status === 'OVERDUE' ? 'bg-[#EF4444]/20 text-[#EF4444]' : 'bg-[#F59E0B]/20 text-[#F59E0B]'
                }`}>
                  {invoice.status}
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF]">Issue Date: <span className="text-white font-mono">{invoice.date}</span></p>
              <p className="text-xs text-[#9CA3AF]">Due Date: <span className="text-white font-mono">{invoice.dueDate}</span></p>
              {invoice.paystackRef && (
                <p className="text-[11px] font-mono text-[#00F0FF] pt-1">Paystack Ref: {invoice.paystackRef}</p>
              )}
            </div>
          </div>

          {/* Line Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#A855F7]/30 text-[#9CA3AF] font-mono uppercase text-[10px]">
                  <th className="py-3 px-2">Description</th>
                  <th className="py-3 px-2 text-center">Qty</th>
                  <th className="py-3 px-2 text-right">Unit Price</th>
                  <th className="py-3 px-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A855F7]/15">
                {invoice.items.map((item) => (
                  <tr key={item.id} className="hover:bg-[#14082D]/40">
                    <td className="py-3 px-2 font-medium text-white">{item.description}</td>
                    <td className="py-3 px-2 text-center font-mono text-[#9CA3AF]">{item.quantity}</td>
                    <td className="py-3 px-2 text-right font-mono text-[#9CA3AF]">{currencySymbol}{item.unitPrice.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right font-mono font-bold text-white">{currencySymbol}{item.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Calculations Summary & QR Code */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 p-6 rounded-2xl bg-[#14082D] border border-[#A855F7]/20">
            
            {/* Left QR Code Visual */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white p-2 rounded-xl flex items-center justify-center">
                <QrCode className="w-full h-full text-black" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-[#9CA3AF] uppercase">Digital Verification</p>
                <p className="text-xs font-mono text-[#C084FC]">PAYSTACK SECURED</p>
                <div className="flex items-center gap-1 text-[10px] text-[#10B981]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Invoice Stamp</span>
                </div>
              </div>
            </div>

            {/* Right Totals */}
            <div className="w-full sm:w-64 space-y-2 text-right text-xs">
              <div className="flex justify-between text-[#9CA3AF]">
                <span>Subtotal:</span>
                <span className="font-mono text-white">{currencySymbol}{invoice.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#9CA3AF]">
                <span>VAT ({invoice.taxRate}%):</span>
                <span className="font-mono text-white">{currencySymbol}{invoice.taxAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#C084FC] pt-2 border-t border-[#A855F7]/20">
                <span>Total Amount:</span>
                <span className="font-mono text-white">{currencySymbol}{invoice.totalAmount.toLocaleString()}</span>
              </div>
            </div>

          </div>

          {invoice.notes && (
            <div className="p-4 rounded-xl bg-[#0F0724] border border-[#A855F7]/20 text-xs text-[#9CA3AF]">
              <span className="font-mono font-bold text-[#C084FC] block mb-1">Payment Instructions:</span>
              {invoice.notes}
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#A855F7]/20">
          <span className="text-xs text-[#9CA3AF] font-mono">
            Powered by Paystack Smart Gateway
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1A0B36] text-[#9CA3AF] hover:text-white"
            >
              Close
            </button>

            {!isPaid && (
              <button
                onClick={() => {
                  onClose();
                  onPayNow(invoice);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-extrabold btn-purple-glow flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-white" />
                <span>Pay {currencySymbol}{invoice.totalAmount.toLocaleString()} via Paystack</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
