import type { Metadata } from "next";
import { getActiveProducts, type CatalogFilters } from "@/lib/catalog";
import { ProductGrid } from "@/components/ProductGrid";
import { isCommerceConfigured, contact } from "@/lib/env";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coffee",
  description:
    "Browse Comcof coffee: Uganda Robusta and Uganda Arabica, whole bean and ground, in commercial and specialty grades.",
};

export const dynamic = "force-dynamic";

const roasts = ["Light", "Medium", "Medium-Dark", "Dark"];

export default async function CoffeePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filters: CatalogFilters = {
    roast: typeof params.roast === "string" ? params.roast : undefined,
    origin: typeof params.origin === "string" ? params.origin : undefined,
    q: typeof params.q === "string" ? params.q : undefined,
  };
  const products = await getActiveProducts(filters);
  const configured = isCommerceConfigured();

  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">Coffee</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
          Ugandan Coffee, <em>Released Properly</em>
        </h1>
        <p className="lead">
          Uganda Robusta from across the country and Uganda Arabica from Mount
          Elgon and Rwenzori, in commercial and specialty grades. Every release
          is cupped before it is sold.
        </p>

        <form
          method="get"
          style={{ display: "flex", gap: ".8rem", flexWrap: "wrap", margin: "2.2rem 0 1rem", alignItems: "end" }}
          aria-label="Filter coffee"
        >
          <div>
            <label className="form-label" htmlFor="f-q">Search</label>
            <input id="f-q" name="q" defaultValue={filters.q ?? ""} className="form-input" placeholder="Search coffee" style={{ width: 220 }} />
          </div>
          <div>
            <label className="form-label" htmlFor="f-roast">Roast</label>
            <select id="f-roast" name="roast" defaultValue={filters.roast ?? ""} className="form-select" style={{ width: 180 }}>
              <option value="">All roasts</option>
              {roasts.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn-ghost" style={{ padding: ".8rem 1.6rem" }}>
            Apply
          </button>
          {(filters.q || filters.roast) && (
            <Link href="/shop/coffee" style={{ fontSize: ".72rem", color: "var(--warm-gray)", alignSelf: "center" }}>
              Clear filters
            </Link>
          )}
        </form>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="empty-state" style={{ marginTop: "2rem" }}>
            <h3>
              {configured && (filters.q || filters.roast)
                ? "No coffee matches those filters yet."
                : "The retail catalogue opens with our first releases."}
            </h3>
            <p>
              {configured && (filters.q || filters.roast)
                ? "Try clearing the filters, or tell us what you are looking for and we will point you to the closest lot."
                : "We list coffee only once it is sourced, cupped, and packed. Order directly by email today, or join the launch list to hear the moment the first lots go live."}
            </p>
            <a className="btn-primary" href={`mailto:${contact.email}?subject=Coffee%20enquiry`}>
              Talk to Us About Coffee
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
