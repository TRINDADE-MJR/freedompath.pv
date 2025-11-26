import { createContext, useContext } from "react";
import { type Language } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  translations: any;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
