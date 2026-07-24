import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { supportedLanguageCodes } from "./config/languages";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: supportedLanguageCodes,
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "home", "about", "products", "categories", "contact", "footer", "blogs"],
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "ahpl-language",
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: true },
  });

export default i18n;
