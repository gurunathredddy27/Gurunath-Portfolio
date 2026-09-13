import { ArrowRight, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button href="#projects" size="lg">
        View My Work
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
      </Button>
      <Button href={site.resumeUrl} size="lg" variant="secondary" download>
        <Download className="h-4 w-4" />
        Download Resume
      </Button>
      <Button href="#contact" size="lg" variant="ghost">
        <Send className="h-4 w-4" />
        Contact Me
      </Button>
    </div>
  );
}