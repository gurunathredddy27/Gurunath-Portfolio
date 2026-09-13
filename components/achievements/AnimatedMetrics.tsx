"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  Gauge,
  ShieldCheck,
  Timer,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { AchievementMetric } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  timer: Timer,
  database: Database,
  workflow: Workflow,
  shield: ShieldCheck,
  gauge: Gauge,
  trending: TrendingUp,
};

export function AnimatedMetrics({ metrics }: { metrics: AchievementMetric[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, i) => (
        <MetricCell key={i} metric={metric} />
      ))}
    </div>
  );
}

function MetricCell({ metric }: { metric: AchievementMetric }) {
  const Icon = iconMap[metric.icon] ?? Gauge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group flex flex-col gap-3 bg-background p-7 transition-colors duration-300 hover:bg-surface md:p-9"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent">
          <Icon className="h-4 w-4" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          metric
        </span>
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        {metric.prefix && (
          <span className="text-[11px] uppercase tracking-widest text-faint">
            up to
          </span>
        )}
        <MetricValue metric={metric} />
      </div>
      <p className="border-t border-line pt-3 text-[13.5px] leading-snug text-muted">
        {metric.label}
      </p>
    </motion.div>
  );
}

function MetricValue({ metric }: { metric: AchievementMetric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || metric.value === undefined) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(metric.value! * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, metric.value]);

  const decimals = metric.decimals ?? 0;

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="font-display text-[2rem] font-bold leading-none tracking-tight text-accent"
    >
      {metric.display ?? (metric.value !== undefined ? value.toFixed(decimals) : "—")}
      {metric.suffix && <span className="text-[1.2rem]">{metric.suffix}</span>}
    </motion.span>
  );
}