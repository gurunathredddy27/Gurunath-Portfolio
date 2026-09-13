"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Box,
  Database,
  Gem,
  Layers,
  Server,
  Upload,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/types";

const STAGE_ICONS: LucideIcon[] = [
  Database,
  Upload,
  Server,
  Layers,
  Gem,
  Box,
  BarChart3,
  Database,
];

export function ProjectArchitecture({ project }: { project: Project }) {
  return (
    <div className="relative">
      <h4 className="mb-1 flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
        <span className="h-px w-5 bg-accent/60" aria-hidden />
        Architecture
      </h4>
      <p className="mb-8 text-[12.5px] text-faint">
        {project.architecture.length} stages, one governed pipeline.
      </p>

      {/* Desktop — horizontal pipeline */}
      <div className="relative hidden md:block">
        <div
          className="absolute left-0 right-0 top-[15px] h-px bg-line"
          aria-hidden
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute left-0 right-0 top-[15px] h-px origin-left bg-accent/70"
          aria-hidden
        />

        <ol className="grid grid-cols-4 gap-x-5 gap-y-9">
          {project.architecture.map((stage, i) => {
            const Icon = STAGE_ICONS[i % STAGE_ICONS.length];
            return (
              <li key={stage.label} className="relative">
                <span
                  className="absolute left-1/2 top-[11px] h-2 w-2 -translate-x-1/2 rounded-full bg-accent ring-4 ring-surface"
                  aria-hidden
                />
                <div className="pt-8">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="font-mono text-[10px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h5 className="mt-2 font-display text-sm font-semibold text-fg">
                    {stage.label}
                  </h5>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                    {stage.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {stage.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile — vertical rail */}
      <div className="relative md:hidden">
        <div className="absolute bottom-3 left-[5px] top-3 w-px bg-line" aria-hidden />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute bottom-3 left-[5px] top-3 w-px origin-top bg-accent/70"
          aria-hidden
        />
        <ol className="space-y-7">
          {project.architecture.map((stage, i) => {
            const Icon = STAGE_ICONS[i % STAGE_ICONS.length];
            return (
              <li key={stage.label} className="relative pl-9">
                <span
                  className="absolute left-[1px] top-[18px] h-2 w-2 rounded-full bg-accent ring-4 ring-surface"
                  aria-hidden
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    <h5 className="font-display text-sm font-semibold text-fg">
                      {stage.label}
                    </h5>
                    <span className="ml-auto font-mono text-[10px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {stage.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {stage.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}