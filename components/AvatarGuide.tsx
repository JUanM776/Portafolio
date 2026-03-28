"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const MESSAGES: Record<string, string> = {
  about:        "Hola! Soy Juan Manuel\nBienvenido a mi portafolio",
  skills:       "Estas son las tecnologias\ncon las que trabajo",
  projects:     "Aqui puedes ver\nmis proyectos",
  testimonials: "Lo que dicen quienes\nhan trabajado conmigo",
  experience:   "Mi recorrido\nprofesional hasta hoy",
};
const DEFAULT_MSG = "Explora mi portafolio\nhaciendo scroll";

function Doll({ action }: { action: string }) {
  const isWalk = action === "walk";
  const isWave = action === "wave";
  const isJump = action === "jump";

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:80 }}>

      {/* Cabeza */}
      <motion.div
        animate={isWave ? { rotate:[-5,5,-5,5,0] } : { rotate:0 }}
        transition={{ duration:0.8 }}
        style={{ position:"relative", width:52, height:52, borderRadius:"50%",
          background:"linear-gradient(145deg,#fce4a8,#e8c060)",
          border:"2px solid #c4983e", marginBottom:-5, zIndex:3,
          boxShadow:"0 4px 12px rgba(0,0,0,0.25)" }}
      >
        {/* Pelo ondulado */}
        <div style={{ position:"absolute", top:-7, left:1, right:1, height:22,
          borderRadius:"50% 50% 0 0", background:"linear-gradient(180deg,#1a0e00,#2a1800)",
          boxShadow:"0 2px 4px rgba(0,0,0,0.3)" }} />
        {/* Ondas del pelo */}
        <div style={{ position:"absolute", top:-3, left:6, width:8, height:10,
          borderRadius:"50%", background:"#2a1800", transform:"rotate(-15deg)" }} />
        <div style={{ position:"absolute", top:-4, left:16, width:9, height:11,
          borderRadius:"50%", background:"#1a0e00", transform:"rotate(5deg)" }} />
        <div style={{ position:"absolute", top:-2, right:6, width:8, height:10,
          borderRadius:"50%", background:"#2a1800", transform:"rotate(15deg)" }} />
        {/* Pelo lateral izq */}
        <div style={{ position:"absolute", top:4, left:-2, width:8, height:14,
          borderRadius:"50%", background:"#2a1800" }} />
        {/* Pelo lateral der */}
        <div style={{ position:"absolute", top:4, right:-2, width:8, height:14,
          borderRadius:"50%", background:"#2a1800" }} />
        {/* Ojos */}
        <div style={{ position:"absolute", top:22, left:12, width:8, height:8,
          borderRadius:"50%", background:"#1a0e00" }} />
        <div style={{ position:"absolute", top:22, right:12, width:8, height:8,
          borderRadius:"50%", background:"#1a0e00" }} />
        {/* Brillo ojos */}
        <div style={{ position:"absolute", top:23, left:15, width:3, height:3, borderRadius:"50%", background:"white" }} />
        <div style={{ position:"absolute", top:23, right:15, width:3, height:3, borderRadius:"50%", background:"white" }} />
        {/* Cejas */}
        <div style={{ position:"absolute", top:18, left:11, width:9, height:2, borderRadius:2, background:"#1a0e00" }} />
        <div style={{ position:"absolute", top:18, right:11, width:9, height:2, borderRadius:2, background:"#1a0e00" }} />
        {/* Sonrisa */}
        <div style={{ position:"absolute", bottom:10, left:"50%", transform:"translateX(-50%)",
          width:14, height:6, borderRadius:"0 0 10px 10px",
          border:"2px solid #2a1800", borderTop:"none" }} />
      </motion.div>

      {/* Cuello */}
      <div style={{ width:14, height:7, background:"linear-gradient(180deg,#fce4a8,#e8c060)", zIndex:2 }} />

      {/* Torso + brazos */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"center", position:"relative" }}>

        {/* Brazo izquierdo */}
        <motion.div
          animate={isWalk ? { rotate:[20,-20,20], transition:{ duration:0.45, repeat:3 } } : { rotate:8 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center",
            transformOrigin:"top center", marginTop:4, marginRight:-4, zIndex:1 }}
        >
          <div style={{ width:13, height:24, background:"linear-gradient(180deg,#1a1a1a,#111)",
            borderRadius:"6px 6px 3px 3px" }} />
          <div style={{ width:14, height:12, borderRadius:"50%",
            background:"linear-gradient(135deg,#fce4a8,#e0b850)", border:"1.5px solid #c4983e", marginTop:-2 }} />
        </motion.div>

        {/* Torso — buzo negro con capota */}
        <div style={{ width:40, height:46, position:"relative",
          background:"linear-gradient(180deg,#1a1a1a,#0d0d0d)",
          borderRadius:"6px 6px 3px 3px", zIndex:2,
          boxShadow:"0 2px 8px rgba(0,0,0,0.3)" }}>
          {/* Capota */}
          <div style={{ position:"absolute", top:-3, left:"50%", transform:"translateX(-50%)",
            width:28, height:10, background:"#1a1a1a", borderRadius:"10px 10px 0 0",
            border:"1.5px solid #2a2a2a", borderBottom:"none" }} />
          {/* Cordones de la capota */}
          <div style={{ position:"absolute", top:8, left:14, width:1.5, height:12, background:"#444", borderRadius:1 }} />
          <div style={{ position:"absolute", top:8, right:14, width:1.5, height:12, background:"#444", borderRadius:1 }} />
          {/* Bolsillo canguro */}
          <div style={{ position:"absolute", bottom:8, left:"50%", transform:"translateX(-50%)",
            width:22, height:10, border:"1.5px solid #2a2a2a", borderRadius:"0 0 4px 4px", borderTop:"none" }} />
          {/* Cierre */}
          <div style={{ position:"absolute", top:10, left:"50%", transform:"translateX(-50%)",
            width:1.5, height:20, background:"#333" }} />
        </div>

        {/* Brazo derecho (articulado para saludo) */}
        <motion.div
          animate={isWave
            ? { rotate:-70, transition:{ duration:0.3, ease:"easeOut" } }
            : isWalk
            ? { rotate:[-20,20,-20], transition:{ duration:0.45, repeat:3 } }
            : { rotate:-8 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center",
            transformOrigin:"6px 2px", marginTop:4, marginLeft:-4, zIndex:1 }}
        >
          <div style={{ width:13, height:24, background:"linear-gradient(180deg,#1a1a1a,#111)",
            borderRadius:"6px 6px 3px 3px" }} />
          <motion.div
            animate={isWave
              ? { rotate:[0, 30, -20, 30, -20, 0], transition:{ duration:1, ease:"easeInOut" } }
              : { rotate:0 }}
            style={{ display:"flex", flexDirection:"column", alignItems:"center",
              transformOrigin:"top center", marginTop:-1 }}
          >
            <div style={{ width:14, height:12, borderRadius:"50%",
              background:"linear-gradient(135deg,#fce4a8,#e0b850)", border:"1.5px solid #c4983e", marginTop:-1 }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Cinturon */}
      <div style={{ width:40, height:4, background:"#222",
        borderRadius:"0 0 2px 2px" }} />

      {/* Piernas — pantalon ancho */}
      <div style={{ display:"flex", gap:3, marginTop:1 }}>
        <motion.div
          animate={isWalk ? { rotate:[18,-18,18], transition:{ duration:0.45, repeat:3 } }
            : isJump ? { y:[0,-16,0], transition:{ duration:0.4 } } : { rotate:0 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", transformOrigin:"top center" }}
        >
          <div style={{ width:18, height:34, background:"linear-gradient(180deg,#2a2a3a,#1a1a2a)",
            borderRadius:"3px 3px 4px 4px" }} />
          {/* Zapato blanco */}
          <div style={{ width:22, height:10, background:"linear-gradient(180deg,#f5f5f5,#e0e0e0)",
            borderRadius:"3px 8px 8px 3px", marginTop:-2, marginLeft:3,
            boxShadow:"0 2px 4px rgba(0,0,0,0.2)", border:"1px solid #ddd" }} />
        </motion.div>
        <motion.div
          animate={isWalk ? { rotate:[-18,18,-18], transition:{ duration:0.45, repeat:3 } }
            : isJump ? { y:[0,-16,0], transition:{ duration:0.4 } } : { rotate:0 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", transformOrigin:"top center" }}
        >
          <div style={{ width:18, height:34, background:"linear-gradient(180deg,#2a2a3a,#1a1a2a)",
            borderRadius:"3px 3px 4px 4px" }} />
          <div style={{ width:22, height:10, background:"linear-gradient(180deg,#f5f5f5,#e0e0e0)",
            borderRadius:"3px 8px 8px 3px", marginTop:-2, marginLeft:3,
            boxShadow:"0 2px 4px rgba(0,0,0,0.2)", border:"1px solid #ddd" }} />
        </motion.div>
      </div>
    </div>
  );
}

export default function AvatarGuide() {
  const [message, setMessage] = useState(DEFAULT_MSG);
  const [msgKey, setMsgKey] = useState(0);
  const [action, setAction] = useState("idle");
  const actionRef = useRef("idle");
  const bodyControls = useAnimation();

  const startFloat = useCallback(() => {
    bodyControls.start({
      y: [0, -10, 0],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    });
  }, [bodyControls]);

  const doAction = useCallback(async (name: string) => {
    if (actionRef.current !== "idle") return;
    actionRef.current = name;
    setAction(name);
    if (name === "jump") {
      await bodyControls.start({ y:[0,-35,0], transition:{ duration:0.5, ease:"easeOut" } });
    } else if (name === "walk") {
      await bodyControls.start({ x:[0,25,-25,0], transition:{ duration:1.2, ease:"easeInOut" } });
    } else if (name === "wave") {
      await new Promise((r) => setTimeout(r, 1400));
    }
    actionRef.current = "idle";
    setAction("idle");
    startFloat();
  }, [bodyControls, startFloat]);

  useEffect(() => {
    const ids = Object.keys(MESSAGES);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setMessage(MESSAGES[id]);
          setMsgKey((k) => k + 1);
          if (actionRef.current === "idle") doAction("wave");
        }
      }, { threshold: 0.3 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  // eslint-disable-next-line
  }, []);

  useEffect(() => { startFloat(); }, [startFloat]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3 scale-75 sm:scale-100 origin-bottom-right">
      <AnimatePresence mode="wait">
        <motion.div
          key={msgKey}
          initial={{ opacity:0, scale:0.8, y:10 }}
          animate={{ opacity:1, scale:1, y:0 }}
          exit={{ opacity:0, scale:0.8, y:10 }}
          transition={{ duration:0.35, ease:[0.34,1.56,0.64,1] }}
          className="relative max-w-[220px] rounded-2xl rounded-br-sm px-5 py-3 shadow-2xl"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="flex gap-1 mb-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)", opacity: 0.6 }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)", opacity: 0.4 }} />
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)", opacity: 0.2 }} />
          </div>
          <p className="text-[12px] leading-relaxed whitespace-pre-line" style={{ color: "var(--text)" }}>{message}</p>
          <div className="absolute -bottom-2 right-4 w-4 h-4 rotate-45"
            style={{ background: "var(--surface)", borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} />
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col items-center gap-2">
        <motion.div
          animate={bodyControls}
          className="cursor-pointer"
          whileHover={{ scale:1.1 }}
          onClick={() => { setMessage(DEFAULT_MSG); setMsgKey((k)=>k+1); doAction("jump"); }}
        >
          <Doll action={action} />
        </motion.div>
        <div className="flex gap-1.5">
          {([["S","wave","Saludar"],["C","walk","Caminar"],["^","jump","Saltar"]] as const).map(([label, name, ariaLabel]) => (
            <motion.button key={name} onClick={() => doAction(name)}
              whileHover={{ scale:1.2 }} whileTap={{ scale:0.85 }}
              aria-label={ariaLabel}
              className="w-7 h-7 rounded-full text-[10px] flex items-center justify-center"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            >{label}</motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
