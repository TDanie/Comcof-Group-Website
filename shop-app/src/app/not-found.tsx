import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <div className="empty-state" style={{ marginTop: "3rem" }}>
          <h3>That page does not exist.</h3>
          <p>The coffee is real; this address is not. Head back to the shop.</p>
          <Link className="btn-primary" href="/shop">Back to the Shop</Link>
        </div>
      </div>
    </section>
  );
}
