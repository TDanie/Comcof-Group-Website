import { getServerSupabase } from "@/lib/supabase/server";
import type { Product, Variant } from "@/lib/types";
import { foundingProducts, foundingVariants } from "@/lib/founding";

/**
 * Catalogue data access. Every function returns an empty result in LAUNCH
 * mode (no backend configured); the UI is responsible for rendering honest
 * launch states rather than invented products.
 */

type ProductRow = {
  id: string;
  slug: string;
  name: string;
  brand_id: string | null;
  short_description: string;
  full_description: string | null;
  origin_country: string | null;
  region: string | null;
  producer: string | null;
  variety: string | null;
  altitude: string | null;
  processing_method: string | null;
  roast_profile: string | null;
  flavour_notes: string[] | null;
  brewing_methods: string[] | null;
  status: Product["status"];
  gift_suitable: boolean;
  subscription_eligible: boolean;
  image_urls: string[] | null;
};

function mapProduct(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    brandId: row.brand_id,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    originCountry: row.origin_country,
    region: row.region,
    producer: row.producer,
    variety: row.variety,
    altitude: row.altitude,
    processingMethod: row.processing_method,
    roastProfile: row.roast_profile,
    flavourNotes: row.flavour_notes ?? [],
    brewingMethods: row.brewing_methods ?? [],
    status: row.status,
    giftSuitable: row.gift_suitable,
    subscriptionEligible: row.subscription_eligible,
    imageUrls: row.image_urls ?? [],
    categorySlugs: [],
  };
}

export type CatalogFilters = {
  roast?: string;
  origin?: string;
  gift?: boolean;
  subscription?: boolean;
  q?: string;
};

export async function getActiveProducts(
  filters: CatalogFilters = {}
): Promise<Product[]> {
  const supabase = getServerSupabase();
  if (!supabase) {
    // LAUNCH mode: the announced founding releases (real pre-order
    // products) with in-memory filtering.
    return foundingProducts.filter((p) => {
      if (filters.roast && p.roastProfile !== filters.roast) return false;
      if (filters.origin && p.originCountry !== filters.origin) return false;
      if (filters.gift && !p.giftSuitable) return false;
      if (filters.subscription && !p.subscriptionEligible) return false;
      if (
        filters.q &&
        !p.name.toLowerCase().includes(filters.q.toLowerCase())
      )
        return false;
      return true;
    });
  }
  let query = supabase.from("products").select("*").eq("status", "active");
  if (filters.roast) query = query.eq("roast_profile", filters.roast);
  if (filters.origin) query = query.eq("origin_country", filters.origin);
  if (filters.gift) query = query.eq("gift_suitable", true);
  if (filters.subscription) query = query.eq("subscription_eligible", true);
  if (filters.q) query = query.ilike("name", `%${filters.q}%`);
  const { data, error } = await query.order("name");
  if (error || !data) return [];
  return (data as ProductRow[]).map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<{
  product: Product;
  variants: Variant[];
} | null> {
  const supabase = getServerSupabase();
  if (!supabase) {
    const product = foundingProducts.find((p) => p.slug === slug);
    if (!product) return null;
    return { product, variants: foundingVariants[slug] ?? [] };
  }
  const { data: p } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("status", "active")
    .maybeSingle();
  if (!p) return null;
  const { data: v } = await supabase
    .from("product_variants")
    .select("*")
    .eq("product_id", (p as ProductRow).id)
    .eq("is_available", true)
    .order("price_amount");
  const variants: Variant[] = (v ?? []).map((row: Record<string, unknown>) => ({
    id: row.id as string,
    productId: row.product_id as string,
    sku: row.sku as string,
    name: row.name as string,
    packageSize: row.package_size as string,
    grind: (row.grind as string) ?? null,
    price: { amount: row.price_amount as number, currency: "UGX" },
    compareAtPrice: row.compare_at_amount
      ? { amount: row.compare_at_amount as number, currency: "UGX" }
      : null,
    subscriptionPrice: row.subscription_amount
      ? { amount: row.subscription_amount as number, currency: "UGX" }
      : null,
    weightGrams: (row.weight_grams as number) ?? null,
    availableQuantity: (row.available_quantity as number) ?? 0,
    lowStockThreshold: (row.low_stock_threshold as number) ?? 0,
    isAvailable: Boolean(row.is_available),
  }));
  return { product: mapProduct(p as ProductRow), variants };
}
