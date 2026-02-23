import { Metadata } from "next";
import { brands } from "@/data/brands";
import BrandPage from "@/components/BrandPage";

const brand = brands.elite;

export const metadata: Metadata = {
  title: `${brand.name} | Garage Door Repair ${brand.area}`,
  description: `Professional garage door repair, installation & maintenance in ${brand.area}. Same-day service. Call ${brand.phoneDisplay} for a free quote!`,
  openGraph: {
    title: `${brand.name} | Garage Door Repair ${brand.area}`,
    description: `Professional garage door repair, installation & maintenance in ${brand.area}. Same-day service available.`,
    type: "website",
  },
};

export default function ElitePage() {
  return <BrandPage brand={brand} />;
}
