"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, Check, MapPin } from "lucide-react";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mb-10 pl-10 last:mb-0 md:pl-14"
    >
      {/* node */}
      <div className="absolute left-[1px] top-8 z-10">
        <span className="block h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
      </div>

      <div className="rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong md:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-fg md:text-2xl">
            {experience.role}
          </h3>
          {experience.isCurrent && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Current
            </span>
          )}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5 font-medium text-fg">
            <Building2 className="h-3.5 w-3.5 text-faint" />
            {experience.company}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-faint" />
            {experience.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-faint" />
            {experience.location}
          </span>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-muted">
          {experience.summary}
        </p>

        <ul className="mt-5 space-y-2.5">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-[14px] leading-relaxed text-muted">
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}