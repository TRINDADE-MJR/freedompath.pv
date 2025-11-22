import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { EmotionalConnection } from "@/components/EmotionalConnection";
import { Tripod } from "@/components/Tripod";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ThemeSelector } from "@/components/ThemeSelector";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { detectLanguage, getTranslations, type Language } from "@/lib/i18n";

const Index = () => {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [translations, setTranslations] = useState(getTranslations("pt-BR"));

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    setTranslations(getTranslations(detectedLang));
  }, []);

  return (
    <div className="min-h-screen">
      <ThemeSelector />
      <PWAInstallPrompt />
      
      <Hero t={translations} />
      <EmotionalConnection t={translations} />
      <Tripod t={translations} />
      <Features t={translations} />
      <Pricing t={translations} />
      <FinalCTA t={translations} />
      <Footer t={translations} />
    </div>
  );
};

export default Index;
