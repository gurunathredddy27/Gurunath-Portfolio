"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-5 left-[5px] top-5 w-px bg-line" aria-hidden />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-5 left-[5px] top-5 w-px origin-top bg-accent/70"
        aria-hidden
      />

      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} experience={experience} />
      ))}
    </div>
  );
}