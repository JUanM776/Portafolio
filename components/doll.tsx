// components/Muñeco.jsx
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Muñeco() {
  const controls = useAnimation();
  const [accion, setAccion] = useState(null);

  const caminar = async () => {
    setAccion("Caminar");
    await controls.start({
      x: [0, 200, 0],
      transition: { duration: 2, repeat: 1, ease: "easeInOut" },
    });
    setAccion(null);
  };

  const saltar = async () => {
    setAccion("Saltar");
    await controls.start({
      y: [0, -100, 0],
      transition: { duration: 0.8, repeat: 1, ease: "easeOut" },
    });
    setAccion(null);
  };

  const saludar = async () => {
    setAccion("Saludar");
    await controls.start({
      rotate: [0, -20, 20, -20, 0],
      transition: { duration: 1, ease: "easeInOut" },
    });
    setAccion(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-100">
      {/* Botones de control */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={caminar}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Caminar
        </button>
        <button
          onClick={saltar}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Saltar
        </button>
        <button
          onClick={saludar}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Saludar
        </button>
      </div>

      {/* Muñeco */}
      <motion.div animate={controls} className="flex flex-col items-center">
        {/* Cabeza */}
        <div className="w-20 h-20 bg-yellow-300 rounded-full border-4 border-yellow-500 flex items-center justify-center">
          🙂
        </div>

        {/* Brazos */}
        <div className="flex justify-between w-32">
          <div className="w-4 h-16 bg-yellow-500 rounded"></div>
          <motion.div
            animate={accion === "Saludar" ? { rotate: [0, -20, 20, -20, 0] } : {}}
            transition={{ duration: 1 }}
            className="w-4 h-16 bg-yellow-500 rounded origin-top"
          ></motion.div>
        </div>

        {/* Cuerpo */}
        <div className="w-6 h-24 bg-yellow-400 border-4 border-yellow-500"></div>

        {/* Piernas */}
        <div className="flex gap-4 mt-1">
          <div className="w-4 h-16 bg-yellow-500 rounded"></div>
          <div className="w-4 h-16 bg-yellow-500 rounded"></div>
        </div>
      </motion.div>
    </div>
  );
}
