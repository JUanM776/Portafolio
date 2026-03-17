"use client";
// components/Skills.tsx — cápsula con ticker infinito, íconos desde public/icons

const SKILLS = [
  { name: "React",      icon: "/icons/react_dark.svg" },
  { name: "Next.js",    icon: "/icons/nextjs_icon_dark.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Node.js",    icon: "/icons/nodejs.svg" },
  { name: "Tailwind",   icon: "/icons/tailwindcss.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB",    icon: "/icons/mongodb-icon-dark.svg" },
  { name: "MySQL",      icon: "/icons/mysql-wordmark-dark.svg" },
  { name: "Python",     icon: "/icons/python.svg" },
  { name: "Java",       icon: "/icons/java.svg" },
  { name: "Angular",    icon: "/icons/angular.svg" },
  { name: "Git",        icon: "/icons/git.svg" },
  { name: "Figma",      icon: "/icons/figma.svg" },
];

const TRACK = [...SKILLS, ...SKILLS];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">

      {/* Layout: texto izquierda | carrusel derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: header + blurb */}
        <div className="lg:col-span-4">
          <p className="label-tag reveal mb-4">Lo que uso</p>
          <h2 className="reveal delay-100 font-display text-5xl sm:text-6xl text-[#e8e4dc] leading-none mb-6">
            Skills
          </h2>
          <p className="reveal delay-200 text-[#c4bfb4] text-sm md:text-base leading-relaxed mb-6">
            Estas son las tecnologías con las que trabajo día a día. Me apasiona el frontend pero también
            me muevo cómodo en el backend y las herramientas de diseño.
          </p>
          <p className="reveal delay-300 text-[#c4bfb4]/60 text-xs leading-relaxed">
            Siempre aprendiendo algo nuevo — el stack evoluciona y yo con él.
          </p>
        </div>

        {/* RIGHT: cápsula con carrusel */}
        <div className="lg:col-span-8">
          <div className="reveal delay-200 relative border border-[#2a2a2a] bg-[#141414]/60 backdrop-blur-sm rounded-2xl overflow-hidden py-10">
            {/* Fades laterales */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none" />

            {/* Track */}
            <div className="animate-marquee flex items-center gap-4 w-max px-4">
              {TRACK.map(({ name, icon }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex flex-col items-center justify-center gap-3 border border-[#2a2a2a] bg-[#0a0a0a]/80 hover:border-[#d4a853]/60 hover:bg-[#1e1a14] transition-all duration-300 rounded-xl px-8 py-7 min-w-[130px]"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img src={icon} alt={name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-medium tracking-widest uppercase text-[#c4bfb4] whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
