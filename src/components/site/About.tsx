import { Reveal, Section, SectionHeading } from "./primitives";

const timeline = [
  { title: "Financial Accounting", note: "Accurate books, ledgers and reconciliations" },
  { title: "Taxation", note: "Income tax planning and return filing" },
  { title: "GST Compliance", note: "Registration, returns and advisory" },
  { title: "Business Registration", note: "MSME, Udyam and company filings" },
  { title: "Bookkeeping", note: "Day-to-day records and Tally management" },
  { title: "Payroll", note: "Salary processing, PF and ESIC compliance" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal x={-24} y={0}>
          <div className="border-t-4 border-gold bg-primary px-8 py-12 text-primary-foreground md:px-12 md:py-16">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase opacity-70">FinScale approach</p>
            <blockquote className="mt-6 font-display text-3xl leading-snug font-semibold md:text-4xl">
              “Good financial work should create confidence—not complexity.”
            </blockquote>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-foreground/20 pt-7">
              <div>
                <p className="font-display text-3xl font-semibold text-gold">8+</p>
                <p className="mt-1 text-xs uppercase opacity-70">Years advising clients</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-gold">Delhi</p>
                <p className="mt-1 text-xs uppercase opacity-70">Local, online support</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="The professional behind FinScale"
            title="Personal expertise. Professional standards."
            subtitle="Kajal is an experienced Accounting and Tax Consultant based in Delhi, providing comprehensive financial and compliance solutions through FinScale Advisory for individuals, startups and established businesses."
          />
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Her goal is to simplify financial management while ensuring complete compliance
              with government regulations.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-5 border-l border-border pl-6">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07}>
                <li className="relative">
                  <span className="absolute top-1.5 -left-[31px] size-2.5 rounded-full border-2 border-primary bg-background" />
                  <h3 className="text-sm font-semibold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.note}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}