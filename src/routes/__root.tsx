import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "FinScale Advisory — Kajal" },
      { property: "og:site_name", content: "FinScale Advisory" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "accounting services delhi, tax consultant delhi, GST registration delhi, ITR filing online, TDS return filing, bookkeeping services delhi, MSME registration, income tax consultant, FinScale Advisory, business compliance delhi, Kajal accounting consultant",
      },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi" },
      { name: "geo.position", content: "28.6139;77.2090" },
      { name: "ICBM", content: "28.6139, 77.2090" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["AccountingService", "FinancialService", "ProfessionalService", "LocalBusiness"],
          name: "FinScale Advisory",
          alternateName: "FinScale Advisory Delhi",
          image: "https://kajals-fin-guide.lovable.app/finscale-advisory-logo.png",
          logo: "https://kajals-fin-guide.lovable.app/finscale-advisory-logo.png",
          description:
            "Trusted Accounting, GST, Income Tax (ITR), TDS, Bookkeeping, MSME, and compliance services in Delhi NCR led by Kajal with 4+ years experience and 50+ clients.",
          email: "kajalmrg7@gmail.com",
          priceRange: "₹₹",
          areaServed: [
            { "@type": "City", name: "Delhi" },
            { "@type": "City", name: "New Delhi" },
            { "@type": "City", name: "Noida" },
            { "@type": "City", name: "Gurugram" },
            { "@type": "Country", name: "India" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Delhi",
            addressRegion: "Delhi",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "28.6139",
            longitude: "77.2090",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          founder: {
            "@type": "Person",
            name: "Kajal",
            jobTitle: "Accounting & Tax Consultant",
            description: "4+ years experience advising 50+ clients with 100+ GST registrations and returns.",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Financial & Tax Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Registration & Return Filing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax Return (ITR) Filing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting & Bookkeeping Services" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "TDS Filing & Compliance" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "MSME / Udyam Registration" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payroll Management" } },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
