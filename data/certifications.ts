import type { Certification, Education } from "@/types";

// Replace the placeholder cards below with your real certifications.
// Each entry maps to one card: title, issuer, year, optional credential id + link.
export const certifications: Certification[] = [
  {
    title: "Your Certification Here",
    issuer: "Issuing Organization",
    year: "2025",
    credentialId: "CRED-000001",
    href: "#",
    placeholder: true,
  },
  {
    title: "Your Certification Here",
    issuer: "Issuing Organization",
    year: "2024",
    credentialId: "CRED-000002",
    href: "#",
    placeholder: true,
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech",
    institution: "Visvesvaraya College of Engineering and Technology",
    score: "CGPA 6.6",
    focus: "Engineering",
  },
  {
    degree: "Intermediate",
    institution: "Sri Gayatri Junior College",
    score: "CGPA 8.8",
    focus: "Higher Secondary",
  },
];