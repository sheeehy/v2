import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HTTPApi from "i18next-http-backend";
import i18next from "i18next";

i18next.use(initReactI18next).use(LanguageDetector).use(HTTPApi);

export default i18next;
