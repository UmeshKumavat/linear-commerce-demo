"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/animations/SectionContainer";
import { categories } from "@/lib/products";

export function Categories() {
  return (
    <SectionContainer id="categories">
      <div>
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#26F4D0]">
            Browse
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <motion.a
              key={category.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-[#26F4D0]/40 hover:shadow-[0_0_30px_rgba(38,244,208,0.15)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xl text-[#26F4D0] transition-colors group-hover:border-[#26F4D0]/30 group-hover:bg-[#26F4D0]/10">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                {category.description}
              </p>
              <p className="mt-4 text-xs font-medium text-[#26F4D0]">
                {category.count} items →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
