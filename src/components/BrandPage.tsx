import { BrandConfig } from "@/data/brands";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TuneUpBanner from "./TuneUpBanner";
import ServicesGrid from "./ServicesGrid";
import AboutSection from "./AboutSection";
import ReviewsSection from "./ReviewsSection";
import QuoteForm from "./QuoteForm";
import FAQ from "./FAQ";
import Footer from "./Footer";
import MobileCallButton from "./MobileCallButton";

export default function BrandPage({ brand }: { brand: BrandConfig }) {
  return (
    <div
      style={
        {
          "--color-primary": brand.colors.primary,
          "--color-secondary": brand.colors.secondary,
          "--color-accent": brand.colors.accent,
        } as React.CSSProperties
      }
    >
      <Navbar brand={brand} />
      <Hero brand={brand} />
      <TuneUpBanner brand={brand} />
      <ServicesGrid brand={brand} />
      <AboutSection brand={brand} />
      <ReviewsSection brand={brand} />
      <QuoteForm brand={brand} />
      <FAQ brand={brand} />
      <Footer brand={brand} />
      <MobileCallButton brand={brand} />
    </div>
  );
}
