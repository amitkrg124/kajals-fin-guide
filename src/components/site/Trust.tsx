import {
  Award,
  IndianRupee,
  CalendarCheck,
  ShieldCheck,
  Eye,
  HeartHandshake,
  Zap,
  Smile,
  Store,
  Factory,
  Laptop,
  Stethoscope,
  Scale,
  UtensilsCrossed,
  Rocket,
  Building2,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  HardHat,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const reasons = [
  { icon: Award, title: "Experienced Professional" },
  { icon: IndianRupee, title: "Affordable Pricing" },
  { icon: CalendarCheck, title: "Timely Filing" },
  { icon: ShieldCheck, title: "Data Security" },
  { icon: Eye, title: "Transparent Process" },
  { icon: HeartHandshake, title: "Personalized Support" },
  { icon: Zap, title: "Quick Response" },
  { icon: Smile, title: "Client Satisfaction" },
];

const steps = [
  { title: "Contact", note: "Share your requirement over a free consultation." },
  { title: "Document Collection", note: "A simple checklist of what is needed." },
  { title: "Verification", note: "Records are reviewed for accuracy." },
  { title: "Processing", note: "Filings and statements are prepared." },
  { title: "Submission", note: "Returns filed with the relevant department." },
  { title: "Completion", note: "Acknowledgement and records handed over." },
];

const industries = [
  { icon: Store, label: "Retail" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Laptop, label: "Freelancers" },
  { icon: Stethoscope, label: "Doctors" },
  { icon: Scale, label: "Lawyers" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Rocket, label: "Startups" },
  { icon: Building2, label: "MSME" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Briefcase, label: "Consultants" },
  { icon: GraduationCap, label: "Education" },
  { icon: HardHat, label: "Construction" },
];

export function WhyChoose() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Kajal"
        title="Why clients choose to work with Kajal"
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 0.07}>
            <div className="h-full rounded-2xl border border-border p-6 transition-shadow hover:shadow-card">
              <r.icon className="size-5 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-sm font-semibold">{r.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" muted>
      <SectionHeading
        eyebrow="How it works"
        title="A clear, six-step working process"
        subtitle="You always know exactly where your filing stands."
      />
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <li className="relative h-full rounded-2xl border border-border bg-background p-7 shadow-card">
              <span className="font-display text-xs font-semibold tracking-widest text-primary uppercase">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Industries() {
  return (
    <Section>
      <SectionHeading eyebrow="Industries" title="Industries served across Delhi NCR" />
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((ind, i) => (
          <Reveal key={ind.label} delay={(i % 6) * 0.05}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-6 text-center transition-colors hover:border-primary/30">
              <ind.icon className="size-5 text-primary" strokeWidth={1.6} />
              <span className="text-sm font-medium">{ind.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}