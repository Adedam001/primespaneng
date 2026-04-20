export interface Service {
  id: bigint;
  name: string;
  icon: string;
  description: string;
  methodology: string;
  standards: string[];
  tools: string[];
}

export interface CaseStudyMetric {
  name: string;
  value: string;
}

export interface CaseStudy {
  id: bigint;
  title: string;
  industry: string;
  material: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  clientQuote: string;
  isFeatured: boolean;
}

export interface ContactSubmission {
  id: bigint;
  name: string;
  company: string;
  email: string;
  projectScope: string;
  timestamp: bigint;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  projectScope: string;
}
