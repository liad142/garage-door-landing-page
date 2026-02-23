import { BrandConfig } from "@/data/brands";

export default function ReviewsSection({ brand }: { brand: BrandConfig }) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-secondary)] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real reviews from real customers in {brand.area}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-secondary)]">
                    {review.name}
                  </div>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, j) => (
                      <span key={j}>&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
