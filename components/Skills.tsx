"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SKILLS = [
  { name: "React",      icon: "/icons/react_dark.svg",          color: "#61dafb" },
  { name: "TypeScript", icon: "/icons/typescript.svg",          color: "#3178c6" },
  { name: "Next.js",    icon: "/icons/nextjs_icon_dark.svg",    color: "#ffffff" },
  { name: "Tailwind",   icon: "/icons/tailwindcss.svg",         color: "#38bdf8" },
  { name: "JavaScript", icon: "/icons/javascript.svg",          color: "#f7df1e" },
  { name: "Node.js",    icon: "/icons/nodejs.svg",              color: "#68a063" },
  { name: "Python",     icon: "/icons/python.svg",              color: "#3776ab" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg",          color: "#336791" },
  { name: "MongoDB",    icon: "/icons/mongodb-icon-dark.svg",   color: "#47a248" },
  { name: "Angular",    icon: "/icons/angular.svg",             color: "#dd0031" },
  { name: "Java",       icon: "/icons/java.svg",                color: "#f89820" },
  { name: "MySQL",      icon: "/icons/mysql-wordmark-dark.svg", color: "#00758f", darkIcon: true },
  { name: "Git",        icon: "/icons/git.svg",                 color: "#f05032" },
  { name: "Figma",      icon: "/icons/figma.svg",               color: "#a259ff" },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (!trigger) { setDisplay(text); return; }
    let frame = 0;
    const total = 14;
    const id = setInterval(() => {
      setDisplay(
        text.split("").map((char, i) =>
          frame / total > i / text.length
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join("")
      );
      frame++;
      if (frame > total) { setDisplay(text); clearInterval(id); }
    }, 30);
    return () => clearInterval(id);
  }, [trigger, text]);
  return display;
}

function SkillCard({ name, icon, color, index, darkIcon }: {
  name: string; icon: string; color: string; index: number; darkIcon?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const scrambled = useScramble(name.toUpperCase(), hovered);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-sm cursor-default overflow-hidden transition-colors duration-300 hover:border-[var(--accent)]/40"
      style={{ boxShadow: hovered ? `0 0 24px ${color}20, inset 0 0 20px ${color}08` : "none" }}
    >
      {/* Glow de fondo */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 40%, ${color}18, transparent 70%)` }}
      />

      {/* Icono con rotacion al hover */}
      <motion.img
        src={icon}
        alt={`Logo de ${name}`}
        animate={{
          scale: hovered ? 1.2 : 1,
          rotate: hovered ? 360 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`w-10 h-10 object-contain relative z-10 ${darkIcon ? "dark-icon" : ""}`}
        style={hovered && !darkIcon ? { filter: `drop-shadow(0 0 8px ${color}90)` } : {}}
      />

      {/* Nombre con scramble */}
      <span
        className="text-[9px] font-bold tracking-widest relative z-10 transition-colors duration-200 whitespace-nowrap"
        style={{ color: hovered ? color : "var(--text-secondary)", fontFamily: "monospace" }}
      >
        {scrambled}
      </span>

      {/* Barra animada */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--border)] overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ duration: 1.2, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}60, ${color})`,
            boxShadow: hovered ? `0 0 8px ${color}` : "none",
            transition: "box-shadow 0.3s",
          }}
        />
        {/* Shimmer al hover */}
        {hovered && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "300%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute top-0 h-full w-1/4 pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${color}cc, transparent)` }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Habilidades tecnicas">

      {/* Header centrado */}
      <div className="flex flex-col items-center text-center mb-14">
        <p className="label-tag reveal mb-4">{t("skills.label")}</p>
        <h2 className="reveal delay-100 font-display text-4xl sm:text-6xl leading-none mb-4" style={{ color: "var(--text)" }}>
          {t("skills.title")}
        </h2>
        <p className="reveal delay-200 text-sm max-w-md leading-relaxed rounded-lg px-4 py-2 backdrop-blur-sm" style={{ color: "var(--text-secondary)", background: "var(--card)" }}>
          {t("skills.description")}
        </p>
      </div>

      {/* Grid responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {SKILLS.map(({ name, icon, color, darkIcon }, i) => (
          <SkillCard key={name} name={name} icon={icon} color={color} index={i} darkIcon={darkIcon} />
        ))}
      </div>

    </section>
  );
}
