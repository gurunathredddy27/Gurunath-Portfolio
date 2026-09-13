import { skillCategories } from "@/data/skills";

export function TechStack() {
  const items = [...skillCategories.flatMap((c) => c.skills.map((s) => s.name))];
  const unique = [...new Set(items)];
  const row = [...unique, ...unique];

  return (
    <div
      aria-hidden
      className="relative mb-14 overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((tech, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-mono text-[12.5px] uppercase tracking-[0.18em] text-faint transition-colors duration-300 hover:text-accent">
              {tech}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}