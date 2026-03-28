// components/Footer.tsx
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/JUanM776",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-manuel-cordoba-florez-956b653ba",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/juaan.mnl?igsh=MTJkYjV0Y3V3b283aA==",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573173742559",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>),
  },
];

const CONTACT_INFO = [
  {
    label: "Email",
    value: "Juan.cordobaflore@campusucc.edu.co",
    href: "mailto:juanmanuel@example.com",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>),
  },
  {
    label: "Ubicación",
    value: "Pasto, Colombia",
    href: "https://maps.google.com/?q=Pasto,Colombia",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>),
  },
  {
    label: "Universidad",
    value: "U. Cooperativa — Pasto",
    href: "https://ucc.edu.co",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>),
  },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[var(--border)]">
      <div className="backdrop-blur-sm py-12 sm:py-20 px-6 md:px-10 text-center" style={{ background: "var(--card)" }}>
        <p className="label-tag justify-center mb-6">Hablemos</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[var(--text)] mb-6 max-w-3xl mx-auto leading-tight">
          ¿Trabajamos juntos?
        </h2>
        <p className="text-sm mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Estoy disponible para proyectos, colaboraciones y oportunidades. No dudes en escribirme.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:juanmanuel@example.com" className="bg-[var(--accent)] text-[var(--ink)] text-xs font-medium tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-[var(--accent-dim)] transition-colors">
            Enviar mensaje
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] text-xs font-medium tracking-widest uppercase px-8 py-3.5 rounded-sm hover:border-[#93c5fd] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors">
            Descargar CV
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-sm rounded-xl p-6">
            <p className="label-tag mb-5">Contacto directo</p>
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ label, value, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#0d1a14] transition-colors duration-200">
                  <span className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-200">{icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[9px] tracking-widest uppercase font-medium" style={{ color: "var(--text-muted)" }}>{label}</span>
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-sm rounded-xl p-6 flex flex-col">
            <p className="label-tag mb-5">Redes</p>
            <div className="flex flex-col gap-2 flex-1">
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-[#0d1a14] transition-colors duration-200">
                  <span className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-200">{icon}</span>
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors font-medium tracking-wide">{label}</span>
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" style={{ color: "var(--text-muted)" }}><path d="M3 13L13 3M13 3H7M13 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Juan Manuel Cordoba Florez. Todos los derechos reservados.
        </p>
        <p className="text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>
          Hecho con <span className="text-[var(--accent)]">♥</span> en Pasto, Colombia
        </p>
      </div>
    </footer>
  );
}
