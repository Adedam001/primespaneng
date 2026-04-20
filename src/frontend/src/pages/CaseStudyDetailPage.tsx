import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useCaseStudy } from "@/hooks/useCaseStudies";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const INDUSTRY_COLORS: Record<string, string> = {
  "Oil & Gas": "text-orange-400 bg-orange-400/10 border-orange-400/30",
  "Civil Infrastructure": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Industrial Facilities":
    "text-purple-400 bg-purple-400/10 border-purple-400/30",
  "Power & Energy": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  "Mining & Resources": "text-red-400 bg-red-400/10 border-red-400/30",
  "Marine & Offshore": "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
};

function getIndustryColor(industry: string): string {
  return (
    INDUSTRY_COLORS[industry] ?? "text-accent bg-accent/10 border-accent/30"
  );
}

export function CaseStudyDetailPage() {
  const { id } = useParams({ strict: false });
  const caseStudyId = id ? BigInt(id) : undefined;
  const { data: cs, isLoading } = useCaseStudy(caseStudyId);

  if (isLoading) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
        data-ocid="case_study_detail.loading_state"
      >
        <Skeleton className="h-5 w-56 mb-8" />
        <Skeleton className="h-6 w-32 mb-3" />
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="flex gap-4 mb-12">
          <Skeleton className="h-20 w-28" />
          <Skeleton className="h-20 w-28" />
          <Skeleton className="h-20 w-28" />
        </div>
        <Skeleton className="h-4 w-40 mb-4" />
        <Skeleton className="h-32 w-full mb-12" />
        <Skeleton className="h-4 w-40 mb-4" />
        <Skeleton className="h-32 w-full mb-12" />
        <Skeleton className="h-4 w-40 mb-4" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (!cs) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        data-ocid="case_study_detail.error_state"
      >
        <p className="text-muted-foreground mb-6 text-lg">
          Case study not found.
        </p>
        <Link to="/portfolio" data-ocid="case_study_detail.back_link">
          <Button variant="outline">← Back to Portfolio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section
        className="bg-card border-b border-border py-14"
        data-ocid="case_study_detail.page_header"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-mono uppercase tracking-wider"
            data-ocid="case_study_detail.breadcrumb"
          >
            <Link
              to="/"
              data-ocid="case_study_detail.breadcrumb_home"
              className="hover:text-foreground transition-smooth"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              to="/portfolio"
              data-ocid="case_study_detail.breadcrumb_portfolio"
              className="hover:text-foreground transition-smooth"
            >
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">
              {cs.title}
            </span>
          </nav>

          {/* Tags */}
          <div
            className="flex items-center gap-3 mb-4"
            data-ocid="case_study_detail.tags"
          >
            <Badge
              variant="outline"
              className={`text-xs font-semibold uppercase tracking-wider ${getIndustryColor(cs.industry)}`}
            >
              {cs.industry}
            </Badge>
            <Badge
              variant="outline"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-border"
            >
              {cs.material}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-8 leading-tight">
            {cs.title}
          </h1>

          {/* Top metrics strip */}
          {cs.metrics.length > 0 && (
            <div
              className="flex flex-wrap gap-4"
              data-ocid="case_study_detail.header_metrics"
            >
              {cs.metrics.map((m, i) => (
                <div
                  key={m.name}
                  data-ocid={`case_study_detail.header_metric.${i + 1}`}
                  className="flex flex-col bg-background border border-border rounded-sm px-5 py-4 min-w-[110px]"
                >
                  <span className="font-display font-bold text-2xl text-accent leading-none">
                    {m.value}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wide">
                    {m.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Body content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
        {/* The Challenge */}
        <section
          className="mb-12"
          data-ocid="case_study_detail.challenge_section"
        >
          <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-widest mb-3">
            The Challenge
          </h2>
          <Separator className="mb-5 bg-border" />
          <p className="text-muted-foreground leading-relaxed text-base">
            {cs.challenge}
          </p>
        </section>

        {/* Our Approach */}
        <section
          className="mb-12"
          data-ocid="case_study_detail.approach_section"
        >
          <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-widest mb-3">
            Our Approach
          </h2>
          <Separator className="mb-5 bg-border" />
          <p className="text-muted-foreground leading-relaxed text-base">
            {cs.approach}
          </p>
        </section>

        {/* The Outcome */}
        <section
          className="mb-10"
          data-ocid="case_study_detail.outcome_section"
        >
          <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-widest mb-3">
            The Outcome
          </h2>
          <Separator className="mb-5 bg-border" />
          <p className="text-muted-foreground leading-relaxed text-base">
            {cs.outcome}
          </p>
        </section>

        {/* All Metrics Grid */}
        {cs.metrics.length > 0 && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
            data-ocid="case_study_detail.metrics_grid"
          >
            {cs.metrics.map((m, i) => (
              <div
                key={m.name}
                data-ocid={`case_study_detail.metric_card.${i + 1}`}
                className="flex flex-col bg-card border border-border rounded-sm px-5 py-5"
              >
                <span className="font-display font-bold text-3xl text-accent leading-none mb-2">
                  {m.value}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Client Quote */}
        {cs.clientQuote && (
          <blockquote
            className="relative bg-card border border-border border-l-[3px] border-l-accent rounded-sm px-8 py-7 mb-12"
            data-ocid="case_study_detail.client_quote"
          >
            <Quote
              className="absolute top-5 right-6 w-8 h-8 text-accent/20"
              aria-hidden="true"
            />
            <p className="text-foreground text-lg leading-relaxed italic font-body">
              &ldquo;{cs.clientQuote}&rdquo;
            </p>
          </blockquote>
        )}

        {/* Back + CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4 border-t border-border">
          <Link
            to="/portfolio"
            data-ocid="case_study_detail.back_link"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-smooth uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <Link to="/contact" data-ocid="case_study_detail.cta_button">
            <Button className="bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-sm px-6 h-auto py-3 hover:opacity-90 transition-smooth">
              Discuss a Similar Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
