"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social";
import { site } from "@/data/site";

export function ContactLinks() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      action: copyEmail,
      external: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/gurunath",
      href: site.linkedin,
      external: true,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "github.com/gurunath",
      href: site.github,
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      external: false,
    },
  ];

  return (
    <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
          className="group flex items-center gap-4 rounded-xl border border-line bg-background/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line-strong bg-surface-2 text-accent">
            <link.icon className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-faint">
              {link.label}
            </p>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 flex items-center gap-1.5 truncate text-[14.5px] font-medium text-fg transition-colors group-hover:text-accent"
              >
                {link.value}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ) : link.action ? (
              <button
                type="button"
                onClick={link.action}
                className="mt-0.5 flex items-center gap-2 truncate text-[14.5px] font-medium text-fg transition-colors hover:text-accent"
              >
                {link.value}
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent">
                    <Check className="h-3.5 w-3.5" /> Copied
                  </span>
                ) : (
                  <Copy className="h-3.5 w-3.5 shrink-0 text-faint transition-colors group-hover:text-accent" />
                )}
              </button>
            ) : (
              <a
                href={link.href}
                className="mt-0.5 block truncate text-[14.5px] font-medium text-fg transition-colors hover:text-accent"
              >
                {link.value}
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}