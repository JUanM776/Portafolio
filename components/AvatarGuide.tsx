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
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:72, gap:0 }}>

      {/* Cabeza */}
      <motion.div
        animate={isWave ? { rotate:[-6,6,-6,6,0] } : { rotate:0 }}
        transition={{ duration:0.7 }}
        style={{ position:"relative", width:48, height:48, borderRadius:"50%",
          background:"linear-gradient(135deg,#f5d78e,#e8c060)",
          border:"2.5px solid #c4983e", marginBottom:-6, zIndex:2,
          boxShadow:"0 2px 8px rgba(0,0,0,0.3)" }}
      >
        <div style={{ position:"absolute", top:16, left:10, width:7, height:7, borderRadius:"50%", background:"#2a1a00" }} />
        <div style={{ position:"absolute", top:16, right:10, width:7, height:7, borderRadius:"50%", background:"#2a1a00" }} />
        <div style={{ position:"absolute", top:17, left:13, width:2.5, height:2.5, borderRadius:"50%", background:"white" }} />
        <div style={{ position:"absolute", top:17, right:13, width:2.5, height:2.5, borderRadius:"50%", background:"white" }} />
        <div style={{ position:"absolute", bottom:11, left:"50%", transform:"translateX(-50%)", width:14, height:6, borderRadius:"0 0 8px 8px", border:"2px solid #2a1a00", borderTop:"none" }} />
        <div style={{ position:"absolute", top:-4, left:4, right:4, height:14, borderRadius:"50% 50% 0 0", background:"#3d2200" }} />
      </motion.div>

      {/* Cuello */}
      <div style={{ width:12, height:8, background:"#f0c860", zIndex:1 }} />

      {/* Torso + brazos */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"center", position:"relative" }}>

        {/* Brazo izquierdo */}
        <motion.div
          animate={isWalk
            ? { rotate:[25,-25,25], transition:{ duration:0.45, repeat:3 } }
            : { rotate:12 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center",
            transformOrigin:"top center", marginTop:6, marginRight:-3 }}
        >
          <div style={{ width:11, height:28, background:"linear-gradient(180deg,#2563eb,#1d4ed8)", borderRadius:"6px 6px 4px 4px" }} />
          <div style={{ width:13, height:13, borderRadius:"50%", background:"#f5d78e", border:"1.5px solid #c4983e", marginTop:-2 }} />
        </motion.div>

        {/* Torso */}
        <div style={{ width:34, height:42, position:"relative",
          background:"linear-gradient(180deg,#3b82f6,#2563eb)",
          borderRadius:"4px 4px 2px 2px",
          boxShadow:"inset 0 1px 0 rgba(255,255,255,0.15)" }}>
          <div style={{ position:"absolute", top:8, left:"50%", transform:"translateX(-50%)", width:12, height:9, border:"1.5px solid rgba(255,255,255,0.3)", borderRadius:3 }} />
        </div>

        {/* Brazo derecho — saluda */}
        <motion.div
          animate={isWave
            ? { rotate:[-12, 150, 130, 150, 130, -12], transition:{ duration:1.2, ease:"easeInOut" } }
            : isWalk
            ? { rotate:[-25,25,-25], transition:{ duration:0.45, repeat:3 } }
            : { rotate:-12 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center",
            transformOrigin:"4px 0px", marginTop:6, marginLeft:-3 }}
        >
          <div style={{ width:11, height:28, background:"linear-gradient(180deg,#2563eb,#1d4ed8)", borderRadius:"6px 6px 4px 4px" }} />
          <div style={{ width:13, height:13, borderRadius:"50%", background:"#f5d78e", border:"1.5px solid #c4983e", marginTop:-2 }} />
        </motion.div>
      </div>

      {/* Cintura */}
      <div style={{ width:34, height:6, background:"#1e3a5f", borderRadius:"0 0 2px 2px" }} />

      {/* Piernas */}
      <div style={{ display:"flex", gap:4, marginTop:1 }}>
        <motion.div
          animate={isWalk ? { rotate:[28,-28,28], transition:{ duration:0.45, repeat:3 } }
            : isJump ? { y:[0,-14,0], transition:{ duration:0.4 } } : { rotate:0 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", transformOrigin:"top center" }}
        >
          <div style={{ width:14, height:34, background:"linear-gradient(180deg,#1e3a5f,#162d4a)", borderRadius:"3px 3px 2px 2px" }} />
          <div style={{ width:18, height:9, background:"#1a1a1a", borderRadius:"2px 4px 4px 2px", marginTop:-2, marginLeft:2 }} />
        </motion.div>
        <motion.div
          animate={isWalk ? { rotate:[-28,28,-28], transition:{ duration:0.45, repeat:3 } }
            : isJump ? { y:[0,-14,0], transition:{ duration:0.4 } } : { rotate:0 }}
          style={{ display:"flex", flexDirection:"column", alignItems:"center", transformOrigin:"top center" }}
        >
          <div style={{ width:14, height:34, background:"linear-gradient(180deg,#1e3a5f,#162d4a)", borderRadius:"3px 3px 2px 2px" }} />
          <div style={{ width:18, height:9, background:"#1a1a1a", borderRadius:"2px 4px 4px 2px", marginTop:-2, marginLeft:2 }} />
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
      await new Promise((r) => setTimeout(r, 1200));
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { startFloat(); }, [startFloat]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={msgKey}
          initial={{ opacity:0, scale:0.8, y:10 }}
          animate={{ opacity:1, scale:1, y:0 }}
          exit={{ opacity:0, scale:0.8, y:10 }}
          transition={{ duration:0.35, ease:[0.34,1.56,0.64,1] }}
          className="relative max-w-[220px] bg-[#1a1a1a] border border-[#93c5fd]/50 rounded-2xl rounded-br-sm px-5 py-3 shadow-2xl"
        >
          <div className="flex gap-1 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]/20" />
          </div>
          <p className="text-[12px] text-[#f5f5f5] leading-relaxed whitespace-pre-line">{message}</p>
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#1a1a1a] border-r border-b border-[#93c5fd]/50 rotate-45" />
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
          {([["S","wave"],["C","walk"],["^","jump"]] as const).map(([label, name]) => (
            <motion.button key={name} onClick={() => doAction(name)}
              whileHover={{ scale:1.2 }} whileTap={{ scale:0.85 }}
              className="w-7 h-7 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#93c5fd]/60 text-[10px] text-[#a8b2c1] flex items-center justify-center"
            >{label}</motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
