import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useCaseStudies";
import type { ContactFormData } from "@/types";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";

const MAX_SCOPE = 1000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function ContactPage() {
  const submitContact = useSubmitContact();

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    projectScope: "",
  });

  const [touched, setTouched] = useState<
    Record<keyof ContactFormData, boolean>
  >({
    name: false,
    company: false,
    email: false,
    projectScope: false,
  });

  const [submittedName, setSubmittedName] = useState("");

  function getErrors(): FieldErrors {
    const e: FieldErrors = {};
    if (touched.name && !form.name.trim()) e.name = "Name is required.";
    if (touched.company && !form.company.trim())
      e.company = "Company is required.";
    if (touched.email && !form.email.trim()) {
      e.email = "Email address is required.";
    } else if (touched.email && !isValidEmail(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (touched.projectScope && !form.projectScope.trim()) {
      e.projectScope = "Project scope is required.";
    } else if (touched.projectScope && form.projectScope.length > MAX_SCOPE) {
      e.projectScope = `Must be ${MAX_SCOPE} characters or fewer.`;
    }
    return e;
  }

  const errors = getErrors();
  const charsRemaining = MAX_SCOPE - form.projectScope.length;

  const isFormValid =
    form.name.trim() !== "" &&
    form.company.trim() !== "" &&
    isValidEmail(form.email) &&
    form.projectScope.trim() !== "" &&
    form.projectScope.length <= MAX_SCOPE;

  function handleBlur(field: keyof ContactFormData) {
    setTouched((p) => ({ ...p, [field]: true }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, company: true, email: true, projectScope: true });
    if (!isFormValid) return;
    try {
      await submitContact.mutateAsync(form);
      setSubmittedName(form.name);
    } catch {
      // error surfaces via submitContact.isError
    }
  }

  const isSuccess = submitContact.isSuccess;

  return (
    <div className="bg-background text-foreground" data-ocid="contact.page">
      {/* Hero Band */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="contact.hero.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-4 border-accent/40 text-accent text-xs tracking-widest uppercase"
          >
            Contact
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Request Technical Quote
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Our engineering team will review your project scope and respond
            within 24 business hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="bg-background py-16 md:py-20"
        data-ocid="contact.form.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-3" data-ocid="contact.form.panel">
              {isSuccess ? (
                <Card
                  className="border border-emerald-400/30 bg-emerald-400/5"
                  data-ocid="contact.success_state"
                >
                  <CardContent className="p-10 text-center">
                    <CheckCircle2
                      className="w-14 h-14 text-emerald-400 mx-auto mb-5"
                      strokeWidth={1.5}
                    />
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      Request Received
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      Thank you,{" "}
                      <span className="font-semibold text-foreground">
                        {submittedName}
                      </span>
                      . Your request has been received. Our team will contact
                      you within 24 business hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  data-ocid="contact.form"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="c-name"
                        className="text-sm font-semibold text-foreground/80 tracking-wide"
                      >
                        Full Name <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="c-name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        onBlur={() => handleBlur("name")}
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        className={`bg-card border-border focus-visible:ring-accent/30 transition-smooth ${
                          errors.name ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.name.input"
                      />
                      {errors.name && (
                        <p
                          className="flex items-center gap-1.5 text-sm text-destructive"
                          data-ocid="contact.name.field_error"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="c-company"
                        className="text-sm font-semibold text-foreground/80 tracking-wide"
                      >
                        Company <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="c-company"
                        type="text"
                        placeholder="Acme Infrastructure Inc."
                        value={form.company}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, company: e.target.value }))
                        }
                        onBlur={() => handleBlur("company")}
                        autoComplete="organization"
                        aria-invalid={!!errors.company}
                        className={`bg-card border-border focus-visible:ring-accent/30 transition-smooth ${
                          errors.company ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.company.input"
                      />
                      {errors.company && (
                        <p
                          className="flex items-center gap-1.5 text-sm text-destructive"
                          data-ocid="contact.company.field_error"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="c-email"
                        className="text-sm font-semibold text-foreground/80 tracking-wide"
                      >
                        Email Address <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="c-email"
                        type="email"
                        placeholder="jane.smith@acme.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        onBlur={() => handleBlur("email")}
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        className={`bg-card border-border focus-visible:ring-accent/30 transition-smooth ${
                          errors.email ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.email.input"
                      />
                      {errors.email && (
                        <p
                          className="flex items-center gap-1.5 text-sm text-destructive"
                          data-ocid="contact.email.field_error"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Project Scope */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="c-scope"
                        className="text-sm font-semibold text-foreground/80 tracking-wide"
                      >
                        Project Scope <span className="text-accent">*</span>
                      </Label>
                      <Textarea
                        id="c-scope"
                        placeholder="Describe your project: type of structure or system, materials, key technical constraints, applicable standards or codes, and your desired timeline."
                        rows={7}
                        value={form.projectScope}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            projectScope: e.target.value,
                          }))
                        }
                        onBlur={() => handleBlur("projectScope")}
                        aria-invalid={!!errors.projectScope}
                        className={`bg-card border-border focus-visible:ring-accent/30 transition-smooth resize-none ${
                          errors.projectScope ? "border-destructive" : ""
                        }`}
                        data-ocid="contact.project_scope.textarea"
                      />
                      <div className="flex items-start justify-between gap-3 min-h-[1.25rem]">
                        <div>
                          {errors.projectScope && (
                            <p
                              className="flex items-center gap-1.5 text-sm text-destructive"
                              data-ocid="contact.project_scope.field_error"
                            >
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                              {errors.projectScope}
                            </p>
                          )}
                        </div>
                        <p
                          className={`text-xs font-mono shrink-0 tabular-nums ${
                            charsRemaining < 0
                              ? "text-destructive font-semibold"
                              : charsRemaining < 100
                                ? "text-amber-400"
                                : "text-muted-foreground"
                          }`}
                          data-ocid="contact.project_scope.char_counter"
                        >
                          {charsRemaining} / {MAX_SCOPE}
                        </p>
                      </div>
                    </div>

                    {/* Mutation error */}
                    {submitContact.isError && (
                      <div
                        className="flex items-start gap-3 p-4 rounded-md border border-destructive/40 bg-destructive/5"
                        data-ocid="contact.error_state"
                      >
                        <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">
                          There was an issue submitting your request. Please try
                          again or contact us directly by email.
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitContact.isPending}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold tracking-wide uppercase text-sm transition-smooth disabled:opacity-60"
                      data-ocid="contact.submit_button"
                    >
                      {submitContact.isPending ? (
                        <span
                          className="flex items-center gap-2"
                          data-ocid="contact.loading_state"
                        >
                          <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                          Submitting…
                        </span>
                      ) : (
                        "Submit Technical Quote Request"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Panel */}
            <aside
              className="lg:col-span-2 space-y-5"
              data-ocid="contact.info.panel"
            >
              {/* Company details */}
              <Card className="border border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <Building2
                      className="w-5 h-5 text-accent"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display font-bold text-foreground">
                      PrimeSpan Engineering Ltd
                    </h3>
                  </div>
                  <Separator className="bg-border/50 mb-5" />
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail
                        className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                          Email
                        </p>
                        <p className="text-sm text-foreground">
                          contact@primespan.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone
                        className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                          Phone
                        </p>
                        <p className="text-sm text-foreground">
                          +1 (604) 555-0182
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Linkedin
                        className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                          LinkedIn
                        </p>
                        <p className="text-sm text-foreground break-all">
                          linkedin.com/company/primespan-engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response commitment */}
              <Card className="border border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    <h4 className="font-semibold text-foreground text-sm">
                      Response Commitment
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All technical quote requests are reviewed by a licensed
                    engineer. You will receive a substantive response — not an
                    auto-reply — within{" "}
                    <span className="font-semibold text-foreground">
                      24 business hours
                    </span>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* Certifications callout */}
              <Card className="border border-border bg-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground text-sm mb-4">
                    Certifications
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "ISO 9001:2015", desc: "Quality Management" },
                      {
                        label: "ISO 45001:2018",
                        desc: "Occupational Health & Safety",
                      },
                      { label: "PE Licensed", desc: "Multiple Jurisdictions" },
                    ].map((cert) => (
                      <div
                        key={cert.label}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="text-xs font-mono text-accent font-semibold shrink-0">
                          {cert.label}
                        </span>
                        <span className="text-xs text-muted-foreground text-right">
                          {cert.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
