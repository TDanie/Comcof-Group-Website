"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import { formatMoney, type Product, type Variant } from "@/lib/types";

export function AddToCart({
  product,
  variants,
}: {
  product: Product;
  variants: Variant[];
}) {
  const { add } = useCart();
  const router = useRouter();
  const [variantId, setVariantId] = useState(variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (variants.length === 0) {
    return (
      <p style={{ marginTop: "1.4rem", fontSize: ".85rem", color: "var(--warm-gray)" }}>
        This product is not currently available to order online.
      </p>
    );
  }

  const selected = variants.find((v) => v.id === variantId) ?? variants[0]!;
  const out = selected.availableQuantity <= 0;

  return (
    <div style={{ marginTop: "1.6rem", display: "grid", gap: "1rem", maxWidth: 420 }}>
      {variants.length > 1 && (
        <div>
          <label className="form-label" htmlFor="variant">Option</label>
          <select
            id="variant"
            className="form-select"
            value={variantId}
            onChange={(e) => setVariantId(e.target.value)}
          >
            {variants.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} · {formatMoney(v.price)}
                {v.availableQuantity <= 0 ? " · out of stock" : ""}
              </option>
            ))}
          </select>
        </div>
      )}
      <div style={{ display: "flex", gap: ".8rem", alignItems: "end" }}>
        <div>
          <label className="form-label" htmlFor="qty">Quantity</label>
          <input
            id="qty"
            type="number"
            min={1}
            max={24}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(24, Number(e.target.value) || 1)))}
            className="form-input"
            style={{ width: 90 }}
          />
        </div>
        <button
          className="btn-primary"
          disabled={out}
          onClick={() => {
            add({
              productSlug: product.slug,
              productName: product.name,
              variantId: selected.id,
              variantName: selected.name,
              unitPrice: selected.price,
              quantity,
            });
            setAdded(true);
            setTimeout(() => setAdded(false), 2500);
          }}
        >
          {out ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
        </button>
        {added && (
          <button className="btn-ghost" onClick={() => router.push("/shop/cart")}>
            View Cart
          </button>
        )}
      </div>
      {out && (
        <p role="status" style={{ fontSize: ".78rem", color: "var(--warm-gray)" }}>
          This option is out of stock. Email info@comcofgroup.com and we will
          tell you when the next lot lands.
        </p>
      )}
    </div>
  );
}
