import { Invoice } from '../types/invoice';

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'inv-9824',
    invoiceNumber: 'INV-2026-9824',
    clientName: 'Adebayo Ogunlesi',
    clientEmail: 'adebayo@lagostechhub.ng',
    clientCompany: 'Lagos Innovation Hub Ltd',
    clientAddress: '14 Lekki Phase 1 Tech Expressway, Victoria Island, Lagos',
    date: '2026-08-20',
    dueDate: '2026-09-05',
    status: 'UNPAID',
    currency: 'NGN',
    subtotal: 80000,
    taxRate: 7.5,
    taxAmount: 6000,
    totalAmount: 86000,
    notes: 'Payment via Paystack Gateway (Card, Transfer, USSD). Thank you for partnering with KCR Nig Ltd!',
    items: [
      {
        id: 'item-1',
        description: 'Nigeria State & 774 LGA Interactive Map Plugin License',
        quantity: 1,
        unitPrice: 45000,
        total: 45000,
        pluginId: 'plug-nigeria-map-breakdown'
      },
      {
        id: 'item-2',
        description: 'TinyMCE & Markdown WebApp Blog Editor Module',
        quantity: 1,
        unitPrice: 35000,
        total: 35000,
        pluginId: 'plug-tinymce-blog-editor'
      }
    ]
  },
  {
    id: 'inv-9825',
    invoiceNumber: 'INV-2026-9825',
    clientName: 'Ngozi Chimamanda',
    clientEmail: 'ngozi@afriapay.io',
    clientCompany: 'AfriaPay Global Solutions',
    clientAddress: '88 Marina Towers, CBD, Abuja, Nigeria',
    date: '2026-08-15',
    dueDate: '2026-08-28',
    status: 'PAID',
    currency: 'NGN',
    subtotal: 365000,
    taxRate: 7.5,
    taxAmount: 27375,
    totalAmount: 392375,
    notes: 'Paid via Paystack Card Checkout. Reference: TRX_PAYSTACK_84920194.',
    paystackRef: 'TRX_PAYSTACK_84920194',
    paidAt: '2026-08-16 14:22:10',
    paymentChannel: 'Paystack Master Card (**** 4242)',
    items: [
      {
        id: 'item-3',
        description: 'World & Africa Regional Choropleth Map Plugin',
        quantity: 1,
        unitPrice: 65000,
        total: 65000,
        pluginId: 'plug-world-africa-map'
      },
      {
        id: 'item-4',
        description: 'Enterprise Tech Engineering & Custom GIS Deployment Sprint',
        quantity: 1,
        unitPrice: 300000,
        total: 300000,
        pluginId: 'plug-custom-software-sprint'
      }
    ]
  },
  {
    id: 'inv-9826',
    invoiceNumber: 'INV-2026-9826',
    clientName: 'David Kojo Mensah',
    clientEmail: 'david@accradigital.com',
    clientCompany: 'Accra Digital Ventures',
    clientAddress: '45 Airport Residential Area, Accra, Ghana',
    date: '2026-08-01',
    dueDate: '2026-08-14',
    status: 'OVERDUE',
    currency: 'NGN',
    subtotal: 100000,
    taxRate: 7.5,
    taxAmount: 7500,
    totalAmount: 107500,
    notes: 'Overdue Notice: Please complete Paystack payment as soon as possible to avoid plugin license suspension.',
    items: [
      {
        id: 'item-5',
        description: 'World & Africa Regional Choropleth Map Bundle License',
        quantity: 1,
        unitPrice: 100000,
        total: 100000,
        pluginId: 'plug-world-africa-map'
      }
    ]
  },
  {
    id: 'inv-9827',
    invoiceNumber: 'INV-2026-9827',
    clientName: 'Zainab Bello',
    clientEmail: 'zainab@kano-fintech.ng',
    clientCompany: 'Kano Fintech Enterprise',
    clientAddress: '12 Bida Road, Kano, Nigeria',
    date: '2026-08-25',
    dueDate: '2026-09-10',
    status: 'UNPAID',
    currency: 'NGN',
    subtotal: 80000,
    taxRate: 7.5,
    taxAmount: 6000,
    totalAmount: 86000,
    notes: 'Paystack Smart Gateway ready. Click Pay Now to complete transaction.',
    items: [
      {
        id: 'item-6',
        description: 'Nigeria 36 State Map + TinyMCE Blog Editor Plugin Bundle',
        quantity: 1,
        unitPrice: 80000,
        total: 80000,
        pluginId: 'plug-nigeria-map-breakdown'
      }
    ]
  }
];
