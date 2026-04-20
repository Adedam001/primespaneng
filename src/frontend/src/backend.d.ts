import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    tools: Array<string>;
    standards: Array<string>;
    icon: string;
    name: string;
    description: string;
    methodology: string;
}
export type Timestamp = bigint;
export interface CaseStudyMetric {
    value: string;
    name: string;
}
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    company: string;
    timestamp: Timestamp;
    projectScope: string;
}
export interface CaseStudy {
    id: bigint;
    title: string;
    metrics: Array<CaseStudyMetric>;
    challenge: string;
    clientQuote: string;
    isFeatured: boolean;
    approach: string;
    outcome: string;
    material: string;
    industry: string;
}
export interface backendInterface {
    getCaseStudies(): Promise<Array<CaseStudy>>;
    getCaseStudy(id: bigint): Promise<CaseStudy | null>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getFeaturedCaseStudies(): Promise<Array<CaseStudy>>;
    getServices(): Promise<Array<Service>>;
    submitContact(name: string, company: string, email: string, projectScope: string): Promise<ContactSubmission>;
}
