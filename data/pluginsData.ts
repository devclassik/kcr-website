import { WebAppPlugin } from '../types/plugin';

export const INITIAL_PLUGINS: WebAppPlugin[] = [
  {
    id: 'plug-devclassic-rbac',
    name: 'devclassic-rbac — Enterprise RBAC & ABAC Engine',
    slug: 'devclassic-rbac-enterprise-auth-guard',
    tagline: 'Zero-runtime-dep RBAC & ABAC permission engine with route guards, <Protect> gates, and dual frontend/backend security.',
    description: 'Guard your React / Next.js UI components and Node.js / Express backend APIs with the exact same security rules — zero discrepancy, zero exploits. Features declarative <Protect>, semantic <Can>, <ProtectedRoute>, useRBAC() hook, dynamic ABAC conditions, multi-tenant roles, and explain() audit engine.',
    category: 'Security & Auth',
    rating: 4.99,
    reviewsCount: 420,
    downloads: '14.8k',
    version: 'v1.0.0',
    author: 'devclassic',
    authorVerified: true,
    iconName: 'ShieldCheck',
    installed: true,
    active: true,
    price: 'Free / MIT Open Source',
    badge: 'NEW RELEASE',
    previewImage: '/plugins/rbac-preview.jpg',
    npmPackage: 'devclassic-rbac',
    tags: ['devclassic-rbac', 'RBAC', 'ABAC', 'Permissions', 'Next.js', 'React', 'Route Guard', 'Security'],
    features: [
      'Dual frontend UI and backend API unified permission enforcement',
      'Declarative <Protect> and semantic <Can> React components',
      '<ProtectedRoute> for Next.js App Router and edge middleware',
      'Dynamic Attribute-Based (ABAC) business condition rules',
      'Audit & explainability engine with explain() method',
      'Zero runtime dependencies with dual ESM/CJS support'
    ],
    configOptions: [
      {
        id: 'fallback_mode',
        name: 'Guard Fallback Mode',
        type: 'select',
        value: 'Hide Element',
        options: ['Hide Element', 'Disable Element', 'Access Denied Banner', 'Custom Render Prop'],
        description: 'Default UI behavior when user lacks required permission'
      },
      {
        id: 'strict_hierarchy',
        name: 'Role Hierarchy Inheritance',
        type: 'boolean',
        value: true,
        description: 'Inherit subordinate role permissions (Admin > Manager > Editor > Viewer)'
      },
      {
        id: 'audit_explain',
        name: 'Live Audit & Explain Mode',
        type: 'boolean',
        value: true,
        description: 'Enable explain() debugging to audit why access was granted or denied'
      }
    ]
  },
  {
    id: 'plug-devclassic-notify',
    name: 'devclassic-notify — Multi-Channel Notification Engine',
    slug: 'devclassic-notify-omnichannel-engine',
    tagline: 'Enterprise multi-channel notification engine (Email, SMS, WhatsApp, Web Push) with auto-failover and React in-app center.',
    description: 'Unify Email (Resend, SendGrid, Gmail/SMTP), SMS (Termii, Twilio), WhatsApp, and Browser Push notifications under a single elegant API. Works standalone on the backend (Node/Express/Fastify), frontend-only with <NotificationBell /> & <NotificationPreferences />, or unified in Next.js App Router.',
    category: 'Notifications & Messaging',
    rating: 4.99,
    reviewsCount: 380,
    downloads: '19.4k',
    version: 'v1.0.2',
    author: 'devclassic',
    authorVerified: true,
    iconName: 'Bell',
    installed: true,
    active: true,
    price: 'Free / MIT Open Source',
    badge: 'NEW RELEASE',
    previewImage: '/plugins/notify-preview.jpg',
    npmPackage: 'devclassic-notify',
    tags: ['devclassic-notify', 'Notifications', 'Email', 'SMS', 'WhatsApp', 'Web Push', 'Termii', 'Resend'],
    features: [
      'Multi-channel dispatch: Email, SMS, WhatsApp, and Web Push',
      'Automatic provider failover (Termii -> Twilio, Resend -> SendGrid/Gmail)',
      'Frontend React components: <NotificationBell /> & <NotificationPreferences />',
      'Browser push notifications with useWebPush() hook & VAPID key support',
      'Dynamic variable template engine ({{userName}}, {{orderId}}, etc.)',
      'Standalone backend, frontend-only, or full-stack Next.js operation'
    ],
    configOptions: [
      {
        id: 'email_provider',
        name: 'Primary Email Provider',
        type: 'select',
        value: 'Resend',
        options: ['Resend', 'SendGrid', 'Gmail / SMTP', 'Mock Sandbox'],
        description: 'Primary transactional email delivery service'
      },
      {
        id: 'sms_provider',
        name: 'Primary SMS Provider',
        type: 'select',
        value: 'Termii',
        options: ['Termii (Nigeria & Africa)', 'Twilio (Global)', 'Mock Sandbox'],
        description: 'Primary SMS dispatch gateway with African & global routing'
      },
      {
        id: 'auto_failover',
        name: 'Automatic Provider Failover',
        type: 'boolean',
        value: true,
        description: 'Automatically route to secondary provider if primary fails'
      },
      {
        id: 'vapid_public_key',
        name: 'VAPID Web Push Public Key',
        type: 'string',
        value: 'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDZKrxZ_fSBOImTHufzs....',
        description: 'VAPID public key for browser web push subscriptions'
      }
    ]
  },
  {
    id: 'plug-nigeria-map-breakdown',
    name: 'Nigeria State & LGA Interactive Map (devclassic-map)',
    slug: 'nigeria-state-lga-map-breakdown',
    tagline: 'High-resolution GeoJSON choropleth map for all 36 Nigerian States & 774 LGAs powered by devclassic-map.',
    description: 'Empower your WebApp with interactive SVG/D3 choropleth maps of Nigeria. Includes state-level demographic data, LGA boundaries, election/sales breakdown overlays, and click-to-filter reactivity.',
    category: 'Interactive Maps & GIS',
    rating: 4.99,
    reviewsCount: 1840,
    downloads: '120.4k',
    version: 'v4.1.0',
    author: 'KCR GIS Labs',
    authorVerified: true,
    iconName: 'MapPin',
    installed: true,
    active: true,
    price: '₦45,000 / license',
    badge: 'BEST SELLER',
    previewImage: '/plugins/nigeria-map.jpg',
    npmPackage: 'devclassic-map',
    tags: ['devclassic-map', 'Nigeria', 'Maps', 'Choropleth', 'GeoJSON', 'States', 'LGAs', 'GIS', 'React'],

    features: [
      'Pre-rendered SVG GeoJSON vector layers for all 36 States & FCT Abuja',
      '774 LGA drill-down with sub-second vector rendering',
      'Custom color gradient scale for sales, population, or regional metrics',
      'Hover tooltips with custom metadata HTML support',
      'Export state map selections as PNG, SVG, or JSON data'
    ],
    configOptions: [
      {
        id: 'map_mode',
        name: 'Default Regional View',
        type: 'select',
        value: 'State Level',
        options: ['State Level', 'LGA Drilldown', 'Geopolitical Zones'],
        description: 'Initial zoom level when map mounts'
      },
      {
        id: 'color_theme',
        name: 'Choropleth Heatmap Color',
        type: 'select',
        value: 'Emerald-Indigo Gradient',
        options: ['Emerald-Indigo Gradient', 'Cyber Blue', 'Sunset Orange'],
        description: 'Primary color palette for density map'
      }
    ]
  },
  {
    id: 'plug-world-africa-map',
    name: 'World & Africa Regional Choropleth Map',
    slug: 'world-africa-regional-choropleth-map',
    tagline: 'Interactive vector maps for 54 African nations, ECOWAS, and 195 World countries.',
    description: 'High-performance interactive map module built for global analytics, supply chain visualization, trade route breakdowns, and regional data reporting in WebApps.',
    category: 'Interactive Maps & GIS',
    rating: 4.96,
    reviewsCount: 1250,
    downloads: '94.8k',
    version: 'v3.5.2',
    author: 'KCR GIS Labs',
    authorVerified: true,
    iconName: 'Globe',
    installed: true,
    active: true,
    price: '₦65,000 / license',
    badge: 'HOT',
    previewImage: '/plugins/world-africa-map.jpg',
    tags: ['Africa', 'World Map', 'Choropleth', 'D3.js', 'Vector Maps', 'ECOWAS', 'GIS'],
    features: [
      'Vector maps for all 54 African countries & 195 World nations',
      'ECOWAS & SADC trade zone highlight presets',
      'Interactive zoom, pan, and country select event callbacks',
      'Seamless Next.js SSR hydration support with zero layout shift'
    ],
    configOptions: [
      {
        id: 'region_focus',
        name: 'Initial Map Focus',
        type: 'select',
        value: 'Africa Continent',
        options: ['Africa Continent', 'Global World View', 'ECOWAS Region'],
        description: 'Focus camera bounds on load'
      }
    ]
  },
  {
    id: 'plug-tinymce-blog-editor',
    name: 'TinyMCE & Markdown WebApp Blog Editor',
    slug: 'tinymce-markdown-blog-editor',
    tagline: 'Turnkey WYSIWYG editor module with cloud media upload, AI writing & markdown support.',
    description: 'Integrate a production-ready rich text blog editor into your web application. Powered by TinyMCE / ProseMirror with custom image drag-and-drop, code syntax highlighting, and auto-save.',
    category: 'Rich Text Editors',
    rating: 4.94,
    reviewsCount: 980,
    downloads: '68.5k',
    version: 'v2.8.0',
    author: 'KCR Tech Engine',
    authorVerified: true,
    iconName: 'FileText',
    installed: true,
    active: true,
    price: '₦35,000 / license',
    badge: 'FEATURED',
    previewImage: '/plugins/tinymce-editor.jpg',
    tags: ['TinyMCE', 'Blog Editor', 'WYSIWYG', 'Rich Text', 'Next.js', 'CMS', 'Markdown'],
    features: [
      'TinyMCE 7 + Markdown dual-mode editing toolbar',
      'Drag-and-drop image & video upload with AWS S3 / Cloudinary integration',
      'Realtime autosave to localStorage & backend API',
      'AI assistant shortcut for auto-formatting blog posts & SEO meta tags'
    ],
    configOptions: [
      {
        id: 'editor_skin',
        name: 'Editor Theme Skin',
        type: 'select',
        value: 'Dark Modern',
        options: ['Dark Modern', 'Light Executive', 'Minimalist Slate'],
        description: 'Visual skin for TinyMCE toolbar'
      },
      {
        id: 'autosave_interval',
        name: 'Auto-Save Interval (sec)',
        type: 'select',
        value: '30 seconds',
        options: ['15 seconds', '30 seconds', '60 seconds'],
        description: 'Frequency of draft auto-saves'
      }
    ]
  },
  {
    id: 'plug-paystack-pro',
    name: 'Paystack & Card Smart Payment Gateway',
    slug: 'paystack-card-smart-gateway',
    tagline: 'Inline modal checkout, USSD (*737#), bank transfer & automated invoice webhook sync.',
    description: 'Empower your web app with instant Paystack inline checkout, automated invoice payment status reconciliation, and verified webhook listeners.',
    category: 'Payments & Invoicing',
    rating: 4.98,
    reviewsCount: 1420,
    downloads: '84.2k',
    version: 'v3.2.0',
    author: 'KCR Payments Team',
    authorVerified: true,
    iconName: 'CreditCard',
    installed: true,
    active: true,
    price: 'Free Integration Module',
    badge: 'ESSENTIAL',
    previewImage: '/plugins/paystack-gateway.jpg',
    tags: ['Paystack', 'Payments', 'Invoices', 'Cards', 'USSD', 'Webhooks'],

    features: [
      'Paystack Inline modal with card, USSD, and bank transfer support',
      'Automated SHA512 webhook verification for Next.js App Router',
      'Instant invoice status update to PAID upon settlement'
    ],
    configOptions: [
      {
        id: 'pk_key',
        name: 'Paystack Public Key',
        type: 'string',
        value: 'pk_test_a9d4f828941094018249a',
        description: 'Your Paystack public key'
      }
    ]
  },
  {
    id: 'plug-s3-vault',
    name: 'Cloud Vault S3 & PDF Document Sign',
    slug: 'cloud-vault-s3-document-sign',
    tagline: 'Secure invoice PDF archiving, digital signatures, and AWS S3 cloud storage.',
    description: 'Archieve generated invoices and blog media to secure cloud storage with cryptographic SHA-256 verification and automated backup.',
    category: 'Cloud & Security',
    rating: 4.89,
    reviewsCount: 310,
    downloads: '18.7k',
    version: 'v1.4.2',
    author: 'KCR Cloud Team',
    authorVerified: true,
    iconName: 'FolderLock',
    installed: false,
    active: false,
    price: '₦18,000 / mo',
    tags: ['Cloud Storage', 'S3', 'PDF Signing', 'Archiving'],
    features: [
      'Automated AES-256 encrypted backups to Amazon S3',
      'Cryptographic SHA-256 stamp for invoice auditing',
      '10-year compliant document retention compliance'
    ],
    configOptions: [
      {
        id: 's3_bucket',
        name: 'S3 Target Bucket Name',
        type: 'string',
        value: 'kcr-invoices-vault-prod',
        description: 'AWS S3 bucket for invoice storage'
      }
    ]
  },
  {
    id: 'plug-custom-software-sprint',
    name: 'Enterprise Tech Engineering & Deployment Sprint',
    slug: 'enterprise-tech-engineering-deployment',
    tagline: 'Dedicated KCR software engineering team for custom web app, mobile app & API deployment.',
    description: 'Need full-stack web app development, custom GIS maps, mobile apps, or cloud deployment? Partner directly with Kolamajawole C-Renee Ent Ltd engineers.',
    category: 'Engineering Services',
    rating: 5.0,
    reviewsCount: 450,
    downloads: '15.2k',
    version: 'v5.0.0',
    author: 'KCR Core Engineering',
    authorVerified: true,
    iconName: 'Code',
    installed: true,
    active: true,
    price: 'Custom Quote',
    badge: 'ENTERPRISE',
    tags: ['Software Engineering', 'Mobile App', 'Deployment', 'Next.js', 'Custom Plugins', 'API'],
    features: [
      'Dedicated senior full-stack & mobile engineers',
      'Custom plugin development tailored to your enterprise stack',
      'Cloud deployment (AWS, Vercel, DigitalOcean) with 99.99% SLA'
    ],
    configOptions: [
      {
        id: 'project_type',
        name: 'Project Target',
        type: 'select',
        value: 'Custom WebApp & GIS Plugins',
        options: ['Custom WebApp & GIS Plugins', 'Mobile App (iOS/Android)', 'Cloud Infra & Deployment'],
        description: 'Select primary engineering scope'
      }
    ]
  }
];
