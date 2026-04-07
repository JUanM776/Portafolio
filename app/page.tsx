// app/page.tsx — Root page: composes all portfolio sections
"use client";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main
      role="main"
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
      <div className="fixed inset-0 pointer-events-none" style={{ background: "var(--overlay)", zIndex: 0 }} />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <AboutMe />
        <SectionDivider labelKey="dividers.stats" />
        <Stats />
        <SectionDivider labelKey="dividers.skills" />
        <Skills />
        <SectionDivider labelKey="dividers.projects" />
        <Projects />
        <SectionDivider labelKey="dividers.testimonials" />
        <Testimonials />
        <SectionDivider labelKey="dividers.experience" />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
