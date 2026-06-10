"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChainGPTRobot } from "@/components/mascot/ChainGPTRobot";
import { CONTAINER_W } from "@/lib/layout";

const STEPS = [
  { at: 0, num: null, title: "Commerce", title2: "AI", sub: "Your personal expert in all ecommerce & retail related topics." },
  { at: 0.1, num: "01", title: "Smart Contracts Development", sub: "Automated checkout flows and secure payment smart logic." },
  { at: 0.2, num: "02", title: "Advanced AI Trading", sub: "Intelligent pricing, demand forecasting, and inventory AI." },
  { at: 0.3, num: "03", title: "Knowledge & Guidance", sub: "24/7 commerce assistant for merchants and customers." },
  { at: 0.4, num: "04", title: "Risk Management & AML", sub: "Fraud detection and compliance built into every order." },
  { at: 0.5, num: "05", title: "Blockchain & Market Analytics", sub: "Real-time sales data and market trend insights." },
  { at: 0.6, num: "06", title: "Code Auditor", sub: "Automated store health checks and performance audits." },
  { at: 0.7, num: "07", title: "Chart & Technical Analysis", sub: "Visual dashboards for revenue and conversion metrics." },
  { at: 0.8, num: "08", title: "Code Explainer", sub: "Plain-language breakdowns of your store analytics." },
  { at: 0.88, num: "09", title: "Source of News", sub: "Curated ecommerce news and industry updates." },
];

function StepPanel({
  step,
  index,
  smooth,
}: {
  step: (typeof STEPS)[number];
  index: number;
  smooth: MotionValue<number>;
}) {
  const opacity = useTransform(
    smooth,
    [step.at - 0.02, step.at + 0.02, step.at + 0.08, step.at + 0.1],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0],
  );
  const y = useTransform(smooth, [step.at, step.at + 0.06], [30, 0]);

  if (!step.num) {
    return (
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ opacity, y }}>
        <p className="mb-2 text-sm text-zinc-500">Unleash the power of</p>
        <h1 className="cgpt-glow-green text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          {step.title}
        </h1>
        <h1 className="cgpt-glow-green -mt-1 text-5xl font-bold tracking-tight text-[#4ade80] sm:text-7xl lg:text-8xl">
          {step.title2}
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-zinc-500 sm:text-base">
          {step.sub}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div className="absolute inset-0 flex flex-col items-start justify-center pl-2 sm:pl-8" style={{ opacity, y }}>
      <span className="cgpt-step-num text-6xl font-bold text-white/[0.07] sm:text-8xl">{step.num}</span>
      <h2 className="-mt-4 max-w-md text-xl font-semibold leading-snug text-white sm:text-2xl">
        {step.title}
      </h2>
      <p className="mt-3 max-w-xs text-sm text-zinc-500">{step.sub}</p>
    </motion.div>
  );
}

function SideDot({ at, smooth }: { at: number; smooth: MotionValue<number> }) {
  const w = useTransform(smooth, [at - 0.01, at + 0.04], [4, 16]);
  const bg = useTransform(
    smooth,
    [at - 0.01, at],
    ["rgba(255,255,255,0.15)", "rgba(74,222,128,1)"],
  );
  return <motion.div className="h-1 rounded-full" style={{ width: w, backgroundColor: bg }} />;
}

export function IntroScrollSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [eyeVal, setEyeVal] = useState(0);
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 20, restDelta: 0.001 });

  const robotY = useTransform(smooth, [0, 1], ["5%", "75%"]);
  const railH = useTransform(smooth, [0, 1], ["0%", "75%"]);
  const eyeReveal = useTransform(smooth, [0, 0.06, 0.12], [0, 0.4, 1]);
  const scrollOpacity = useTransform(smooth, [0, 0.08, 0.15], [1, 1, 0]);

  useEffect(() => {
    const unsubEye = eyeReveal.on("change", setEyeVal);
    const unsubScroll = smooth.on("change", setScrollVal);
    return () => {
      unsubEye();
      unsubScroll();
    };
  }, [eyeReveal, smooth]);

  return (
    <section ref={ref} id="intro" className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Circuit rails — 800px column */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full"
          style={{ maxWidth: CONTAINER_W }}
        >
          <div className="absolute bottom-20 left-0 top-20 w-px bg-white/[0.06]" />
          <motion.div
            className="cgpt-line-glow absolute left-0 top-20 w-px origin-top bg-[#4ade80]"
            style={{ height: railH }}
          />
          <div className="absolute bottom-20 right-0 top-20 w-px bg-white/[0.06]" />
          <motion.div
            className="absolute right-0 top-20 w-px origin-top bg-[#4ade80]/40"
            style={{ height: railH }}
          />
        </div>

        {/* Robot — left of column */}
        <motion.div
          className="pointer-events-none absolute z-20 hidden lg:block"
          style={{
            left: `max(0.5rem, calc(50% - ${CONTAINER_W / 2}px - 6.5rem))`,
            top: robotY,
          }}
        >
          <ChainGPTRobot
            className="h-[130px] w-[100px]"
            eyeReveal={eyeVal}
            scrollProgress={scrollVal}
          />
        </motion.div>

        {/* Content */}
        <div
          className="relative z-10 mx-auto flex h-full flex-col justify-center px-5"
          style={{ maxWidth: CONTAINER_W }}
        >
          <div className="relative ml-auto h-[320px] w-full max-w-md sm:max-w-lg">
            {STEPS.map((s, i) => (
              <StepPanel key={s.num ?? "hero"} step={s} index={i} smooth={smooth} />
            ))}
          </div>
        </div>

        {/* SCROLL indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
          style={{ opacity: scrollOpacity }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 rounded-full border border-white/20 p-1"
          >
            <div className="mx-auto h-1.5 w-1 rounded-full bg-[#4ade80]" />
          </motion.div>
        </motion.div>

        {/* Side dots — right */}
        <div className="absolute bottom-32 right-6 z-10 hidden flex-col gap-2 lg:flex">
          {STEPS.map((s) => (
            <SideDot key={s.num ?? "h"} at={s.at} smooth={smooth} />
          ))}
        </div>

        {/* Mobile robot */}
        <motion.div
          className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 lg:hidden"
          style={{ opacity: eyeVal }}
        >
          <ChainGPTRobot
            className="h-[80px] w-[65px]"
            eyeReveal={eyeVal}
            scrollProgress={scrollVal}
          />
        </motion.div>
      </div>
    </section>
  );
}
