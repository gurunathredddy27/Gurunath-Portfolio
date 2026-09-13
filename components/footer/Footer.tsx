import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social";
import { navLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/40 bg-surface font-display text-sm font-semibold text-accent">
              G
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
              Gurunath<span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-sm text-faint">
            Data Engineer · Azure · AWS · Big Data
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2" aria-label="Footer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all hover:border-accent/60 hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <div className="flex w-full flex-col items-center gap-2 border-t border-line pt-7 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-faint">
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-faint">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}