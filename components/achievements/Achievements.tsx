import { SectionHeading } from "@/components/ui/SectionHeading";
import { metrics } from "@/data/achievements";
import { AnimatedMetrics } from "./AnimatedMetrics";

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 · Impact"
          title={
            <>
              Numbers I&apos;m <span className="text-gradient">proud of</span>
            </>
          }
          description="Real results from production pipelines — reliability, performance, and throughput that compound every day."
        />
        <AnimatedMetrics metrics={metrics} />
      </div>
    </section>
  );
}