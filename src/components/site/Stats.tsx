import { CountUp, Reveal, Section } from "./primitives";

const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "+", label: "Returns Filed" },
  { value: 100, suffix: "+", label: "GST Registrations" },
  { value: 40, suffix: "+", label: "Businesses Served" },
];

export function Stats() {
  return (
    <Section className="border-b border-border py-12 md:py-14 bg-surface/40">
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block font-display text-3xl font-semibold text-primary md:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {s.label}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}