// components/Projects.tsx
"use client";
import { useLang } from "@/context/LanguageContext";

const PROJECTS = [
  {
    id: 1,
    title: "Freshcut",
    category: "APP",
    year: "2025",
    descKey: "projects.freshcut.desc",
    tags: ["TypeScript", "CSS", "HTML", "JavaScript"],
    featured: false,
    image: "/projects/freshcut.png",
    accent: "#93c5fd",
    link: "https://fresh-cut-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Mercado libre Clone",
    category: "Software empresarial",
    year: "2026",
    descKey: "projects.mercadolibre.desc",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    image: "/projects/mercado_libre.png",
    accent: "#5b8fd4",
    link: "https://edben110.github.io/MercadoLibre-Clone/",
  },
  {
    id: 3,
    title: "Spot-tunes",
    category: "APP Web",
    year: "2025 — 2026",
    descKey: "projects.spottunes.desc",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    image: "/projects/Spot-tunes.png",
    accent: "#1db954",
    link: "https://spottunes.vercel.app",
  },
  {
    id: 4,
    title: "CalcGraf",
    category: "APP Web",
    year: "2025 — 2026",
    descKey: "projects.calcgraf.desc",
    tags: ["TypeScript", "CSS", "JavaScript", "HTML"],
    featured: false,
    image: "/projects/Calculadora.png",
    accent: "#8b5cf6",
    link: "https://multi-viz-calc.vercel.app",
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="py-14 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Proyectos">
      <hr className="section-rule mb-10" />

      <header className="flex flex-col gap-4 mb-12">
        <p className="label-tag mb-3">{t("projects.label")}</p>
        <h2 className="font-display text-4xl md:text-6xl" style={{ color: "var(--text)" }}>
          {t("projects.title")}
        </h2>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none">
        {PROJECTS.map((p) => (
          <li
            key={p.id}
            className="card-lift group relative rounded-xl overflow-hidden border"
            style={{ borderColor: "var(--card-border)", background: "var(--card)" }}
          >
            {/* Preview image */}
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
              <img
                src={p.image}
                alt={`Preview de ${p.title}`}
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </a>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: p.accent }}>
                  {p.category}
                </span>
                <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>{p.year}</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl mb-2" style={{ color: "var(--text)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-secondary)" }}>
                {t(p.descKey)}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[9px] font-medium tracking-widest uppercase border px-2 py-1 rounded-sm"
                    style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA — aparece al hover */}
              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium self-start opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                style={{ color: p.accent }}>
                {t("projects.viewProject")} <ArrowIcon />
              </a>
            </div>

            {/* Accent bottom al hover */}
            <div className="absolute bottom-0 inset-x-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: p.accent }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
