"use client";
import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <motion.button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Cambiar idioma"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors duration-300"
      style={{
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--accent)",
      }}
    >
      <span>{lang === "es" ? "🇨🇴" : "🇺🇸"}</span>
      <span>{lang === "es" ? "ES" : "EN"}</span>
    </motion.button>
  );
}
