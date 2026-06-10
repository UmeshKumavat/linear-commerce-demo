"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/animations/SectionContainer";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <SectionContainer id="products">
      <div>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#26F4D0]">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Trending Products
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-zinc-400 transition-colors hover:text-[#26F4D0]"
          >
            View all products →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-[#26F4D0]/30 hover:bg-white/[0.04]"
            >
              {product.badge && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#26F4D0] px-3 py-1 text-xs font-medium text-white">
                  {product.badge}
                </span>
              )}

              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-white/[0.03] to-transparent text-6xl transition-transform duration-500 group-hover:scale-110">
                {product.image}
              </div>

              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {product.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-zinc-600 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-[#26F4D0] hover:bg-[#26F4D0]/10 hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#26F4D0] to-[#724CE8] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
