export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Interactive Maps & GIS' | 'Plugins Architecture' | 'Rich Text Editors' | 'Engineering Services' | 'Security & Permissions' | 'Notifications & Messaging';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What WebApp plugins does KCR Nig Ltd provide?',
    answer: 'KCR Nig Ltd builds and sells turnkey WebApp plugin modules including devclassic-rbac (Enterprise RBAC & ABAC permission guard), devclassic-notify (Multi-channel notification engine for Email, SMS, WhatsApp, Web Push), devclassic-map (Nigeria 36 States & 774 LGAs GeoJSON choropleth), World/Africa vector maps, TinyMCE/Markdown Rich Text Blog Editors, S3 Document Vaults, and Paystack Payment Integrations.',
    category: 'Plugins Architecture'
  },
  {
    id: 'faq-2',
    question: 'How do the Nigeria State & LGA Map Breakdown plugins integrate into Next.js?',
    answer: 'Our Nigeria & Africa map plugins (devclassic-map) are packaged as lightweight SVG/D3 React components. They include state & LGA border GeoJSON layers, interactive click handlers, tooltips, and customizable color gradient scales with zero layout shift.',
    category: 'Interactive Maps & GIS'
  },
  {
    id: 'faq-3',
    question: 'How does devclassic-rbac work across frontend and backend?',
    answer: 'devclassic-rbac is a zero-runtime-dependency enterprise access control engine. It enables developers to define roles and permissions once and enforce them uniformly across frontend React components using <Protect>, <Can>, and <ProtectedRoute>, and inside Node.js Express middleware or Next.js Route Handlers. It includes dynamic ABAC conditions and an explain() audit method for compliance.',
    category: 'Security & Permissions'
  },
  {
    id: 'faq-4',
    question: 'Can devclassic-notify be used standalone on frontend or backend only?',
    answer: 'Yes! devclassic-notify is completely modular. On the backend, use createNotificationEngine() to dispatch Email (Resend, SendGrid, Gmail/SMTP), SMS (Termii, Twilio), WhatsApp, and Web Push with automatic failover without needing React. On the frontend, import <NotificationBell />, <NotificationPreferences />, or useWebPush() hook to connect with any custom API (Node, Python FastAPI, Go).',
    category: 'Notifications & Messaging'
  },
  {
    id: 'faq-5',
    question: 'How do I install the devclassic plugin packages in my project?',
    answer: 'All devclassic plugins are available via npm with dual ESM/CJS and zero-heavy SDK dependencies: `npm i devclassic-rbac` for access control, `npm i devclassic-notify` for omnichannel notifications, and `npm i devclassic-map` for Nigeria & Africa choropleth GIS mapping.',
    category: 'Plugins Architecture'
  },
  {
    id: 'faq-6',
    question: 'Can I integrate the TinyMCE Blog Editor with my custom backend or AWS S3?',
    answer: 'Yes! The TinyMCE blog editor module comes with plug-and-play image drag-and-drop upload handlers pre-configured for AWS S3, Cloudinary, or local API routes, plus built-in markdown dual mode.',
    category: 'Rich Text Editors'
  },
  {
    id: 'faq-7',
    question: 'Does KCR Nig Ltd handle custom tech jobs, mobile app & full-stack development?',
    answer: 'Absolutely! Beyond off-the-shelf plugins, Kolamajawole C-Renee Ent Ltd offers custom software engineering sprints, iOS/Android mobile app development, custom GIS mapping, and cloud deployment services.',
    category: 'Engineering Services'
  },
  {
    id: 'faq-8',
    question: 'How does invoicing and Paystack checkout work for plugin licenses?',
    answer: 'When purchasing plugin licenses or custom engineering sprints, invoices automatically itemize line items and compute 7.5% VAT tax. Customers can pay instantly via Paystack Inline (Cards, Bank Transfers, USSD *737#).',
    category: 'Plugins Architecture'
  }
];
