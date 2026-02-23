import Link from "next/link";
import { brands } from "@/data/brands";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Garage Door Services
        </h1>
        <p className="text-gray-400 text-center mb-10">Select a brand</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {Object.values(brands).map((brand) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}`}
              className="block rounded-2xl overflow-hidden bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-gray-600"
            >
              <div
                className="h-2"
                style={{ backgroundColor: brand.colors.primary }}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  {brand.name}
                </h2>
                <p className="text-gray-400 text-sm mb-3">{brand.area}</p>
                <p className="text-sm font-medium" style={{ color: brand.colors.primary }}>
                  {brand.phoneDisplay}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
