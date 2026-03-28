"use client";
import { useEffect, useState } from "react";

export default function LightBackground() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      setVisible(document.documentElement.classList.contains("light"));
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden" style={{ background: "#f8fafc" }}>
      {/* Blob 1 — azul grande */}
      <div
        className="absolute rounded-full animate-blob-1"
        style={{
          width: "70vw",
          height: "70vw",
          top: "-20%",
          left: "-15%",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      {/* Blob 2 — violeta */}
      <div
        className="absolute rounded-full animate-blob-2"
        style={{
          width: "60vw",
          height: "60vw",
          top: "20%",
          right: "-20%",
          background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      {/* Blob 3 — cyan */}
      <div
        className="absolute rounded-full animate-blob-3"
        style={{
          width: "65vw",
          height: "65vw",
          bottom: "-10%",
          left: "5%",
          background: "radial-gradient(circle, rgba(6,182,212,0.20) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      {/* Blob 4 — rosa */}
      <div
        className="absolute rounded-full animate-blob-4"
        style={{
          width: "55vw",
          height: "55vw",
          top: "50%",
          right: "0%",
          background: "radial-gradient(circle, rgba(244,114,182,0.18) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      {/* Blob 5 — verde */}
      <div
        className="absolute rounded-full animate-blob-1"
        style={{
          width: "50vw",
          height: "50vw",
          top: "5%",
          left: "35%",
          background: "radial-gradient(circle, rgba(52,211,153,0.16) 0%, transparent 60%)",
          filter: "blur(50px)",
          animationDelay: "-8s",
          animationDuration: "26s",
        }}
      />
    </div>
  );
}
