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
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#93c5fd]/30 to-transparent" />
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#93c5fd]/20 bg-[#0a0a0a]/60 backdrop-blur-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]/60" />
        <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#93c5fd]/70">
          {label}
        </span>
      </div>
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#93c5fd]/30 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main
      className="text-[#e8e4dc] font-body overflow-x-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <AboutMe />

      <SectionDivider label="Stats" />
      <Stats />

      <SectionDivider label="Skills" />
      <Skills />

      <SectionDivider label="Projects" />
      <Projects />

      <SectionDivider label="Testimonials" />
      <Testimonials />

      <SectionDivider label="Experience" />
      <Experience />

      <Footer />
    </main>
  );
}
