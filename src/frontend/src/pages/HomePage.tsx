import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFeaturedCaseStudies } from "@/hooks/useCaseStudies";
import { useServices } from "@/hooks/useServices";
import type { CaseStudy, Service } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FlaskConical,
  Mountain,
  ShieldCheck,
  TrendingUp,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

// ── Service icon map ────────────────────────────────────────────────────────
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  structural: <Building2 className="w-6 h-6" />,
  finite: <Zap className="w-6 h-6" />,
  mechanical: <Wrench className="w-6 h-6" />,
  hydraulic: <Waves className="w-6 h-6" />,
  geotechnical: <Mountain className="w-6 h-6" />,
  material: <FlaskConical className="w-6 h-6" />,
};

function getServiceIcon(name: string): React.ReactNode {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(SERVICE_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return <Building2 className="w-6 h-6" />;
}

// ── Sub-components ──────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      to="/services/$id"
      params={{ id: service.id.toString() }}
      data-ocid={`home.service.item.${index + 1}`}
      className="group block bg-card border border-border rounded-sm p-6 hover:border-accent/60 hover:bg-card/90 transition-smooth"
    >
      <div className="w-11 h-11 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-smooth">
        {getServiceIcon(service.name)}
      </div>
      <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-accent transition-smooth leading-snug">
        {service.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold uppercase tracking-wider">
        Learn More <ChevronRight className="w-3 h-3" />
      </span>
    </Link>
  );
}

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <Link
      to="/portfolio/$id"
      params={{ id: cs.id.toString() }}
      data-ocid={`home.case_study.item.${index + 1}`}
      className="group flex flex-col bg-card border border-border rounded-sm hover:border-accent/60 transition-smooth overflow-hidden"
    >
      <div className="p-6 flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-xs font-semibold uppercase tracking-wider text-accent border-accent/40 bg-accent/5 rounded-sm"
          >
            {cs.industry}
          </Badge>
          {cs.material && (
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {cs.material}
            </span>
          )}
        </div>
        <h3 className="font-display font-semibold text-foreground text-lg mb-3 group-hover:text-accent transition-smooth leading-snug">
          {cs.title}
        </h3>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
              Challenge
            </p>
            <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed">
              {cs.challenge}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
              Outcome
            </p>
            <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed">
              {cs.outcome}
            </p>
          </div>
        </div>
      </div>
      {cs.metrics.length > 0 && (
        <div className="flex flex-wrap gap-0 border-t border-border">
          {cs.metrics.slice(0, 3).map((m, i) => (
            <div
              key={m.name}
              className={`flex-1 min-w-[80px] px-4 py-3 ${i > 0 ? "border-l border-border" : ""} bg-muted/20`}
            >
              <p className="text-accent font-display font-bold text-sm leading-none mb-0.5">
                {m.value}
              </p>
              <p className="text-xs text-muted-foreground leading-tight">
                {m.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export function HomePage() {
  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: featured, isLoading: featuredLoading } =
    useFeaturedCaseStudies();

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        data-ocid="home.hero_section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bridge-industrial.dim_1600x900.jpg')",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Grid lines decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, oklch(var(--foreground)) 0px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, oklch(var(--foreground)) 0px, transparent 1px, transparent 80px)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            {/* Cert badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/40 rounded-sm mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">
                ISO 9001 · ISO 45001 · PE Licensed
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] tracking-tight mb-6">
              Precision Engineering
              <br />
              Solutions for Complex
              <br />
              <span className="text-accent">Infrastructure</span> Challenges.
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed mb-10">
              From finite element analysis to full-scale project management —
              trusted by infrastructure, energy, and industrial sectors across
              North America.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" data-ocid="home.hero_cta_primary_button">
                <Button className="bg-accent text-accent-foreground font-bold uppercase tracking-wider text-sm px-7 py-3.5 hover:opacity-90 transition-smooth h-auto rounded-sm shadow-lg">
                  Request Technical Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/portfolio" data-ocid="home.hero_cta_secondary_button">
                <Button
                  variant="outline"
                  className="font-semibold uppercase tracking-wider text-sm px-7 py-3.5 h-auto border-border/60 hover:bg-muted/30 hover:border-border transition-smooth rounded-sm"
                >
                  View Our Work
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engineering Capabilities ─────────────────────────────────────── */}
      <section
        className="bg-muted/10 border-y border-border py-20"
        data-ocid="home.services_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                What We Do
              </p>
              <h2 className="font-display font-bold text-3xl text-foreground">
                Engineering Capabilities
              </h2>
              <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
                Specialized technical disciplines backed by certified
                methodologies and industry-standard software.
              </p>
            </div>
            <Link
              to="/services"
              data-ocid="home.services_view_all_link"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-smooth uppercase tracking-widest font-semibold border border-border px-4 py-2 rounded-sm hover:border-accent/50"
            >
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border">
            {servicesLoading
              ? ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => (
                  <div key={k} className="bg-card p-6">
                    <Skeleton className="w-11 h-11 mb-4 rounded-sm" />
                    <Skeleton className="h-5 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                ))
              : (services ?? [])
                  .slice(0, 6)
                  .map((service, idx) => (
                    <ServiceCard
                      key={service.id.toString()}
                      service={service}
                      index={idx}
                    />
                  ))}
          </div>
        </div>
      </section>

      {/* ── Proven Results / Case Studies ───────────────────────────────── */}
      <section
        className="bg-background border-b border-border py-20"
        data-ocid="home.portfolio_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                Our Work
              </p>
              <h2 className="font-display font-bold text-3xl text-foreground">
                Proven Results
              </h2>
              <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
                Real projects. Real outcomes. Every engagement defined by
                measurable engineering performance.
              </p>
            </div>
            <Link
              to="/portfolio"
              data-ocid="home.portfolio_view_all_link"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-smooth uppercase tracking-widest font-semibold border border-border px-4 py-2 rounded-sm hover:border-accent/50"
            >
              All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredLoading
              ? ["cs1", "cs2", "cs3"].map((k) => (
                  <div
                    key={k}
                    className="bg-card border border-border rounded-sm p-6 space-y-3"
                  >
                    <Skeleton className="h-5 w-24 rounded-sm" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <Skeleton className="h-16" />
                      <Skeleton className="h-16" />
                    </div>
                  </div>
                ))
              : (featured ?? [])
                  .slice(0, 3)
                  .map((cs, idx) => (
                    <CaseStudyCard key={cs.id.toString()} cs={cs} index={idx} />
                  ))}
          </div>
        </div>
      </section>

      {/* ── Trust Signals ────────────────────────────────────────────────── */}
      <section
        className="bg-card border-b border-border py-20"
        data-ocid="home.trust_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
              Why PrimeSpan
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground">
              Trusted. Certified. Precise.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              Every engagement is governed by internationally recognized quality
              and safety standards, delivered by licensed professional
              engineers.
            </p>
          </div>

          {/* Certification cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {/* ISO 9001 */}
            <div
              className="bg-background border border-border rounded-sm p-6 group hover:border-accent/50 transition-smooth"
              data-ocid="home.trust.cert.item.1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                    ISO 9001:2015
                  </p>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    Quality Management
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Certified quality management system ensuring consistent,
                    repeatable engineering processes with documented
                    traceability from scope to delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* ISO 45001 */}
            <div
              className="bg-background border border-border rounded-sm p-6 group hover:border-accent/50 transition-smooth"
              data-ocid="home.trust.cert.item.2"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                    ISO 45001:2018
                  </p>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    Safety Management
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Occupational health and safety management certification
                    applied across all project phases — from site investigation
                    to structural commissioning.
                  </p>
                </div>
              </div>
            </div>

            {/* PE License */}
            <div
              className="bg-background border border-border rounded-sm p-6 group hover:border-accent/50 transition-smooth"
              data-ocid="home.trust.cert.item.3"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                    PE License
                  </p>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    Professional Engineering
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All deliverables are stamped and sealed by licensed
                    Professional Engineers registered in multiple jurisdictions
                    across Canada and the United States.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat bar */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border"
            data-ocid="home.trust.stats_bar"
          >
            {[
              {
                icon: <TrendingUp className="w-5 h-5" />,
                value: "50+",
                label: "Projects Delivered",
                key: "projects",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                value: "15+",
                label: "Years Experience",
                key: "years",
              },
              {
                icon: <CheckCircle2 className="w-5 h-5" />,
                value: "100%",
                label: "Safety Record",
                key: "safety",
              },
            ].map((stat) => (
              <div
                key={stat.key}
                className="bg-card px-8 py-7 flex items-center gap-4"
              >
                <div className="text-accent opacity-60">{stat.icon}</div>
                <div>
                  <p className="font-display font-bold text-3xl text-accent leading-none mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section
        className="relative bg-background border-b border-border py-20 overflow-hidden"
        data-ocid="home.cta_section"
      >
        {/* Subtle diagonal grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, oklch(var(--foreground)) 0px, transparent 1px, transparent 40px)",
            }}
          />
        </div>

        {/* Accent left border */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pl-6">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
              Start Your Project
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 leading-tight">
              Ready to Solve Your Engineering Challenge?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl">
              Our team delivers precision engineering with verified
              methodologies — from initial feasibility through to final stamped
              deliverables. Every engagement begins with a no-obligation
              technical consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" data-ocid="home.cta_bottom_button">
                <Button className="bg-accent text-accent-foreground font-bold uppercase tracking-wider text-sm px-8 py-3.5 hover:opacity-90 transition-smooth h-auto rounded-sm shadow-lg">
                  Request Technical Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/about" data-ocid="home.cta_about_link">
                <Button
                  variant="outline"
                  className="font-semibold uppercase tracking-wider text-sm px-7 py-3.5 h-auto border-border/60 hover:bg-muted/20 hover:border-border transition-smooth rounded-sm"
                >
                  About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
