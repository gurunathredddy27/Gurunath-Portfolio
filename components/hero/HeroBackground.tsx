export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* soft washes */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(216,164,92,0.07),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(38%_38%_at_85%_82%,rgba(216,164,92,0.045),transparent_70%)]" />

      {/* faint grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(72%_60%_at_50%_38%,black,transparent)]" />

      {/* restrained technical signal lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M -100 620 C 320 500, 500 664, 780 540 S 1220 380, 1540 470"
          stroke="#d8a45c"
          strokeWidth="1"
          strokeDasharray="4 12"
          className="animate-dash-flow"
        />
        <path
          d="M -100 240 C 320 380, 620 180, 920 320 S 1300 460, 1540 300"
          stroke="#6e747c"
          strokeWidth="1"
          strokeDasharray="2 10"
          className="animate-dash-flow"
        />
      </svg>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}