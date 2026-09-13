const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "Millions", label: "Records / Day" },
  { value: "50+", label: "Workflows Automated" },
  { value: "99.9%", label: "Pipeline Reliability" },
];

export function HeroStats() {
  return (
    <dl className="mt-12 flex max-w-2xl flex-wrap items-center gap-x-10 gap-y-6 border-t border-line pt-7">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-1">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-xl font-semibold tracking-tight text-fg">
            {stat.value}
          </dd>
          <span className="text-[11px] uppercase tracking-[0.14em] text-faint">
            {stat.label}
          </span>
        </div>
      ))}
    </dl>
  );
}