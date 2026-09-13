"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { navLinks, site } from "@/data/site";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-x-0 top-16 mx-4 overflow-hidden rounded-xl border border-line bg-surface p-3 shadow-2xl backdrop-blur-2xl"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i + 0.08, duration: 0.3, ease: "easeOut" }}
            >
              <a
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-md px-4 py-3 text-[15px] font-medium text-muted transition-colors hover:bg-white/[0.04] hover:text-fg"
              >
                <span>
                  <span className="mr-2 font-mono text-[10px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-faint transition-all group-hover:text-accent" />
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.3 }}
          className="mt-3 flex flex-col gap-2 border-t border-line pt-4"
        >
          <a
            href={site.resumeUrl}
            download
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent text-sm font-semibold text-[#121009] transition-colors hover:bg-accent-strong"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-line-strong text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-fg"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}