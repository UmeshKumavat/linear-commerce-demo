"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/animations/SectionContainer";

const stats = [
  { value: "10K+", label: "Products" },
  { value: "50K+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction" },
];

export function Hero() {
  return (
    <SectionContainer id="intro" className="overflow-hidden">
      <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#4F6BFF]/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#7C3AED]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4F6BFF]/30 bg-[#4F6BFF]/10 px-4 py-1.5 text-xs font-medium text-[#4F6BFF]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4F6BFF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4F6BFF]" />
            </span>
            New Collection 2026 — Now Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Commerce,{" "}
            <span className="bg-gradient-to-r from-[#4F6BFF] via-[#8B5CF6] to-[#4F6BFF] bg-clip-text text-transparent">
              Reimagined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            Discover premium products curated for the modern world. Seamless
            shopping experience with next-generation technology at your
            fingertips.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#products"
              className="group relative overflow-hidden rounded-full bg-[#4F6BFF] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(79,107,255,0.5)]"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a
              href="#categories"
              className="rounded-full border border-white/10 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all hover:border-[#4F6BFF]/50 hover:text-white"
            >
              Explore Categories
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/[0.06] pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
