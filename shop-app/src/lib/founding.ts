import type { Product, Variant } from "@/lib/types";

/**
 * FOUNDING RELEASES: the first retail products Comcof has announced,
 * shown as a coming-soon showcase to build expectation. No prices are
 * published and nothing is orderable until the founder approves launch
 * pricing and fulfilment. Interest is captured via the launch list.
 */

const ug = (amount: number) => ({ amount, currency: "UGX" as const });

export const foundingProducts: Product[] = [
  {
    id: "founding-origin-roast",
    slug: "comcof-origin-roast",
    name: "Comcof Origin Roast",
    brandId: null,
    shortDescription:
      "Our signature blend of Ugandan Robusta and Arabica, roasted medium-dark for a bold, balanced daily cup. Coming soon: our first announced release.",
    fullDescription:
      "The coffee we built the company to make: Uganda Robusta for body and strength, Mount Elgon Arabica for sweetness and aroma, roasted medium-dark and packed fresh. Balanced, consistent, repeatable, at home in an espresso machine, a moka pot, or a french press. This is a founding release on pre-order: you reserve now, we confirm your order personally, and payment is on delivery when the roast lands.",
    originCountry: "Uganda",
    region: null,
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: null,
    roastProfile: "Medium-Dark",
    flavourNotes: ["Dark chocolate", "Toasted nut", "Brown sugar"],
    brewingMethods: ["Espresso", "Moka pot", "French press"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
  {
    id: "founding-elgon-arabica",
    slug: "uganda-arabica-mount-elgon",
    name: "Uganda Arabica, Mount Elgon",
    brandId: null,
    shortDescription:
      "Specialty-grade Arabica from the slopes of Mount Elgon, roasted medium. Bright, sweet, and clean. Coming soon: a limited first release.",
    fullDescription:
      "Grown on the volcanic slopes of Mount Elgon in Bugisu country, this is the Arabica that made Ugandan coffee's name. Roasted medium to keep its brightness: expect florals, red fruit, and a chocolate finish. The first release is a limited lot; reservations are honoured in order. Payment on delivery.",
    originCountry: "Uganda",
    region: "Mount Elgon",
    producer: null,
    variety: null,
    altitude: "1,600 to 1,900 m",
    processingMethod: "Washed",
    roastProfile: "Medium",
    flavourNotes: ["Florals", "Red fruit", "Chocolate finish"],
    brewingMethods: ["Pour-over", "AeroPress", "Filter"],
    status: "active",
    giftSuitable: true,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
  {
    id: "founding-robusta-select",
    slug: "uganda-robusta-select",
    name: "Uganda Robusta Select",
    brandId: null,
    shortDescription:
      "The pride of Ugandan coffee: screen-selected Robusta roasted dark. Strong, honest, and full-bodied. Coming soon.",
    fullDescription:
      "Uganda grows some of the finest Robusta on earth, and this is ours: screen-selected, clean-prepared, and roasted dark for strength with no harshness. The backbone of a serious espresso and the honest cup Uganda has always known. Reserve now; payment on delivery when the roast lands.",
    originCountry: "Uganda",
    region: null,
    producer: null,
    variety: null,
    altitude: null,
    processingMethod: "Natural",
    roastProfile: "Dark",
    flavourNotes: ["Bold body", "Cocoa", "Earthy sweetness"],
    brewingMethods: ["Espresso", "Moka pot", "Cold brew"],
    status: "active",
    giftSuitable: false,
    subscriptionEligible: true,
    imageUrls: [],
    categorySlugs: ["coffee"],
  },
];

function v(
  productId: string,
  sku: string,
  packageSize: string,
  grind: string,
  price: number
): Variant {
  return {
    id: sku,
    productId,
    sku,
    name: `${packageSize} / ${grind}`,
    packageSize,
    grind,
    price: ug(price),
    compareAtPrice: null,
    subscriptionPrice: null,
    weightGrams: packageSize === "250g" ? 250 : 500,
    availableQuantity: 500, // pre-order allocation per launch batch
    lowStockThreshold: 20,
    isAvailable: true,
  };
}

export const foundingVariants: Record<string, Variant[]> = {};

/** Launch delivery rates for the Kampala metro (owner-adjustable). */
export const deliveryRates = [
  { zone: "Kampala Central", fee: "UGX 7,000", estimate: "Same or next day" },
  { zone: "Greater Kampala", fee: "UGX 10,000", estimate: "Next day" },
  { zone: "Entebbe, Wakiso & Mukono", fee: "UGX 15,000", estimate: "1 to 2 days" },
  { zone: "Elsewhere in Uganda", fee: "Quoted with your order", estimate: "2 to 4 days" },
] as const;

export const freeDeliveryOver = "UGX 150,000";
