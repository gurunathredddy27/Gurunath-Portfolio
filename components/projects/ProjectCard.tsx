"use client";

import { motion } from "framer-motion";
import { Building2, User } from "lucide-react";
import type { Project } from "@/types";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectArchitecture } from "./ProjectArchitecture";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
    >
      <div className="relative p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <span className="font-mono text-lg font-semibold tracking-tight text-accent">
            /{project.index}
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-faint" />
              {project.role}
            </span>
            <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-faint" />
              {project.company}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-[15px] font-medium text-accent">
              {project.tagline}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-300 hover:border-line-strong hover:text-fg"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 hidden lg:block">
              <ProjectDetails project={project} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ProjectArchitecture project={project} />
          </div>

          <div className="lg:hidden">
            <ProjectDetails project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}