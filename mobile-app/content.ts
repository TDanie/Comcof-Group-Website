/**
 * Comcof Shop content, mirrored from the web shop
 * (shop-app/src/lib/founding.ts). Nothing here is priced or orderable:
 * the founding releases are a coming-soon showcase, and interest is
 * captured through the launch list. When the Supabase backend goes live,
 * this file is replaced by the shared API.
 */
export const SHOP_EMAIL = "info@comcofgroup.com";

export const hero = {
  title: "Coffee From the Source,",
  titleEm: "Prepared Properly.",
  body:
    "The consumer channel of Comcof Group. The same Ugandan coffee we prepare for serious buyers, roasted and packed for your kitchen, your team, and the people you give good things to.",
} as const;

export const categories = [
  {
    title: "Coffee",
    text: "Uganda Robusta and Uganda Arabica, released in small, carefully prepared lots.",
  },
  {
    title: "Gifts & Hampers",
    text: "Coffee worth giving: boxes and hampers built around genuinely good lots.",
  },
  {
    title: "Subscriptions",
    text: "Fresh coffee on your schedule: weekly, fortnightly, or monthly.",
  },
  {
    title: "Corporate",
    text: "Coffee for offices, hotels, restaurants, and events, supplied on schedule.",
  },
] as const;

export type Release = {
  slug: string;
  name: string;
  origin: string;
  short: string;
  full: string;
  notes: string[];
  details: { label: string; value: string }[];
};

export const releases: Release[] = [
  {
    slug: "comcof-origin-roast",
    name: "Comcof Origin Roast",
    origin: "Uganda",
    short:
      "Our signature blend of Ugandan Robusta and Arabica, roasted medium-dark for a bold, balanced daily cup. Coming soon: our first announced release.",
    full:
      "The coffee we built the company to make: Uganda Robusta for body and strength, Mount Elgon Arabica for sweetness and aroma, roasted medium-dark and packed fresh. Balanced, consistent, repeatable, at home in an espresso machine, a moka pot, or a french press. This is a founding release, in preparation now. Join the launch list and you will be the first to know when it is ready.",
    notes: ["Dark chocolate", "Toasted nut", "Brown sugar"],
    details: [
      { label: "Origin", value: "Uganda" },
      { label: "Roast", value: "Medium-Dark" },
      { label: "Brewing", value: "Espresso, moka pot, french press" },
    ],
  },
  {
    slug: "uganda-arabica-mount-elgon",
    name: "Uganda Arabica, Mount Elgon",
    origin: "Uganda · Mount Elgon",
    short:
      "Specialty-grade Arabica from the slopes of Mount Elgon, roasted medium. Bright, sweet, and clean. Coming soon: a limited first release.",
    full:
      "Grown on the volcanic slopes of Mount Elgon in Bugisu country, this is the Arabica that made Ugandan coffee's name. Roasted medium to keep its brightness: expect florals, red fruit, and a chocolate finish. The first release will be a limited lot. Join the launch list to hear when it lands.",
    notes: ["Florals", "Red fruit", "Chocolate finish"],
    details: [
      { label: "Origin", value: "Uganda" },
      { label: "Region", value: "Mount Elgon" },
      { label: "Altitude", value: "1,600 to 1,900 m" },
      { label: "Process", value: "Washed" },
      { label: "Roast", value: "Medium" },
    ],
  },
  {
    slug: "uganda-robusta-select",
    name: "Uganda Robusta Select",
    origin: "Uganda",
    short:
      "The pride of Ugandan coffee: screen-selected Robusta roasted dark. Strong, honest, and full-bodied. Coming soon.",
    full:
      "Uganda grows some of the finest Robusta on earth, and this is ours: screen-selected, clean-prepared, and roasted dark for strength with no harshness. The backbone of a serious espresso and the honest cup Uganda has always known. In preparation now; join the launch list to hear when it lands.",
    notes: ["Bold body", "Cocoa", "Earthy sweetness"],
    details: [
      { label: "Origin", value: "Uganda" },
      { label: "Process", value: "Natural" },
      { label: "Roast", value: "Dark" },
      { label: "Brewing", value: "Espresso, moka pot, cold brew" },
    ],
  },
];

export const deliveryRates = [
  { zone: "Kampala Central", fee: "UGX 7,000", estimate: "Same or next day" },
  { zone: "Greater Kampala", fee: "UGX 10,000", estimate: "Next day" },
  { zone: "Entebbe, Wakiso & Mukono", fee: "UGX 15,000", estimate: "1 to 2 days" },
  { zone: "Elsewhere in Uganda", fee: "Quoted with your order", estimate: "2 to 4 days" },
] as const;

export const freeDeliveryOver = "UGX 150,000";
