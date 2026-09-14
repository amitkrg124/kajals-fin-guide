import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { Footer, FloatingActions } from "@/components/site/Footer";

const groups = [
  {
    title: "Registration",
    description: "Registrations handled end-to-end with clear document guidance.",
    services: [
      ["Company Registration", "₹6,999 onwards"],
      ["GST Registration", "₹899 onwards"],
      ["TDS Registration", "₹1,499 onwards"],
      ["EPF Registration", "₹3,499 onwards"],
      ["ESIC Registration", "₹2,999 onwards"],
      ["MSME Registration", "₹999 onwards"],
    ],
  },
  {
    title: "Return Filing",
    description: "Timely preparation, review and submission of statutory returns.",
    services: [
      ["Income Tax Return (ITR)", "₹799 onwards"],
      ["GST Return Filing", "₹499/month onwards"],
      ["TDS Return", "₹1,499/quarter"],
      ["ROC Return", "₹4,999 onwards"],
    ],
  },
  {
    title: "Accounting",
    description: "Reliable monthly records for better reporting and decisions.",
    services: [
      ["Bookkeeping", "₹2,999/month onwards"],
      ["Accounting", "₹4,999/month onwards"],
    ],
  },
  {
    title: "Assurance & Digital",
    description: "Professional support for audit and secure digital filings.",
    services: [
      ["Auditing", "On request"],
      ["Digital Signature (DSC)", "₹1,499 onwards"],
    ],
  },
];

const gstPlans = [
  { name: "GST Registration", price: "₹899", cadence: "onwards", note: "End-to-end GSTIN allotment" },
  { name: "NIL GST Filing", price: "₹499", cadence: "/ month", note: "No monthly outward transactions" },
  { name: "Monthly GST Filing", price: "₹999", cadence: "/ month", note: "GSTR-1 + 3B and ITC reconciliation", popular: true },
  { name: "Quarterly GST Filing", price: "₹2,499", cadence: "/ quarter", note: "QRMP scheme filings" },
];

const TITLE = "Accounting & GST Pricing | FinScale Advisory";
const DESCRIPTION = "Transparent starting prices for GST, ITR, TDS, accounting, company registration and compliance services from FinScale Advisory.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kajals-fin-guide.lovable.app/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kajals-fin-guide.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <section className="border-b border-border bg-primary pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.16em] uppercase">
              Transparent fees
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 max-w-3xl text-4xl leading-tight font-semibold md:text-6xl">
              Clear pricing for essential financial work.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
              Start with a published price, then receive a precise scope before work begins. No hidden service charges.
            </motion.p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-x-14 gap-y-16 lg:grid-cols-2">
              {groups.map((group, index) => (
                <motion.article key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <div className="border-b-2 border-primary pb-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-gold-foreground uppercase">0{index + 1}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{group.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
                  </div>
                  <dl>
                    {group.services.map(([service, price]) => (
                      <div key={service} className="grid grid-cols-[1fr_auto] gap-4 border-b border-border py-4">
                        <dt className="text-sm font-medium">{service}</dt>
                        <dd className="text-right text-sm font-semibold text-primary">{price}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">GST plans</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Choose the filing rhythm that fits</h2>
              <p className="mt-4 text-muted-foreground">Practical GST support for new registrations, nil returns and active businesses.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {gstPlans.map((plan) => (
                <article key={plan.name} className={`relative flex min-h-72 flex-col border bg-background p-6 shadow-card ${plan.popular ? "border-gold border-t-4" : "border-border"}`}>
                  {plan.popular && <span className="mb-5 inline-flex w-fit items-center gap-1.5 bg-primary px-2.5 py-1 text-[11px] font-semibold tracking-[0.1em] text-primary-foreground uppercase"><Sparkles className="size-3" /> Most popular</span>}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-5 text-3xl font-semibold text-primary">{plan.price}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{plan.cadence}</p>
                  <p className="mt-6 flex gap-2 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-gold-foreground" />{plan.note}</p>
                  <Button asChild variant={plan.popular ? "default" : "outline"} className="mt-auto w-full">
                    <Link to="/" hash="contact">Choose plan</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-8 border-t-4 border-gold bg-primary px-7 py-12 text-primary-foreground md:grid-cols-[1fr_auto] md:px-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase opacity-75">Custom plan</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Multiple entities or payroll-heavy operations?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-80">We’ll prepare a tailored monthly scope based on transaction volume, team size and compliance requirements.</p>
            </div>
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/" hash="contact">Request custom plan <ArrowRight /></Link>
            </Button>
          </div>
          <p className="mx-auto mt-8 max-w-6xl px-5 text-center text-xs text-muted-foreground md:px-8">All prices are in Indian rupees. GST is extra. Final fees may vary based on complexity, transaction volume and pending compliance.</p>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}