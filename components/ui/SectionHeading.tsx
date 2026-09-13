"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent/70" aria-hidden />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </span>
      </span>
      <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}