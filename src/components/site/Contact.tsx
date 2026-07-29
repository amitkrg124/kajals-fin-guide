import { useState, type FormEvent } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, Section, SectionHeading } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,20}$/, "Enter a valid phone number"),
  service: z.string().trim().min(1, "Select a service").max(80),
  message: z.string().trim().min(10, "Please add a few details").max(1000),
});

const services = [
  "GST Services",
  "Income Tax / ITR",
  "Accounting & Bookkeeping",
  "Tally Services",
  "TDS Services",
  "MSME Registration",
  "Financial Reports",
  "Payroll",
  "ROC Compliance",
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const { name, email, phone, service, message } = result.data;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A%0D%0A${encodeURIComponent(
      message,
    )}`;
    window.location.href = `mailto:kajalmrg7@gmail.com?subject=${encodeURIComponent(
      `Consultation request — ${service}`,
    )}&body=${body}`;
    toast.success("Opening your email app to send the enquiry.");
    form.reset();
  }

  return (
    <Section id="contact" muted>
      <SectionHeading
        eyebrow="Contact"
        title="Book your free consultation"
        subtitle="Share your requirement and receive a response, usually within a few hours."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal x={-20} y={0}>
          <div className="h-full rounded-3xl border border-border bg-background p-8 shadow-card">
            <h3 className="text-lg font-semibold">Contact information</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-primary" strokeWidth={1.6} />
                <span>
                  <span className="block font-medium">Location</span>
                  <span className="text-muted-foreground">Delhi, India</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="size-5 shrink-0 text-primary" strokeWidth={1.6} />
                <span>
                  <span className="block font-medium">Email</span>
                  <a
                    href="mailto:kajalmrg7@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    kajalmrg7@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="size-5 shrink-0 text-primary" strokeWidth={1.6} />
                <span>
                  <span className="block font-medium">Working hours</span>
                  <span className="text-muted-foreground">
                    Monday – Saturday, 9 AM – 7 PM
                  </span>
                </span>
              </li>
            </ul>
            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              All information shared is treated as strictly confidential and used only to
              prepare your filings.
            </p>
          </div>
        </Reveal>

        <Reveal x={20} y={0}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-background p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <Input id="name" name="name" placeholder="Your full name" maxLength={100} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </Field>
              <Field id="phone" label="Phone" error={errors.phone}>
                <Input id="phone" name="phone" placeholder="+91 98xxxxxxxx" maxLength={20} />
              </Field>
              <Field id="service" label="Service required" error={errors.service}>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field id="message" label="Message" error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell me briefly what you need help with"
                />
              </Field>
            </div>

            <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
              <Send className="size-4" />
              Send Enquiry
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}