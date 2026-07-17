import type { Metadata } from "next";
import { CorporateForm } from "@/components/CorporateForm";

export const metadata: Metadata = {
  title: "Corporate Coffee",
  description: "Comcof coffee for offices, hotels, restaurants, events, and institutions: scheduled supply, corporate gifting, and invoicing.",
};

export default function CorporatePage() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="eyebrow">Corporate</div>
        <h1 className="h-display" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
          Coffee for <em>Organisations</em>
        </h1>
        <p className="lead">
          Offices, hotels, restaurants, cafés, events, and institutions: we
          supply on a schedule, with consistent quality and proper paperwork.
          Tell us your requirement and we will come back with a supply plan
          and quotation.
        </p>
        <div style={{ marginTop: "2.5rem" }}>
          <CorporateForm />
        </div>
      </div>
    </section>
  );
}
