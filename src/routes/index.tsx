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

const TITLE = "Accounting & Tax Consultant in Delhi | Kajal";
const DESCRIPTION =
  "Kajal offers GST, income tax, TDS, bookkeeping, payroll and MSME registration services in Delhi for individuals, freelancers, startups and businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
