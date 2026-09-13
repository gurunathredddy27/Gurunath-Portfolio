import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 · Featured Work"
          title={
            <>
              Projects that <span className="text-gradient">move the needle</span>
            </>
          }
          description="Two flagship builds — an enterprise Azure lakehouse for a ticketing platform and a fully automated AWS data lake — both in production handling millions of records."
        />

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}