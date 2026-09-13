"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Plus } from "lucide-react";
import type { Certification } from "@/types";
import { cn } from "@/lib/utils";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border p-6 transition-all duration-300",
        certification.placeholder
          ? "border-dashed border-line-strong bg-surface/40"
          : "border-line bg-surface hover:-translate-y-0.5 hover:border-line-strong",
      )}
    >
      {certification.placeholder ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 py-8 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-line-strong text-faint">
            <Plus className="h-5 w-5" />
          </span>
          <p className="text-sm font-medium text-muted">{certification.title}</p>
          <p className="font-mono text-[11px] text-faint">
            add it in data/certifications.ts
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent">
              <BadgeCheck className="h-5 w-5" />
            </span>
            {certification.href && (
              <ArrowUpRight className="h-4 w-4 text-faint transition-colors duration-300 group-hover:text-accent" />
            )}
          </div>
          <div className="mt-5 flex-1">
            <h3 className="font-display text-[17px] font-semibold text-fg">
              {certification.title}
            </h3>
            <p className="mt-1 text-[13px] text-muted">
              {certification.issuer}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] text-accent">
                {certification.year}
              </span>
              {certification.credentialId && (
                <span className="rounded-md border border-line bg-surface-2 px-3 py-1 font-mono text-[11px] text-faint">
                  {certification.credentialId}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}