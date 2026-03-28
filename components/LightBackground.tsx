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
          width: "60vw",
          height: "60vw",
          top: "-15%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Blob 2 — violeta */}
      <div
        className="absolute rounded-full animate-blob-2"
        style={{
          width: "50vw",
          height: "50vw",
          top: "25%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Blob 3 — cyan */}
      <div
        className="absolute rounded-full animate-blob-3"
        style={{
          width: "55vw",
          height: "55vw",
          bottom: "-5%",
          left: "10%",
          background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Blob 4 — rosa */}
      <div
        className="absolute rounded-full animate-blob-4"
        style={{
          width: "45vw",
          height: "45vw",
          top: "55%",
          right: "5%",
          background: "radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Blob 5 — verde menta */}
      <div
        className="absolute rounded-full animate-blob-1"
        style={{
          width: "40vw",
          height: "40vw",
          top: "10%",
          left: "40%",
          background: "radial-gradient(circle, rgba(52,211,153,0.10) 0%, transparent 65%)",
          filter: "blur(70px)",
          animationDelay: "-8s",
          animationDuration: "30s",
        }}
      />
    </div>
  );
}
