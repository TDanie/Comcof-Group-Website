import Link from "next/link";
import type { Metadata } from "next";
import { getActiveProducts } from "@/lib/catalog";
import { ProductGrid } from "@/components/ProductGrid";
import { isCommerceConfigured, contact } from "@/lib/env";

export const metadata: Metadata = {
  title: "Comcof Shop",
  description:
    "Ugandan coffee from Comcof Group: fresh releases, gifts, subscriptions, and corporate coffee supply.",
};

export const revalidate = 300;

const categories = [
  {
    href: "/shop/coffee",
    title: "Coffee",
    text: "Uganda Robusta and Uganda Arabica, released in small, carefully prepared lots.",
  },
  {
    href: "/shop/gifts",
    title: "Gifts & Hampers",
    text: "Coffee worth giving: boxes and hampers built around genuinely good lots.",
  },
  {
    href: "/shop/subscriptions",
    title: "Subscriptions",
    text: "Fresh coffee on your schedule: weekly, fortnightly, or monthly.",
  },
  {
    href: "/shop/corporate",
    title: "Corporate",
    text: "Coffee for offices, hotels, restaurants, and events, supplied on schedule.",
  },
];

export default async function ShopHome() {
  const products = await getActiveProducts();
  const live = isCommerceConfigured() && products.length > 0;

  return (
    <>
      <section
        style={{
          padding: "7rem 4vw 5rem",
          background: "var(--espresso)",
          borderBottom: "1px solid var(--light-line)",
        }}
      >
        <div className="wrap">
          <div className="eyebrow">Comcof Shop</div>
          <h1 className="h-display">
            Coffee From the Source,
            <br />
            <em>Prepared Properly.</em>
          </h1>
          <p className="lead">
            The consumer channel of Comcof Group. The same Ugandan coffee we
            prepare for serious buyers, roasted and packed for your kitchen,
            your team, and the people you give good things to.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2.4rem" }}>
            <Link className="btn-primary" href="/shop/coffee">
              Browse Coffee
            </Link>
            <Link className="btn-ghost" href="/shop/corporate">
              Corporate Orders
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow">Shop By</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
              marginTop: "1rem",
            }}
          >
            {categories.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="card"
                style={{ padding: "2rem", textDecoration: "none", display: "block" }}
              >
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "1.2rem", marginBottom: ".6rem" }}>
                  {c.title}
                </h2>
                <p style={{ fontSize: ".8rem", color: "var(--warm-gray)", lineHeight: 1.65 }}>{c.text}</p>
                <span style={{ display: "inline-block", marginTop: "1rem", fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--gold)" }}>
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow">{live ? "Available Now" : "First Releases"}</div>
          {live ? (
            <ProductGrid products={products.slice(0, 6)} />
          ) : (
            <div className="empty-state">
              <h3>Our first retail releases are being prepared.</h3>
              <p>
                We sell only what we have genuinely sourced, cupped, and
                packed, so the catalogue opens when the coffee is ready rather
                than before. Leave your email and you will be first to know,
                or order directly today and we will handle it personally.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  className="btn-primary"
                  href={`mailto:${contact.email}?subject=Comcof%20Shop%20launch%20list`}
                >
                  Join the Launch List
                </a>
                <a
                  className="btn-ghost"
                  href={`mailto:${contact.email}?subject=Coffee%20order%20enquiry`}
                >
                  Order by Email Today
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="band">
        <h3>Buying for a Business?</h3>
        <p>
          Offices, hotels, restaurants, and events: tell us your monthly
          requirement and we will come back with a supply plan.
        </p>
        <Link className="btn-primary" href="/shop/corporate">
          Start a Corporate Enquiry
        </Link>
      </div>
    </>
  );
}
