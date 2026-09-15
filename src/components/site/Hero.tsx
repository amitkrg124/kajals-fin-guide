import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingBadges = [
  { label: "GST", className: "top-8 -left-3 md:-left-6" },
  { label: "ITR", className: "top-[42%] -left-4 md:-left-8" },
  { label: "TDS", className: "bottom-14 -left-2 md:-left-5" },
  { label: "Balance Sheet", className: "top-14 -right-3 md:-right-8" },
  { label: "Profit & Loss", className: "bottom-12 -right-3 md:-right-8" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/70 via-background to-background pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-xs"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Accounting &amp; Tax Consultant · Delhi, India</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]"
          >
            Trusted Accounting &amp; Tax Solutions for Individuals &amp; Businesses
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Helping businesses stay compliant with expert accounting, GST, Income Tax,
            bookkeeping, TDS, MSME registration, payroll, and financial reporting services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-lift transition-all"
            >
              <a href="#contact" className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border border-border bg-card px-5 text-sm font-medium text-foreground shadow-xs hover:bg-surface hover:text-foreground transition-all"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Hero Visual with Floating Tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:mx-0"
        >
          {/* Background Card */}
          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <img
              src="/hero-accountant-illustration.png"
              alt="Trusted accounting and tax consultant illustration"
              width={1000}
              height={850}
              className="h-auto w-full select-none object-contain"
              loading="eager"
            />

            {/* Floating Service & Report Pills */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + idx * 0.08,
                  ease: "easeOut",
                }}
                className={`absolute ${badge.className} z-10 flex items-center justify-center rounded-xl border border-border/90 bg-card/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-card backdrop-blur-xs select-none transition-transform hover:scale-105 hover:shadow-lift`}
              >
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}