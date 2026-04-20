import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useServices } from "@/hooks/useServices";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Settings,
  Shield,
  Zap,
} from "lucide-react";

const fallbackIcons = [Layers, Settings, Shield, Zap, Layers, Settings];

export function ServicesHubPage() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section
        className="bg-card border-b border-border py-16"
        data-ocid="services.page_header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest mb-6">
            <Link
              to="/"
              className="hover:text-accent transition-smooth"
              data-ocid="services.breadcrumb_home"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span className="text-foreground/70">Services</span>
          </nav>
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-5 leading-tight">
            Engineering Services
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            PrimeSpan Engineering delivers ISO 9001-certified specialized
            consulting across structural analysis, geotechnical investigation,
            industrial process design, and civil infrastructure. Every
            engagement is backed by licensed Professional Engineers (PE) and
            adheres to ASME, ASCE, and CSA standards — giving project managers
            the technical assurance they need.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              "ISO 9001 Certified",
              "ISO 45001 OHS",
              "PE Licensed",
              "ASME Compliant",
            ].map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/30 rounded-sm text-accent text-xs font-semibold uppercase tracking-wider"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="bg-background py-16"
        data-ocid="services.list_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="services.loading_state"
            >
              {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
                <Skeleton key={k} className="h-72 rounded-sm" />
              ))}
            </div>
          ) : !services?.length ? (
            <div className="text-center py-24" data-ocid="services.empty_state">
              <Layers className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-40" />
              <p className="text-muted-foreground text-lg mb-2">
                No services available at this time.
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Contact our team directly to discuss your project requirements.
              </p>
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-sm px-6 h-auto py-3 hover:opacity-90 transition-smooth">
                  Contact Engineering Team{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const FallbackIcon = fallbackIcons[idx % fallbackIcons.length];
                return (
                  <Link
                    key={service.id.toString()}
                    to="/services/$id"
                    params={{ id: service.id.toString() }}
                    data-ocid={`services.item.${idx + 1}`}
                    className="group flex flex-col bg-card border border-border rounded-sm p-6 hover:border-accent/50 hover:bg-card/80 transition-smooth"
                  >
                    {/* Card Top */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent/10 border border-accent/20 rounded-sm text-accent">
                        {service.icon ? (
                          <span className="text-2xl leading-none">
                            {service.icon}
                          </span>
                        ) : (
                          <FallbackIcon className="w-6 h-6" />
                        )}
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-smooth" />
                    </div>

                    {/* Service Name */}
                    <h2 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-smooth leading-snug">
                      {service.name}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Standards Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {service.standards.slice(0, 3).map((std) => (
                        <Badge
                          key={std}
                          variant="outline"
                          className="text-xs font-mono border-border text-muted-foreground px-2 py-0.5"
                        >
                          {std}
                        </Badge>
                      ))}
                      {service.standards.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-border text-muted-foreground px-2 py-0.5"
                        >
                          +{service.standards.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* View Link */}
                    <div className="mt-4 flex items-center gap-1 text-xs text-accent font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-smooth">
                      View Service Details
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why PrimeSpan Strip */}
      <section
        className="bg-muted/20 border-t border-b border-border py-14"
        data-ocid="services.why_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Quality Management",
                body: "ISO 9001:2015 certified across all service lines. Every deliverable is reviewed against a formal quality management process before sign-off.",
              },
              {
                title: "Licensed Professional Engineers",
                body: "Our senior engineers hold active PE licenses across multiple jurisdictions, enabling us to stamp drawings and reports for regulatory submission.",
              },
              {
                title: "Standards-First Methodology",
                body: "All analyses and designs reference the latest ASME, ASCE, CSA, and IBC codes. No shortcuts — clients get full compliance documentation.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="w-8 h-0.5 bg-accent mb-1" />
                <h3 className="font-display font-bold text-base text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-background py-14" data-ocid="services.cta_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">
              Need a custom engineering solution?
            </h3>
            <p className="text-muted-foreground text-sm">
              Talk to our engineering team about your specific project
              requirements.
            </p>
          </div>
          <Link to="/contact" data-ocid="services.cta_button">
            <Button className="bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-sm px-6 h-auto py-3 hover:opacity-90 transition-smooth shrink-0">
              Request Technical Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
