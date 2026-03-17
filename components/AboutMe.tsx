// components/AboutMe.tsx
// Hero + About section + gustos personales integrados.

"use client";

import { useState, useEffect } from "react";

const INTERESTS = [
  {
    emoji: "🎵",
    title: "Música",
    description: "Me gusta componer música y tocar guitarra, piano, bongos y algunos instrumentos andinos. Eso me llevó a participar en el Desfile Magno y los Carnavales de Negros y Blancos de Pasto.",
    images: [
      { src: "/interests/Esteban_Rojas.jpg", pos: "center" },
      { src: "/interests/Bongos.jpg"},
      { src: "/interests/Carnaval.JPG"},
      { src: "/interests/chuyin.jpg"},
    ],
  },
  {
    emoji: "⚽",
    title: "Fútbol",
    description: "Me gusta jugar casualmente fútbol. Mis equipos favoritos son el Real Madrid y el Deportivo Pasto. Mi jugador favorito es Cristiano Ronaldo",
    images: [
      { src: "/interests/Real_Madrid.jpg", pos: "center" },
      { src: "/interests/cristiano.jpg",   pos: "top center" },
      { src: "/interests/cristiano.jpg",   pos: "top center" },
    ],
  },
  {
    emoji: "📷",
    title: "Fotografia",
    description: "Me gusta mucho los paisajes y arquitecturas, cosas que decido inmortalizar con la fotografia disciplina de la que tengo conocimiento",
    images: [
      {src: "/interests/Pausa_coffee.jpg", pos: "center"},
      {src: "/interests/laws_co.jpg", pos: "top center"},
      {src: "/interests/fuente.jpg", pos: "top center"},
      {src: "/interests/lamparas.jpg"}
    ],
  },
  {
    emoji: "🌍",
    title: "Viajes",
    description: "Me gusta conocer nuevos lugares, ya que pienso es conocer un poco mas de la cultura de las personas y de nuevas oportunidades. Tambien me gusta explorar y conocer nuevos lugares lo que me ha llevado a conocer gran parte de Colombia",
    images: [
      {src: "/interests/Comuna.jpg"},
      {src: "/interests/Cali.jpg"},
      {src: "/interests/sandona.jpg", pos: "bottom center"},
      {src: "/interests/yop.jpg", pos: "top center"}
    ],
  },
  {
    emoji: "☕",
    title: "Algo más",
    description: "Ese hobby o pasión extra que no encaja en ninguna categoría pero te define.",
    images: [],
  },
];

// Mini carrusel por tarjeta
type ImageItem = { src: string; pos?: string } | string;

function getSrc(img: ImageItem) { return typeof img === "string" ? img : img.src; }
function getPos(img: ImageItem) { return typeof img === "string" ? "center" : (img.pos ?? "center"); }

function ImageCarousel({ images, emoji, title }: { images: ImageItem[]; emoji: string; title: string }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [hovered, images.length]);

  if (images.length === 0) {
    return (
      <div className="w-full h-48 bg-linear-to-br from-[#1e1a14] to-[#0a0a0a] flex items-center justify-center">
        <span className="text-5xl opacity-30">{emoji}</span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-48 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ width: `${images.length * 100}%`, transform: `translateX(-${current * (100 / images.length)}%)` }}
      >
        {images.map((img, i) => {
          const s = getSrc(img);
          const p = getPos(img);
          return (
            <div key={i} className="h-full shrink-0" style={{ width: `${100 / images.length}%` }}>
              <img
                src={s}
                alt={`${title} ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ objectPosition: p }}
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                i === current ? "bg-[#d4a853]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutMe() {
  return (
    <section
      id="about"
      className="noise relative flex flex-col pt-24 pb-20 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* ── HERO: 2 columnas ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-screen">

        {/* LEFT: texto */}
        <div className="lg:col-span-7 lg:pr-16 order-2 lg:order-1">
          <p className="label-tag reveal mb-6">Hello, world</p>

          <h1 className="reveal delay-100 font-display text-5xl sm:text-7xl lg:text-8xl text-[#e8e4dc] mb-6 leading-none tracking-tight">
            Juan Manuel<br />
            <span className="text-[#d4a853]">Cordoba Florez</span>
          </h1>

          <p className="reveal delay-200 text-[#c4bfb4] text-sm md:text-base max-w-lg mb-8 leading-relaxed">
            Estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia, campus Pasto.
            Principalmente atraído por el desarrollo frontend, donde combino lógica y diseño para construir
            interfaces que realmente se sienten bien.
          </p>

          {/* CTAs */}
          <div className="reveal delay-400 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-[#d4a853] text-[#0a0a0a] text-xs font-medium tracking-widest uppercase px-7 py-3 rounded-sm hover:bg-[#c4983e] transition-colors"
            >
              Ver mi trabajo
            </a>
            <a
              href="mailto:juanmanuel@example.com"
              className="text-xs font-medium tracking-widest uppercase text-[#c4bfb4] hover:text-[#d4a853] transition-colors underline underline-offset-4"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* RIGHT: retrato */}
        <div className="reveal delay-200 lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[520px]">
            <div className="absolute -inset-3 border border-[#d4a853]/20 rounded-sm" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#d4a853]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d4a853]" />
            <div className="w-full h-full bg-[#141414] rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#1e1a14] via-[#141414] to-[#0a0a0a] flex items-center justify-center">
                <span className="font-display text-7xl text-[#d4a853]/20">JMC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="reveal delay-500 flex flex-col items-center gap-2 py-8">
        <span className="label-tag text-[9px]" aria-hidden>Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-[#d4a853] to-transparent" />
      </div>

      {/* ── GUSTOS PERSONALES ── */}
      <div className="py-16">
        <p className="label-tag reveal mb-4">Fuera del código</p>
        <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl text-[#e8e4dc] mb-12 leading-none">
          Un poco sobre mí
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map(({ emoji, title, description, images }, i) => (
            <div
              key={title}
              className="reveal card-lift border border-[#2a2a2a] bg-[#141414]/60 backdrop-blur-sm rounded-sm overflow-hidden"
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <ImageCarousel images={images as ImageItem[]} emoji={emoji} title={title} />

              {/* Texto */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{emoji}</span>
                  <h3 className="font-display text-xl text-[#e8e4dc]">{title}</h3>
                </div>
                <p className="text-[#c4bfb4] text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
