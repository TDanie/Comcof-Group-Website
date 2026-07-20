import Link from "next/link";
import type { Metadata } from "next";
import { getActiveProducts } from "@/lib/catalog";
import { ProductGrid } from "@/components/ProductGrid";
import { contact } from "@/lib/env";
import { deliveryRates, freeDeliveryOver } from "@/lib/founding";

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
          <div className="eyebrow">Founding Releases · Coming Soon</div>
          <h2 className="h-display" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
            The First Roast <em>Is Coming</em>
          </h2>
          <p className="lead">
            Three founding releases at launch pricing. Reserve now and pay on
            delivery when the roast lands; every reservation is confirmed
            personally by our team, in order.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <ProductGrid products={products.slice(0, 6)} />
          </div>
          <p style={{ marginTop: "1.6rem", fontSize: ".78rem", color: "var(--warm-gray)" }}>
            Want to hear about every release?{" "}
            <a href={`mailto:${contact.email}?subject=Comcof%20Shop%20launch%20list`} style={{ color: "var(--gold-light)" }}>
              Join the launch list
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="eyebrow">Delivery</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "var(--light-line)",
              border: "1px solid var(--light-line)",
            }}
          >
            {deliveryRates.map((r) => (
              <div key={r.zone} style={{ background: "var(--black)", padding: "1.4rem" }}>
                <div style={{ fontSize: ".68rem", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".4rem" }}>
                  {r.zone}
                </div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem" }}>{r.fee}</div>
                <div style={{ fontSize: ".72rem", color: "var(--warm-gray)", marginTop: ".2rem" }}>{r.estimate}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: ".9rem", fontSize: ".75rem", color: "var(--warm-gray)" }}>
            Planned launch delivery rates for when ordering opens; free delivery above {freeDeliveryOver}.
          </p>
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
