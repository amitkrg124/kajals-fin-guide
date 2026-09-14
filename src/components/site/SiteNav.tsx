import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4 md:px-8"
      >
        <Link to="/" aria-label="FinScale Advisory home" className="w-48 sm:w-56">
          <BrandLogo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.slice(0, 3).map((l) => (
            <li key={l.id}>
              <Link
                to="/"
                hash={l.id}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active === l.id && "text-primary",
                )}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary"
                  />
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/pricing" className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-foreground", pathname === "/pricing" && "text-primary")}>
              Pricing
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/" hash="contact">Book Consultation</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden border-t border-border bg-background md:hidden"
        >
          <ul className="space-y-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  to="/"
                  hash={l.id}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pricing" onClick={() => setOpen(false)} className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground">Pricing</Link>
            </li>
            <li className="pt-2">
              <Button asChild className="w-full" onClick={() => setOpen(false)}>
                <Link to="/" hash="contact">Book Consultation</Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}