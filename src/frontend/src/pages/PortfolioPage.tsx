import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useCaseStudies } from "@/hooks/useCaseStudies";
import type { CaseStudy } from "@/types";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, RotateCcw } from "lucide-react";
import { useMemo } from "react";

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

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const challengeSnippet =
    cs.challenge.length > 150 ? `${cs.challenge.slice(0, 150)}…` : cs.challenge;
  const topMetrics = cs.metrics.slice(0, 2);

  return (
    <Link
      to="/portfolio/$id"
      params={{ id: cs.id.toString() }}
      data-ocid={`portfolio.item.${index + 1}`}
      className="group relative flex flex-col bg-card border border-border rounded-sm p-6 hover:border-accent/60 transition-smooth"
    >
      {/* Industry badge — top right */}
      <div className="absolute top-4 right-4">
        <Badge
          variant="outline"
          className={`text-xs font-semibold uppercase tracking-wider ${getIndustryColor(cs.industry)}`}
        >
          {cs.industry}
        </Badge>
      </div>

      {/* Material label */}
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-mono">
        {cs.material}
      </p>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-smooth leading-snug pr-28">
        {cs.title}
      </h3>

      {/* Challenge snippet */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
        {challengeSnippet}
      </p>

      {/* Metrics */}
      {topMetrics.length > 0 && (
        <div className="flex gap-4 mb-5">
          {topMetrics.map((m) => (
            <div
              key={m.name}
              className="flex flex-col bg-muted/40 border border-border rounded-sm px-4 py-3 min-w-[90px]"
            >
              <span className="font-display font-bold text-2xl text-accent leading-none">
                {m.value}
              </span>
              <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                {m.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* CTA link */}
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent group-hover:gap-2.5 transition-smooth mt-auto">
        View Full Case Study
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}

export function PortfolioPage() {
  const navigate = useNavigate({ from: "/portfolio" });
  // Read filter state from URL
  const search = useSearch({ strict: false }) as {
    industry?: string;
    material?: string;
  };
  const industryFilter = search.industry ?? "All Industries";
  const materialFilter = search.material ?? "All Materials";

  const { data: caseStudies, isLoading } = useCaseStudies();

  const industries = useMemo(() => {
    const vals = Array.from(
      new Set((caseStudies ?? []).map((cs) => cs.industry)),
    ).sort();
    return ["All Industries", ...vals];
  }, [caseStudies]);

  const materials = useMemo(() => {
    const vals = Array.from(
      new Set((caseStudies ?? []).map((cs) => cs.material)),
    ).sort();
    return ["All Materials", ...vals];
  }, [caseStudies]);

  const filtered = useMemo(() => {
    return (caseStudies ?? []).filter((cs) => {
      const matchIndustry =
        industryFilter === "All Industries" || cs.industry === industryFilter;
      const matchMaterial =
        materialFilter === "All Materials" || cs.material === materialFilter;
      return matchIndustry && matchMaterial;
    });
  }, [caseStudies, industryFilter, materialFilter]);

  function setIndustry(val: string) {
    void navigate({
      search: (prev) => ({
        ...prev,
        industry: val === "All Industries" ? undefined : val,
      }),
    });
  }
  function setMaterial(val: string) {
    void navigate({
      search: (prev) => ({
        ...prev,
        material: val === "All Materials" ? undefined : val,
      }),
    });
  }
  function resetFilters() {
    void navigate({ search: {} });
  }

  const hasActiveFilters =
    industryFilter !== "All Industries" || materialFilter !== "All Materials";

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section
        className="bg-card border-b border-border py-14"
        data-ocid="portfolio.page_header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 font-mono">
            Project Portfolio
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Project Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            Engineering results measured in precision, safety, and performance.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section
        className="bg-muted/20 border-b border-border py-4"
        data-ocid="portfolio.filter_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono hidden sm:block mr-2">
            Filter by:
          </span>

          <Select value={industryFilter} onValueChange={setIndustry}>
            <SelectTrigger
              className="w-full sm:w-52 bg-card border-border text-sm h-9 rounded-sm"
              data-ocid="portfolio.industry_select"
            >
              <SelectValue />
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {industries.map((ind) => (
                <SelectItem key={ind} value={ind} className="text-sm">
                  {ind}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={materialFilter} onValueChange={setMaterial}>
            <SelectTrigger
              className="w-full sm:w-48 bg-card border-border text-sm h-9 rounded-sm"
              data-ocid="portfolio.material_select"
            >
              <SelectValue />
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {materials.map((mat) => (
                <SelectItem key={mat} value={mat} className="text-sm">
                  {mat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              data-ocid="portfolio.reset_filters_button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-smooth ml-auto sm:ml-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}

          <p className="text-xs text-muted-foreground font-mono sm:ml-auto">
            {isLoading
              ? "Loading…"
              : `${filtered.length} project${filtered.length === 1 ? "" : "s"}`}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section
        className="bg-background py-14"
        data-ocid="portfolio.list_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              data-ocid="portfolio.loading_state"
            >
              {[1, 2, 3, 4, 5, 6].map((k) => (
                <Skeleton key={k} className="h-72 rounded-sm" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="flex flex-col items-center py-24 gap-4"
              data-ocid="portfolio.empty_state"
            >
              <p className="text-muted-foreground text-center max-w-sm">
                No projects match your filters — try adjusting your search.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                data-ocid="portfolio.empty_reset_button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4 transition-smooth"
              >
                <RotateCcw className="w-4 h-4" />
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((cs, idx) => (
                <CaseStudyCard key={cs.id.toString()} cs={cs} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="bg-muted/20 border-t border-border py-14"
        data-ocid="portfolio.cta_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">
              Have a complex engineering challenge?
            </h3>
            <p className="text-muted-foreground text-sm">
              Our team specializes in precision solutions across industrial and
              civil sectors.
            </p>
          </div>
          <Link to="/contact" data-ocid="portfolio.cta_button">
            <Button className="bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-sm px-6 h-auto py-3 hover:opacity-90 transition-smooth shrink-0">
              Request Technical Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
