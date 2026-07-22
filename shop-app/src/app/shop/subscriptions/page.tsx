import type { Metadata } from "next";
import { contact, featureFlags } from "@/lib/env";

export const metadata: Metadata = {
  title: "Subscriptions",
  description: "Fresh Comcof coffee on your schedule: weekly, fortnightly, or monthly deliveries in Kampala and beyond.",
};

const plans = [
  { name: "Weekly", text: "For serious households and small offices that never want to run out." },
  { name: "Fortnightly", text: "The steady rhythm: fresh coffee twice a month, matched to your brewing." },
  { name: "Monthly", text: "A monthly delivery of whichever release suits your taste, whole bean or ground." },
];

export default function SubscriptionsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Subscriptions</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
          Never Run Out of <em>Good Coffee</em>
        </h1>
        <p className="lead">
          Comcof Monthly Reserve brings the range to your door on a rhythm that
          suits you. Choose a coffee, a grind, and a frequency; we handle the
          rest. Pause, skip, or change your coffee whenever you like.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem", marginTop: "2.4rem" }}>
          {plans.map((p) => (
            <div key={p.name} className="card" style={{ padding: "2rem" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 500, fontSize: "1.2rem", marginBottom: ".6rem" }}>{p.name}</h2>
              <p style={{ fontSize: ".8rem", color: "var(--warm-gray)", lineHeight: 1.65 }}>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="empty-state" style={{ marginTop: "2.5rem" }}>
          <h3>{featureFlags.subscriptions ? "Set up your subscription" : "Subscriptions open with our first releases."}</h3>
          <p>
            {featureFlags.subscriptions
              ? "Sign in to choose your coffee and delivery rhythm."
              : "Founding subscribers get first access to every release. Leave your email and we will set you up personally the day subscriptions open."}
          </p>
          <a className="btn-primary" href={`mailto:${contact.email}?subject=Coffee%20subscription%20interest`}>
            Become a Founding Subscriber
          </a>
        </div>
      </div>
    </section>
  );
}
