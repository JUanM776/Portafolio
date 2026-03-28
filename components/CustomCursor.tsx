"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Punto central — sigue rápido
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  // Halo — sigue con delay elegante
  const haloX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const haloY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    setIsTouch(touch);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor], input, textarea")) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor], input, textarea")) setHovered(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Halo — circulo grande difuso que sigue con delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full mix-blend-screen"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9998,
        }}
        animate={{
          width: hovered ? 60 : 36,
          height: hovered ? 60 : 36,
          opacity: hovered ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Punto central — pequeño y preciso */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
          background: "var(--accent)",
        }}
        animate={{
          width: hovered ? 8 : 5,
          height: hovered ? 8 : 5,
          scale: hovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
}
