"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
}

export function AnimatedContainer({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.25,
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}