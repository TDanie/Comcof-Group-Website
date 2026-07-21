/**
 * COMCOF No. 1 content, mirrored from the web shop (shop-app/src/lib/founding.ts).
 * When the Supabase backend goes live, this file is replaced by the shared API.
 */
export const SHOP_EMAIL = "info@comcofgroup.com";

export const weights = ["250g", "500g", "1kg"] as const;
export const grinds = ["Whole Bean", "Ground"] as const;

export const no1 = {
  name: "COMCOF No. 1",
  tagline: "Our first release.",
  spec: "Everyday Coffee · Medium Roast",
  description:
    "A balanced everyday coffee prepared for homes, offices, and coffee lovers who appreciate consistency, traceability, and quality.",
  story: [
    "Every bag begins where coffee begins.",
    "COMCOF No. 1 is our first commercial release. Prepared from carefully selected Ugandan coffee and roasted for consistency, it reflects how we believe coffee should be presented: honestly, professionally, and without compromise.",
    "This is only the beginning.",
  ],
  details: [
    { label: "Origin", value: "Uganda" },
    { label: "Roast Level", value: "Medium" },
    { label: "Tasting Notes", value: "Balanced. Smooth. Consistent." },
    { label: "Brewing", value: "Espresso, moka pot, french press, pour-over" },
  ],
} as const;

export const comingNext = [
  { name: "Reserve Collection", note: "Single lots, released in small numbers." },
  { name: "Origin Collection", note: "Coffee traced to a single region." },
  { name: "Corporate Coffee", note: "Standing supply for offices and hospitality." },
  { name: "Coffee Subscriptions", note: "A rhythm that suits your kitchen." },
  { name: "Gift Collections", note: "Coffee worth giving." },
] as const;
