import type { Product, Variant } from "@/lib/types";

/**
 * THE COMCOF RANGE: the five founding label families, in launch order.
 *
 * Comcof No. 1 leads the launch. Rwenzori Reserve is the premium origin
 * flagship, Signature Espresso the specialised preparation, Nile Gold
 * establishes our Robusta identity, and Bugisu Heritage represents
 * traceable Arabica origin.
 *
 * All five are a coming-soon showcase: no prices are published and
 * nothing is orderable until the founder approves pricing and
 * fulfilment. Interest is captured through the launch list.
 */

export const foundingProducts: Product[] = [
  {
    id: "comcof-no-1",
    slug: "comcof-no-1",
    name: "Comcof No. 1",
    brandId: null,
    shortDescription:
      "Everyday coffee. Balanced, dependable, and made for daily drinking. Coming soon: the release that leads our launch.",
    fullDescription:
      "Our accessible flagship, built for the cup you make every morning: balanced, forgiving, and consistent from bag to bag. Ugandan coffee roasted medium, offered whole bean or ground in a 250g pack. This is the release that leads our launch. Join the launch list and you will be the first to know when it is ready.",
    originCountry: "Uganda",
    region: null,
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: null,
    roastProfile: "Medium",
    flavourNotes: ["Chocolate", "Caramel", "Roasted nuts"],
    brewingMethods: ["Filter", "French press", "Moka pot"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
  {
    id: "comcof-rwenzori-reserve",
    slug: "rwenzori-reserve",
    name: "Comcof Rwenzori Reserve",
    brandId: null,
    shortDescription:
      "Our premium origin flagship: Arabica from the Rwenzori Mountains, naturally processed. Coming soon.",
    fullDescription:
      "Arabica grown high in the Rwenzori Mountains and processed naturally, which gives it a depth and fruit that a washed coffee will not. Roasted medium to protect its character, offered whole bean or ground in a premium 250g pack, with a 1kg format planned. This is our premium flagship, in preparation now.",
    originCountry: "Uganda",
    region: "Rwenzori Mountains",
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: "Natural",
    roastProfile: "Medium",
    flavourNotes: ["Dark chocolate", "Berries", "Floral"],
    brewingMethods: ["Pour-over", "Filter", "AeroPress"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
  {
    id: "comcof-signature-espresso",
    slug: "signature-espresso",
    name: "Comcof Signature Espresso",
    brandId: null,
    shortDescription:
      "Developed for espresso: Mount Elgon coffee roasted for crema, body, and sweetness under pressure. Coming soon.",
    fullDescription:
      "A coffee developed specifically for espresso preparation, drawn from Mount Elgon in eastern Uganda. Roasted medium-dark for body, crema, and sweetness under pressure, as a washed coffee or an Arabica-led blend. Offered whole bean or ground for espresso. In preparation now.",
    originCountry: "Uganda",
    region: "Mount Elgon",
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: "Washed",
    roastProfile: "Medium-Dark",
    flavourNotes: ["Dark chocolate", "Caramel", "Roasted almonds"],
    brewingMethods: ["Espresso", "Moka pot"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
  {
    id: "comcof-nile-gold",
    slug: "nile-gold",
    name: "Comcof Nile Gold",
    brandId: null,
    shortDescription:
      "Premium Robusta. Uganda is the birthplace of Robusta, and this is ours: strong, rich, and unapologetic. Coming soon.",
    fullDescription:
      "Premium Ugandan Robusta, naturally processed and roasted medium-dark for a heavy body and a thick, lasting crema. Robusta is not a lesser coffee, it is Uganda's own, and this release is how we say so. Built for espresso, the moka pot, and milk-based coffee. In preparation now.",
    originCountry: "Uganda",
    region: null,
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: "Natural",
    roastProfile: "Medium-Dark",
    flavourNotes: ["Chocolate", "Nuts", "Earthy sweetness"],
    brewingMethods: ["Espresso", "Moka pot", "Milk-based coffee"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
  {
    id: "comcof-bugisu-heritage",
    slug: "bugisu-heritage",
    name: "Comcof Bugisu Heritage",
    brandId: null,
    shortDescription:
      "Traceable Bugisu Arabica, roasted lighter and released in limited lots. Coming soon.",
    fullDescription:
      "Arabica from Bugisu on the slopes of Mount Elgon, roasted light to medium so its delicacy survives the roast. Semi-washed and washed lots, expressive and clean, released in limited numbers for drinkers who follow origin and traceability. In preparation now.",
    originCountry: "Uganda",
    region: "Bugisu, Mount Elgon",
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: "Semi-washed",
    roastProfile: "Light-Medium",
    flavourNotes: ["Delicate", "Bright", "Clean finish"],
    brewingMethods: ["Pour-over", "Filter"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
];

/**
 * Formats and collections that follow the five label families. These are
 * commercial formats rather than separate coffees, and none are open yet.
 */
export const whatFollows =
  "Kampala House Blend, our versatile house coffee for homes, offices, and hospitality, follows the founding five, alongside the Comcof Discovery Set, the Signature Gift Box, Monthly Reserve subscriptions, and our Origin and Reserve Collections.";

/** No priced variants exist until pricing is approved. */
export const foundingVariants: Record<string, Variant[]> = {};

/** Planned launch delivery rates for the Kampala metro. */
export const deliveryRates = [
  { zone: "Kampala Central", fee: "UGX 7,000", estimate: "Same or next day" },
  { zone: "Greater Kampala", fee: "UGX 10,000", estimate: "Next day" },
  { zone: "Entebbe, Wakiso & Mukono", fee: "UGX 15,000", estimate: "1 to 2 days" },
  { zone: "Elsewhere in Uganda", fee: "Quoted with your order", estimate: "2 to 4 days" },
] as const;

export const freeDeliveryOver = "UGX 150,000";
