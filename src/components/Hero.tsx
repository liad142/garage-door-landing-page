import Image from "next/image";
import { BrandConfig } from "@/data/brands";

export default function Hero({ brand }: { brand: BrandConfig }) {
  return (
    <section className="relative bg-[var(--color-secondary)] text-white overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10" />
      <Image
        src={brand.heroImage}
        alt={`${brand.name} - Professional Garage Door Services in ${brand.area}`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Professional Garage Door
          <br />
          <span className="text-[var(--color-accent)]">Repair & Installation</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-4 max-w-2xl">
          {brand.tagline}
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-8">
          <span className="flex items-center gap-1">&#10003; Quick Service</span>
          <span className="flex items-center gap-1">&#10003; Local &amp; Licensed</span>
          <span className="flex items-center gap-1">&#10003; All Payment Methods</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${brand.phone}`}
            className="bg-[var(--color-primary)] hover:opacity-90 transition-opacity text-white px-8 py-4 rounded-xl text-lg font-bold text-center shadow-lg"
          >
            Call Us Now: {brand.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="border-2 border-white hover:bg-white hover:text-[var(--color-secondary)] transition-colors text-white px-8 py-4 rounded-xl text-lg font-bold text-center"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
