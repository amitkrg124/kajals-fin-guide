# FinScale Advisory brand and pricing refresh

## Overview
Rebrand the existing site from Kajal Accounting Services to **FinScale Advisory**, use the supplied logo and Kajal portrait, and give the site a more established navy-and-gold professional-services presentation. Add a dedicated, SEO-ready `/pricing` page containing every supplied price and disclaimer.

## What will change
- Replace the current Kajal wordmark with the supplied FinScale Advisory logo across the header and footer.
- Replace the generated portrait with the supplied Kajal portrait and retain Kajal as the named professional behind the firm.
- Refine the visual system to deep navy, restrained gold, white, and neutral gray with editorial serif headings and clean sans-serif body copy.
- Rework the opening area and service presentation for clearer hierarchy, stronger credibility, and restrained motion.
- Add starting prices to the relevant service summaries without overwhelming the main page.
- Add a dedicated `/pricing` page with:
  - Registration services
  - Return filing services
  - Accounting services
  - Auditing and digital signature
  - GST-specific plans, including a clear “Most Popular” monthly plan
  - Custom-plan consultation call to action
  - Indian rupee and GST-extra disclaimer
- Update navigation, footer links, page titles, descriptions, social metadata, and business schema for FinScale Advisory.
- Keep the existing enquiry flow and update its branding and service choices.

## Design direction
- Premium navy-and-gold palette derived from the supplied logo.
- Asymmetric, editorial compositions with thin rules and compact corners.
- FinScale Advisory is prominent in the first screen; Kajal’s portrait adds personal trust.
- Calm reveal animation and precise interaction feedback; remove playful floating labels and decorative blobs.
- Responsive layouts for phones and desktops.

## Technical details
- Store the supplied logo and portrait through the project asset system and reference their generated URLs.
- Add `/pricing` as a proper TanStack route and use typed links throughout navigation.
- Define all new colors and shadows as semantic tokens in the global design system.
- Add unique metadata for both `/` and `/pricing`, while keeping JSON-LD aligned with the new brand.
- Verify the live preview at desktop and mobile widths, plus the latest build and runtime diagnostics.
