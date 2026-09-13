import { SectionHeading } from "@/components/ui/SectionHeading";
import { journeyStages } from "@/data/achievements";
import { PipelineFlow } from "./PipelineFlow";

export function Journey() {
  return (
    <section id="journey" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 · Process"
          title={
            <>
              Every byte, end to end:{" "}
              <span className="text-gradient">source to insight</span>
            </>
          }
          description="How I think about data engineering — a complete, governed journey that starts at a raw source and ends in a business decision."
        />
        <PipelineFlow stages={journeyStages} />
      </div>
    </section>
  );
}