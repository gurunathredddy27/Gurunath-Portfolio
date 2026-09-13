import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 · Experience"
          title={
            <>
              Where I&apos;ve been <span className="text-gradient">building</span>
            </>
          }
          description="Two roles, one craft — turning messy, high-volume data into dependable products that analytics teams rely on."
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}