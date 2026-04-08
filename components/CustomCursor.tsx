"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number>(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 800, damping: 40 });

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
      if ((e.target as HTMLElement).closest("a, button, [data-cursor]")) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-cursor]")) setHovered(false);
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
    <motion.div
      className="fixed top-0 left-0 pointer-events-none"
      style={{ x, y, zIndex: 9999 }}
      animate={{ scale: hovered ? 0.8 : 1 }}
      transition={{ duration: 0.12 }}
    >
      <svg
        width="20"
        height="24"
        viewBox="0 0 28 34"
        fill="none"
        style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
      >
        <path
          d="M1 1L1 28L8.5 21L14.5 33L19 31L13 19.5L22 18.5L1 1Z"
          fill="var(--text)"
          stroke="var(--surface)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
