import { Navbar } from "@/components/navigation/Navbar";
import { ScrollProgress } from "@/components/navigation/ScrollProgress";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { Certifications } from "@/components/certifications/Certifications";
import { Projects } from "@/components/projects/Projects";
import { Achievements } from "@/components/achievements/Achievements";
import { Journey } from "@/components/journey/Journey";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}