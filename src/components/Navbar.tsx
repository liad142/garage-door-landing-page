"use client";
import Image from "next/image";
import { BrandConfig } from "@/data/brands";

export default function Navbar({ brand }: { brand: BrandConfig }) {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-secondary)] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={48}
            height={48}
            className="rounded-md"
          />
          <span className="text-lg font-bold tracking-tight hidden sm:block">{brand.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${brand.phone}`} className="hidden sm:block text-sm font-medium hover:text-[var(--color-accent)] transition-colors">
            {brand.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="bg-[var(--color-primary)] hover:opacity-90 transition-opacity text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
