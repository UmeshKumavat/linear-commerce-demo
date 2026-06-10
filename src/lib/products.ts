export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Quantum Headphones Pro",
    category: "Audio",
    price: 299,
    originalPrice: 349,
    image: "🎧",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Nexus Smart Watch X",
    category: "Wearables",
    price: 449,
    image: "⌚",
    badge: "New",
  },
  {
    id: "3",
    name: "Aero Laptop Stand",
    category: "Accessories",
    price: 89,
    image: "💻",
  },
  {
    id: "4",
    name: "Pulse Wireless Earbuds",
    category: "Audio",
    price: 159,
    originalPrice: 199,
    image: "🎵",
  },
  {
    id: "5",
    name: "Vertex Mechanical Keyboard",
    category: "Accessories",
    price: 189,
    image: "⌨️",
    badge: "Hot",
  },
  {
    id: "6",
    name: "Orbit 4K Webcam",
    category: "Tech",
    price: 129,
    image: "📷",
  },
];

export const categories = [
  {
    name: "Electronics",
    description: "Cutting-edge devices for modern living",
    icon: "⚡",
    count: 128,
  },
  {
    name: "Fashion",
    description: "Premium apparel and accessories",
    icon: "✦",
    count: 256,
  },
  {
    name: "Home & Living",
    description: "Elevate your space with curated picks",
    icon: "◈",
    count: 94,
  },
  {
    name: "Sports",
    description: "Performance gear for every athlete",
    icon: "◎",
    count: 67,
  },
];

export const features = [
  {
    title: "Free Shipping",
    description: "On all orders over $50. Fast delivery worldwide.",
    icon: "→",
  },
  {
    title: "Secure Checkout",
    description: "256-bit encryption. Your data stays protected.",
    icon: "◆",
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free returns on every purchase.",
    icon: "↺",
  },
  {
    title: "24/7 Support",
    description: "Expert assistance whenever you need it.",
    icon: "◉",
  },
];
