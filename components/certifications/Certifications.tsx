import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education } from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";
import { EducationCard } from "./EducationCard";

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 · Credentials"
          title={
            <>
              Certifications <span className="text-gradient">&amp; education</span>
            </>
          }
          description="Formal training and foundations that underpin three years of building production data platforms."
        />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h3 className="mb-4 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-faint">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              Education
            </h3>
            <div className="border-t border-line">
              {education.map((item) => (
                <EducationCard key={item.degree + item.institution} education={item} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <h3 className="mb-4 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-faint">
              <span className="h-px w-6 bg-accent/60" aria-hidden />
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <CertificationCard
                  key={cert.title + cert.year}
                  certification={cert}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}