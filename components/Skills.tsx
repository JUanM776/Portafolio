"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

const SKILLS = [
  { name: "React",      icon: "/icons/react_dark.svg",          color: "#61dafb", level: 90 },
  { name: "TypeScript", icon: "/icons/typescript.svg",          color: "#3178c6", level: 85 },
  { name: "Next.js",    icon: "/icons/nextjs_icon_dark.svg",    color: "#ffffff", level: 82 },
  { name: "Tailwind",   icon: "/icons/tailwindcss.svg",         color: "#38bdf8", level: 88 },
  { name: "JavaScript", icon: "/icons/javascript.svg",          color: "#f7df1e", level: 92 },
  { name: "Node.js",    icon: "/icons/nodejs.svg",              color: "#68a063", level: 75 },
  { name: "Python",     icon: "/icons/python.svg",              color: "#3776ab", level: 70 },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg",          color: "#336791", level: 68 },
  { name: "MongoDB",    icon: "/icons/mongodb-icon-dark.svg",   color: "#47a248", level: 72 },
  { name: "Angular",    icon: "/icons/angular.svg",             color: "#dd0031", level: 65 },
  { name: "Java",       icon: "/icons/java.svg",                color: "#f89820", level: 60 },
  { name: "MySQL",      icon: "/icons/mysql-wordmark-dark.svg", color: "#00758f", level: 70 },
  { name: "Git",        icon: "/icons/git.svg",                 color: "#f05032", level: 85 },
  { name: "Figma",      icon: "/icons/figma.svg",               color: "#a259ff", level: 78 },
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

function SkillRow({ name, icon, color, level, index }: {
  name: string; icon: string; color: string; level: number; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);
  const scrambled = useScramble(name.toUpperCase(), hovered);

  useEffect(() => {
    if (!inView || !barRef.current) return;
    animate(barRef.current, { width: ["0%", `${level}%`] }, {
      duration: 1.2, delay: index * 0.07, ease: [0.22, 1, 0.36, 1],
    });
  }, [inView, level, index]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center gap-5 py-4 px-5 overflow-hidden"
      style={{
        background: hovered ? `${color}08` : "transparent",
        borderBottom: "1px solid #1a1a1a",
        transition: "background 0.3s",
      }}
    >
      {/* NÃºmero grande de fondo */}
      <span
        className="absolute right-5 top-1/2 -translate-y-1/2 text-6xl font-black pointer-events-none select-none"
        style={{
          color: hovered ? `${color}18` : "transparent",
          fontVariantNumeric: "tabular-nums",
          transition: "color 0.3s",
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icono con rotaciÃ³n */}
      <motion.div
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl"
        style={{
          background: hovered ? `${color}15` : "#0d0d0d",
          border: `1.5px solid ${hovered ? color + "50" : "#2a2a2a"}`,
          boxShadow: hovered ? `0 0 16px ${color}30` : "none",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      >
        <img src={icon} alt={name} className="w-5 h-5 object-contain" />
      </motion.div>

      {/* Nombre + barra */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-sm font-bold tracking-widest"
            style={{
              color: hovered ? color : "#e8e4dc",
              fontFamily: "monospace",
              transition: "color 0.2s",
            }}
          >
            {scrambled}
          </span>
          <motion.span
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-[10px] font-semibold tabular-nums"
            style={{ color }}
          >
            {level}%
          </motion.span>
        </div>

        {/* Barra de nivel */}
        <div className="relative h-[3px] w-full rounded-full bg-[#1e1e1e] overflow-hidden">
          <div
            ref={barRef}
            className="absolute left-0 top-0 h-full rounded-full"
            style={{
              width: "0%",
              background: `linear-gradient(90deg, ${color}70, ${color})`,
              boxShadow: hovered ? `0 0 8px ${color}` : "none",
              transition: "box-shadow 0.3s",
            }}
          />
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
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT sticky */}
        <div className="lg:w-72 shrink-0 lg:sticky lg:top-32">
          <p className="label-tag reveal mb-4">Lo que uso</p>
          <h2 className="reveal delay-100 font-display text-5xl sm:text-6xl text-[#e8e4dc] leading-none mb-6">
            Skills
          </h2>
          <p className="reveal delay-200 text-[#c4bfb4] text-sm leading-relaxed mb-4">
            Estas son las tecnologÃ­as con las que trabajo dÃ­a a dÃ­a. Me apasiona el frontend pero tambiÃ©n
            me muevo cÃ³modo en el backend y las herramientas de diseÃ±o.
          </p>
          <p className="reveal delay-300 text-[#c4bfb4]/40 text-xs">
            Pasa el cursor sobre cada skill â†—
          </p>
        </div>

        {/* RIGHT â€” lista columna Ãºnica */}
        <div className="reveal delay-200 flex-1 border border-[#1e1e1e] rounded-2xl overflow-hidden bg-[#0a0a0a]/60 backdrop-blur-sm">
          {SKILLS.map(({ name, icon, color, level }, i) => (
            <SkillRow key={name} name={name} icon={icon} color={color} level={level} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
