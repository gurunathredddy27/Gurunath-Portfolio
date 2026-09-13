import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { SkillCategory } from "./SkillCategory";
import { TechStack } from "./TechStack";

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 · Skills"
          title={
            <>
              The stack behind <span className="text-gradient">moving data</span>
            </>
          }
          description="A battle-tested set of tools spanning languages, orchestration, cloud platforms, big data engines, and machine learning."
        />

        <TechStack />

        <div className="border-t border-line">
          {skillCategories.map((category, i) => (
            <SkillCategory key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}