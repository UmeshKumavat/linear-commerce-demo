"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/animations/SectionContainer";

export function Newsletter() {
  return (
    <SectionContainer id="about">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26F4D0]/5 via-transparent to-[#724CE8]/5" />

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Stay in the Loop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-400"
          >
            Subscribe for exclusive deals, new arrivals, and insider updates
            from Linear Commerce.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-[#26F4D0]/50 focus:ring-1 focus:ring-[#26F4D0]/30"
            />
            <button
              type="submit"
              className="rounded-full bg-[#26F4D0] px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-[#724CE8] hover:text-white hover:shadow-[0_0_25px_rgba(38,244,208,0.35)]"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </div>
    </SectionContainer>
  );
}
