import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Section, SectionHeading } from "./primitives";

const faqs = [
  {
    q: "How long does GST Registration take?",
    a: "With complete documents, GST registration is usually granted within 3–7 working days. We prepare and track the application until the GSTIN is issued.",
  },
  {
    q: "Who should file ITR?",
    a: "Any individual or business with taxable income above the basic exemption limit, plus anyone claiming a refund, carrying forward losses, or holding foreign assets.",
  },
  {
    q: "What documents are required?",
    a: "It depends on the service — typically PAN, Aadhaar, bank statements, invoices, and previous filings. You receive a short checklist tailored to your case.",
  },
  {
    q: "What is TDS?",
    a: "Tax Deducted at Source is tax withheld on specified payments such as salary, rent, or contractor fees, which must be deposited and reported quarterly.",
  },
  {
    q: "Do you provide bookkeeping?",
    a: "Yes — monthly bookkeeping, ledger management, bank reconciliation and Tally support are available on a retainer basis.",
  },
  {
    q: "Can I consult online?",
    a: "Absolutely. Most clients work entirely online through email and calls, with documents shared securely.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Still unsure about something? Send a message and get a straight answer."
      />
      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}