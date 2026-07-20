"use client";

import { useState } from "react";
import { weights, grinds } from "@/lib/founding";
import { contact } from "@/lib/env";

/**
 * Selectors are real and carry the exact specification into a reservation.
 * Pricing is announced at release, so nothing is charged here.
 */
export function No1Purchase() {
  const [weight, setWeight] = useState<string>(weights[0]);
  const [grind, setGrind] = useState<string>(grinds[0]);
  const [quantity, setQuantity] = useState(1);

  const body = [
    "Reservation: COMCOF No. 1",
    "",
    `Size: ${weight}`,
    `Grind: ${grind}`,
    `Quantity: ${quantity}`,
    "",
    "Name:",
    "Phone:",
    "Delivery area:",
    "",
    "Please confirm pricing and delivery date.",
  ].join("\n");

  const pill = (active: boolean): React.CSSProperties => ({
    padding: ".7rem 1.4rem",
    border: `1px solid ${active ? "var(--gold)" : "rgba(247,243,236,.18)"}`,
    background: "transparent",
    color: active ? "var(--gold)" : "rgba(247,243,236,.6)",
    fontSize: ".7rem",
    letterSpacing: ".12em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "border-color .25s, color .25s",
  });

  const legend: React.CSSProperties = {
    fontSize: ".6rem",
    letterSpacing: ".26em",
    textTransform: "uppercase",
    color: "rgba(247,243,236,.35)",
    marginBottom: ".9rem",
    display: "block",
  };

  return (
    <div style={{ marginTop: "3rem", maxWidth: 420 }}>
      <fieldset style={{ border: "none", marginBottom: "2rem" }}>
        <legend style={legend}>Size</legend>
        <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
          {weights.map((w) => (
            <button key={w} type="button" onClick={() => setWeight(w)} style={pill(weight === w)} aria-pressed={weight === w}>
              {w}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset style={{ border: "none", marginBottom: "2rem" }}>
        <legend style={legend}>Grind</legend>
        <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
          {grinds.map((g) => (
            <button key={g} type="button" onClick={() => setGrind(g)} style={pill(grind === g)} aria-pressed={grind === g}>
              {g}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset style={{ border: "none", marginBottom: "2.5rem" }}>
        <legend style={legend}>Quantity</legend>
        <div style={{ display: "inline-flex", alignItems: "center", border: "1px solid rgba(247,243,236,.18)" }}>
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
            style={{ background: "none", border: "none", color: "rgba(247,243,236,.6)", padding: ".7rem 1.1rem", cursor: "pointer", fontSize: "1rem" }}
          >
            −
          </button>
          <span aria-live="polite" style={{ minWidth: 40, textAlign: "center", fontSize: ".9rem" }}>
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(Math.min(24, quantity + 1))}
            aria-label="Increase quantity"
            style={{ background: "none", border: "none", color: "rgba(247,243,236,.6)", padding: ".7rem 1.1rem", cursor: "pointer", fontSize: "1rem" }}
          >
            +
          </button>
        </div>
      </fieldset>

      <p style={{ fontSize: ".8rem", color: "rgba(247,243,236,.45)", marginBottom: "1.4rem" }}>
        Pricing announced at release.
      </p>

      <a
        className="btn-primary"
        href={`mailto:${contact.email}?subject=${encodeURIComponent("Reserve COMCOF No. 1")}&body=${encodeURIComponent(body)}`}
      >
        Reserve No. 1
      </a>

      <p style={{ fontSize: ".72rem", color: "rgba(247,243,236,.35)", marginTop: "1.2rem", lineHeight: 1.7 }}>
        Your reservation reaches us with your selection. We confirm pricing
        and a delivery date before anything is charged.
      </p>
    </div>
  );
}
