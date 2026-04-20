import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useFeaturedCaseStudies } from "@/hooks/useCaseStudies";
import { useService } from "@/hooks/useServices";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FolderOpen,
  Star,
  Wrench,
} from "lucide-react";

export function ServiceDetailPage() {
  const { id } = useParams({ strict: false });
  const serviceId = id ? BigInt(id) : undefined;
  const { data: service, isLoading } = useService(serviceId);
  const { data: caseStudies } = useFeaturedCaseStudies();

  /* ── Loading state ── */
  if (isLoading) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        data-ocid="service_detail.loading_state"
      >
        <Skeleton className="h-4 w-40 mb-8 rounded-sm" />
        <Skeleton className="h-12 w-80 mb-4 rounded-sm" />
        <Skeleton className="h-5 w-full max-w-xl mb-2 rounded-sm" />
        <Skeleton className="h-5 w-2/3 mb-12 rounded-sm" />
        <Skeleton className="h-48 w-full mb-8 rounded-sm" />
        <Skeleton className="h-32 w-full mb-8 rounded-sm" />
        <Skeleton className="h-32 w-full rounded-sm" />
      </div>
    );
  }

  /* ── Not-found state ── */
  if (!service) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[60vh] px-4"
        data-ocid="service_detail.error_state"
      >
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-card border border-border rounded-sm flex items-center justify-center mx-auto mb-6">
            <FolderOpen className="w-8 h-8 text-muted-foreground opacity-60" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">
            Service Not Found
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            The engineering service you're looking for doesn't exist or may have
            been updated. Browse our full list of services to find the expertise
            you need.
          </p>
          <Link to="/services" data-ocid="service_detail.back_to_services_link">
            <Button
              variant="outline"
              className="font-semibold uppercase tracking-wider text-sm px-6 py-3 h-auto border-border hover:bg-muted/40 transition-smooth"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  /* ── Service found ── */
  return (
    <div className="flex flex-col">
      {/* ── Page Header / Hero ── */}
      <section
        className="bg-card border-b border-border py-16"
        data-ocid="service_detail.page_header"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-accent transition-smooth"
              data-ocid="service_detail.breadcrumb_home"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link
              to="/services"
              className="hover:text-accent transition-smooth"
              data-ocid="service_detail.breadcrumb_services"
            >
              Services
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-foreground/70 truncate max-w-[200px]">
              {service.name}
            </span>
          </nav>

          {/* Icon + Title */}
          <div className="flex items-start gap-5 mb-5">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-accent/10 border border-accent/25 rounded-sm text-3xl">
              {service.icon || "⚙️"}
            </div>
            <div className="min-w-0">
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-2">
                {service.name}
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full space-y-14">
        {/* ── Our Methodology ── */}
        <section data-ocid="service_detail.methodology_section">
          <div className="flex items-center gap-2.5 mb-4">
            <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
            <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-wide">
              Our Methodology
            </h2>
          </div>
          <Separator className="mb-6 bg-border" />
          <div className="space-y-4">
            {service.methodology.split(/\n\n+/).map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-muted-foreground leading-relaxed text-base"
              >
                {para.trim()}
              </p>
            ))}
          </div>
        </section>

        {/* ── Standards & Compliance ── */}
        <section
          className="bg-muted/10 border border-border rounded-sm p-6"
          data-ocid="service_detail.standards_section"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
            <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-wide">
              Standards &amp; Compliance
            </h2>
          </div>
          <Separator className="mb-6 bg-border" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            All deliverables are engineered and reviewed against the following
            international and national codes. Full compliance documentation is
            provided with every engagement.
          </p>
          <div className="flex flex-wrap gap-2">
            {service.standards.map((std) => (
              <Badge
                key={std}
                variant="outline"
                className="font-mono text-sm border-accent/40 text-foreground px-3 py-1.5 rounded-sm"
              >
                {std}
              </Badge>
            ))}
          </div>
        </section>

        {/* ── Tools & Technologies ── */}
        <section data-ocid="service_detail.tools_section">
          <div className="flex items-center gap-2.5 mb-4">
            <Wrench className="w-5 h-5 text-accent flex-shrink-0" />
            <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-wide">
              Tools &amp; Technologies
            </h2>
          </div>
          <Separator className="mb-6 bg-border" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Our engineers leverage industry-standard software platforms to
            deliver accurate, audit-ready technical outputs — from initial
            modelling through final sign-off.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {service.tools.map((tool) => (
              <div
                key={tool}
                className="bg-card border border-border rounded-sm px-4 py-3 text-sm font-mono text-foreground flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* ── Why PrimeSpan ── */}
        <section
          className="bg-muted/10 border border-border rounded-sm p-6"
          data-ocid="service_detail.why_primespan_section"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Star className="w-5 h-5 text-accent flex-shrink-0" />
            <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-wide">
              Why PrimeSpan
            </h2>
          </div>
          <Separator className="mb-6 bg-border" />
          <p className="text-muted-foreground leading-relaxed text-base mb-6">
            PrimeSpan Engineering was founded on one principle: technical rigor
            cannot be compromised on high-stakes infrastructure projects. Unlike
            generalist consultancies, our {service.name.toLowerCase()} team
            consists exclusively of senior engineers with 10+ years of
            project-specific experience. We maintain ISO 9001:2015 certification
            across all service lines, meaning every analysis, drawing, and
            report passes a documented quality gate before reaching your desk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Quality Standard", value: "ISO 9001:2015" },
              { label: "OHS Management", value: "ISO 45001" },
              { label: "Engineering Licence", value: "PE Licensed" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-background border border-border rounded-sm px-4 py-3"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-display font-bold text-base text-accent">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Case Studies Teaser ── */}
        {caseStudies && caseStudies.length > 0 && (
          <section data-ocid="service_detail.case_studies_section">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-wide">
                Related Projects
              </h2>
              <Link
                to="/portfolio"
                className="text-xs text-muted-foreground hover:text-accent transition-smooth uppercase tracking-wider flex items-center gap-1"
                data-ocid="service_detail.view_all_portfolio_link"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <Separator className="mb-6 bg-border" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudies.slice(0, 2).map((cs, idx) => (
                <Link
                  key={cs.id.toString()}
                  to="/portfolio/$id"
                  params={{ id: cs.id.toString() }}
                  data-ocid={`service_detail.case_study.item.${idx + 1}`}
                  className="group block bg-card border border-border rounded-sm p-5 hover:border-accent/50 transition-smooth"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-sm">
                      {cs.industry}
                    </span>
                    {cs.material && (
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {cs.material}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-accent transition-smooth leading-snug">
                    {cs.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Challenge
                      </p>
                      <p className="text-xs text-foreground/70 line-clamp-2">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Outcome
                      </p>
                      <p className="text-xs text-foreground/70 line-clamp-2">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA Section ── */}
        <section
          className="bg-card border border-border rounded-sm p-8"
          data-ocid="service_detail.cta_section"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                Get Started
              </p>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2 leading-tight">
                Ready to scope your {service.name} project?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Submit your project brief and a licensed PE will respond within
                one business day with a structured technical quote and
                engagement timeline.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link to="/contact" data-ocid="service_detail.cta_button">
                <Button className="w-full bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-sm px-8 h-auto py-3.5 hover:opacity-90 transition-smooth">
                  Request Technical Quote{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services" data-ocid="service_detail.back_link">
                <Button
                  variant="outline"
                  className="w-full font-semibold uppercase tracking-wider text-sm px-6 h-auto py-3 border-border hover:bg-muted/40 transition-smooth"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
