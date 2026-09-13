"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Server,
  SquareTerminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { SkillCategory as SkillCategoryType } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  workflow: Workflow,
  cloud: Cloud,
  server: Server,
  database: Database,
  brain: BrainCircuit,
  terminal: SquareTerminal,
};

export function SkillCategory({
  category,
  index,
}: {
  category: SkillCategoryType;
  index: number;
}) {
  const Icon = iconMap[category.icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group grid gap-4 border-b border-line py-6 transition-all duration-300 md:grid-cols-12 md:gap-6 md:px-2 md:hover:bg-surface/50"
    >
      <div className="flex items-center gap-3 md:col-span-3">
        <span className="font-mono text-[10px] text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent transition-transform duration-500 group-hover:scale-105">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-display text-[15px] font-semibold text-fg">
          {category.title}
        </h3>
      </div>

      <p className="text-[13px] leading-relaxed text-faint md:col-span-4">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-x-2 gap-y-1.5 md:col-span-5">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11.5px] text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}