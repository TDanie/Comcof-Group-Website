/**
 * Environment boundary for the Comcof Shop.
 *
 * The shop is designed to run in two explicit modes:
 *
 * 1. LAUNCH mode (no backend configured): the storefront renders honestly,
 *    with no invented products, prices, or fake checkout. Customers can
 *    register interest, submit corporate enquiries, and order by email.
 * 2. COMMERCE mode (Supabase configured): catalogue, accounts, carts and
 *    orders are database-backed.
 *
 * Production must never simulate commerce it cannot execute, so every
 * data-dependent feature checks `isCommerceConfigured()` rather than
 * assuming credentials exist.
 */
export function isCommerceConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

/** Feature flags, env-driven until the settings table is live. */
export const featureFlags = {
  checkout: process.env.NEXT_PUBLIC_FLAG_CHECKOUT === "on",
  subscriptions: process.env.NEXT_PUBLIC_FLAG_SUBSCRIPTIONS === "on",
  reviews: process.env.NEXT_PUBLIC_FLAG_REVIEWS === "on",
  loyalty: process.env.NEXT_PUBLIC_FLAG_LOYALTY === "on",
  partnerProducts: process.env.NEXT_PUBLIC_FLAG_PARTNER_PRODUCTS === "on",
} as const;

/** Administratively configured contact details; never hard-code placeholders. */
export const contact = {
  email: process.env.NEXT_PUBLIC_SHOP_EMAIL ?? "info@comcofgroup.com",
  whatsapp: process.env.NEXT_PUBLIC_SHOP_WHATSAPP ?? "", // E.164, no plus sign
} as const;
