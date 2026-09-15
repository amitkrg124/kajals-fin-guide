import { motion } from "motion/react";
import { Award, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const timeline = [
  { title: "Financial Accounting", note: "Accurate books, ledgers and monthly reconciliations" },
  { title: "Income Tax & ITR Filing", note: "Strategic tax planning, TDS, and hassle-free returns" },
  { title: "GST Compliance", note: "New registrations, monthly/quarterly filings & advisory" },
  { title: "Business Registration", note: "MSME/Udyam, Company & ROC filings" },
  { title: "Bookkeeping & Tally", note: "Day-to-day transaction records & error-free reporting" },
  { title: "Payroll & Statutory Compliance", note: "Salary structuring, EPF & ESIC support" },
];

export function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Left column: Profile card featuring Kajal's photo */}
        <div className="lg:col-span-5">
          <Reveal x={-20} y={0}>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-border bg-background shadow-card">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <img
                  src="/kajal-portrait.jpg"
                  alt="Kajal — Professional Accounting and Tax Consultant at FinScale Advisory"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs">
                    <Sparkles className="size-3" /> Founder &amp; Lead Consultant
                  </div>
                  <h3 className="mt-2 text-2xl font-bold font-display">Kajal</h3>
                  <p className="text-xs tracking-wider uppercase opacity-90 text-slate-200">
                    Accounting &amp; Tax Consultant
                  </p>
                </div>
              </div>

              {/* Badges footer */}
              <div className="grid grid-cols-2 divide-x divide-border border-t border-border bg-surface p-4 text-center">
                <div className="px-2">
                  <p className="text-2xl font-bold text-primary font-display">4+ Years</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Expert Advisory</p>
                </div>
                <div className="px-2">
                  <p className="text-2xl font-bold text-primary font-display">50+ Clients</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Across Delhi NCR</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column: About details and service timeline */}
        <div className="lg:col-span-7">
          <SectionHeading
            align="left"
            eyebrow="About FinScale Advisory"
            title="Personal Expertise. Professional Standards."
            subtitle="Led by Kajal, FinScale Advisory delivers end-to-end accounting, GST, income tax, and business registration services designed to give you clarity and compliance peace of mind."
          />

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              With <strong>4+ years</strong> of dedicated experience in Indian taxation and accounting,
              we have successfully processed <strong>100+ tax returns</strong>, facilitated <strong>100+ GST registrations</strong>,
              and helped over <strong>40+ businesses</strong> build solid financial foundations.
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <li className="flex items-start gap-3 rounded-xl border border-border/80 bg-surface/50 p-3.5 transition-colors hover:border-primary/40 hover:bg-surface">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{t.title}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{t.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}