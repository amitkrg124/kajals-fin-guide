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
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Receipt,
    title: "GST Services",
    items: ["GST Registration", "GST Return Filing", "GST Compliance", "GST Consultation"],
    price: "From ₹499/month",
  },
  {
    icon: FileText,
    title: "Income Tax",
    items: ["Income Tax Return Filing", "Individual & Business ITR", "Tax Planning", "Notice Handling"],
    price: "ITR from ₹799",
  },
  {
    icon: BookOpen,
    title: "Accounting",
    items: ["Bookkeeping", "Journal Entries", "Ledger Management", "Bank Reconciliation"],
    price: "From ₹2,999/month",
  },
  {
    icon: Calculator,
    title: "Tally Services",
    items: ["Tally Setup", "Data Entry", "Inventory", "Voucher Entry & Support"],
    price: "Custom quote",
  },
  {
    icon: Percent,
    title: "TDS Services",
    items: ["TDS Registration", "TDS Return Filing", "TDS Compliance", "Quarterly Returns"],
    price: "From ₹1,499",
  },
  {
    icon: Building2,
    title: "MSME Registration",
    items: ["Udyam Registration", "MSME Certificate", "Business Registration", "Government Benefits"],
    price: "From ₹999",
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    items: ["Balance Sheet", "Profit & Loss", "Cash Flow", "Trial Balance"],
    price: "Custom quote",
  },
  {
    icon: Users,
    title: "Payroll",
    items: ["Salary Processing", "Employee Records", "PF & ESIC", "Payroll Compliance"],
    price: "Custom plan",
  },
  {
    icon: Landmark,
    title: "ROC Compliance",
    items: ["Company Compliance", "Annual Filing", "Director KYC", "ROC Returns"],
    price: "From ₹4,999",
  },
];

export function Services() {
  return (
    <Section id="services" muted>
      <SectionHeading
        eyebrow="Services"
        title="Complete accounting & compliance support"
        subtitle="Transparent starting prices, clear timelines and personal attention throughout."
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
            className="group flex flex-col border border-border bg-background p-7 shadow-card transition-colors hover:border-gold"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
              <s.icon className="size-5" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-xs font-semibold tracking-[0.1em] text-primary uppercase">{s.price}</p>
            <ul className="mt-3 flex-1 space-y-1.5 text-sm text-muted-foreground">
              {s.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/"
              hash="contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Enquire now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">All prices are in Indian rupees. GST is charged extra where applicable.</p>
        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-foreground">
          View complete pricing <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}