"use client";
import { useState } from "react";
import { chimney } from "@/data/chimney";

type Status = "idle" | "sending" | "sent" | "failed";

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Honeypot: real visitors never see or fill this field.
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${chimney.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          service: data.get("service"),
          _subject: `New lead from ${chimney.name}: ${data.get("service")}`,
          _template: "table",
        }),
      });
      const body = await res.json().catch(() => null);
      const ok = res.ok && (body?.success === true || body?.success === "true");
      setStatus(ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <div className="dca-form-done" role="status">
        <h3>Request received.</h3>
        <p>
          We will call you back about your estimate. If it cannot wait, call{" "}
          <a href={`tel:${chimney.phone}`}>{chimney.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="dca-form" onSubmit={handleSubmit}>
      <div className="dca-field">
        <label htmlFor="dca-name">Name</label>
        <input id="dca-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="dca-field">
        <label htmlFor="dca-phone">Phone number</label>
        <input id="dca-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="dca-field">
        <label htmlFor="dca-service">What needs doing?</label>
        <select id="dca-service" name="service" required defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          {chimney.formServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <input
        className="dca-honey"
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {status === "failed" && (
        <p className="dca-form-error" role="alert">
          That did not send. Try again, or call {chimney.phoneDisplay}.
        </p>
      )}
      <button className="dca-btn dca-btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request a free estimate"}
      </button>
    </form>
  );
}
