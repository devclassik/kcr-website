export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  pluginId?: string;
}

export type InvoiceStatus = 'PAID' | 'UNPAID' | 'OVERDUE' | 'DRAFT';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  clientCompany: string;
  clientAddress?: string;
  date: string;
  dueDate: string;
  status: InvoiceStatus;
  currency: 'NGN' | 'USD';
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number; // e.g. 7.5 for 7.5% VAT
  taxAmount: number;
  discountAmount?: number;
  totalAmount: number;
  notes?: string;
  paystackRef?: string;
  paidAt?: string;
  paymentChannel?: string;
}
