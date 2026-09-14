import { Reveal, Section, SectionHeading } from "./primitives";
import portraitAsset from "@/assets/kajal-professional-portrait.png.asset.json";

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
          <div className="relative">
            <div className="overflow-hidden border border-border shadow-card">
              <img
                src={portraitAsset.url}
                alt="Kajal, Accounting and Tax Consultant based in Delhi"
                width={912}
                height={1104}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -right-4 -bottom-6 hidden border border-border bg-background px-5 py-4 shadow-card sm:block">
              <p className="font-display text-2xl font-semibold text-primary">8+</p>
              <p className="text-xs text-muted-foreground">Years advising clients</p>
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