// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Gaeilge: "Gaeilge", // Add translations for your content here
      },
    },
    ga: {
      translation: {
        Gaeilge: "Gaeilge", // Keep it the same for Gaeilge
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
