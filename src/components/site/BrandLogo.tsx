import logoAsset from "@/assets/finscale-advisory-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="FinScale Advisory — Finance, Tax and Accounting"
      width={1850}
      height={640}
      className={cn("h-auto w-full object-contain object-left", className)}
    />
  );
}