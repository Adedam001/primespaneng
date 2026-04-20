import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Triangle, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" as const },
  { label: "Services", href: "/services" as const },
  { label: "Portfolio", href: "/portfolio" as const },
  { label: "About", href: "/about" as const },
  { label: "Contact", href: "/contact" as const },
];

function QuoteCTA({ className = "" }: { className?: string }) {
  return (
    <Link to="/contact" data-ocid="header.quote_button">
      <Button
        className={`bg-accent text-accent-foreground font-semibold uppercase tracking-wider text-xs px-5 py-2.5 hover:opacity-90 transition-smooth border-0 ${className}`}
      >
        Request Technical Quote
      </Button>
    </Link>
  );
}

export function Header() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          data-ocid="header.logo_link"
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

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1 flex-1 justify-center"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`header.nav.${link.label.toLowerCase()}_link`}
              className={`px-4 py-2 text-sm font-medium transition-smooth rounded-sm uppercase tracking-wider ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <QuoteCTA />
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
              data-ocid="header.mobile_menu_button"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-card border-l border-border w-72 p-0"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-display font-bold text-foreground text-sm tracking-tight uppercase">
                PrimeSpan Engineering
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                data-ocid="header.mobile_menu_close_button"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`header.mobile_nav.${link.label.toLowerCase()}_link`}
                  className={`px-4 py-3 text-sm font-medium transition-smooth rounded uppercase tracking-wider ${
                    isActive(link.href)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-0">
                <QuoteCTA className="w-full justify-center" />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
