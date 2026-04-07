"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

type Tab = "work" | "academic";

const WORK = [
  {
    id: 1,
    role: "Desarrollador Frontend",
    company: "Proyecto Freshcut",
    period: "2025 — Presente",
    location: "Pasto, Colombia",
    achievements: [
      "Desarrollo de una app de barberia con inteligencia artificial para recomendar cortes de cabello.",
      "Implementacion de la interfaz con TypeScript, CSS, HTML y JavaScript.",
      "Integracion de funcionalidades como gestion de citas, historial de clientes e ingresos.",
    ],
  },
  {
    id: 2,
    role: "Desarrollador Full-Stack",
    company: "Clon de Mercado Libre",
    period: "2025 — 2026",
    location: "Pasto, Colombia (Trabajo colaborativo)",
    achievements: [
      "Desarrollo colaborativo de un clon de Mercado Libre enfocado en arquitectura a gran escala.",
      "Implementacion de gestion de productos, navegacion, busqueda y experiencia de usuario.",
      "Aplicacion de buenas practicas de desarrollo y trabajo en equipo.",
    ],
  },
];

const ACADEMIC = [
  {
    id: 1,
    role: "Ingenieria de Software",
    company: "Universidad Cooperativa de Colombia",
    period: "Actualmente",
    location: "Pasto, Colombia",
    achievements: [
      "Cursando 5to semestre con enfasis en desarrollo frontend y backend.",
      "Formacion en arquitectura de software, diseno de software y bases de datos.",
      "Desarrollo de proyectos reales como Freshcut y un clon de Mercado Libre.",
    ],
  },
  {
    id: 2,
    role: "Bachillerato",
    company: "Colegio La Inmaculada",
    period: "Graduado",
    location: "Pasto, Colombia",
    achievements: [
      "Formacion academica integral con enfasis en valores y disciplina.",
      "Desarrollo de habilidades de trabajo en equipo y liderazgo.",
    ],
  },
  {
    id: 3,
    role: "Primaria",
    company: "Neneitos Creativos",
    period: "Graduado",
    location: "Pasto, Colombia",
    achievements: [
      "Primeros pasos en la formacion academica.",
      "Desarrollo de creatividad y habilidades sociales.",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [active, setActive] = useState(0);
  const { t } = useLang();
  const items = activeTab === "work" ? WORK : ACADEMIC;
  const selected = items[active] ?? items[0];

  return (
    <section id="experience" className="py-24 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Experiencia">
      <hr className="section-rule mb-16" />

      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
        <div>
          <p className="label-tag mb-3">{t("experience.label")}</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text)]">{t("experience.title")}</h2>
        </div>
        <div className="flex self-start sm:self-end gap-2">
          {(["work", "academic"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActive(0); }}
              className={`px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[var(--accent)] text-[var(--ink)] shadow-lg shadow-[var(--accent)]/25"
                  : "border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--surface)]/80 hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
              }`}
            >
              {tab === "work" ? t("experience.work") : t("experience.academic")}
            </button>
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Lista izquierda */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {items.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => setActive(idx)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className={`group w-full text-left rounded-xl border p-5 transition-all duration-300 ${
                  active === idx
                    ? "bg-[var(--surface)] border-[var(--accent)]/60 shadow-lg shadow-[var(--accent)]/10"
                    : "bg-[var(--surface)]/80 border-[var(--border)] hover:border-[var(--accent)]/30 hover:bg-[var(--surface)]"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Número */}
                  <span
                    className={`text-2xl font-black tabular-nums shrink-0 transition-colors duration-300 ${active === idx ? "text-[var(--accent)]" : ""}`}
                    style={{ color: active === idx ? undefined : "var(--border)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm truncate transition-colors duration-200 ${active === idx ? "text-[var(--text)]" : ""}`} style={{ color: active === idx ? undefined : "var(--text-secondary)" }}>
                      {item.role}
                    </p>
                    <p className={`text-xs mt-0.5 transition-colors duration-200 ${active === idx ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                      {item.company}
                    </p>
                  </div>
                  <span className="text-[10px] text-[var(--text-muted)] shrink-0">{item.period.split("—")[0].trim()}</span>
                </div>
                {/* Barra de progreso activa */}
                <div className="mt-3 h-px w-full bg-[var(--border)] overflow-hidden rounded-full">
                  <motion.div
                    animate={{ width: active === idx ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-[var(--accent)] rounded-full"
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Panel derecho */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${active}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 backdrop-blur-md border rounded-2xl p-8 flex flex-col"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              {/* Top accent */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>
                <div className="flex-1 h-px bg-linear-to-r from-[var(--accent)]/40 to-transparent" />
                <span className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase">{selected.period}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-[var(--text)] mb-1">{selected.role}</h3>
              <p className="text-[var(--accent)] text-sm font-semibold mb-1">{selected.company}</p>
              <p className="text-[var(--text-muted)] text-xs tracking-wide mb-8">{selected.location}</p>

              <div className="flex flex-col gap-4 flex-1">
                {selected.achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="flex items-start gap-3 p-3 rounded-xl border"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    </div>
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{ach}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
