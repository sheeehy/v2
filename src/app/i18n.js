import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: require("../public/locales/en/translation.json"),
      },
      ga: {
        translations: require("../public/locales/ga/translation.json"),
      },
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },
  });

export default i18n;
