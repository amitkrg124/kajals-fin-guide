import { motion } from "motion/react";
import { Phone, ArrowRight, ShieldCheck, Clock, Lock, Award, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-accountant.jpg";

const badges = [
  { icon: BadgeCheck, label: "Trusted Service" },
  { icon: Award, label: "Expert Financial Guidance" },
  { icon: Clock, label: "Fast Response" },
  { icon: Lock, label: "100% Confidential" },
  { icon: ShieldCheck, label: "Experienced Professional" },
  { icon: MapPin, label: "Delhi Based" },
];

const floating = [
  { label: "GST", top: "8%", left: "-6%", delay: 0 },
  { label: "ITR", top: "30%", left: "-10%", delay: 0.4 },
  { label: "TDS", top: "62%", left: "-4%", delay: 0.8 },
  { label: "Balance Sheet", top: "16%", right: "-8%", delay: 0.2 },
  { label: "Profit & Loss", top: "72%", right: "-6%", delay: 0.6 },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[520px] rounded-full bg-accent opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 size-[460px] rounded-full bg-surface opacity-90 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Accounting &amp; Tax Consultant · Delhi, India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.1] font-semibold md:text-5xl lg:text-[3.4rem]"
          >
            Trusted Accounting &amp; Tax Solutions for Individuals &amp; Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Helping businesses stay compliant with expert accounting, GST, Income Tax,
            bookkeeping, TDS, MSME registration, payroll, and financial reporting services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:kajalmrg7@gmail.com">
                <Phone className="size-4" />
                Call Now
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
              >
                <Icon className="size-4 shrink-0 text-primary" strokeWidth={1.6} />
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:mx-0"
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-card">
            <img
              src={heroImage}
              alt="Accountant reviewing financial statements and tax documents at a minimal office desk"
              width={1200}
              height={1008}
              className="h-auto w-full"
            />
          </div>

          {floating.map((f) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 + f.delay },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: f.delay },
              }}
              style={{ top: f.top, left: f.left, right: f.right }}
              className="absolute hidden rounded-xl border border-border bg-background/80 px-3.5 py-2 text-xs font-medium shadow-card backdrop-blur-sm lg:block"
            >
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}