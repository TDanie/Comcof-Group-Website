import type { Metadata } from "next";
import { getActiveProducts } from "@/lib/catalog";
import { ProductGrid } from "@/components/ProductGrid";
import { contact } from "@/lib/env";

export const metadata: Metadata = {
  title: "Gifts & Hampers",
  description: "Coffee gift boxes and hampers from Comcof, built around genuinely good Ugandan lots.",
};

export const revalidate = 300;

export default async function GiftsPage() {
  const products = await getActiveProducts({ gift: true });
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Gifts &amp; Hampers</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
          Coffee Worth <em>Giving</em>
        </h1>
        <p className="lead">
          Gift boxes and hampers built around coffee we would proudly drink
          ourselves, with a written message from you and delivery arranged to
          the recipient.
        </p>
        {products.length > 0 ? (
          <div style={{ marginTop: "2rem" }}>
            <ProductGrid products={products} />
          </div>
        ) : (
          <div className="empty-state" style={{ marginTop: "2.5rem" }}>
            <h3>The first gift collection is being assembled.</h3>
            <p>
              Corporate and personal gift orders are already welcome: tell us
              the occasion, the budget, and the number of recipients, and we
              will build the boxes with you.
            </p>
            <a className="btn-primary" href={`mailto:${contact.email}?subject=Coffee%20gift%20enquiry`}>
              Plan a Gift Order
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
