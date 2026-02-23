import { BrandConfig } from "@/data/brands";

export default function TuneUpBanner({ brand }: { brand: BrandConfig }) {
  return (
    <section className="bg-[var(--color-primary)] text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">&#9889;</span>
          <div>
            <p className="text-lg sm:text-xl font-bold">
              Limited Time: Complete Garage Door Tune-Up &mdash; Only $69!
            </p>
            <p className="text-sm opacity-90">
              Includes full inspection, lubrication, safety check &amp; adjustments
            </p>
          </div>
        </div>
        <a
          href={`tel:${brand.phone}`}
          className="bg-white text-[var(--color-primary)] font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
        >
          Book Now: {brand.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
