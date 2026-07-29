import { motion } from "motion/react";
import {
  ArrowRight,
  Receipt,
  FileText,
  BookOpen,
  Calculator,
  Percent,
  Building2,
  BarChart3,
  Users,
  Landmark,
} from "lucide-react";
import { Section, SectionHeading } from "./primitives";

const services = [
  {
    icon: Receipt,
    title: "GST Services",
    items: ["GST Registration", "GST Return Filing", "GST Compliance", "GST Consultation"],
  },
  {
    icon: FileText,
    title: "Income Tax",
    items: ["Income Tax Return Filing", "Individual & Business ITR", "Tax Planning", "Notice Handling"],
  },
  {
    icon: BookOpen,
    title: "Accounting",
    items: ["Bookkeeping", "Journal Entries", "Ledger Management", "Bank Reconciliation"],
  },
  {
    icon: Calculator,
    title: "Tally Services",
    items: ["Tally Setup", "Data Entry", "Inventory", "Voucher Entry & Support"],
  },
  {
    icon: Percent,
    title: "TDS Services",
    items: ["TDS Registration", "TDS Return Filing", "TDS Compliance", "Quarterly Returns"],
  },
  {
    icon: Building2,
    title: "MSME Registration",
    items: ["Udyam Registration", "MSME Certificate", "Business Registration", "Government Benefits"],
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    items: ["Balance Sheet", "Profit & Loss", "Cash Flow", "Trial Balance"],
  },
  {
    icon: Users,
    title: "Payroll",
    items: ["Salary Processing", "Employee Records", "PF & ESIC", "Payroll Compliance"],
  },
  {
    icon: Landmark,
    title: "ROC Compliance",
    items: ["Company Compliance", "Annual Filing", "Director KYC", "ROC Returns"],
  },
];

export function Services() {
  return (
    <Section id="services" muted>
      <SectionHeading
        eyebrow="Services"
        title="Complete accounting & compliance support"
        subtitle="Every service is handled personally, with clear timelines and transparent pricing."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-2xl border border-border bg-background/70 p-7 shadow-card backdrop-blur-sm transition-colors hover:border-primary/30"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
              <s.icon className="size-5" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <ul className="mt-3 flex-1 space-y-1.5 text-sm text-muted-foreground">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Enquire now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}