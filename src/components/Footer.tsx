import { BrandConfig } from "@/data/brands";

export default function Footer({ brand }: { brand: BrandConfig }) {
  return (
    <footer className="bg-[var(--color-secondary)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">{brand.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Proudly serving {brand.area} with professional garage door services you can trust.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Garage Door Repair</li>
              <li>Spring Replacement</li>
              <li>Opener Installation</li>
              <li>New Door Installation</li>
              <li>$69 Tune-Up</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <a
              href={`tel:${brand.phone}`}
              className="text-[var(--color-accent)] font-semibold text-lg hover:underline block mb-2"
            >
              {brand.phoneDisplay}
            </a>
            <p className="text-gray-400 text-sm">Serving {brand.area}</p>
            <p className="text-gray-400 text-sm mt-1">Available 7 Days a Week</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {brand.name} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
