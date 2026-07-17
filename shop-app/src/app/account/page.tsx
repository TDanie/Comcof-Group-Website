import type { Metadata } from "next";
import { isCommerceConfigured, contact } from "@/lib/env";

export const metadata: Metadata = {
  title: "Account",
  description: "Your Comcof Shop account: orders, addresses, subscriptions, and preferences.",
};

export default function AccountPage() {
  const configured = isCommerceConfigured();
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <div className="eyebrow">Account</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
          Your <em>Account</em>
        </h1>
        <div className="empty-state" style={{ marginTop: "2.5rem" }}>
          <h3>
            {configured
              ? "Sign-in is being switched on."
              : "Customer accounts open with the catalogue."}
          </h3>
          <p>
            Accounts will hold your orders, addresses, subscriptions, and
            preferences, with no password needed at checkout: guest ordering
            stays available. Until then, our team tracks every order
            personally.
          </p>
          <a className="btn-ghost" href={`mailto:${contact.email}?subject=Order%20support`}>
            Ask About an Order
          </a>
        </div>
      </div>
    </section>
  );
}
