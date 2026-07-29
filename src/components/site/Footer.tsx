import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  "GST",
  "ITR",
  "Accounting",
  "Bookkeeping",
  "TDS",
  "MSME",
  "Financial Reports",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <span className="font-display text-base font-semibold">Kajal</span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Accounting, taxation and compliance services for individuals, freelancers,
            startups and MSMEs in Delhi.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-primary">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 text-primary" strokeWidth={1.6} />
              Delhi, India
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 text-primary" strokeWidth={1.6} />
              <a href="mailto:kajalmrg7@gmail.com" className="hover:text-primary">
                kajalmrg7@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Kajal Accounting Services
        </p>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="size-5" strokeWidth={1.8} />
      </a>
      <a
        href="mailto:kajalmrg7@gmail.com"
        aria-label="Send an email"
        className="flex size-12 items-center justify-center rounded-full border border-border bg-background shadow-card transition-transform hover:-translate-y-1"
      >
        <Mail className="size-5 text-primary" strokeWidth={1.8} />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex size-12 items-center justify-center rounded-full border border-border bg-background shadow-card"
          >
            <ArrowUp className="size-5 text-primary" strokeWidth={1.8} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}