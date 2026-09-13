import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Gurunath",
  fullName: "Tokala Gurunath",
  role: "Data Engineer",
  email: "gurunathreddy4242@gmail.com",
  phone: "+91 94404 97328",
  location: "Hyderabad / Bangalore, India",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  resumeUrl: "/Gurunath-DE-4.6yrs.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;