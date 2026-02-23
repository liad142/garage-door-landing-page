import { BrandConfig } from "@/data/brands";

export default function AboutSection({ brand }: { brand: BrandConfig }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-secondary)] mb-6">
            About {brand.name}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {brand.about}
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">500+</div>
              <div className="text-sm text-gray-500 mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">10+</div>
              <div className="text-sm text-gray-500 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">Same Day</div>
              <div className="text-sm text-gray-500 mt-1">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
