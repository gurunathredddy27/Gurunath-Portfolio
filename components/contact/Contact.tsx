import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactLinks } from "./ContactLinks";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-16 md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(216,164,92,0.08),transparent_75%)]"
          />
          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow="08 · Contact"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-gradient">with data</span>
                </>
              }
              description="I'm always up for a conversation about data platforms, pipelines, and the next big idea. Pick whichever channel works for you — I usually reply the same day."
            />
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
}