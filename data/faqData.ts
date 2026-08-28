export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Interactive Maps & GIS' | 'Plugins Architecture' | 'Rich Text Editors' | 'Engineering Services';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What WebApp plugins does KCR Nig Ltd provide?',
    answer: 'KCR Nig Ltd builds and sells turnkey WebApp plugin modules including Interactive GeoJSON Map Breakdowns (Nigeria 36 States & 774 LGAs, Africa, World), TinyMCE/Markdown Rich Text Blog Editors, S3 Document Vaults, and Paystack Payment Integrations.',
    category: 'Plugins Architecture'
  },
  {
    id: 'faq-2',
    question: 'How do the Nigeria State & LGA Map Breakdown plugins integrate into Next.js?',
    answer: 'Our Nigeria & Africa map plugins are packaged as lightweight SVG/D3 React components. They include state & LGA border GeoJSON layers, interactive click handlers, tooltips, and customizable color gradient scales with zero layout shift.',
    category: 'Interactive Maps & GIS'
  },
  {
    id: 'faq-3',
    question: 'Can I integrate the TinyMCE Blog Editor with my custom backend or AWS S3?',
    answer: 'Yes! The TinyMCE blog editor module comes with plug-and-play image drag-and-drop upload handlers pre-configured for AWS S3, Cloudinary, or local API routes, plus built-in markdown dual mode.',
    category: 'Rich Text Editors'
  },
  {
    id: 'faq-4',
    question: 'Does KCR Nig Ltd handle custom tech jobs, mobile app & full-stack development?',
    answer: 'Absolutely! Beyond off-the-shelf plugins, Kolamajawole C-Renee Ent Ltd offers custom software engineering sprints, iOS/Android mobile app development, custom GIS mapping, and cloud deployment services.',
    category: 'Engineering Services'
  },
  {
    id: 'faq-5',
    question: 'How does invoicing and Paystack checkout work for plugin licenses?',
    answer: 'When purchasing plugin licenses or custom engineering sprints, invoices automatically itemize line items and compute 7.5% VAT tax. Customers can pay instantly via Paystack Inline (Cards, Bank Transfers, USSD *737#).',
    category: 'Plugins Architecture'
  }
];
