// components/Testimonials.tsx
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Alex transformed our design system from a scattered mess into a cohesive library our entire team loves. The attention to developer experience is unmatched.",
    author: "Priya Nair",
    role: "VP of Engineering",
    company: "Luminary Labs",
    initial: "P",
    color: "#93c5fd",
  },
  {
    id: 2,
    quote: "Exceptional across the full stack. Alex shipped our analytics platform three weeks ahead of schedule without sacrificing a single percentage point of quality.",
    author: "Marcus Chen",
    role: "CTO",
    company: "Flux Systems",
    initial: "M",
    color: "#5b8fd4",
  },
  {
    id: 3,
    quote: "I've worked with many developers over 15 years. Alex is the rare breed who communicates as well as they code — a genuine team multiplier.",
    author: "Sofia Reyes",
    role: "Product Director",
    company: "Sprout Health",
    initial: "S",
    color: "#60a5fa",
  },
];

function QuoteMark({ color }: { color: string }) {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden className="mb-5 shrink-0">
      <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 7.2 7.2 12H13V24H0ZM18 24V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 7.2 25.2 12H31V24H18Z" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <hr className="section-rule mb-16" />
      <header className="mb-14">
        <p className="label-tag mb-3">Kind words</p>
        <h2 className="font-display text-4xl md:text-6xl text-[#f5f5f5]">Testimonials</h2>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {TESTIMONIALS.map((t) => (
          <li key={t.id} className="card-lift bg-[#141414] border border-[#2a2a2a] rounded-sm p-8 flex flex-col">
            <div className="w-8 h-px mb-6" style={{ background: t.color }} />
            <QuoteMark color={t.color} />
            <blockquote className="text-[#a8b2c1] text-sm leading-loose mb-8 flex-1 italic">
              "{t.quote}"
            </blockquote>
            <footer className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-[#0a0a0a] shrink-0" style={{ background: t.color }} aria-hidden>
                {t.initial}
              </div>
              <div>
                <p className="text-[#f5f5f5] text-sm font-medium">{t.author}</p>
                <p className="text-[#555] text-[11px] tracking-wide">{t.role} · {t.company}</p>
              </div>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
