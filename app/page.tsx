// app/page.tsx — Root page: composes all portfolio sections
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

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
      <Skills />
      <Projects />
      <Testimonials />
      <Experience />
      <Footer />
    </main>
  );
}
