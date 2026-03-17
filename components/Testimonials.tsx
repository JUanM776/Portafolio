// components/Testimonials.tsx
// Social proof section.
// Layout: CSS grid — 1 col mobile, 2 col md, 3 col lg.
// Cards use flexbox (flex-col) internally.

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Alex transformed our design system from a scattered mess into a cohesive library our entire team loves. The attention to developer experience is unmatched.",
    author: "Priya Nair",
    role: "VP of Engineering",
    company: "Luminary Labs",
    initial: "P",
    color: "#d4a853",
  },
  {
    id: 2,
    quote:
      "Exceptional across the full stack. Alex shipped our analytics platform three weeks ahead of schedule without sacrificing a single percentage point of quality.",
    author: "Marcus Chen",
    role: "CTO",
    company: "Flux Systems",
    initial: "M",
    color: "#5b8fd4",
  },
  {
    id: 3,
    quote:
      "I've worked with many developers over 15 years. Alex is the rare breed who communicates as well as they code — a genuine team multiplier.",
    author: "Sofia Reyes",
    role: "Product Director",
    company: "Sprout Health",
    initial: "S",
    color: "#5bd49e",
  },
];

// Decorative quotation mark
function QuoteMark({ color }: { color: string }) {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden
      className="mb-5 flex-shrink-0"
    >
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 7.2 7.2 12H13V24H0ZM18 24V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 7.2 25.2 12H31V24H18Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <hr className="section-rule mb-16" />

      {/* Section header */}
      <header className="mb-14">
        <p className="label-tag mb-3">Kind words</p>
        <h2 className="font-display text-4xl md:text-6xl text-[#e8e4dc]">
          Testimonials
        </h2>
      </header>

      {/* ── Testimonial grid ──
          grid-cols-1 → md:grid-cols-2 → lg:grid-cols-3
          Each card is a flex column so the attribution sticks to the bottom */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {TESTIMONIALS.map((t) => (
          <li
            key={t.id}
            className="card-lift bg-[#141414] border border-[#2a2a2a] rounded-sm p-8 flex flex-col"
          >
            {/* Accent top rule per testimonial color */}
            <div
              className="w-8 h-px mb-6"
              style={{ background: t.color }}
            />

            <QuoteMark color={t.color} />

            {/* Quote text — flex-1 pushes author to bottom */}
            <blockquote className="text-[#c4bfb4] text-sm leading-loose mb-8 flex-1 italic">
              "{t.quote}"
            </blockquote>

            {/* Author row — flex items-center gap */}
            <footer className="flex items-center gap-4">
              {/* Avatar circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-[#0a0a0a] flex-shrink-0"
                style={{ background: t.color }}
                aria-hidden
              >
                {t.initial}
              </div>
              <div>
                <p className="text-[#e8e4dc] text-sm font-medium">
                  {t.author}
                </p>
                <p className="text-[#555] text-[11px] tracking-wide">
                  {t.role} · {t.company}
                </p>
              </div>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
