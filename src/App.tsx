import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LanguageContext } from "@/contexts/LanguageContext";
import { detectLanguage, getTranslations, saveLanguagePreference, type Language } from "@/lib/i18n";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<Language>("pt");
  const [translations, setTranslations] = useState(getTranslations("pt"));

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguage(detectedLang);
    setTranslations(getTranslations(detectedLang));
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setTranslations(getTranslations(lang));
    saveLanguagePreference(lang);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageSelector 
          currentLanguage={language} 
          onLanguageChange={handleLanguageChange} 
        />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageContext.Provider value={{ language, translations, setLanguage }}>
            <Routes>
              <Route path="/" element={<Quiz />} />
              <Route path="/sales" element={<Index />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageContext.Provider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
