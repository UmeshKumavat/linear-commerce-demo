export const SITE = {
  name: "Linear Commerce",
  tagline: "AI-Native Commerce Engineering Partner",
  headline: "The harder the commerce problem, the more we want it.",
  subline:
    "There is no commerce challenge too complex, too specific, or too unconventional for us.",
  subline2:
    "We are built to solve the hardest problems, and the most interesting problems.",
  cta: "Contact Us",
  ctaHref: "#contact",
  actionsSubtitle: "Any Platform · Any Complexity",
} as const;

export const HEADER_NAV = [
  {
    label: "Models",
    href: "#buyer-models",
    highlight: true,
    dropdown: false,
    icon: true,
  },
  { label: "Services", href: "#services", dropdown: false },
  { label: "Case Studies", href: "#cases", dropdown: false },
  { label: "Why Us", href: "#differentiator", dropdown: false },
  { label: "Contact", href: "#contact", dropdown: false },
] as const;

export const HERO_PROMPTS = [
  "REBUILD OUR D2C STOREFRONT FOR HIGHER MOBILE CONVERSION",
  "LAUNCH A MULTI-VENDOR MARKETPLACE WITH COMPLEX ORDER ROUTING",
  "MIGRATE OUR B2B CATALOG TO CUSTOM PRICING AND BULK ORDERING",
  "INTEGRATE OMS, WMS, AND ERP BEHIND OUR EXISTING STOREFRONT",
  "DOUBLE CONVERSION WITH DATA-LED CRO — NOT ANOTHER REDESIGN",
];

export const HERO_FEATURES = [
  {
    preview: "BUILDING FOR…",
    score: "Commerce Development",
    subFeatures: [
      "Full-stack builds",
      "Frontend & backend",
      "Integrations",
      "Performance",
    ],
  },
  {
    preview: "OPTIMISING…",
    score: "Conversion",
    subFeatures: [
      "GA4 setup",
      "Heatmaps & A/B tests",
      "UX redesign",
      "Data-led CRO",
    ],
  },
  {
    preview: "OPERATING…",
    score: "Commerce Ops",
    subFeatures: [
      "OMS & WMS",
      "Inventory management",
      "ERP integration",
      "Logistics connections",
    ],
  },
  {
    preview: "LAUNCHING…",
    score: "Marketplace",
    subFeatures: [
      "Multi-vendor",
      "Seller management",
      "Commission logic",
      "Order routing",
    ],
  },
] as const;

export const BUYER_MODELS = [
  {
    title: "D2C Commerce",
    desc: "Going direct. First build or full rebuild. We handle the storefront, the CRO, the mobile experience, and the operations behind it.",
  },
  {
    title: "B2B Commerce",
    desc: "Custom pricing. Bulk ordering. Account management. Procurement workflows. Commerce built for how businesses actually buy.",
  },
  {
    title: "B2C Commerce",
    desc: "High-performance storefronts. Multi-country capability. Conversion-optimised from the ground up. Built to sell, not just to launch.",
  },
] as const;

export const PROOF_STATS = [
  { value: "150+", label: "Projects delivered" },
  { value: "10", label: "Countries" },
  { value: "6", label: "Platforms" },
  { value: "17 months", label: "Average client engagement" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "Commerce Development",
    desc: "Full-stack builds. Frontend, backend, integrations, performance. Any platform, custom to your business.",
    tags: ["Shopify", "Medusa", "Fynd", "Custom"],
    cta: "Discuss your build",
  },
  {
    num: "02",
    title: "Marketplace Development",
    desc: "Multi-vendor, B2B procurement, or B2C marketplace. Complex order routing, seller management, and commission logic included.",
    tags: ["Multi-vendor", "B2B procurement", "Order routing"],
    cta: "Plan your marketplace",
  },
  {
    num: "03",
    title: "Conversion Optimisation",
    desc: "GA4 setup, heatmaps, A/B testing, UX redesign. Data-led, not opinion-led. Medkart went from 0.96% to 1.96% conversion in 17 months.",
    tags: ["GA4", "A/B testing", "UX redesign", "CRO"],
    cta: "Improve conversion",
  },
  {
    num: "04",
    title: "Storefront Design and UX",
    desc: "Brand-specific. Mobile-first. Built to convert, not to impress a design award panel.",
    tags: ["Mobile-first", "Brand-specific", "Conversion-led"],
    cta: "Design to sell",
  },
  {
    num: "05",
    title: "Commerce Operations",
    desc: "OMS, WMS, inventory management, ERP integration, payment gateways, logistics connections. The backend that makes the storefront work.",
    tags: ["OMS", "WMS", "ERP", "Payments"],
    cta: "Connect your stack",
  },
  {
    num: "06",
    title: "Mobile Commerce",
    desc: "Flutter-built apps, fully synced with your commerce backend. For brands where mobile is the primary buying channel.",
    tags: ["Flutter", "Synced backend", "Mobile-first"],
    cta: "Build your app",
  },
  {
    num: "07",
    title: "AI-Native Commerce",
    desc: "Personalisation, intelligent search, automated workflows. Commerce built for how buyers will shop next.",
    tags: ["Personalisation", "Intelligent search", "Automation"],
    cta: "Explore AI commerce",
  },
] as const;

export const CASE_STUDIES = [
  {
    title: "HDFC EMI Store",
    desc: "An Amazon-scale marketplace for one of India's largest banks. Multi-vendor. Bank-grade security. Live in weeks.",
    category: "Marketplace",
    meta: "Banking",
  },
  {
    title: "Medkart",
    desc: "Conversion doubled from 0.96% to 1.96% over 17 months. Not a redesign. A system rebuilt to sell.",
    category: "CRO",
    meta: "17 months",
  },
  {
    title: "LedKoning",
    desc: "Eight European storefronts. One codebase. One team. Full performance across every market.",
    category: "Multi-market",
    meta: "8 storefronts",
  },
] as const;

export const DIFFERENTIATORS = {
  header: "The harder the commerce problem, the more we want it.",
  opening:
    "Most commerce partners pick a lane. Storefront, or ops, or payments. We never did. The real problem is rarely just one thing. It is the whole picture, and we are built to see it.",
  points: [
    {
      title: "We stay.",
      desc: "17 months average engagement. Not because of contracts. Because commerce problems compound, and the team that built the system is best placed to scale it.",
    },
    {
      title: "We own every layer.",
      desc: "Storefront. Backend. Mobile. Payments. CRO. Operations. Most partners own one layer. We own the connection between all of them.",
    },
    {
      title: "We build on what fits.",
      desc: "Shopify. Medusa. Fynd. Custom. The right platform for your business, not a platform preference dressed up as a recommendation.",
    },
    {
      title: "Commerce is the only thing we do.",
      desc: "Not a full-service digital agency with commerce as a service line. One problem. One obsession.",
    },
  ],
} as const;

export const CLOSING_CTA = {
  header: "Contact Us",
  subline:
    "Whether you are launching, scaling, migrating, or fixing something that should have been built differently the first time, this is where it starts.",
  button: "Start the conversation",
} as const;

export const PAGE_SECTION_IDS = [
  "intro",
  "buyer-models",
  "services",
  "cases",
  "differentiator",
  "contact",
] as const;

export const FOOTER = {
  subscribe: {
    title: "Tell us what you're building*",
    placeholder: "Your work email",
    button: "Get in touch",
  },
  columns: [
    {
      key: "services",
      title: "Services",
      links: [
        { label: "Commerce Development", href: "#services" },
        { label: "Marketplace Development", href: "#services" },
        { label: "Conversion Optimisation", href: "#services" },
        { label: "Commerce Operations", href: "#services" },
        { label: "Mobile Commerce", href: "#services" },
        { label: "AI-Native Commerce", href: "#services" },
      ],
    },
    {
      key: "explore",
      title: "Explore",
      links: [
        { label: "Buyer Models", href: "#buyer-models" },
        { label: "Case Studies", href: "#cases" },
        { label: "Why Linear Commerce", href: "#differentiator" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      key: "platforms",
      title: "Platforms",
      links: [
        { label: "Shopify", href: "#contact" },
        { label: "Medusa", href: "#contact" },
        { label: "Fynd", href: "#contact" },
        { label: "Custom builds", href: "#contact" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    {
      label: "Email us",
      href: "mailto:hello@linearcommerce.com",
      external: true,
    },
    { label: "Book a call", href: "#contact", external: false },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;
