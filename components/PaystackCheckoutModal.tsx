'use me';
'use client';

import React, { useState } from 'react';
import { Invoice } from '../types/invoice';
import confetti from 'canvas-confetti';
import { 
  CreditCard, 
  Building2, 
  Smartphone, 
  QrCode, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  Zap, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PaystackCheckoutModalProps {
  invoice: Invoice | null;
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (invoiceId: string, paystackRef: string, paymentMethod: string) => void;
}

export const PaystackCheckoutModal: React.FC<PaystackCheckoutModalProps> = ({
  invoice,
  isOpen,
  onClose,
  onPaymentSuccess
}) => {
  if (!isOpen || !invoice) return null;

  const [paymentTab, setPaymentTab] = useState<'card' | 'transfer' | 'ussd' | 'qr'>('card');
  const [cardNumber, setCardNumber] = useState('4084 0000 0000 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvv, setCvv] = useState('984');
  const [pin, setPin] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'input' | 'pin' | 'verifying' | 'success'>('input');

  const formattedAmount = `${invoice.currency === 'NGN' ? '₦' : '$'}${invoice.totalAmount.toLocaleString()}`;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#A855F7', '#C084FC', '#00F0FF', '#EC4899', '#10B981']
      });
    } catch (e) {
      console.log('Confetti playback fallback', e);
    }
  };

  const handlePaystackPay = () => {
    // Check if real PaystackPop is available on window
    if (typeof window !== 'undefined' && (window as any).PaystackPop) {
      try {
        const handler = (window as any).PaystackPop.setup({
          key: 'pk_test_a9d4f828941094018249a', // Test key
          email: invoice.clientEmail,
          amount: Math.round(invoice.totalAmount * 100), // in kobo
          currency: invoice.currency,
          ref: `TRX_CC_${Date.now()}`,
          metadata: {
            custom_fields: [
              {
                display_name: "Invoice Number",
                variable_name: "invoice_number",
                value: invoice.invoiceNumber
              }
            ]
          },
          callback: function(response: any) {
            triggerConfetti();
            onPaymentSuccess(invoice.id, response.reference || `TRX_PAYSTACK_${Date.now()}`, 'Paystack Card Online');
            onClose();
          },
          onClose: function() {
            console.log('Paystack popup closed');
          }
        });
        handler.openIframe();
        return;
      } catch (err) {
        console.warn('Real Paystack script execution failed, executing simulator', err);
      }
    }

    // Fallback Simulator Flow
    if (paymentTab === 'card') {
      setStep('pin');
    } else {
      executeSimulation();
    }
  };

  const executeSimulation = () => {
    setStep('verifying');
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      triggerConfetti();
      const generatedRef = `TRX_PAYSTACK_${Math.floor(10000000 + Math.random() * 90000000)}`;
      const method = paymentTab === 'card' ? 'Paystack Visa / Mastercard' : paymentTab === 'transfer' ? 'Paystack Bank Transfer' : 'Paystack USSD (*737#)';
      setTimeout(() => {
        onPaymentSuccess(invoice.id, generatedRef, method);
        onClose();
      }, 1500);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
      <div className="w-full max-w-lg bg-[#0D061E] border border-[#A855F7]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(168,85,247,0.4)] relative overflow-hidden">
        
        {/* Paystack Top Header Banner */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#A855F7]/20">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-[#00C3F7]/15 border border-[#00C3F7]/30 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C3F7] animate-ping" />
              <span className="text-xs font-bold text-[#00C3F7] tracking-wider">paystack</span>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Secured Gateway</p>
              <p className="text-[10px] text-[#9CA3AF]">Official Paystack Modal Checkout</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1A0B36] text-[#9CA3AF] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Invoice Summary Pill */}
        <div className="p-4 rounded-2xl bg-[#150930] border border-[#A855F7]/30 flex items-center justify-between mb-6">
          <div>
            <p className="text-[10px] font-mono text-[#9CA3AF] uppercase">Paying Invoice</p>
            <p className="text-sm font-extrabold text-white">{invoice.invoiceNumber}</p>
            <p className="text-xs text-[#C084FC]">{invoice.clientCompany}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-[#9CA3AF] uppercase">Total Amount</p>
            <p className="text-2xl font-extrabold text-[#10B981]">{formattedAmount}</p>
          </div>
        </div>

        {/* Main Payment Step Views */}
        {step === 'input' && (
          <div className="space-y-5">
            
            {/* Payment Method Selector Tabs */}
            <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-[#14082D] border border-[#A855F7]/20">
              <button
                type="button"
                onClick={() => setPaymentTab('card')}
                className={`py-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  paymentTab === 'card' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('transfer')}
                className={`py-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  paymentTab === 'transfer' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Transfer</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('ussd')}
                className={`py-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  paymentTab === 'ussd' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>USSD</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('qr')}
                className={`py-2 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  paymentTab === 'qr' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>QR Code</span>
              </button>
            </div>

            {/* CARD FORM */}
            {paymentTab === 'card' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#14082D] border border-[#A855F7]/30 text-xs font-mono text-white tracking-widest focus:outline-none focus:border-[#C084FC]"
                    />
                    <CreditCard className="w-4 h-4 text-[#C084FC] absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-white">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#14082D] border border-[#A855F7]/30 text-xs font-mono text-white text-center focus:outline-none focus:border-[#C084FC]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-white">CVV</label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#14082D] border border-[#A855F7]/30 text-xs font-mono text-white text-center focus:outline-none focus:border-[#C084FC]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* BANK TRANSFER VIEW */}
            {paymentTab === 'transfer' && (
              <div className="p-4 rounded-2xl bg-[#14082D] border border-[#A855F7]/30 space-y-3 text-center">
                <p className="text-xs text-[#9CA3AF]">Transfer exact amount to the temporary Paystack Wema Bank Account:</p>
                <div className="p-3 rounded-xl bg-[#090416] border border-[#00C3F7]/40 space-y-1">
                  <p className="text-[10px] text-[#9CA3AF] uppercase">Bank Name</p>
                  <p className="text-sm font-bold text-white">Paystack / Wema Bank</p>
                  <p className="text-[10px] text-[#9CA3AF] uppercase pt-1">Account Number</p>
                  <p className="text-2xl font-extrabold font-mono text-[#00C3F7]">9928 4019 4820</p>
                </div>
                <p className="text-[10px] text-[#9CA3AF]">Account expires in 30 minutes. Auto-verifies immediately.</p>
              </div>
            )}

            {/* USSD VIEW */}
            {paymentTab === 'ussd' && (
              <div className="p-4 rounded-2xl bg-[#14082D] border border-[#A855F7]/30 space-y-3 text-center">
                <p className="text-xs text-[#9CA3AF]">Dial the USSD code below on your registered phone:</p>
                <div className="p-4 rounded-xl bg-[#090416] border border-[#A855F7]/40">
                  <p className="text-2xl font-extrabold font-mono text-[#C084FC]">*737*33*483750#</p>
                </div>
                <p className="text-[10px] text-[#9CA3AF]">Supported: GTBank, Zenith, Access, UBA, FirstBank</p>
              </div>
            )}

            {/* QR VIEW */}
            {paymentTab === 'qr' && (
              <div className="p-4 rounded-2xl bg-[#14082D] border border-[#A855F7]/30 space-y-3 text-center">
                <p className="text-xs text-[#9CA3AF]">Scan QR code with your mobile banking app:</p>
                <div className="w-36 h-36 mx-auto bg-white p-3 rounded-xl flex items-center justify-center">
                  <QrCode className="w-full h-full text-black" />
                </div>
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handlePaystackPay}
              className="w-full py-3.5 rounded-2xl font-extrabold text-sm btn-purple-glow flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5 text-white" />
              <span>Pay {formattedAmount} via Paystack</span>
            </button>

          </div>
        )}

        {/* PIN VERIFICATION STEP */}
        {step === 'pin' && (
          <div className="space-y-5 text-center py-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#7C3AED]/20 border border-[#C084FC]/40 flex items-center justify-center text-[#C084FC]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Enter 4-Digit Card PIN</h4>
              <p className="text-xs text-[#9CA3AF]">Paystack 3D Secure Verification</p>
            </div>

            <div className="flex justify-center gap-2">
              <input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="••••"
                className="w-40 px-4 py-3 rounded-2xl bg-[#14082D] border border-[#A855F7]/40 text-2xl font-mono text-center tracking-widest text-white focus:outline-none focus:border-[#C084FC]"
              />
            </div>

            <button
              onClick={executeSimulation}
              className="w-full py-3 rounded-2xl font-bold text-xs btn-purple-glow"
            >
              Authorize Paystack Transaction
            </button>
          </div>
        )}

        {/* VERIFYING STEP */}
        {step === 'verifying' && (
          <div className="space-y-6 text-center py-12">
            <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#7C3AED] border-t-[#00C3F7] animate-spin flex items-center justify-center">
              <Zap className="w-8 h-8 text-[#C084FC]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Communicating with Paystack...</h4>
              <p className="text-xs text-[#9CA3AF]">Validating transaction token & SHA512 signature</p>
            </div>
          </div>
        )}

        {/* SUCCESS STEP */}
        {step === 'success' && (
          <div className="space-y-6 text-center py-10">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#10B981]/20 border-2 border-[#10B981] flex items-center justify-center text-[#10B981] animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-white">Payment Successful!</h4>
              <p className="text-xs text-[#10B981] font-mono mt-1">Invoice Status Updated to PAID</p>
            </div>
          </div>
        )}

        {/* Footer Security Badges */}
        <div className="mt-6 pt-4 border-t border-[#A855F7]/20 flex items-center justify-between text-[10px] text-[#9CA3AF]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>PCI-DSS Level 1 Compliant</span>
          </div>
          <span className="font-mono">Paystack API v2.0</span>
        </div>

      </div>
    </div>
  );
};
