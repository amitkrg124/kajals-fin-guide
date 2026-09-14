import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChoose, Process, Industries } from "@/components/site/Trust";
import { ClientLogos, Testimonials, GrowthBanner } from "@/components/site/SocialProof";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer, FloatingActions } from "@/components/site/Footer";

const TITLE = "FinScale Advisory | Tax & Accounting Delhi";
const DESCRIPTION =
  "FinScale Advisory offers GST, income tax, TDS, bookkeeping, payroll and registration services in Delhi for individuals and businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kajals-fin-guide.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kajals-fin-guide.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChoose />
        <Process />
        <Industries />
        <ClientLogos />
        <Testimonials />
        <FAQ />
        <GrowthBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
    </div>
  );
}
