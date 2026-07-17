"use client";

import { useState } from "react";
import { z } from "zod";
import { contact } from "@/lib/env";

const schema = z.object({
  company: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact person is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(7, "A phone number is required"),
  location: z.string().min(2, "Location is required"),
  monthlyRequirement: z.string().min(1, "Give us a rough monthly requirement"),
  frequency: z.string().min(1, "Choose a delivery frequency"),
  notes: z.string().optional(),
});

type FormState = z.infer<typeof schema>;

const empty: FormState = {
  company: "", contactName: "", email: "", phone: "",
  location: "", monthlyRequirement: "", frequency: "", notes: "",
};

export function CorporateForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const body = [
      "Corporate coffee enquiry",
      "",
      `Company: ${form.company}`,
      `Contact person: ${form.contactName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Estimated monthly requirement: ${form.monthlyRequirement}`,
      `Preferred delivery frequency: ${form.frequency}`,
      "",
      `Notes: ${form.notes || "(none)"}`,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Corporate enquiry: ${form.company}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = (
    k: keyof FormState,
    label: string,
    props: Record<string, unknown> = {}
  ) => (
    <div>
      <label className="form-label" htmlFor={`c-${k}`}>{label}</label>
      <input id={`c-${k}`} className="form-input" value={form[k] ?? ""} onChange={set(k)} {...props} />
      {errors[k] && <p className="form-error" role="alert">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem", background: "var(--charcoal)", border: "1px solid var(--light-line)", padding: "2.5rem" }}>
      {field("company", "Company *")}
      {field("contactName", "Contact Person *")}
      {field("email", "Email *", { type: "email" })}
      {field("phone", "Phone *", { type: "tel", placeholder: "+256 ..." })}
      {field("location", "Location *", { placeholder: "City / area" })}
      {field("monthlyRequirement", "Estimated Monthly Requirement *", { placeholder: "e.g. 20kg roasted" })}
      <div>
        <label className="form-label" htmlFor="c-frequency">Delivery Frequency *</label>
        <select id="c-frequency" className="form-select" value={form.frequency} onChange={set("frequency")}>
          <option value="">Select frequency</option>
          <option>Weekly</option>
          <option>Fortnightly</option>
          <option>Monthly</option>
          <option>One-off / event</option>
        </select>
        {errors.frequency && <p className="form-error" role="alert">{errors.frequency}</p>}
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <label className="form-label" htmlFor="c-notes">Preferred Products, Packaging, or Anything Else</label>
        <textarea id="c-notes" className="form-textarea" rows={4} value={form.notes ?? ""} onChange={set("notes")} />
      </div>
      {sent && (
        <p role="status" style={{ gridColumn: "1 / -1", color: "var(--green-light)", fontSize: ".85rem" }}>
          Your enquiry has opened in your email app; press send and our team
          will respond with a supply plan and quotation.
        </p>
      )}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end" }}>
        <button type="submit" className="btn-primary">Request a Quotation</button>
      </div>
    </form>
  );
}
