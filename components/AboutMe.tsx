// components/AboutMe.tsx
"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

const INTEREST_IMAGES = [
  { key: "music", emoji: "\uD83C\uDFB5", images: [
    { src: "/interests/Esteban_Rojas.jpg", pos: "center" },
    { src: "/interests/Bongos.jpg" },
    { src: "/interests/Carnaval.JPG" },
    { src: "/interests/chuyin.jpg" },
  ]},
  { key: "football", emoji: "\u26BD", images: [
    { src: "/interests/Real_Madrid.jpg", pos: "center" },
    { src: "/interests/cristiano.jpg", pos: "top center" },
    { src: "/interests/Deportivo_Pasto.jpg", pos: "center" },
    { src: "/interests/estadio.jpg", pos: "center" },
  ]},
  { key: "photo", emoji: "\uD83D\uDCF7", images: [
    { src: "/interests/Pausa_coffee.jpg", pos: "center" },
    { src: "/interests/laws_co.jpg", pos: "top center" },
    { src: "/interests/fuente.jpg", pos: "top center" },
    { src: "/interests/lamparas.jpg" },
  ]},
  { key: "travel", emoji: "\uD83C\uDF0D", images: [
    { src: "/interests/Comuna.jpg" },
    { src: "/interests/Cali.jpg" },
    { src: "/interests/sandona.jpg", pos: "bottom center" },
    { src: "/interests/yop.jpg", pos: "top center" },
  ]},
  { key: "other", emoji: "\u2615", images: [] },
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
  const { t } = useLang();
  return (
    <section id="about" className="noise relative flex flex-col pt-24 pb-20 px-6 md:px-10 max-w-7xl mx-auto" aria-label="Acerca de mi">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-screen">
        <div className="lg:col-span-7 lg:pr-16 order-2 lg:order-1 relative z-10">
          <h1 className="reveal delay-100 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[var(--text)] mb-6 leading-none tracking-tight">
            Juan Manuel<br />
            <span className="text-[var(--accent)]">Cordoba Florez</span>
          </h1>
          <p className="reveal delay-200 text-sm md:text-base max-w-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {t("hero.description")}
          </p>
          <div className="reveal delay-400 flex flex-wrap items-center gap-4">
            <a href="#projects" className="bg-[var(--accent)] text-[var(--ink)] text-xs font-medium tracking-widest uppercase px-7 py-3 rounded-sm hover:bg-[var(--accent-dim)] transition-colors">
              {t("hero.cta")}
            </a>
          </div>
        </div>

        <div className="reveal delay-200 lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[500px] group">
            {/* Borde gradiente animado */}
            <div className="absolute -inset-1 rounded-2xl animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, var(--accent), transparent, var(--accent), transparent, var(--accent))" }} />

            {/* Glow */}
            <div className="absolute -inset-6 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-3xl" style={{ background: "var(--accent)" }} />

            {/* Puntos decorativos */}
            <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full" style={{ background: "var(--accent)" }} />
            <div className="absolute -bottom-3 -left-3 w-2.5 h-2.5 rounded-full opacity-70" style={{ background: "var(--accent)" }} />
            <div className="absolute top-1/3 -left-5 w-1.5 h-1.5 rounded-full opacity-40" style={{ background: "var(--accent)" }} />
            <div className="absolute bottom-1/4 -right-4 w-2 h-2 rounded-full opacity-50" style={{ background: "var(--accent)" }} />

            {/* Foto */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Foto_portafolio.jpeg"
                alt="Juan Manuel Cordoba Florez"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradiente inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>


      <div className="py-16">
        <h2 className="reveal delay-100 font-display text-4xl sm:text-5xl text-[var(--text)] mb-12 leading-none">
          {t("about.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTEREST_IMAGES.map(({ key, emoji, images }, i) => (
            <div key={key} className="reveal card-lift border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-sm rounded-sm overflow-hidden" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
              <ImageCarousel images={images as ImageItem[]} emoji={emoji} title={t(`interests.${key}.title`)} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{emoji}</span>
                  <h3 className="font-display text-xl text-[var(--text)]">{t(`interests.${key}.title`)}</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{t(`interests.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Spotify playlist ── */}
        <div className="reveal mt-10">
          <p className="label-tag mb-4">{t("spotify.label")}</p>
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
