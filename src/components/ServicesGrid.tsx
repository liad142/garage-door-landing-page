import Image from "next/image";
import { BrandConfig } from "@/data/brands";

export default function ServicesGrid({ brand }: { brand: BrandConfig }) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-secondary)] mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional garage door services tailored to your needs in {brand.area}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brand.services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-3 right-3 z-10 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                {service.discount}
              </div>
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <a
                  href="#quote"
                  className="text-[var(--color-primary)] font-semibold text-sm hover:underline"
                >
                  Get a Quote &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
