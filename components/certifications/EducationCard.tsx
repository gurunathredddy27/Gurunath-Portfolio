"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import type { Education } from "@/types";

export function EducationCard({ education }: { education: Education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group border-b border-line py-6 transition-colors duration-300 md:px-2 md:hover:bg-surface/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent">
            <GraduationCap className="h-[18px] w-[18px]" />
          </span>
          <div>
            <h3 className="font-display text-[17px] font-semibold tracking-tight text-fg">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {education.institution}
            </p>
            {education.focus && (
              <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">
                {education.focus}
              </p>
            )}
          </div>
        </div>
        <span className="shrink-0 font-mono text-xs text-accent">
          {education.score}
        </span>
      </div>
    </motion.div>
  );
}