import Link from "next/link";
import type { Product } from "@/lib/types";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "1.2rem",
        marginTop: "1rem",
      }}
    >
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/shop/products/${p.slug}`}
          className="card"
          style={{ textDecoration: "none", display: "block" }}
        >
          {p.imageUrls[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.imageUrls[0]}
              alt={p.name}
              style={{ width: "100%", height: 220, objectFit: "cover", borderBottom: "1px solid var(--light-line)" }}
            />
          ) : (
            <div
              aria-hidden="true"
              style={{
                height: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid var(--light-line)",
                background: "var(--espresso)",
                color: "var(--gold)",
                fontFamily: "var(--serif)",
                fontStyle: "italic",
              }}
            >
              Photography coming
            </div>
          )}
          <div style={{ padding: "1.4rem" }}>
            {p.originCountry ? (
              <div style={{ fontSize: ".62rem", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: ".45rem" }}>
                {p.originCountry}
                {p.region ? ` · ${p.region}` : ""}
              </div>
            ) : null}
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "1.15rem", marginBottom: ".4rem" }}>
              {p.name}
            </h3>
            <p style={{ fontSize: ".78rem", color: "var(--warm-gray)", lineHeight: 1.6 }}>
              {p.shortDescription}
            </p>
            {p.flavourNotes.length > 0 && (
              <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginTop: ".8rem" }}>
                {p.flavourNotes.slice(0, 3).map((n) => (
                  <span key={n} className="chip">{n}</span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
