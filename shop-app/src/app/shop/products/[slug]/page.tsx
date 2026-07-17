import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/catalog";
import { AddToCart } from "@/components/AddToCart";
import { formatMoney } from "@/lib/types";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProductBySlug(slug);
  if (!data) return { title: "Product not found" };
  return {
    title: data.product.name,
    description: data.product.shortDescription,
  };
}

const detailRows: Array<[string, keyof import("@/lib/types").Product]> = [
  ["Origin", "originCountry"],
  ["Region", "region"],
  ["Producer", "producer"],
  ["Variety", "variety"],
  ["Altitude", "altitude"],
  ["Process", "processingMethod"],
  ["Roast", "roastProfile"],
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const data = await getProductBySlug(slug);
  if (!data) notFound();
  const { product, variants } = data;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.imageUrls,
    brand: { "@type": "Brand", name: "Comcof" },
    offers: variants.map((v) => ({
      "@type": "Offer",
      price: v.price.amount,
      priceCurrency: "UGX",
      availability:
        v.availableQuantity > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      sku: v.sku,
    })),
  };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className="wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div>
          {product.imageUrls[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageUrls[0]}
              alt={product.name}
              style={{ width: "100%", border: "1px solid var(--light-line)" }}
            />
          ) : (
            <div
              aria-hidden="true"
              style={{
                aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid var(--light-line)", background: "var(--espresso)",
                color: "var(--gold)", fontFamily: "var(--serif)", fontStyle: "italic",
              }}
            >
              Product photography coming
            </div>
          )}
        </div>
        <div>
          {product.originCountry && (
            <div className="eyebrow">{product.originCountry}{product.region ? ` · ${product.region}` : ""}</div>
          )}
          <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>{product.name}</h1>
          <p className="lead" style={{ marginTop: ".9rem" }}>{product.shortDescription}</p>

          {variants.length > 0 && (
            <p style={{ marginTop: "1.2rem", fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--gold-light)" }}>
              {variants.length > 1 ? "From " : ""}
              {formatMoney(variants[0]!.price)}
            </p>
          )}

          <AddToCart product={product} variants={variants} />

          {product.flavourNotes.length > 0 && (
            <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
              {product.flavourNotes.map((n) => (
                <span key={n} className="chip">{n}</span>
              ))}
            </div>
          )}

          <dl style={{ marginTop: "2rem", borderTop: "1px solid var(--light-line)" }}>
            {detailRows.map(([label, key]) => {
              const value = product[key];
              if (!value || typeof value !== "string") return null;
              return (
                <div
                  key={label}
                  style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: ".7rem 0", borderBottom: "1px solid var(--light-line)" }}
                >
                  <dt style={{ fontSize: ".68rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--warm-gray)" }}>{label}</dt>
                  <dd style={{ fontSize: ".85rem", textAlign: "right" }}>{value}</dd>
                </div>
              );
            })}
          </dl>

          {product.fullDescription && (
            <p style={{ marginTop: "1.6rem", fontSize: ".9rem", lineHeight: 1.8, color: "rgba(247,243,236,.7)" }}>
              {product.fullDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
