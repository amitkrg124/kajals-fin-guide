import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function BrandLogo({ className, variant = "default" }: BrandLogoProps) {
  const src = variant === "white" ? "/finscale-advisory-logo-white.png" : "/finscale-advisory-logo.png";

  return (
    <img
      src={src}
      alt="FinScale Advisory — Finance, Tax and Accounting"
      width={1850}
      height={640}
      className={cn("h-10 sm:h-11 w-auto max-w-full object-contain object-left", className)}
      loading="eager"
    />
  );
}