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

const TITLE = "FinScale Advisory | Expert Accounting & Tax Consultant in Delhi | Kajal";
const DESCRIPTION =
  "Trusted Accounting, GST, Income Tax (ITR), TDS, Bookkeeping & MSME registration in Delhi NCR. 4+ years experience, 50+ clients, 100+ GST registrations. Book a consultation!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kajals-fin-guide.lovable.app/" },
      { property: "og:image", content: "https://kajals-fin-guide.lovable.app/finscale-advisory-logo.png" },
      { property: "og:image:alt", content: "FinScale Advisory Logo and Services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://kajals-fin-guide.lovable.app/finscale-advisory-logo.png" },
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
