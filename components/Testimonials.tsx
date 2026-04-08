// components/Testimonials.tsx
import { useLang } from "@/context/LanguageContext";
const TESTIMONIALS_META = [
  { id: 1, quoteKey: "testimonials.t1", author: "Duvan Urresti", role: "ingeniero civil", company: "contratista", initial: "D", color: "#93c5fd" },
  { id: 2, quoteKey: "testimonials.t2", author: "Andres Guerrero", role: "Ingeniero civil", initial: "AG", color: "#5b8fd4" },
  { id: 3, quoteKey: "testimonials.t3", author: "Juan Carlos Florez", role: "Odontologo", company: "Oral-care", initial: "JC", color: "#60a5fa" },
  { id: 4, quoteKey: "testimonials.t4", author: "Brayan Acosta", role: "CEO y mecanico", company: "Taller Suzuki", initial: "B", color: "#60a5fa" },
];

function QuoteMark({ color }: { color: string }) {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden className="mb-5 shrink-0">
      <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 7.2 7.2 12H13V24H0ZM18 24V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 7.2 25.2 12H31V24H18Z" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section id="testimonials" className="py-14 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Testimonios">
      <hr className="section-rule mb-10" />

      {/* Header — flex row */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div className="flex flex-col gap-3">
          <p className="label-tag">{t("testimonials.label")}</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text)]">{t("testimonials.title")}</h2>
        </div>
      </header>

      {/* Grid de tarjetas — grid responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS_META.map((tm) => (
          <div
            key={tm.id}
            className="card-lift flex flex-col bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)] rounded-2xl overflow-hidden"
          >
            {/* Accent top */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${tm.color}, transparent)` }} />

            {/* Contenido — flex column */}
            <div className="flex flex-col flex-1 p-8">
              <QuoteMark color={tm.color} />

              {/* Quote — flex-1 empuja el footer abajo */}
              <blockquote className="text-[var(--text-secondary)] text-sm leading-loose mb-8 flex-1 italic">
                &ldquo;{t(tm.quoteKey)}&rdquo;
              </blockquote>

              {/* Author — flex row */}
              <footer className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[var(--ink)] shrink-0"
                  style={{ background: tm.color }}
                  aria-hidden
                >
                  {tm.initial}
                </div>
                <div className="flex flex-col">
                  <p className="text-[var(--text)] text-sm font-semibold">{tm.author}</p>
                  <p className="text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>{tm.role} · {tm.company}</p>
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
