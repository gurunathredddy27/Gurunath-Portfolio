"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  BarChart3,
  Boxes,
  Database,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  Table2,
  type LucideIcon,
} from "lucide-react";
import type { JourneyStage } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  source: Database,
  ingest: ArrowDownToLine,
  storage: Boxes,
  transform: RefreshCw,
  quality: ShieldCheck,
  model: Table2,
  analytics: BarChart3,
  insights: Lightbulb,
};

export function PipelineFlow({ stages }: { stages: JourneyStage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map((stage, i) => {
        const Icon = iconMap[stage.icon] ?? Database;
        return (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (i % 4) * 0.07 }}
            className="group relative flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent transition-transform duration-500 group-hover:scale-105">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="font-mono text-[11px] font-semibold text-faint">
                {stage.step}
              </span>
            </div>
            <h3 className="font-display text-[15px] font-semibold text-fg">
              {stage.label}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
              {stage.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-3.5">
              {stage.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-faint"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}