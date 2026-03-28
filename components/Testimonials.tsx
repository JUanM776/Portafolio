// components/Testimonials.tsx
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Trabajar con Manuel fue una experiencia muy sólida. Tiene una capacidad muy clara para estructurar soluciones y convertir ideas en funcionalidades reales. En los proyectos en los que coincidimos, siempre destacó por su organización y por mantener un código limpio y entendible.",
    author: "Duvan Urresti",
    role: "ingeniero civil",
    company: "contratista",
    initial: "D",
    color: "#93c5fd",
  },
  {
    id: 2,
    quote: "Manuel no solo cumple con lo que se le pide, sino que va más allá. Propone mejoras, cuida los detalles de la interfaz y se preocupa por la experiencia del usuario. Es alguien en quien puedes confiar cuando necesitas resultados de calidad.",
    author: "Andres Guerrero",
    role: "Ingeniero civil",
    initial: "AG",
    color: "#5b8fd4",
  },
  {
    id: 3,
    quote: "Algo que destaca de Manuel es su mentalidad de aprendizaje constante. En cada proyecto se nota cómo mejora y aplica nuevas tecnologías. Además, sabe trabajar en equipo y comunicar sus ideas de forma clara, lo cual es clave en desarrollo de software.",
    author: "Patricia Florez",
    role: "Product Director",
    company: "Sprout Health",
    initial: "P",
    color: "#60a5fa",
  },
   {
    id: 4,
    quote: "I've worked with many developers over 15 years. Alex is the rare breed who communicates as well as they code — a genuine team multiplier.",
    author: "Sofia Reyes",
    role: "Product Director",
    company: "Sprout Health",
    initial: "S",
    color: "#60a5fa",
  },
];

function QuoteMark({ color }: { color: string }) {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden className="mb-5 shrink-0">
      <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 7.2 7.2 12H13V24H0ZM18 24V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 7.2 25.2 12H31V24H18Z" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <hr className="section-rule mb-16" />

      {/* Header — flex row */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div className="flex flex-col gap-3">
          <p className="label-tag">Opiniones</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text)]">Testimonios</h2>
        </div>
      </header>

      {/* Grid de tarjetas — grid responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="card-lift flex flex-col bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)] rounded-2xl overflow-hidden"
          >
            {/* Accent top */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }} />

            {/* Contenido — flex column */}
            <div className="flex flex-col flex-1 p-8">
              <QuoteMark color={t.color} />

              {/* Quote — flex-1 empuja el footer abajo */}
              <blockquote className="text-[var(--text-secondary)] text-sm leading-loose mb-8 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author — flex row */}
              <footer className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[var(--ink)] shrink-0"
                  style={{ background: t.color }}
                  aria-hidden
                >
                  {t.initial}
                </div>
                <div className="flex flex-col">
                  <p className="text-[var(--text)] text-sm font-semibold">{t.author}</p>
                  <p className="text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>{t.role} · {t.company}</p>
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
