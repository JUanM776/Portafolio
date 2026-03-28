"use client";
// components/Navbar.tsx
// Sticky top nav with smooth-scroll links, responsive hamburger, and CV button.
// Layout: flex row (justify-between) for logo â†” actions; no extra wrappers.

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Acerca", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Experiencia", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add glass background once user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // <header> is the semantic landmark â€” sticky positioning via Tailwind
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "backdrop-blur-sm"
      }`}
      style={{
        background: scrolled ? "var(--nav-bg)" : "var(--overlay)",
        borderColor: "var(--border)",
      }}
    >
      {/* flex row: logo on left, desktop nav + CV in center-right */}
      <nav
        className="mx-auto max-w-7xl px-6 md:px-10 h-16 sm:h-24 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo mark */}
        <a href="#about" className="flex items-center">
          <img
            src="/logos/Logo_profesional.svg"
            alt="Logo"
            className="h-12 sm:h-20 w-auto logo-filter"
          />
        </a>

        {/* â”€â”€ Desktop nav links (hidden on mobile) â”€â”€ */}
        {/* flex row with gap â€” no wrapper div needed beyond <ul> */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* â”€â”€ CV button + hamburger (flex row) â”€â”€ */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* CV button â€” opens PDF in a new tab
              Place your CV at /public/cv.pdf to make this work */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-sm hover:bg-[var(--accent)] hover:text-[var(--ink)] transition-colors duration-300"
          >
            <span>CV</span>
          </a>

          {/* Hamburger â€” visible only on mobile */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            {/* Three lines animate to X via rotation */}
            <span
              className={`block h-px w-6 bg-[var(--text)] transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[var(--text)] transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[var(--text)] transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* â”€â”€ Mobile drawer menu â”€â”€ */}
      {/* max-height trick enables CSS transition on height:auto */}
      <div
        className={`mobile-menu md:hidden bg-[var(--nav-bg)] border-b border-[var(--border)] ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
