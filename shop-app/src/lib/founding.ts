import type { Product, Variant } from "@/lib/types";

/**
 * COMCOF No. 1: the first commercial release.
 *
 * One product, presented properly. Pricing is announced at release, so
 * nothing here publishes a price or takes payment; the selectors are real
 * and a reservation carries the exact specification to our team.
 */

export const NO1_SLUG = "comcof-no-1";

export const no1: Product = {
  id: "comcof-no-1",
  slug: NO1_SLUG,
  name: "COMCOF No. 1",
  brandId: null,
  shortDescription: "Our first release.",
  fullDescription:
    "A balanced everyday coffee prepared for homes, offices, and coffee lovers who appreciate consistency, traceability, and quality.",
  originCountry: "Uganda",
  region: null,
  producer: null,
  variety: null,
  altitude: null,
  processingMethod: null,
  roastProfile: "Medium",
  flavourNotes: ["Balanced", "Smooth", "Consistent"],
  brewingMethods: ["Espresso", "Moka pot", "French press", "Pour-over"],
  status: "active",
  giftSuitable: true,
  subscriptionEligible: true,
  imageUrls: ["/packaging/no-1-front.svg"],
  categorySlugs: ["coffee"],
};

export const weights = ["250g", "500g", "1kg"] as const;
export const grinds = ["Whole Bean", "Ground"] as const;

/** Story, told in the product's own voice. */
export const no1Story = [
  "Every bag begins where coffee begins.",
  "COMCOF No. 1 is our first commercial release. Prepared from carefully selected Ugandan coffee and roasted for consistency, it reflects how we believe coffee should be presented: honestly, professionally, and without compromise.",
  "This is only the beginning.",
];

export const no1Detail = [
  { label: "Origin", value: "Uganda" },
  { label: "Roast Level", value: "Medium" },
  { label: "Tasting Notes", value: "Balanced. Smooth. Consistent." },
  { label: "Brewing", value: "Espresso, moka pot, french press, pour-over" },
] as const;

export const no1Faq = [
  {
    q: "When does No. 1 ship?",
    a: "Our first roast is in preparation. Reserve now and we will contact you personally with pricing and a delivery date before anything is charged.",
  },
  {
    q: "Whole bean or ground?",
    a: "Whole bean keeps its character longest. Choose ground if you prefer, and tell us your brewing method so we can grind for it.",
  },
  {
    q: "Where do you deliver?",
    a: "Kampala and the surrounding districts at launch, with the rest of Uganda quoted per order. International shipping follows.",
  },
] as const;

/** Delivery, presented plainly. */
export const deliveryRates = [
  { zone: "Kampala", fee: "From UGX 7,000", estimate: "Same or next day" },
  { zone: "Greater Kampala", fee: "From UGX 10,000", estimate: "Next day" },
  { zone: "Uganda", fee: "Quoted per order", estimate: "2 to 4 days" },
] as const;

/** What follows No. 1. Named, not detailed. */
export const comingNext = [
  { name: "Reserve Collection", note: "Single lots, released in small numbers." },
  { name: "Origin Collection", note: "Coffee traced to a single region." },
  { name: "Corporate Coffee", note: "Standing supply for offices and hospitality." },
  { name: "Coffee Subscriptions", note: "A rhythm that suits your kitchen." },
  { name: "Gift Collections", note: "Coffee worth giving." },
] as const;

/** Kept for the catalogue interface; No. 1 has no priced variants yet. */
export const foundingProducts: Product[] = [no1];
export const foundingVariants: Record<string, Variant[]> = {};
