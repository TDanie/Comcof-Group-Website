"use client";

import Link from "next/link";
import { NO1_SLUG } from "@/lib/founding";

function Logo({ height = 34 }: { height?: number }) {
  return (
    <svg
      style={{ height, width: "auto", color: "var(--ivory)", display: "block" }}
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="COMCOF"
    >
      <ellipse cx="200" cy="75" rx="186" ry="62" stroke="currentColor" strokeWidth="11" />
      <text x="52" y="96" fontFamily="var(--sans)" fontWeight="800" fontSize="58" fill="currentColor" textLength="190" lengthAdjust="spacingAndGlyphs">COMC</text>
      <circle cx="276" cy="75" r="23" fill="currentColor" />
      <path d="M266 60 C 284 69, 268 81, 286 90" stroke="#0C0B0A" strokeWidth="6" fill="none" strokeLinecap="round" />
      <text x="312" y="96" fontFamily="var(--sans)" fontWeight="800" fontSize="58" fill="currentColor" textLength="34" lengthAdjust="spacingAndGlyphs">F</text>
    </svg>
  );
}

const linkStyle: React.CSSProperties = {
  fontSize: ".68rem",
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: "rgba(247,243,236,.5)",
  textDecoration: "none",
};

export function ShopNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(12,11,10,.88)",
        backdropFilter: "blur(14px)",
      }}
    >
      <nav
        aria-label="Shop"
        style={{
          maxWidth: "var(--w-page)",
          margin: "0 auto",
          padding: "0 4vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 78,
        }}
      >
        <Link href="/shop" aria-label="COMCOF Shop home" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href={`/shop/products/${NO1_SLUG}`} style={linkStyle}>
            No. 1
          </Link>
          <a href="https://comcofgroup.com" style={linkStyle}>
            Comcof Group
          </a>
        </div>
      </nav>
    </header>
  );
}

export function ShopFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(247,243,236,.08)", padding: "4rem 4vw 3rem" }}>
      <div
        style={{
          maxWidth: "var(--w-page)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Logo height={26} />
        <nav aria-label="Footer" style={{ display: "flex", gap: "1.8rem", flexWrap: "wrap" }}>
          <a href="https://comcofgroup.com" style={linkStyle}>Comcof Group</a>
          <a href="https://comcofgroup.com/privacy" style={linkStyle}>Privacy</a>
          <a href="https://comcofgroup.com/terms" style={linkStyle}>Terms</a>
          <a href="mailto:info@comcofgroup.com" style={linkStyle}>Contact</a>
        </nav>
      </div>
      <p style={{ maxWidth: "var(--w-page)", margin: "3rem auto 0", fontSize: ".68rem", color: "rgba(247,243,236,.25)" }}>
        © 2026 Comcof Group. Kampala, Uganda.
      </p>
    </footer>
  );
}
