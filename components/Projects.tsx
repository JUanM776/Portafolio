// components/Projects.tsx
// Featured work section â€” tarjetas con hover reveal overlay.

"use client";

const PROJECTS = [
  {
    id: 1,
    title: "Meridian Design System",
    category: "Design Systems",
    year: "2024",
    description:
      "A scalable component library serving 12 product teams. Built with React, Storybook, and design tokens. Reduced cross-team inconsistency by 70%.",
    tags: ["React", "TypeScript", "Storybook", "Figma"],
    featured: true,
    gradient: "from-[#1a1508] to-[#0f0f0f]",
    accent: "#93c5fd",
    link: "#",
  },
  {
    id: 2,
    title: "Flux Analytics Platform",
    category: "SaaS / Data",
    year: "2024",
    description:
      "Real-time business intelligence dashboard processing 50M+ events/day via Kafka + ClickHouse, with a Next.js frontend.",
    tags: ["Next.js", "Kafka", "ClickHouse", "AWS"],
    featured: false,
    gradient: "from-[#0c1018] to-[#0f0f0f]",
    accent: "#5b8fd4",
    link: "#",
  },
  {
    id: 3,
    title: "Sprout Mobile App",
    category: "Mobile / iOS",
    year: "2023",
    description:
      "Habit-tracking app for iOS with social accountability features. Reached #4 in Health & Fitness on the App Store.",
    tags: ["React Native", "Expo", "Supabase"],
    featured: false,
    gradient: "from-[#0c180e] to-[#0f0f0f]",
    accent: "#5bd49e",
    link: "#",
  },
  {
    id: 4,
    title: "Archetype CMS",
    category: "Open Source",
    year: "2023",
    description:
      "Headless CMS with a visual schema builder. 2.4k GitHub stars. Ships with REST + GraphQL APIs out of the box.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    featured: false,
    gradient: "from-[#180c18] to-[#0f0f0f]",
    accent: "#c45bd4",
    link: "#",
  },
];

// Arrow icon component â€” avoids importing a library for a single glyph
function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="flex-shrink-0"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <hr className="section-rule mb-16" />

      {/* Section header â€” flex row space-between */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <p className="label-tag mb-3">Selected work</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#f5f5f5]">
            Projects
          </h2>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#a8b2c1] hover:text-[#93c5fd] transition-colors self-start sm:self-end"
        >
          All on GitHub <ArrowIcon />
        </a>
      </header>

      {/* â”€â”€ Project grid â”€â”€
          grid-cols-1 â†’ sm:grid-cols-2 â†’ xl:grid-cols-3
          Featured card spans 2 cols on sm+ (col-span-2) / 1 on mobile */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 list-none">
        {PROJECTS.map((p) => (
        <li
            key={p.id}
            className={`card-lift group relative bg-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden bg-gradient-to-br ${p.gradient} ${
              p.featured ? "sm:col-span-2 xl:col-span-2" : ""
            }`}
          >
            {/* Colored accent top border */}
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: p.accent }}
            />

            <div className="p-7 flex flex-col h-full min-h-[240px]">
              {/* Meta row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] tracking-widest uppercase font-medium"
                  style={{ color: p.accent }}
                >
                  {p.category}
                </span>
                <span className="text-[10px] text-[#555] font-medium">{p.year}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-[#f5f5f5] mb-3">
                {p.title}
              </h3>
              <p className="text-[#8a8680] text-sm leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              {/* Tags â€” visibles siempre */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-medium tracking-widest uppercase border border-[#333] text-[#666] px-2 py-1 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.link}
                className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium transition-colors self-start"
                style={{ color: p.accent }}
              >
                View project <ArrowIcon />
              </a>
            </div>

            {/* â”€â”€ Hover overlay â€” sube desde abajo â”€â”€ */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-7 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ background: `linear-gradient(to top, ${p.accent}18 0%, #0f0f0fee 40%)` }}
            >
              {/* Borde inferior de color */}
              <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: p.accent }} />

              <span
                className="text-[10px] tracking-widest uppercase font-medium mb-2"
                style={{ color: p.accent }}
              >
                {p.category} Â· {p.year}
              </span>

              <h3 className="font-display text-2xl md:text-3xl text-[#f5f5f5] mb-3">
                {p.title}
              </h3>

              <p className="text-[#a8b2c1] text-sm leading-relaxed mb-5">
                {p.description}
              </p>

              {/* Tags en el overlay */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-medium tracking-widest uppercase px-2 py-1 rounded-sm border"
                    style={{ color: p.accent, borderColor: `${p.accent}50` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium self-start transition-all hover:gap-4"
                style={{ color: p.accent }}
              >
                Ver proyecto <ArrowIcon />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
