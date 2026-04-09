"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "es" | "en";
type Translations = Record<string, Record<string, string>>;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    const initial = saved || "es";
    setLangState(initial);
    loadTranslations(initial);
    document.documentElement.lang = initial;
  }, []);

  const loadTranslations = async (l: Lang) => {
    const res = await fetch(`/locales/${l}.json`);
    const data = await res.json();
    setTranslations(data);
  };

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    loadTranslations(l);
    document.documentElement.lang = l;
  };

  const t = (key: string): string => {
    const parts = key.split(".");
    let val: unknown = translations;
    for (const p of parts) {
      if (val && typeof val === "object") val = (val as Record<string, unknown>)[p];
      else return key;
    }
    return typeof val === "string" ? val : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
