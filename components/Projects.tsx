// components/Projects.tsx
"use client";

const PROJECTS = [
  {
    id: 1,
    title: "Freshcut",
    category: "APP",
    year: "2025",
    description:
      "Freshcut no es solo una app de barbería, es una herramienta para llevar este negocio a un nivel más profesional y organizado, centralizando citas, clientes, historial e ingresos en un solo lugar. Además, integra inteligencia artificial que analiza el rostro del usuario para recomendar el mejor corte y mostrar una vista previa de cómo se vería. Más que funciones, resuelve problemas reales del día a día, optimizando el tiempo y mejorando la experiencia. Freshcut es tecnología aplicada a lo cotidiano, pensada para hacer la barbería más eficiente y escalable.",
    tags: ["TypeScript", "CSS", "HTML", "JavaScript"],
    featured: true,
    gradient: "from-[#1a1508] to-[#0f0f0f]",
    accent: "#93c5fd",
    link: "#",
  },
  {
    id: 2,
    title: "Mercado libre Clone",
    category: "Software empresarial",
    year: "2026",
    description:
      "En un trabajo colaborativo se desarrolló un clon de Mercado Libre enfocado en fortalecer habilidades para crear aplicaciones a gran escala, abordando retos reales de arquitectura, rendimiento y organización del código. El proyecto incluyó funcionalidades clave como gestión de productos, navegación, búsqueda y experiencia de usuario. Más que replicar una plataforma, permitió entender cómo se construyen sistemas robustos y escalables en equipo. Fue una experiencia enfocada en buenas prácticas, trabajo colaborativo y desarrollo profesional.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    gradient: "from-[#0c1018] to-[#0f0f0f]",
    accent: "#5b8fd4",
    link: "#",
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
  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <hr className="section-rule mb-16" />

      <header className="flex flex-col gap-4 mb-12">
        <p className="label-tag mb-3">Trabajo seleccionado</p>
        <h2 className="font-display text-4xl md:text-6xl" style={{ color: "var(--text)" }}>
          Proyectos
        </h2>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 list-none">
        {PROJECTS.map((p) => (
          <li
            key={p.id}
            className={`card-lift group relative rounded-xl overflow-hidden border ${
              p.featured ? "sm:col-span-2 xl:col-span-2" : ""
            }`}
            style={{ borderColor: "var(--card-border)", background: "var(--card)" }}
          >
            {/* Accent top */}
            <div className="absolute top-0 inset-x-0 h-px" style={{ background: p.accent }} />

            <div className="p-7 flex flex-col h-full min-h-[240px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: p.accent }}>
                  {p.category}
                </span>
                <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>{p.year}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-3" style={{ color: "var(--text)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>
                {p.description}
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
              <a href={p.link}
                className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium self-start opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                style={{ color: p.accent }}>
                Ver proyecto <ArrowIcon />
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
