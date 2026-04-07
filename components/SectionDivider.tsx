"use client";
import { useLang } from "@/context/LanguageContext";

export default function SectionDivider({ labelKey }: { labelKey: string }) {
  const { t } = useLang();

  return (
    <div className="flex items-center gap-4 px-6 md:px-10 max-w-7xl mx-auto py-8">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent-30, rgba(147,197,253,0.3)), transparent)" }} />
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
        <span className="text-[9px] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
          {t(labelKey)}
        </span>
      </div>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent-30, rgba(147,197,253,0.3)), transparent)" }} />
    </div>
  );
}
