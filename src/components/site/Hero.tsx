import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock, Lock, Award, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/kajal-professional-portrait.png.asset.json";
import { Link } from "@tanstack/react-router";

const badges = [
  { icon: BadgeCheck, label: "Trusted Service" },
  { icon: Award, label: "Expert Financial Guidance" },
  { icon: Clock, label: "Fast Response" },
  { icon: Lock, label: "100% Confidential" },
  { icon: ShieldCheck, label: "Experienced Professional" },
  { icon: MapPin, label: "Delhi Based" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-surface pt-28 pb-0 md:pt-36">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-12 px-5 md:px-8 lg:grid-cols-[1.16fr_0.84fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border-l-2 border-gold pl-3 text-xs font-semibold tracking-[0.15em] text-primary uppercase"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            Finance · Tax · Accounting · Delhi NCR
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-3xl text-4xl leading-[1.12] font-semibold md:text-5xl lg:text-[3.65rem]"
          >
            Financial clarity that moves your business forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            FinScale Advisory delivers dependable registration, tax filing, accounting and
            compliance support—personally led by Kajal for businesses and individuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Book a Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}
            className="mt-10 grid grid-cols-2 gap-3 pb-14 sm:grid-cols-3 md:pb-20"
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
          className="relative mx-auto w-full max-w-md self-end lg:mx-0"
        >
          <div className="overflow-hidden border-x border-t border-border bg-background shadow-card">
            <img
              src={portraitAsset.url}
              alt="Kajal, professional accountant and tax consultant at FinScale Advisory"
              width={768}
              height={768}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="border-t border-border bg-primary px-6 py-4 text-primary-foreground">
              <p className="font-display text-lg font-semibold">Kajal</p>
              <p className="mt-1 text-xs tracking-[0.12em] uppercase opacity-75">Accountant &amp; Tax Consultant</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}