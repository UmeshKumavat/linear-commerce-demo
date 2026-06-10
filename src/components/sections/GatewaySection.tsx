"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "AI TOOLS", value: "10" },
  { label: "TVL", value: "$30m+" },
  { label: "MAUs", value: "550k" },
];

export function GatewaySection() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Your Gateway
          <br />
          <span className="text-zinc-500">To Modern Commerce</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-zinc-500">
          For individuals, developers, and businesses.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
              {s.label}
            </p>
            <p className="mt-2 text-2xl font-bold text-[#26F4D0] sm:text-3xl">
              {s.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
