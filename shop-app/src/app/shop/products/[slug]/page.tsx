import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { No1Purchase } from "@/components/No1Purchase";
import {
  NO1_SLUG,
  no1,
  no1Story,
  no1Detail,
  no1Faq,
  deliveryRates,
} from "@/lib/founding";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== NO1_SLUG) return { title: "Not found" };
  return {
    title: no1.name,
    description: `${no1.shortDescription} ${no1.fullDescription}`,
  };
}

export function generateStaticParams() {
  return [{ slug: NO1_SLUG }];
}

const sectionLabel: React.CSSProperties = {
  fontSize: ".6rem",
  letterSpacing: ".3em",
  textTransform: "uppercase",
  color: "rgba(247,243,236,.32)",
  marginBottom: "1.6rem",
};

const serifBody: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontWeight: 300,
  fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
  lineHeight: 1.65,
  color: "rgba(247,243,236,.82)",
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (slug !== NO1_SLUG) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: no1.name,
    description: `${no1.shortDescription} ${no1.fullDescription}`,
    image: ["https://comcofgroup.com/packaging/no-1-front.svg"],
    brand: { "@type": "Brand", name: "COMCOF" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Overview */}
      <section style={{ padding: "8rem 4vw 7rem" }}>
        <div className="wrap no1-feature" style={{ display: "grid", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/packaging/no-1-front.svg" alt="COMCOF No. 1 coffee bag, front" style={{ width: "min(100%, 420px)" }} />
          </div>
          <div>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: 1.05 }}>
              COMCOF No. 1
            </h1>
            <p style={{ marginTop: "1.6rem", fontSize: ".7rem", letterSpacing: ".24em", textTransform: "uppercase", color: "var(--gold)" }}>
              Everyday Coffee · Medium Roast
            </p>
            <p style={{ marginTop: "1.4rem", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(247,243,236,.55)", maxWidth: 400 }}>
              {no1.fullDescription}
            </p>
            <No1Purchase />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "7rem 4vw", borderTop: "1px solid rgba(247,243,236,.08)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p style={sectionLabel}>Our Story</p>
          {no1Story.map((p, i) => (
            <p key={i} style={{ ...serifBody, marginBottom: i === no1Story.length - 1 ? 0 : "1.8rem" }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Origin, Roast, Tasting, Brewing */}
      <section style={{ padding: "7rem 4vw", borderTop: "1px solid rgba(247,243,236,.08)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <dl style={{ display: "grid", gap: "0" }}>
            {no1Detail.map((d) => (
              <div
                key={d.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(120px, 200px) 1fr",
                  gap: "2rem",
                  padding: "1.8rem 0",
                  borderBottom: "1px solid rgba(247,243,236,.08)",
                }}
              >
                <dt style={{ fontSize: ".62rem", letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(247,243,236,.35)" }}>
                  {d.label}
                </dt>
                <dd style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", fontWeight: 300, color: "rgba(247,243,236,.85)" }}>
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Delivery */}
      <section style={{ padding: "7rem 4vw", borderTop: "1px solid rgba(247,243,236,.08)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p style={sectionLabel}>Delivery</p>
          <dl style={{ display: "grid", gap: 0 }}>
            {deliveryRates.map((r) => (
              <div
                key={r.zone}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  padding: "1.3rem 0",
                  borderBottom: "1px solid rgba(247,243,236,.08)",
                  flexWrap: "wrap",
                }}
              >
                <dt style={{ fontSize: ".92rem", color: "rgba(247,243,236,.8)" }}>{r.zone}</dt>
                <dd style={{ fontSize: ".85rem", color: "rgba(247,243,236,.45)" }}>
                  {r.fee} · {r.estimate}
                </dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: "1.2rem", fontSize: ".75rem", color: "rgba(247,243,236,.3)" }}>
            Confirmed with your order before anything is charged.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "7rem 4vw 9rem", borderTop: "1px solid rgba(247,243,236,.08)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p style={sectionLabel}>Frequently Asked</p>
          {no1Faq.map((f) => (
            <div key={f.q} style={{ padding: "1.8rem 0", borderBottom: "1px solid rgba(247,243,236,.08)" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "1.2rem", marginBottom: ".7rem" }}>{f.q}</h3>
              <p style={{ fontSize: ".9rem", lineHeight: 1.85, color: "rgba(247,243,236,.5)", maxWidth: 620 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
