"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 15 + 5;
      });
    }, 150);
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex items-center justify-center"
            style={{ background: "var(--ink)", zIndex: 10000 }}
          >
            <div className="flex flex-col items-center gap-8">
              {/* Logo con pulso */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src="/logos/Logo_profesional.svg"
                  alt="Logo"
                  className="w-28 h-28 logo-filter"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Nombre */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Juan Manuel Cordoba
              </motion.p>

              {/* Barra de progreso */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 160 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-[2px] rounded-full overflow-hidden"
                style={{ background: "var(--border)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "var(--accent)", width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.15 }}
                />
              </motion.div>

              {/* Porcentaje */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.6 }}
                className="text-[10px] tabular-nums tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 10 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
