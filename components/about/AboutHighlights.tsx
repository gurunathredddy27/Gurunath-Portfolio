"use client";

import { motion } from "framer-motion";
import { Cloud, DatabaseZap, ShieldCheck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Workflow,
    title: "Scalable Data Pipelines",
    text: "End-to-end ETL/ELT pipelines with Apache Airflow and Azure Data Factory, moving millions of records daily from APIs, databases, and SFTP sources.",
  },
  {
    icon: Cloud,
    title: "Cloud Data Platforms",
    text: "Hands-on with Azure (ADF, Databricks, Synapse) and AWS (S3, Glue, Athena) — building production lakehouse stacks on both clouds.",
  },
  {
    icon: DatabaseZap,
    title: "Lakehouse Architecture",
    text: "Designed Bronze, Silver, and Gold data lake layers that turn raw events into governed, analytics-ready datasets.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    text: "Schema validation, incremental loading, monitoring, and error handling that keep pipelines at 99.9% reliability.",
  },
];

export function AboutHighlights() {
  return (
    <div className="border-t border-line">
      {highlights.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
          className="group grid gap-3 border-b border-line py-6 transition-all duration-300 md:grid-cols-12 md:gap-6 md:px-2 md:hover:bg-surface/50"
        >
          <div className="flex items-center gap-4 md:col-span-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent">
              <item.icon className="h-[18px] w-[18px]" />
            </span>
            <div>
              <span className="block font-mono text-[10px] text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base font-semibold tracking-tight text-fg">
                {item.title}
              </h3>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed text-muted md:col-span-7">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}