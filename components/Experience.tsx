"use client";
// components/Experience.tsx
// Academic & Work Experience section with tab switcher.
// Layout: flex column outer; two-col grid on lg (timeline | detail panel).
// Uses Tailwind `order` utilities so timeline is reordered on mobile.

import { useState } from "react";

type Tab = "work" | "academic";

const WORK = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    company: "Luminary Labs",
    period: "2022 — Present",
    location: "San Francisco, CA (Remote)",
    achievements: [
      "Led a team of 6 to build the Meridian Design System adopted across 12 product teams.",
      "Reduced API response times by 42% through PostgreSQL query optimization and Redis caching.",
      "Architected a real-time notification infrastructure handling 1M+ events per day.",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Flux Systems",
    period: "2020 — 2022",
    location: "Austin, TX",
    achievements: [
      "Built the Flux Analytics Platform from 0→1, now serving 200+ enterprise clients.",
      "Implemented a Kafka-based pipeline ingesting 50M events/day into ClickHouse.",
      "Mentored 3 junior developers; introduced pair-programming sessions company-wide.",
    ],
  },
  {
    id: 3,
    role: "Frontend Engineer",
    company: "Sprout Health",
    period: "2018 — 2020",
    location: "New York, NY",
    achievements: [
      "Developed the Sprout iOS/Android app reaching #4 in Health & Fitness on the App Store.",
      "Rebuilt the web dashboard in React, cutting load time from 4.8s → 1.2s.",
      "Established company-wide testing standards; raised test coverage from 24% to 78%.",
    ],
  },
];

const ACADEMIC = [
  {
    id: 1,
    role: "M.S. Computer Science",
    company: "Stanford University",
    period: "2016 — 2018",
    location: "Stanford, CA",
    achievements: [
      "Specialisation in Human-Computer Interaction and Distributed Systems.",
      "Thesis: \"Adaptive UI generation from structured design tokens\" (advisor: Prof. L. Cardoso).",
      "GPA 3.92 / 4.0 — Graduate Fellowship recipient.",
    ],
  },
  {
    id: 2,
    role: "B.S. Software Engineering",
    company: "University of Texas at Austin",
    period: "2012 — 2016",
    location: "Austin, TX",
    achievements: [
      "Dean's List all eight semesters; graduated summa cum laude.",
      "President of the Open Source Society — grew membership 3× in two years.",
      "Teaching assistant for Algorithms and Data Structures (CS 311).",
    ],
  },
  {
    id: 3,
    role: "Exchange Programme",
    company: "ETH Zürich",
    period: "Spring 2015",
    location: "Zürich, Switzerland",
    achievements: [
      "Studied Advanced Algorithms, Parallel Programming, and Machine Learning.",
      "Research assistant in the Computational Complexity group.",
    ],
  },
];

// Check mark icon
function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="flex-shrink-0 mt-1"
    >
      <circle cx="7" cy="7" r="6.5" stroke="#d4a853" strokeOpacity="0.4" />
      <path
        d="M4.5 7l2 2 3-3"
        stroke="#d4a853"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [active, setActive] = useState(0); // selected item index

  const items = activeTab === "work" ? WORK : ACADEMIC;
  const selected = items[active] ?? items[0];

  // Switch tab and reset selection
  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setActive(0);
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <hr className="section-rule mb-16" />

      {/* Section header */}
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <p className="label-tag mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#e8e4dc]">
            Experience
          </h2>
        </div>

        {/* Tab switcher — inline flex pill */}
        <div
          role="tablist"
          aria-label="Experience type"
          className="flex self-start sm:self-end bg-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden"
        >
          {(["work", "academic"] as Tab[]).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => switchTab(tab)}
              className={`px-5 py-2 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-[#d4a853] text-[#0a0a0a]"
                  : "text-[#666] hover:text-[#c4bfb4]"
              }`}
            >
              {tab === "work" ? "Work" : "Academic"}
            </button>
          ))}
        </div>
      </header>

      {/* ── Two-column grid on large screens ──
          col 1 (timeline list) = 5/12    col 2 (detail card) = 7/12
          On mobile: detail card appears FIRST (order-1) then timeline (order-2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ── Timeline list ── order-2 mobile → order-1 lg */}
        <ol className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-2 list-none">
          {items.map((item, idx) => (
            <li key={item.id}>
              <button
                onClick={() => setActive(idx)}
                aria-current={active === idx ? "true" : undefined}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-200 ${
                  active === idx
                    ? "bg-[#1a1508] border-[#d4a853]/50 text-[#e8e4dc]"
                    : "bg-[#141414] border-[#2a2a2a] text-[#8a8680] hover:border-[#444] hover:text-[#c4bfb4]"
                }`}
              >
                {/* flex row: role + period */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm mb-0.5">{item.role}</p>
                    <p
                      className={`text-xs ${
                        active === idx ? "text-[#d4a853]" : "text-[#555]"
                      }`}
                    >
                      {item.company}
                    </p>
                  </div>
                  <span className="text-[10px] tracking-wide flex-shrink-0 mt-0.5">
                    {item.period}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ol>

        {/* ── Detail panel ── order-1 mobile → order-2 lg */}
        {/* Uses `order` utility to appear above timeline on small screens */}
        <article
          role="tabpanel"
          aria-label={selected.role}
          className="lg:col-span-7 order-1 lg:order-2 bg-[#141414] border border-[#2a2a2a] rounded-sm p-8"
        >
          {/* Accent top line */}
          <div className="w-10 h-px bg-[#d4a853] mb-6" />

          <h3 className="font-display text-3xl md:text-4xl text-[#e8e4dc] mb-2">
            {selected.role}
          </h3>
          <p className="text-[#d4a853] text-sm font-medium mb-1">
            {selected.company}
          </p>
          <p className="text-[#555] text-xs tracking-wide mb-8">
            {selected.period} · {selected.location}
          </p>

          {/* Achievements list */}
          <ul className="flex flex-col gap-4 list-none">
            {selected.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[#c4bfb4] text-sm leading-relaxed">
                  {ach}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
