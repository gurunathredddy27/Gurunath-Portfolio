export interface SiteConfig {
  name: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  isCurrent: boolean;
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ArchitectureStage {
  label: string;
  description: string;
  tech: string[];
}

export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
  responsibilities: string[];
  achievements: string[];
  architecture: ArchitectureStage[];
  accent: string;
}

export interface AchievementMetric {
  display?: string;
  value?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: string;
}

export interface JourneyStage {
  step: string;
  label: string;
  description: string;
  tech: string[];
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  href?: string;
  placeholder?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  focus?: string;
}