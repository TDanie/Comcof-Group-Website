"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

function Logo({ height = 38 }: { height?: number }) {
  return (
    <svg
      style={{ height, width: "auto", color: "var(--ivory)", display: "block" }}
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Comcof"
    >
      <ellipse cx="200" cy="75" rx="186" ry="62" stroke="currentColor" strokeWidth="11" />
      <text x="52" y="96" fontFamily="var(--sans)" fontWeight="800" fontSize="58" fill="currentColor" textLength="190" lengthAdjust="spacingAndGlyphs">COMC</text>
      <circle cx="276" cy="75" r="23" fill="currentColor" />
      <path d="M266 60 C 284 69, 268 81, 286 90" stroke="#0C0B0A" strokeWidth="6" fill="none" strokeLinecap="round" />
      <text x="312" y="96" fontFamily="var(--sans)" fontWeight="800" fontSize="58" fill="currentColor" textLength="34" lengthAdjust="spacingAndGlyphs">F</text>
    </svg>
  );
}

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/coffee", label: "Coffee" },
  { href: "/shop/gifts", label: "Gifts" },
  { href: "/shop/subscriptions", label: "Subscriptions" },
  { href: "/shop/corporate", label: "Corporate" },
];

export function ShopNav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(12,11,10,0.97)", borderBottom: "1px solid var(--light-line)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
        aria-label="Shop"
        style={{
          maxWidth: "var(--w-page)", margin: "0 auto", padding: "0 4vw",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
        }}
      >
        <Link href="/shop" aria-label="Comcof Shop home" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <div className="shopnav-links" style={{ display: "flex", gap: "1.8rem", alignItems: "center" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: ".76rem", letterSpacing: ".1em", textTransform: "uppercase",
                color: "rgba(247,243,236,.65)", textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href="https://comcofgroup.com"
            style={{ fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--warm-gray)", textDecoration: "none" }}
            className="shopnav-links"
          >
            Comcof Group
          </a>
          <Link
            href="/shop/cart"
            aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
            style={{
              display: "flex", alignItems: "center", gap: ".5rem",
              border: "1px solid var(--gold)", color: "var(--gold)",
              padding: ".5rem 1.1rem", fontSize: ".68rem", letterSpacing: ".12em",
              textTransform: "uppercase", textDecoration: "none",
            }}
          >
            Cart{count > 0 ? ` (${count})` : ""}
          </Link>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="shopnav-burger"
            style={{
              display: "none", background: "none", border: "none",
              color: "var(--ivory)", fontSize: "1.2rem", cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </nav>
      {open && (
        <div style={{ borderTop: "1px solid var(--light-line)", padding: "1rem 4vw 1.5rem", display: "grid", gap: ".9rem" }}>
          {[...links, { href: "https://comcofgroup.com", label: "Comcof Group" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: ".85rem", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ivory)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.shopnav-links) { display: none !important; }
          .shopnav-burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}

export function ShopFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--light-line)", padding: "3.5rem 4vw", marginTop: "4rem" }}>
      <div style={{ maxWidth: "var(--w-page)", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Logo height={30} />
          <p style={{ fontSize: ".78rem", color: "var(--warm-gray)", marginTop: ".9rem", maxWidth: 320, lineHeight: 1.7 }}>
            Comcof Shop is the consumer channel of Comcof Group, a coffee
            enterprise being built from Ugandan origins.
          </p>
        </div>
        <nav aria-label="Footer" style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap", fontSize: ".78rem" }}>
          <a href="https://comcofgroup.com" style={{ color: "var(--warm-gray)", textDecoration: "none" }}>Comcof Group</a>
          <a href="https://comcofgroup.com/coffee" style={{ color: "var(--warm-gray)", textDecoration: "none" }}>Our Coffee</a>
          <a href="https://comcofgroup.com/privacy" style={{ color: "var(--warm-gray)", textDecoration: "none" }}>Privacy</a>
          <a href="https://comcofgroup.com/terms" style={{ color: "var(--warm-gray)", textDecoration: "none" }}>Terms</a>
          <a href="mailto:info@comcofgroup.com" style={{ color: "var(--warm-gray)", textDecoration: "none" }}>Support</a>
        </nav>
      </div>
      <p style={{ maxWidth: "var(--w-page)", margin: "2.5rem auto 0", fontSize: ".7rem", color: "var(--mid-gray)" }}>
        © 2026 Comcof Group. All rights reserved. Kampala, Uganda.
      </p>
    </footer>
  );
}
