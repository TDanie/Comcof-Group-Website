/** Core commerce domain models shared across web (and later mobile). */

export type Money = {
  /** Minor units (UGX has no minor unit, so this is whole shillings). */
  amount: number;
  currency: "UGX";
};

export type Brand = {
  id: string;
  slug: string;
  name: string;
  isPartner: boolean;
};

export type ProductStatus = "draft" | "active" | "archived";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brandId: string | null;
  shortDescription: string;
  fullDescription: string | null;
  originCountry: string | null;
  region: string | null;
  producer: string | null;
  variety: string | null;
  altitude: string | null;
  processingMethod: string | null;
  roastProfile: string | null;
  flavourNotes: string[];
  brewingMethods: string[];
  status: ProductStatus;
  giftSuitable: boolean;
  subscriptionEligible: boolean;
  imageUrls: string[];
  categorySlugs: string[];
};

export type Variant = {
  id: string;
  productId: string;
  sku: string;
  name: string; // e.g. "250g / Whole bean"
  packageSize: string;
  grind: string | null;
  price: Money;
  compareAtPrice: Money | null;
  subscriptionPrice: Money | null;
  weightGrams: number | null;
  availableQuantity: number;
  lowStockThreshold: number;
  isAvailable: boolean;
};

export type CartLine = {
  productSlug: string;
  productName: string;
  variantId: string;
  variantName: string;
  unitPrice: Money;
  quantity: number;
};

export type OrderStatus =
  | "received"
  | "payment_pending"
  | "payment_confirmed"
  | "processing"
  | "packed"
  | "ready_for_collection"
  | "dispatched"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "returned"
  | "refunded";

export type PaymentStatus =
  | "pending"
  | "authorised"
  | "paid"
  | "failed"
  | "cancelled"
  | "refunded"
  | "partially_refunded"
  | "awaiting_manual_verification";

export function formatMoney(m: Money): string {
  return `UGX ${m.amount.toLocaleString("en-UG")}`;
}
