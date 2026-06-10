const CDN = "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04";

export const SITE = {
  name: "ChainGPT",
  cta: "LAUNCH DAPP",
  ctaHref: "#",
} as const;

export const HERO_PROMPTS = [
  "ANALYZE THIS TOKEN'S ON-CHAIN ACTIVITY AND MARKET TRENDS",
  "DEPLOY MY CUSTOM AI MODEL ON THIS DECENTRALIZED INFRASTRUCTURE",
  "AUDIT AND DEPLOY MY ERC-20 SMART CONTRACT FOR POTENTIAL ISSUES",
  "BUILD AN AI-POWERED TRADING BOT WITH A CUSTOM TOKEN ON BNB CHAIN",
  "GENERATE AND MINT A CYBERPUNK-STYLE PFP NFT COLLECTION",
];

export const HERO_FEATURES = [
  {
    preview: "ANALYZING IN…",
    label: "AI TOOLS",
    score: "WEB3 AI CHATBOT",
    icon: `${CDN}/681dfe0cb4412464104beb6e_logo-1-3-5.svg`,
    subFeatures: [
      "Real-Time Data Insights",
      "On-Chain Analysis",
      "Token Research",
      "Live Market Updates",
    ],
  },
  {
    preview: "DEPLOYING ON…",
    label: "AI Virtual Machine",
    score: "AI Virtual Machine",
    icon: `${CDN}/681dfe07773a80cb2b4da5a8_logo-2.svg`,
    subFeatures: [
      "on-chain llm training",
      "decentralized ai",
      "GPU Marketplace",
      "AI Data Marketlace",
    ],
  },
  {
    preview: "ANALYZING IN…",
    label: "AI TOOLS",
    score: "SMART CONTRACT AUDITOR",
    icon: `${CDN}/681dfe0cb4412464104beb6e_logo-1-3-5.svg`,
    subFeatures: ["GENERATE anD AUDIT", "detect exploits", "Deploy CONTRACTS On-CHAIN", "Gas optimization"],
  },
  {
    preview: "BUILDING IN…",
    label: "AI TOOLS",
    score: "AI AGENTS LAUNCHER",
    icon: `${CDN}/681dfe0cb4412464104beb6e_logo-1-3-5.svg`,
    subFeatures: ["no-code AI agent launchpad", "TRAIN YOUR OWN AGENT", "BIND to EXISTING CHAT", "BIND to A TOKEN"],
  },
  {
    preview: "GENERATING IN…",
    label: "AI TOOLS",
    score: "AI NFT GENERATOR",
    icon: `${CDN}/681dfe0cb4412464104beb6e_logo-1-3-5.svg`,
    subFeatures: ["Text-to-Image AI", "On-Chain Minting", "Seamless NFT Creation", "Unleash NFT Creation"],
  },
] as const;

export const HERO_FEATURE_LIST = [
  "ON-CHAIN LLM TRAINING",
  "DECENTRALIZED AI",
  "GPU MARKETPLACE",
  "AI DATA MARKETPLACE",
];

export const HEADER_NAV = [
  { label: "Our Ecosystem", href: "#ecosystem", highlight: true, dropdown: true, icon: true },
  { label: "Solutions", href: "#solutions", dropdown: true },
  { label: "Developers", href: "#cases", dropdown: true },
  { label: "About AI Hub", href: "#unlimited-solutions", dropdown: true },
  { label: "Learn", href: "#roadmap", dropdown: true },
  { label: "$CGPT", href: "#our-token", dropdown: true },
  { label: "Community", href: "#about", dropdown: true },
];

export const PRODUCT_STEPS = [
  { num: "01", title: "Smart Contracts Development" },
  { num: "02", title: "Advanced AI Trading" },
  { num: "03", title: "Knowledge & Guidance" },
  { num: "04", title: "Risk Management & AML" },
  { num: "05", title: "Blockchain & Market Analytics" },
  { num: "06", title: "Code Auditor" },
  { num: "07", title: "Chart & Technical Analysis" },
  { num: "08", title: "Code Explainer" },
  { num: "09", title: "Source of News" },
];

export const ASIDE_SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "unlimited-solutions", label: "Product" },
  { id: "solutions", label: "Solutions" },
  { id: "cases", label: "Case Studies" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "our-pricing", label: "Pricing" },
  { id: "our-token", label: "Our Token" },
  { id: "team", label: "Team" },
  { id: "roadmap", label: "Roadmap" },
  { id: "faq", label: "F.A.Q" },
  { id: "ai-revolution", label: "Join" },
];

export const GATEWAY_STATS = [
  { label: "AI TOOLS", value: "10" },
  { label: "TVL", value: "$30m+" },
  { label: "MAUs", value: "550k" },
];

export const AWARDS = [
  "$100,000 Grant from NVIDIA",
  "$1M AWS Credits from Amazon",
  "$350,000 Grant from Google",
  "Gas Grant of the Year from BNB Chain",
  "Site of the Day — Awwwards",
  "FWA of the Day",
  "Best AI Project — BeInCrypto",
  "#1 Web3 App by Product Hunt",
];

export const SOLUTIONS = [
  {
    num: "01",
    title: "Linear Commerce Chatbot",
    desc: "Reliable & fast source of information. Ask Linear AI any question related to ecommerce, products, and retail. General and technical answers.",
    tags: ["Commerce AI Chatbot", "Advanced Retail LLM", "Live Product Data", "Market Analysis"],
    cta: 'enter the "commerce ai hub"',
  },
  {
    num: "02",
    title: "AI News Auto-Model",
    desc: "Our AI model scans the web and curates short articles on trending retail topics every 60 minutes, keeping you effortlessly informed.",
    tags: ["AI generated news", "fully automated", "short form"],
    cta: "Read ai-generated news",
  },
  {
    num: "03",
    title: "Smart Checkout & Auditor",
    desc: "Generate or audit checkout flows and payment logic. Describe what you need or paste existing code — our AI handles the rest.",
    tags: ["AI checkout flows", "payment auditor", "fraud detection", "deploy in seconds"],
    cta: "generate & audit checkout",
  },
  {
    num: "04",
    title: "AI Product Generator",
    desc: "AI-generated product listings from user prompts. Create optimized descriptions, images, and metadata in seconds.",
    tags: ["AI copy generation", "Easy publishing", "Create listings in 30 secs", "Multi-channel"],
    cta: "Enter the product generator",
  },
  {
    num: "05",
    title: "Commerce Intelligence VM",
    desc: "Framework integrating AI directly into commerce networks — decentralized model execution, training, and GPU resources.",
    tags: ["decentralized ai", "demand forecasting", "agent infrastructure", "GPU marketplace"],
    cta: "Read the whitepaper",
  },
  {
    num: "06",
    title: "AI Pricing Assistant",
    desc: "Advanced AI for chart & pricing analysis to help merchants with dynamic pricing strategies and conversion optimization.",
    tags: ["Price pattern detection", "Demand prediction", "Market indicators"],
    cta: "TRY NOW",
  },
];

export const CASE_STUDIES = [
  {
    title: "How Flipper Leveraged Linear's AI SDK to Transform Perp Trading Onboarding in 2 Weeks",
    category: "Case Study",
    meta: "2 Weeks",
  },
  {
    title: "How SmartSentinels Shipped Four AI Tools With Linear Commerce",
    category: "Announcement",
    meta: "3 Months",
  },
  {
    title: "Bitsave Protocol Enhanced Onchain Savings with Linear's AI Chatbot",
    category: "Case Study",
    meta: "4 Weeks",
  },
  {
    title: "How BlockAI Revolutionized On-Chain Intelligence with Linear Commerce",
    category: "Case Study",
    meta: "1 Week",
  },
  {
    title: "Walletor Supercharges Marketplace Experience with Linear AI in 3 Days",
    category: "Announcement",
    meta: "3 Days",
  },
];

export const ECOSYSTEM_LAYERS = [
  { num: "01", title: "AI Application Layer", desc: "Chatbot, NFT tools, trading assistant, news feed, and merchant dashboard." },
  { num: "02", title: "Merchant Token Layer", desc: "Loyalty rewards, governance, staking perks, and premium tool access." },
  { num: "03", title: "Commerce VM Layer", desc: "Decentralized AI execution, GPU marketplace, and agent infrastructure." },
  { num: "04", title: "Labs & Launchpads", desc: "Incubation, IDO platform, and partner integrations." },
];

export const PRICING_TOOLS = [
  { name: "General Chatbot", free: "50", paid: "0.5" },
  { name: "Checkout Auditor", free: "10", paid: "1" },
  { name: "Product Generator", free: "10", paid: "2" },
  { name: "Pricing Assistant", free: "20", paid: "2" },
  { name: "AI Image Generator", free: "50", paid: "1" },
  { name: "CommerceGuard", free: "∞", paid: "—" },
];

export const TOKEN_FEATURES = [
  "Linear AI Access",
  "API & SDK Access",
  "DAO & Voting",
  "Staking & Rewards",
  "Access to IDOs",
  "Premium Tools",
];

export const TEAM_MEMBERS = [
  { name: "Alex Chen", role: "Founder & CEO", dept: "Software" },
  { name: "Sarah Kim", role: "Chief Operations Officer", dept: "Software" },
  { name: "Marcus Webb", role: "Head of AI Development", dept: "AI" },
  { name: "Elena Rodriguez", role: "Chief Marketing Officer", dept: "Software" },
  { name: "James Okonkwo", role: "Head of Business Development", dept: "Labs" },
  { name: "Priya Sharma", role: "Chief Compliance Officer", dept: "Software" },
];

export const ROADMAP_ITEMS = [
  {
    id: "RDMP 01",
    status: "Starts Soon",
    period: "2024–2025 Initiative",
    items: ["Mobile app launch", "Multi-chain checkout", "AI agent marketplace"],
  },
  {
    id: "RDMP 02",
    status: "In Progress",
    period: "2025: Q3–Q4",
    items: [
      "Commerce AI Hub v2: advanced pricing signals",
      "Merchant Pad upgrade with social tools",
      "Commerce VM testnet launch",
    ],
  },
  {
    id: "RDMP 03",
    status: "Completed",
    period: "2025: Q1–Q2",
    items: [
      "Commerce VM prototype & whitepaper",
      "Web3 chatbot enhanced with live analytics",
      "40+ active partner integrations",
    ],
  },
  {
    id: "RDMP 04",
    status: "Completed",
    period: "2024: Q3–Q4",
    items: [
      "AI Pricing Assistant v1 released",
      "Enhanced product generator",
      "Mobile app launched (iOS & Android)",
    ],
  },
];

export const FAQ_TABS = [
  {
    id: "about",
    label: "ABOUT LINEAR COMMERCE AI",
    items: [
      {
        q: "What is Linear Commerce?",
        a: "Linear Commerce is an AI-powered ecommerce platform offering smart shopping tools, personalized recommendations, inventory intelligence, and 24/7 commerce assistance for merchants and customers.",
      },
      {
        q: "Are Linear Commerce AI products already available?",
        a: "Yes. Core features including product discovery, AI chat assistant, smart checkout, and analytics dashboards are live. New tools roll out regularly across the platform.",
      },
      {
        q: "What is the cost to use Linear Commerce?",
        a: "We offer Free, Pay-Per-Use, and Premium plans. Start free with daily limits, or upgrade for unlimited AI tools and advanced merchant features.",
      },
      {
        q: "How does Linear Commerce work?",
        a: "Linear Commerce uses advanced AI models trained on ecommerce data to power search, pricing, fraud detection, customer support, and store optimization — all from one dashboard.",
      },
    ],
  },
  {
    id: "token",
    label: "MERCHANT PLANS",
    items: [
      {
        q: "What plans are available?",
        a: "Free for small stores, Growth for scaling brands, and Enterprise for high-volume merchants with custom AI integrations and dedicated support.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. All paid plans can be cancelled at any time. You retain access until the end of your billing period.",
      },
    ],
  },
  {
    id: "staking",
    label: "INTEGRATIONS & API",
    items: [
      {
        q: "Do you offer API access?",
        a: "Yes. REST and SDK access is available on Growth and Enterprise plans for custom storefronts, mobile apps, and third-party integrations.",
      },
      {
        q: "Which platforms do you integrate with?",
        a: "Shopify, WooCommerce, Stripe, PayPal, and major shipping providers. More integrations are added monthly.",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Alibaba Cloud",
    handle: "@alibaba_cloud",
    text: "Proud to collaborate with @LinearCommerce to advance AI development and bring intelligent shopping experiences to millions of users worldwide.",
  },
  {
    name: "BNB Chain",
    handle: "@BNBCHAIN",
    text: "Amazing progress from @LinearCommerce! Let's keep building the strongest commerce platform for the next generation of online retail.",
  },
];

export const PARTNER_LOGOS = [
  "Bloomberg",
  "Bitcoin.com",
  "Yahoo Finance",
  "Cointelegraph",
  "Investing.com",
  "BSC News",
];

export const COMMUNITY_LINKS = [
  { label: "JOIN OUR", title: "Telegram", badge: "195K+ MEMBERS", href: "#" },
  { label: "HOP INTO", title: "Discord", badge: "45K+ MEMBERS", href: "#" },
  { label: "FOLLOW OUR", title: "Twitter", badge: "1M+ FOLLOWERS", href: "#" },
  { label: "DROP US A MESSAGE", title: "Contact", badge: "LET'S TALK!", href: "#about" },
];

export const FOOTER_COLUMNS = {
  solutions: {
    title: "AI SOLUTIONS",
    links: [
      "Commerce AI Chatbot",
      "Smart Product Search",
      "AI Inventory Manager",
      "Linear on Telegram",
      "Linear on Discord",
      "Checkout Optimizer",
      "Fraud Detection AI",
      "AI Generated News",
      "Pricing Assistant",
      "API/SDK Access",
      "CommerceGuard",
    ],
  },
  quick: {
    title: "QUICK LINKS",
    links: [
      "Merchant Dashboard",
      "Blog",
      "Documentation",
      "Loyalty Program",
      "Partner Program",
      "Pricing Page",
      "Help Center",
      "Brand Kit",
      "Careers",
      "Support",
    ],
  },
  legal: {
    title: "LEGAL",
    links: [
      "Official verification",
      "Privacy Policy",
      "Terms of Service",
      "Cookies Policy",
      "Eligibility Policy",
    ],
  },
  social: {
    title: "",
    links: [
      "TELEGRAM",
      "DISCORD",
      "YOUTUBE",
      "MEDIUM",
      "LINKEDIN",
      "FACEBOOK",
      "TWITTER",
      "INSTAGRAM",
      "GITHUB",
    ],
    external: true,
  },
};
