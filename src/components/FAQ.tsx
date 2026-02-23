"use client";
import { useState } from "react";
import { BrandConfig } from "@/data/brands";

export default function FAQ({ brand }: { brand: BrandConfig }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-secondary)] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {brand.faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[var(--color-secondary)] pr-4">
                  {faq.question}
                </span>
                <span
                  className="text-[var(--color-primary)] text-xl flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
