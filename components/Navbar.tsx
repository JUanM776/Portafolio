"use client";
// components/Navbar.tsx
// Sticky top nav with smooth-scroll links, responsive hamburger, and CV button.
// Layout: flex row (justify-between) for logo ↔ actions; no extra wrappers.

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Experience", href: "#experience" },
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
    // <header> is the semantic landmark — sticky positioning via Tailwind
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      {/* flex row: logo on left, desktop nav + CV in center-right */}
      <nav
        className="mx-auto max-w-7xl px-6 md:px-10 h-24 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo mark */}
        <a href="#about" className="flex items-center">
          <img
            src="/logos/Logo_profesional.svg"
            alt="Logo"
            className="h-20 w-auto brightness-0 invert"
          />
        </a>

        {/* ── Desktop nav links (hidden on mobile) ── */}
        {/* flex row with gap — no wrapper div needed beyond <ul> */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs font-medium tracking-widest uppercase text-[#c4bfb4] hover:text-[#d4a853] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CV button + hamburger (flex row) ── */}
        <div className="flex items-center gap-4">
          {/* CV button — opens PDF in a new tab
              Place your CV at /public/cv.pdf to make this work */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv border border-[#d4a853] text-[#d4a853] text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-sm hover:text-[#0a0a0a] transition-colors duration-300"
          >
            <span>CV</span>
          </a>

          {/* Hamburger — visible only on mobile */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            {/* Three lines animate to X via rotation */}
            <span
              className={`block h-px w-6 bg-[#e8e4dc] transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#e8e4dc] transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#e8e4dc] transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer menu ── */}
      {/* max-height trick enables CSS transition on height:auto */}
      <div
        className={`mobile-menu md:hidden bg-[#0a0a0a]/95 border-b border-[#2a2a2a] ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-5 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-[#c4bfb4] hover:text-[#d4a853] transition-colors"
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
