"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectDetails({ project }: { project: Project }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="mb-4 flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
          <span className="h-px w-5 bg-accent/60" aria-hidden />
          What I did
        </h4>
        <ul className="flex flex-col gap-3">
          {project.responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[14px] leading-relaxed text-muted transition-colors duration-300 hover:text-fg"
            >
              <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-line">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="flex items-center gap-2.5">
            <Award className="h-4 w-4 text-accent" />
            <span className="font-display text-sm font-semibold text-fg">
              Key achievements &amp; impact
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-faint transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="achievements"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-3 border-t border-line px-5 pb-5 pt-4">
                {project.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-muted"
                  >
                    <span className="mt-[7px] h-1 w-3 shrink-0 rounded-sm bg-accent/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}