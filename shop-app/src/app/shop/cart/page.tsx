"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatMoney } from "@/lib/types";
import { contact, featureFlags } from "@/lib/env";

/**
 * Cart page. Totals shown here are indicative for the customer; the
 * authoritative total is always computed server-side when checkout is live.
 * Until online checkout is enabled, "Place Order by Email" composes a real,
 * structured order email: a genuine ordering channel, not a simulation.
 */
export default function CartPage() {
  const { lines, subtotal, remove, setQuantity, clear } = useCart();

  const orderBody = [
    "New Comcof Shop order request",
    "",
    ...lines.map(
      (l) =>
        `${l.quantity} x ${l.productName} (${l.variantName}) at ${formatMoney(l.unitPrice)} each`
    ),
    "",
    `Indicative subtotal: UGX ${subtotal.toLocaleString("en-UG")}`,
    "",
    "Delivery name:",
    "Phone:",
    "Delivery address / area:",
    "Preferred payment (mobile money / cash on delivery):",
  ].join("\n");

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <div className="eyebrow">Cart</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
          Your <em>Cart</em>
        </h1>

        {lines.length === 0 ? (
          <div className="empty-state" style={{ marginTop: "2.5rem" }}>
            <h3>Your cart is empty.</h3>
            <p>
              When our releases are live you can build an order here. In the
              meantime, browse the coffee or tell us what you are after.
            </p>
            <Link className="btn-primary" href="/shop/coffee">
              Browse Coffee
            </Link>
          </div>
        ) : (
          <>
            <ul style={{ listStyle: "none", marginTop: "2rem", borderTop: "1px solid var(--light-line)" }}>
              {lines.map((l) => (
                <li
                  key={l.variantId}
                  style={{
                    display: "flex", flexWrap: "wrap", gap: "1rem",
                    justifyContent: "space-between", alignItems: "center",
                    padding: "1.1rem 0", borderBottom: "1px solid var(--light-line)",
                  }}
                >
                  <div style={{ minWidth: 200 }}>
                    <Link href={`/shop/products/${l.productSlug}`} style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", textDecoration: "none" }}>
                      {l.productName}
                    </Link>
                    <div style={{ fontSize: ".72rem", color: "var(--warm-gray)", marginTop: ".2rem" }}>
                      {l.variantName} · {formatMoney(l.unitPrice)}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: ".8rem", alignItems: "center" }}>
                    <label className="form-label" htmlFor={`q-${l.variantId}`} style={{ margin: 0 }}>
                      Qty
                    </label>
                    <input
                      id={`q-${l.variantId}`}
                      type="number"
                      min={0}
                      max={24}
                      value={l.quantity}
                      onChange={(e) => setQuantity(l.variantId, Number(e.target.value) || 0)}
                      className="form-input"
                      style={{ width: 76, padding: ".5rem .7rem" }}
                    />
                    <button
                      onClick={() => remove(l.variantId)}
                      className="btn-ghost"
                      style={{ padding: ".5rem 1rem", fontSize: ".62rem" }}
                      aria-label={`Remove ${l.productName}`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.4rem" }}>
              <button onClick={clear} style={{ background: "none", border: "none", color: "var(--warm-gray)", fontSize: ".72rem", cursor: "pointer", textDecoration: "underline" }}>
                Empty cart
              </button>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem" }}>
                Subtotal: <span style={{ color: "var(--gold-light)" }}>UGX {subtotal.toLocaleString("en-UG")}</span>
              </p>
            </div>
            <p style={{ fontSize: ".72rem", color: "var(--mid-gray)", textAlign: "right", marginTop: ".3rem" }}>
              Delivery is confirmed with your order. Final totals are confirmed
              by Comcof before payment.
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {featureFlags.checkout ? (
                <Link className="btn-primary" href="/shop/checkout">
                  Continue to Checkout
                </Link>
              ) : (
                <a
                  className="btn-primary"
                  href={`mailto:${contact.email}?subject=${encodeURIComponent("Comcof Shop order")}&body=${encodeURIComponent(orderBody)}`}
                >
                  Place Order by Email
                </a>
              )}
            </div>
            {!featureFlags.checkout && (
              <p style={{ fontSize: ".75rem", color: "var(--warm-gray)", textAlign: "right", marginTop: ".8rem", maxWidth: 460, marginLeft: "auto" }}>
                Online payment is arriving shortly. For now your order opens as
                a prepared email; send it and our team confirms availability,
                delivery, and payment (mobile money or cash on delivery)
                personally.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
