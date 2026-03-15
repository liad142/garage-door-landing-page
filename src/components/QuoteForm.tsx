"use client";
import { useState } from "react";
import { BrandConfig } from "@/data/brands";

export default function QuoteForm({ brand }: { brand: BrandConfig }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${brand.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          _subject: `New Lead from ${brand.name} - ${formData.get("service")}`,
          _template: "table",
        }),
      });

      const data = await res.json();
      if (data.success === "true" || data.success === true || res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[var(--color-secondary)]" id="quote">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          Get Your Free Quote
        </h2>
        <p className="text-center text-gray-300 mb-10">
          Fill out the form below and we&apos;ll get back to you shortly
        </p>
        {submitted ? (
          <div className="bg-green-500/20 border border-green-500 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">&#10004;</div>
            <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
            <p className="text-gray-300">
              We&apos;ve received your request. Our team will contact you shortly.
              <br />
              For immediate assistance, call{" "}
              <a href={`tel:${brand.phone}`} className="text-[var(--color-accent)] font-semibold hover:underline">
                {brand.phoneDisplay}
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
            </div>
            <div>
              <select
                name="service"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              >
                <option value="" className="text-gray-900">Select Service</option>
                <option value="Garage Door Repair" className="text-gray-900">Garage Door Repair</option>
                <option value="Spring Repair & Replacement" className="text-gray-900">Spring Repair &amp; Replacement</option>
                <option value="Opener Repair & Installation" className="text-gray-900">Opener Repair &amp; Installation</option>
                <option value="New Door Installation" className="text-gray-900">New Door Installation</option>
                <option value="$69 Tune-Up" className="text-gray-900">$69 Tune-Up</option>
                <option value="Other" className="text-gray-900">Other</option>
              </select>
            </div>
            {error && (
              <p className="text-red-400 text-center text-sm">
                Something went wrong. Please call us at {brand.phoneDisplay} instead.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--color-primary)] hover:opacity-90 transition-opacity text-white py-4 rounded-xl text-lg font-bold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Request Free Quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
