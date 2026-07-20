import Link from "next/link";
import type { Metadata } from "next";
import { NO1_SLUG, comingNext } from "@/lib/founding";

export const metadata: Metadata = {
  title: "COMCOF Shop",
  description:
    "Coffee from Ugandan origins. Prepared with care. Delivered directly to your door. COMCOF No. 1, our first release.",
};

export default function ShopHome() {
  return (
    <>
      <section
        style={{
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          padding: "10rem 4vw 8rem",
        }}
      >
        <div className="wrap">
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            COMCOF Shop
          </h1>
          <p
            style={{
              marginTop: "2rem",
              fontSize: "clamp(.95rem, 1.4vw, 1.1rem)",
              fontWeight: 300,
              lineHeight: 2,
              color: "rgba(247,243,236,.55)",
              maxWidth: 420,
            }}
          >
            Coffee from Ugandan origins.
            <br />
            Prepared with care.
            <br />
            Delivered directly to your door.
          </p>
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", marginTop: "3.5rem", flexWrap: "wrap" }}>
            <Link className="btn-primary" href={`/shop/products/${NO1_SLUG}`}>
              Shop No. 1
            </Link>
            <a
              href="https://comcofgroup.com/about"
              style={{
                fontSize: ".72rem",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "rgba(247,243,236,.5)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(247,243,236,.22)",
                paddingBottom: ".3rem",
              }}
            >
              Learn Our Story
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 4vw 10rem" }}>
        <Link
          href={`/shop/products/${NO1_SLUG}`}
          className="wrap no1-feature"
          style={{ textDecoration: "none", display: "grid", alignItems: "center" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/packaging/no-1-front.svg"
              alt="COMCOF No. 1 coffee bag"
              style={{ width: "min(100%, 380px)" }}
            />
          </div>
          <div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
              }}
            >
              COMCOF No. 1
            </h2>
            <p style={{ marginTop: "1.2rem", fontSize: "1rem", fontWeight: 300, color: "rgba(247,243,236,.55)" }}>
              Our first release.
            </p>
            <span
              style={{
                display: "inline-block",
                marginTop: "2.5rem",
                fontSize: ".68rem",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              Discover No. 1
            </span>
          </div>
        </Link>
      </section>

      <section style={{ padding: "0 4vw 10rem" }}>
        <div className="wrap">
          <p
            style={{
              fontSize: ".64rem",
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "rgba(247,243,236,.35)",
              marginBottom: "3rem",
            }}
          >
            Coming Next
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1px",
              background: "rgba(247,243,236,.08)",
              border: "1px solid rgba(247,243,236,.08)",
            }}
          >
            {comingNext.map((c) => (
              <div key={c.name} style={{ background: "var(--black)", padding: "2.5rem 1.8rem", minHeight: 200 }}>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "1.15rem", lineHeight: 1.3 }}>
                  {c.name}
                </h3>
                <p style={{ marginTop: ".7rem", fontSize: ".8rem", lineHeight: 1.7, color: "rgba(247,243,236,.42)" }}>
                  {c.note}
                </p>
                <p
                  style={{
                    marginTop: "1.8rem",
                    fontSize: ".58rem",
                    letterSpacing: ".24em",
                    textTransform: "uppercase",
                    color: "rgba(247,243,236,.3)",
                  }}
                >
                  Coming Soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
