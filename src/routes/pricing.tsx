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
  {
    name: "GST Registration",
    description: "End-to-end GSTIN allotment for new businesses.",
    price: "₹899",
    cadence: "onwards",
    features: [
      "Document review & support",
      "ARN generation",
      "Officer follow-up",
      "GSTIN delivery",
      "Post-registration advisory",
    ],
  },
  {
    name: "NIL GST Filing",
    description: "For businesses with no monthly outward transactions.",
    price: "₹499",
    cadence: "/ month",
    features: [
      "GSTR-1 NIL filing",
      "GSTR-3B NIL filing",
      "Late-fee protection",
      "Compliance reminders",
    ],
  },
  {
    name: "Monthly GST Filing",
    description: "For active businesses filing monthly returns.",
    price: "₹999",
    cadence: "/ month",
    popular: true,
    features: [
      "GSTR-1 filing",
      "GSTR-3B filing",
      "Invoice recording",
      "ITC reconciliation",
      "Dedicated support",
    ],
  },
  {
    name: "Quarterly GST Filing",
    description: "QRMP scheme filings with quarterly support.",
    price: "₹2,499",
    cadence: "/ quarter",
    features: [
      "GSTR-1 (Quarterly)",
      "GSTR-3B (Quarterly)",
      "Invoice recording",
      "ITC reconciliation",
      "Quarterly compliance",
    ],
  },
];

const TITLE = "Accounting & GST Pricing Delhi | FinScale Advisory";
const DESCRIPTION =
  "Transparent pricing for GST registration, ITR filing, TDS, bookkeeping, and company registration in Delhi NCR by FinScale Advisory.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kajals-fin-guide.lovable.app/pricing" },
      { property: "og:image", content: "https://kajals-fin-guide.lovable.app/finscale-advisory-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
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
        {/* Modern Bright Header Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              <span>Transparent Fees &amp; Retainers</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Clear pricing for essential financial work.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Start with a published price, then receive a precise scope before work begins. No hidden service charges or unexpected invoices.
            </motion.p>
          </div>
        </section>

        {/* GST Filing Plans Section */}
        <section className="border-b border-border bg-slate-50/50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                GST Plans
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Choose the filing rhythm that fits
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Practical GST support for new registrations, nil returns and active businesses.
              </p>
            </div>

            {/* Exact Grid matching user screenshot */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              {gstPlans.map((plan, index) => (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col justify-between rounded-2xl bg-white p-6 md:p-7 shadow-xs transition-all duration-300 hover:shadow-md ${
                    plan.popular
                      ? "border-2 border-primary ring-1 ring-primary/20 shadow-lg lg:-translate-y-2 z-10"
                      : "border border-slate-200/90"
                  }`}
                >
                  {/* Floating Most Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-amber-500 px-3.5 py-1 text-[10px] font-bold tracking-wider text-slate-950 uppercase shadow-xs">
                      <Sparkles className="size-3" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-1.5 min-h-[36px] text-xs leading-relaxed text-slate-500">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                        {plan.price}
                      </span>
                      <span className="text-xs font-normal text-slate-500">
                        {plan.cadence}
                      </span>
                    </div>

                    {/* Features List with green checkmarks */}
                    <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Now Button */}
                  <div className="mt-8 pt-2">
                    <Button
                      asChild
                      className={`w-full rounded-xl py-2.5 text-xs font-semibold shadow-xs transition-all ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md"
                          : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Link to="/" hash="contact">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Other Service Groups */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl mb-12">
              <p className="border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                All Services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Comprehensive Compliance Catalog
              </h2>
            </div>

            <div className="grid gap-x-14 gap-y-12 lg:grid-cols-2">
              {groups.map((group, index) => (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="border-b-2 border-primary/20 pb-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">0{index + 1}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground">{group.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
                  </div>
                  <dl>
                    {group.services.map(([service, price]) => (
                      <div key={service} className="grid grid-cols-[1fr_auto] gap-4 border-b border-border/80 py-4 last:border-0">
                        <dt className="text-sm font-medium text-foreground">{service}</dt>
                        <dd className="text-right text-sm font-semibold text-primary">{price}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Plan Banner */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary/95 to-primary-dark p-8 text-primary-foreground shadow-lift md:grid-cols-[1fr_auto] md:p-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Custom plan</p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-white">Multiple entities or payroll-heavy operations?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200">
                  We’ll prepare a tailored monthly scope based on transaction volume, team size and compliance requirements.
                </p>
              </div>
              <Button asChild size="lg" className="bg-gold text-gold-foreground font-semibold hover:bg-gold/90 shadow-md">
                <Link to="/" hash="contact" className="flex items-center gap-2">
                  Request custom plan <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground">
              All prices are in Indian rupees. GST is extra as applicable. Final fees may vary based on complexity, transaction volume and pending compliance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}