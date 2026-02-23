import { BrandConfig } from "@/data/brands";

export default function MobileCallButton({ brand }: { brand: BrandConfig }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[var(--color-primary)] shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href={`tel:${brand.phone}`}
        className="flex items-center justify-center gap-2 text-white font-bold py-4 text-lg"
      >
        <span>&#128222;</span> Call Now: {brand.phoneDisplay}
      </a>
    </div>
  );
}
