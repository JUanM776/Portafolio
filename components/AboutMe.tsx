// components/AboutMe.tsx
"use client";
import { useState, useEffect } from "react";

const INTERESTS = [
  {
    emoji: "🎵",
    title: "Música",
    description: "Me gusta componer música y tocar guitarra, piano, bongos y algunos instrumentos andinos. Eso me llevó a participar en el Desfile Magno y los Carnavales de Negros y Blancos de Pasto.",
    images: [
      { src: "/interests/Esteban_Rojas.jpg", pos: "center" },
      { src: "/interests/Bongos.jpg" },
      { src: "/interests/Carnaval.JPG" },
      { src: "/interests/chuyin.jpg" },
    ],
  },
  {
    emoji: "⚽",
    title: "Fútbol",
    description: "Me gusta jugar casualmente fútbol. Mis equipos favoritos son el Real Madrid y el Deportivo Pasto. Mi jugador favorito es Cristiano Ronaldo",
    images: [
      { src: "/interests/Real_Madrid.jpg", pos: "center" },
      { src: "/interests/cristiano.jpg", pos: "top center" },
      { src: "/interests/Deportivo_Pasto.jpg", pos: "center" },
      { src: "/interests/estadio.jpg", pos: "center" },
    ],
  },
  {
    emoji: "📷",
    title: "Fotografia",
    description: "Me gusta mucho los paisajes y arquitecturas, cosas que decido inmortalizar con la fotografia disciplina de la que tengo conocimiento",
    images: [
      { src: "/interests/Pausa_coffee.jpg", pos: "center" },
      { src: "/interests/laws_co.jpg", pos: "top center" },
      { src: "/interests/fuente.jpg", pos: "top center" },
      { src: "/interests/lamparas.jpg" },
    ],
  },
  {
    emoji: "🌍",
    title: "Viajes",
    description: "Me gusta conocer nuevos lugares, ya que pienso es conocer un poco mas de la cultura de las personas y de nuevas oportunidades. Tambien me gusta explorar y conocer nuevos lugares lo que me ha llevado a conocer gran parte de Colombia",
    images: [
      { src: "/interests/Comuna.jpg" },
      { src: "/interests/Cali.jpg" },
      { src: "/interests/sandona.jpg", pos: "bottom center" },
      { src: "/interests/yop.jpg", pos: "top center" },
    ],
  },
];

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
        className="flex h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="h-full shrink-0" style={{ width: `${100 / images.length}%` }}>
            <img
              src={getSrc(img)}
              alt={`${title} ${i + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
              style={{ objectPosition: getPos(img) }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <span key={i} className={`block w-2 h-2 rounded-full transition-colors duration-300 ${i === current ? "bg-[var(--accent)]" : "bg-white/60"}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="noise relative flex flex-col pt-24 pb-20 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Acerca de mi">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-screen">
        <div className="lg:col-span-7 lg:pr-16 order-2 lg:order-1 relative z-10">
          <h1 className="reveal delay-100 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--text)] mb-6 leading-none tracking-tight">
            Juan Manuel<br />
            <span className="text-[var(--accent)]">Cordoba Florez</span>
          </h1>
          <p className="reveal delay-200 text-sm md:text-base max-w-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia, campus Pasto.
            Principalmente atraído por el desarrollo frontend, donde combino lógica y diseño para construir
            interfaces que realmente se sienten bien.
          </p>
          <div className="reveal delay-400 flex flex-wrap items-center gap-4">
            <a href="#projects" className="bg-[var(--accent)] text-[var(--ink)] text-xs font-medium tracking-widest uppercase px-7 py-3 rounded-sm hover:bg-[var(--accent-dim)] transition-colors">
              Ver mi trabajo
            </a>
          </div>
        </div>

        <div className="reveal delay-200 lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[520px]">
            <div className="absolute -inset-3 border border-[#93c5fd]/20 rounded-sm" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#93c5fd]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#93c5fd]" />
            <div className="w-full h-full rounded-sm overflow-hidden relative">
              <img
                src="/Foto_portafolio.jpeg"
                alt="Juan Manuel Cordoba Florez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-16">
        <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl text-[var(--text)] mb-12 leading-none">
          Un poco sobre mí
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map(({ emoji, title, description, images }, i) => (
            <div key={title} className="reveal card-lift border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-sm rounded-sm overflow-hidden" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
              <ImageCarousel images={images as ImageItem[]} emoji={emoji} title={title} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{emoji}</span>
                  <h3 className="font-display text-xl text-[var(--text)]">{title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Spotify playlist ── */}
        <div className="reveal mt-10">
          <p className="label-tag mb-4">Lo que escucho</p>
          <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
            <iframe
              title="Playlist de Spotify de Juan Manuel"
              src="https://open.spotify.com/embed/playlist/3DdYGbufj2gCAkwtaa4HQX?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>

      </div>

    </section>
  );
}
