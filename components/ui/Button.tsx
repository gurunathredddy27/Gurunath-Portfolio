import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center rounded-md font-medium tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60 disabled:pointer-events-none disabled:opacity-50 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#121009] shadow-[0_10px_30px_-12px_rgba(216,164,92,0.5)] hover:bg-accent-strong hover:-translate-y-0.5",
  secondary:
    "border border-line-strong bg-surface/50 text-fg hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:bg-white/[0.04] hover:-translate-y-0.5 hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px] gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-[15px] gap-2",
};

interface ButtonOptions {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AnchorProps = Omit<ComponentProps<"a">, keyof ButtonOptions> & ButtonOptions;
type NativeButtonProps = Omit<ComponentProps<"button">, keyof ButtonOptions> &
  ButtonOptions;

export function Button({ variant = "primary", size = "md", className, children, ...props }: AnchorProps | NativeButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
  );

  if ("href" in props) {
    const { href, ...anchorProps } = props as AnchorProps;
    return (
      <a href={href} className={cn(classes, "group/btn")} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { type, ...buttonProps } = props as NativeButtonProps;
  return (
    <button type={type ?? "button"} className={cn(classes, "group/btn")} {...buttonProps}>
      {content}
    </button>
  );
}