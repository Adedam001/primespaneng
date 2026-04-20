import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Triangle } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    label: "ISO 9001",
    sublabel: "Quality Management",
    desc: "Certified",
  },
  {
    icon: ShieldCheck,
    label: "ISO 45001",
    sublabel: "Occupational Health & Safety",
    desc: "Certified",
  },
  {
    icon: BadgeCheck,
    label: "PE License",
    sublabel: "Professional Engineers",
    desc: "Licensed",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 w-fit"
              data-ocid="footer.logo_link"
            >
              <div className="flex items-center gap-1">
                <Triangle
                  className="w-5 h-5 text-accent fill-accent"
                  strokeWidth={1.5}
                />
                <Triangle
                  className="w-3.5 h-3.5 text-accent/60 fill-accent/60 -ml-2 mt-1"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-sm tracking-tight">
                  PrimeSpan
                </span>
                <span className="font-body text-muted-foreground text-[10px] tracking-widest uppercase">
                  Engineering Ltd.
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Precision engineering solutions for complex infrastructure and
              industrial challenges across North America.
            </p>
            <nav className="flex flex-wrap gap-4 mt-2">
              {(
                [
                  { label: "Services", href: "/services" as const },
                  { label: "Portfolio", href: "/portfolio" as const },
                  { label: "About", href: "/about" as const },
                  { label: "Contact", href: "/contact" as const },
                ] as const
              ).map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  data-ocid={`footer.nav.${l.label.toLowerCase()}_link`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-smooth uppercase tracking-wider"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Certifications & Credentials
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-3 p-3 bg-muted/30 border border-border rounded-sm"
                  data-ocid={`footer.cert.${cert.label.toLowerCase().replace(/\s/g, "_")}_badge`}
                >
                  <cert.icon className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground font-display">
                      {cert.label}
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      — {cert.sublabel}
                    </span>
                  </div>
                  <span className="ml-auto text-xs text-accent font-semibold uppercase tracking-wider">
                    {cert.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} PrimeSpan Engineering Ltd. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
