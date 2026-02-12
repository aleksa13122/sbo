import React, { createContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import de from "../locales/de.json";
import mt from "../locales/mt.json";
import it from "../locales/it.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
      if (savedLang === "mt") setTranslations(mt);
      else if (savedLang === "it") setTranslations(it);
      else if (savedLang === "de") setTranslations(de);
      else setTranslations(en);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);

    if (lang === "en") setTranslations(en);
    else if (lang === "mt") setTranslations(mt);
    else if (lang === "it") setTranslations(it);
    else if (lang === "de") setTranslations(de);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations;
    let fallback = en;

    for (const k of keys) {
      value = value?.[k];
      fallback = fallback?.[k];
    }

    return value || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
