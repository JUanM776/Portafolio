// app/page.tsx — Root page: composes all portfolio sections
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 px-6 md:px-10 max-w-7xl mx-auto py-8">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent-30, rgba(147,197,253,0.3)), transparent)" }} />
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
        <span className="text-[9px] font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
          {label}
        </span>
      </div>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent-30, rgba(147,197,253,0.3)), transparent)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen font-body overflow-x-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        color: "var(--text)",
      }}
    >
      <Navbar />
      <AboutMe />

      <SectionDivider label="Estadisticas" />
      <Stats />

      <SectionDivider label="Habilidades" />
      <Skills />

      <SectionDivider label="Proyectos" />
      <Projects />

      <SectionDivider label="Testimonios" />
      <Testimonials />

      <SectionDivider label="Experiencia" />
      <Experience />

      <Footer />
    </main>
  );
}
