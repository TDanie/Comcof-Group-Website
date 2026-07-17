import type { Metadata } from "next";
import { isCommerceConfigured } from "@/lib/env";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

/**
 * Administration area gate. The full admin (products, inventory, orders,
 * customers, promotions) activates once Supabase is configured and staff
 * roles exist; until then this route exposes nothing and links nowhere.
 * Authorisation is enforced server-side against staff roles, never by
 * hiding links.
 */
export default function AdminPage() {
  const configured = isCommerceConfigured();
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <div className="eyebrow">Comcof Staff</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
          Administration
        </h1>
        <div className="empty-state" style={{ marginTop: "2.5rem" }}>
          <h3>{configured ? "Staff sign-in required." : "The commerce backend is not yet connected."}</h3>
          <p>
            {configured
              ? "Sign in with your staff account to manage products, inventory, and orders."
              : "Once the Supabase project is provisioned and migrations applied, staff accounts and role-based access activate here. There is nothing to see or misuse until then."}
          </p>
        </div>
      </div>
    </section>
  );
}
