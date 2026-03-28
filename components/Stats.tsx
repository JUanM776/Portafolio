"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  {
    value: 5,
    suffix: "°",
    label: "Semestre cursado",
    description: "Ingeniería de Software — U. Cooperativa Pasto",
  },
  {
    value: 14,
    suffix: "+",
    label: "Tecnologías aprendidas",
    description: "Python, Java, React, Vite, Next.js y más",
  },
  {
    value: 2,
    suffix: "+",
    label: "Años programando",
    description: "Aprendiendo y construyendo desde el primer semestre",
  },
  {
    value: 100,
    suffix: "%",
    label: "Formación integral",
    description: "Frontend, backend, arquitectura y diseño de software",
  },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(start);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Estadisticas">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ value, suffix, label, description }, i) => (
          <div
            key={label}
            className="relative border border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-2 overflow-hidden group hover:border-[#93c5fd]/40 transition-colors duration-300"
          >
            {/* Número grande de fondo */}
            <div
              className="absolute -right-2 -bottom-4 text-8xl font-black pointer-events-none select-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
              style={{ color: "#93c5fd", lineHeight: 1 }}
            >
              {value}
            </div>

            {/* Número animado */}
            <div
              className="text-4xl sm:text-5xl font-black text-[var(--accent)] leading-none"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              <CountUp target={value} suffix={suffix} inView={inView} />
            </div>

            <p className="text-[var(--text)] text-sm font-semibold leading-tight">{label}</p>
            <p className="text-[var(--text-secondary)] text-[11px] leading-relaxed">{description}</p>

            {/* Línea inferior animada */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent)] transition-all duration-700"
              style={{ width: inView ? "100%" : "0%", transitionDelay: `${i * 150}ms` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
