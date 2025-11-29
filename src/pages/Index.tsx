import { Hero } from "@/components/Hero";
import { EmotionalConnection } from "@/components/EmotionalConnection";
import { Tripod } from "@/components/Tripod";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen">
      <Hero t={translations} />
      <EmotionalConnection t={translations} />
      <Tripod t={translations} />
      <Features t={translations} />
      <Testimonials t={translations} />
      <Pricing t={translations} />
      <FinalCTA t={translations} />
      <Footer t={translations} />
    </div>
  );
};

export default Index;
