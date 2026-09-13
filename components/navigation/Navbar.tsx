"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "experience", "skills", "certifications", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-background/85 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-surface font-display text-sm font-semibold text-accent transition-colors duration-300 group-hover:border-accent">
              G
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
              Gurunath<span className="text-accent">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-300",
                    isActive ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  <span className="mr-1.5 font-mono text-[10px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-8 w-8 items-center justify-center rounded-md text-muted transition-colors duration-300 hover:bg-white/[0.04] hover:text-accent sm:flex"
            >
              <GithubIcon className="h-[17px] w-[17px]" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden h-8 w-8 items-center justify-center rounded-md text-muted transition-colors duration-300 hover:bg-white/[0.04] hover:text-accent sm:flex"
            >
              <LinkedinIcon className="h-[17px] w-[17px]" />
            </a>
            <a
              href={site.resumeUrl}
              download
              className="hidden h-9 items-center rounded-md border border-line-strong px-4 text-[13px] font-semibold text-fg transition-all duration-300 hover:border-accent/50 hover:text-accent sm:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-surface text-fg transition-colors lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}