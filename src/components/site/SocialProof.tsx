import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const logos = [
  "Nova Retail",
  "Sharma Textiles",
  "BrightEdge Labs",
  "Kapoor & Sons",
  "UrbanCrate",
  "Medisure Clinic",
  "Zenith Foods",
  "Delhi Craftworks",
];

const testimonials = [
  {
    quote:
      "Kajal handled our GST and accounting with complete professionalism. Highly recommended.",
    name: "Rahul Mehta",
    role: "Founder, Nova Retail",
  },
  {
    quote:
      "My ITR was filed well before the deadline and every question was answered patiently. Effortless experience.",
    name: "Ananya Sharma",
    role: "Freelance Designer",
  },
  {
    quote:
      "Our payroll and TDS compliance is finally organised. Monthly reports arrive on time, every time.",
    name: "Vikram Singh",
    role: "Director, Zenith Foods",
  },
];

export function ClientLogos() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-surface py-10">
      <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Trusted by businesses across Delhi NCR
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          className="flex w-max gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-lg font-semibold whitespace-nowrap text-muted-foreground/60"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[index];

  return (
    <Section muted>
      <SectionHeading eyebrow="Testimonials" title="What clients say" />
      <div className="relative mx-auto mt-12 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-border bg-background/80 p-9 shadow-card backdrop-blur-sm"
          >
            <Quote className="size-6 text-primary" strokeWidth={1.6} />
            <blockquote className="mt-5 font-display text-lg leading-relaxed font-medium md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-primary">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
              <span className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-primary" : "w-2.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function GrowthBanner() {
  return (
    <Section className="py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-primary-foreground/10"
          />
          <h2 className="text-2xl font-semibold md:text-3xl">
            Need Expert Accounting &amp; Tax Assistance?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 md:text-base">
            Book your free consultation today and get a clear plan for your compliance.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </Reveal>
    </Section>
  );
}