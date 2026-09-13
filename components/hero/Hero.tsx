"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown, Database } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { site } from "@/data/site";

const ROTATING = [
  "Cloud Data Platforms",
  "ETL / ELT Pipelines",
  "Big Data Solutions",
  "AI & ML Applications",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROTATING.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start lg:col-span-7"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 flex items-center gap-2.5"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-muted">
              Data Engineer — Azure · AWS
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.75rem] font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-[4.5rem]"
          >
            <span className="block text-fg">
              Hi, I&apos;m{" "}
              <span className="text-gradient relative inline-block">
                Gurunath.
              </span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-3 font-mono text-sm text-muted"
          >
            <span className="text-accent">$</span>
            <span className="text-fg">Data Engineer</span>
            <span className="inline-block h-4 w-[7px] animate-pulse rounded-sm bg-accent" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROTATING[roleIndex]}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-base text-muted sm:text-lg"
              >
                I build{" "}
                <span className="font-semibold text-accent">
                  {ROTATING[roleIndex]}
                </span>
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {`${site.name} here — a Data Engineer with 4+ years of experience
            designing scalable data solutions on Azure and AWS. I process
            millions of records daily with Python, PySpark, Apache Spark, and
            Airflow, and turn raw data into governed, analytics-ready
            platforms people actually trust.`}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <HeroActions />
          </motion.div>

          <motion.div variants={fadeUp} className="w-full">
            <HeroStats />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="hidden lg:col-span-5 lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-faint transition-colors hover:text-accent"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}

const LABELS = [
  { name: "Azure", position: "left-[3%] top-[7%]" },
  { name: "Databricks", position: "right-[1%] top-[0%]" },
  { name: "PySpark", position: "right-[-3%] top-[42%]" },
  { name: "Synapse", position: "left-[22%] top-[-5%]" },
  { name: "AWS", position: "right-[9%] bottom-[2%]" },
  { name: "ADF", position: "left-[0%] bottom-[18%]" },
];

function HeroVisual() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const ringX = useTransform(sx, [0, 1], [10, -10]);
  const ringY = useTransform(sy, [0, 1], [10, -10]);

  const handlePointer = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md"
      onPointerMove={handlePointer}
    >
      {/* central emblem */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex h-32 w-32 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-line-strong" />
          <span className="absolute inset-2 rounded-full border border-dashed border-line" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-line-strong bg-surface-2 font-display text-2xl font-semibold text-accent">
            G
          </span>
        </div>
      </motion.div>

      {/* static platform labels */}
      {LABELS.map((label) => (
        <span
          key={label.name}
          className={`absolute ${label.position} font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint`}
        >
          {label.name}
        </span>
      ))}

      {/* floating data cards */}
      <div className="absolute -left-6 bottom-[18%] animate-float rounded-lg border border-line bg-surface-2/85 p-4 shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-accent">
            <Database className="h-4 w-4" />
          </span>
          <div>
            <p className="font-mono text-sm font-semibold text-fg">48M+</p>
            <p className="text-[10px] uppercase tracking-widest text-faint">
              records / day
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute -right-4 top-[18%] animate-float rounded-lg border border-line bg-surface-2/85 p-4 shadow-xl backdrop-blur-sm"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <div>
            <p className="font-mono text-sm font-semibold text-fg">99.9%</p>
            <p className="text-[10px] uppercase tracking-widest text-faint">
              pipeline uptime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}