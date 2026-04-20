import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronRight,
  FileCheck,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

const certifications = [
  {
    id: "iso9001",
    name: "ISO 9001:2015",
    label: "Quality Management Systems",
    description:
      "All engineering processes meet rigorous international standards for quality management. Every deliverable — from preliminary analysis to stamped drawings — is governed by documented QMS procedures, ensuring consistency, traceability, and client confidence.",
    issuingBody: "International Organization for Standardization (ISO)",
    icon: FileCheck,
    badge: "Quality",
    accentClass: "text-amber-400",
    borderClass: "border-amber-400/30",
    bgClass: "bg-amber-400/5",
  },
  {
    id: "iso45001",
    name: "ISO 45001:2018",
    label: "Occupational Health & Safety",
    description:
      "Zero-incident project delivery is a core operational mandate. Our OH&S management system systematically identifies hazards, evaluates risks, and embeds safety controls across every phase — from site walkthroughs to construction oversight.",
    issuingBody: "International Organization for Standardization (ISO)",
    icon: ShieldCheck,
    badge: "Safety",
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-400/30",
    bgClass: "bg-emerald-400/5",
  },
  {
    id: "pe",
    name: "Professional Engineering License (PE)",
    label: "Licensed in Multiple Jurisdictions",
    description:
      "Our PE-licensed engineers practise across multiple Canadian provinces and US states. All structural and mechanical analyses are authored and reviewed by licensed PEs, producing stamped drawings and legally defensible reports.",
    issuingBody: "Provincial & State Engineering Regulatory Bodies",
    icon: Award,
    badge: "Licensed",
    accentClass: "text-blue-400",
    borderClass: "border-blue-400/30",
    bgClass: "bg-blue-400/5",
  },
];

const values = [
  {
    id: "precision",
    icon: Zap,
    title: "Technical Precision",
    description:
      "Every analysis begins with first-principles engineering, then validated through FEA and simulation software including ANSYS and AutoCAD. We do not estimate — we calculate, verify, and document.",
    color: "text-amber-400",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "ISO 45001 compliance is non-negotiable. Our safety management systems are embedded into project execution workflows — not retrofitted at the end. Every site, every deliverable, every decision is safety-vetted.",
    color: "text-emerald-400",
  },
  {
    id: "client",
    icon: Users,
    title: "Client-Centric",
    description:
      "Transparent timelines, predictable budget adherence, and direct access to the licensed engineers doing the work. Your project manager is your engineer — not a hand-off chain of account managers.",
    color: "text-blue-400",
  },
];

export function AboutPage() {
  return (
    <div className="bg-background text-foreground" data-ocid="about.page">
      {/* Hero Band */}
      <section
        className="relative bg-card border-b border-border overflow-hidden py-20 md:py-28"
        data-ocid="about.hero.section"
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 47px, oklch(0.6 0 0) 47px, oklch(0.6 0 0) 48px), repeating-linear-gradient(90deg, transparent, transparent 47px, oklch(0.6 0 0) 47px, oklch(0.6 0 0) 48px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-5 border-accent/40 text-accent text-xs tracking-widest uppercase"
          >
            About Us
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            About PrimeSpan
            <br />
            <span className="text-accent">Engineering</span>
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Precision. Integrity. Results.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section
        className="bg-background py-20 md:py-24"
        data-ocid="about.overview.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who We Are
              </h2>
              <Separator className="w-16 bg-accent h-[2px] mb-0" />
            </div>
            <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                PrimeSpan Engineering Ltd was founded to address the growing
                demand for specialized technical expertise in North America's
                complex infrastructure landscape. Where generalist firms offer
                broad services, we deliver depth — rigorous analysis, defensible
                calculations, and project management that holds to schedule and
                budget.
              </p>
              <p>
                We specialize in structural analysis, mechanical engineering,
                and integrated project management for clients in the industrial,
                municipal, and energy sectors. Our engagements range from finite
                element analysis of critical structural components to full-scale
                project delivery oversight for capital infrastructure programs
                valued in the tens of millions.
              </p>
              <p>
                ISO-certified processes underpin every engagement. Our Quality
                Management System (ISO 9001:2015) and Occupational Health &amp;
                Safety program (ISO 45001:2018) ensure that every deliverable
                meets international standards — and that every jobsite, no
                matter the complexity, is managed with a safety-first mandate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="bg-muted/20 border-y border-border py-20 md:py-24"
        data-ocid="about.certifications.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-accent/40 text-accent text-xs tracking-widest uppercase"
            >
              Credentials
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Certifications &amp; Credentials
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our certifications are operational commitments embedded in every
              project workflow — not compliance checkboxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.id}
                  className={`border ${cert.borderClass} ${cert.bgClass} bg-card`}
                  data-ocid={`about.cert.item.${idx + 1}`}
                >
                  <CardContent className="p-7">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-lg border ${cert.borderClass} ${cert.bgClass} mb-5`}
                    >
                      <Icon
                        className={`w-7 h-7 ${cert.accentClass}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <Badge
                      variant="outline"
                      className={`mb-3 text-xs font-mono tracking-wider border-border/60 ${cert.accentClass}`}
                    >
                      {cert.badge}
                    </Badge>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${cert.accentClass} mb-4`}
                    >
                      {cert.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {cert.description}
                    </p>
                    <Separator className="bg-border/40 mb-4" />
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground/60">
                          Issued by:{" "}
                        </span>
                        {cert.issuingBody}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section
        className="bg-background py-20 md:py-24"
        data-ocid="about.values.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-accent/40 text-accent text-xs tracking-widest uppercase"
            >
              Values
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Commitment
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Three principles drive every engagement — from the first site
              walkthrough to final project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.id}
                  className="flex flex-col items-start"
                  data-ocid={`about.value.item.${idx + 1}`}
                >
                  <div className="mb-5 p-3 rounded-lg border border-border bg-card">
                    <Icon className={`w-6 h-6 ${v.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-card border-t border-border py-20 md:py-24"
        data-ocid="about.cta.section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work with PrimeSpan
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Bring us your most complex infrastructure challenges. Our team of
            licensed engineers is ready to deliver precision analysis and
            project certainty.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide uppercase text-sm px-8 transition-smooth"
              data-ocid="about.cta.primary_button"
            >
              Request Technical Quote
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
