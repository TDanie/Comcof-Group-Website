/**
 * Comcof Shop content, mirrored from the web shop
 * (shop-app/src/lib/founding.ts): the five founding label families in
 * launch order. Nothing here is priced or orderable; the releases are a
 * coming-soon showcase and interest is captured through the launch list.
 * When the Supabase backend goes live, this file is replaced by the
 * shared API.
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
    text: "The Signature Gift Box and the Discovery Set, built around coffee worth giving.",
  },
  {
    title: "Subscriptions",
    text: "Monthly Reserve: fresh coffee on your schedule, weekly, fortnightly, or monthly.",
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
    slug: "comcof-no-1",
    name: "Comcof No. 1",
    origin: "Uganda",
    short:
      "Everyday coffee. Balanced, dependable, and made for daily drinking. Coming soon: the release that leads our launch.",
    full:
      "Our accessible flagship, built for the cup you make every morning: balanced, forgiving, and consistent from bag to bag. Ugandan coffee roasted medium, offered whole bean or ground in a 250g pack. This is the release that leads our launch. Join the launch list and you will be the first to know when it is ready.",
    notes: ["Chocolate", "Caramel", "Roasted nuts"],
    details: [
      { label: "Origin", value: "Uganda" },
      { label: "Roast", value: "Medium" },
      { label: "Pack", value: "250g, whole bean or ground" },
      { label: "Brewing", value: "Filter, french press, moka pot" },
    ],
  },
  {
    slug: "rwenzori-reserve",
    name: "Comcof Rwenzori Reserve",
    origin: "Uganda · Rwenzori Mountains",
    short:
      "Our premium origin flagship: Arabica from the Rwenzori Mountains, naturally processed. Coming soon.",
    full:
      "Arabica grown high in the Rwenzori Mountains and processed naturally, which gives it a depth and fruit that a washed coffee will not. Roasted medium to protect its character, offered whole bean or ground in a premium 250g pack, with a 1kg format planned. This is our premium flagship, in preparation now.",
    notes: ["Dark chocolate", "Berries", "Floral"],
    details: [
      { label: "Region", value: "Rwenzori Mountains" },
      { label: "Process", value: "Natural" },
      { label: "Roast", value: "Medium" },
      { label: "Brewing", value: "Pour-over, filter, AeroPress" },
    ],
  },
  {
    slug: "signature-espresso",
    name: "Comcof Signature Espresso",
    origin: "Uganda · Mount Elgon",
    short:
      "Developed for espresso: Mount Elgon coffee roasted for crema, body, and sweetness under pressure. Coming soon.",
    full:
      "A coffee developed specifically for espresso preparation, drawn from Mount Elgon in eastern Uganda. Roasted medium-dark for body, crema, and sweetness under pressure, as a washed coffee or an Arabica-led blend. Offered whole bean or ground for espresso. In preparation now.",
    notes: ["Dark chocolate", "Caramel", "Roasted almonds"],
    details: [
      { label: "Region", value: "Mount Elgon" },
      { label: "Process", value: "Washed" },
      { label: "Roast", value: "Medium-Dark" },
      { label: "Brewing", value: "Espresso, moka pot" },
    ],
  },
  {
    slug: "nile-gold",
    name: "Comcof Nile Gold",
    origin: "Uganda · Premium Robusta",
    short:
      "Premium Robusta. Uganda is the birthplace of Robusta, and this is ours: strong, rich, and unapologetic. Coming soon.",
    full:
      "Premium Ugandan Robusta, naturally processed and roasted medium-dark for a heavy body and a thick, lasting crema. Robusta is not a lesser coffee, it is Uganda's own, and this release is how we say so. Built for espresso, the moka pot, and milk-based coffee. In preparation now.",
    notes: ["Chocolate", "Nuts", "Earthy sweetness"],
    details: [
      { label: "Origin", value: "Uganda" },
      { label: "Process", value: "Natural" },
      { label: "Roast", value: "Medium-Dark" },
      { label: "Brewing", value: "Espresso, moka pot, milk-based" },
    ],
  },
  {
    slug: "bugisu-heritage",
    name: "Comcof Bugisu Heritage",
    origin: "Uganda · Bugisu, Mount Elgon",
    short:
      "Traceable Bugisu Arabica, roasted lighter and released in limited lots. Coming soon.",
    full:
      "Arabica from Bugisu on the slopes of Mount Elgon, roasted light to medium so its delicacy survives the roast. Semi-washed and washed lots, expressive and clean, released in limited numbers for drinkers who follow origin and traceability. In preparation now.",
    notes: ["Delicate", "Bright", "Clean finish"],
    details: [
      { label: "Region", value: "Bugisu, Mount Elgon" },
      { label: "Process", value: "Semi-washed" },
      { label: "Roast", value: "Light-Medium" },
      { label: "Brewing", value: "Pour-over, filter" },
    ],
  },
];

export const whatFollows =
  "Kampala House Blend, our versatile house coffee for homes, offices, and hospitality, follows the founding five, alongside the Comcof Discovery Set, the Signature Gift Box, Monthly Reserve subscriptions, and our Origin and Reserve Collections.";

export const deliveryRates = [
  { zone: "Kampala Central", fee: "UGX 7,000", estimate: "Same or next day" },
  { zone: "Greater Kampala", fee: "UGX 10,000", estimate: "Next day" },
  { zone: "Entebbe, Wakiso & Mukono", fee: "UGX 15,000", estimate: "1 to 2 days" },
  { zone: "Elsewhere in Uganda", fee: "Quoted with your order", estimate: "2 to 4 days" },
] as const;

export const freeDeliveryOver = "UGX 150,000";
