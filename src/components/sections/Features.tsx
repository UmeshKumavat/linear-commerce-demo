"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/animations/SectionContainer";
import { features } from "@/lib/products";

export function Features() {
  return (
    <SectionContainer id="features">
      <div>
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#26F4D0]">
            Why Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Built for Excellence
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#26F4D0]/20 bg-[#26F4D0]/10 text-xl text-[#26F4D0]">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
