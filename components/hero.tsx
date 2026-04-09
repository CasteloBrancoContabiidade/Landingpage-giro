"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

// ── Robô SVG animado ─────────────────────────────────────────────────────────
function Robot() {
  const controls    = useAnimation()
  const eyeControls = useAnimation()
  const armL        = useAnimation()
  const armR        = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -14, 0],
      transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
    })
    eyeControls.start({
      scaleY: [1, 0.08, 1],
      transition: { duration: 0.15, repeat: Infinity, repeatDelay: 3.5, ease: "linear" },
    })
    armL.start({
      rotate: [0, -12, 0],
      transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
    })
    armR.start({
      rotate: [0, 12, 0],
      transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
    })
  }, [controls, eyeControls, armL, armR])

  return (
    <motion.div animate={controls} style={{ display: "inline-block" }}>
      <svg viewBox="0 0 160 260" width="200" height="310" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        {/* sombra */}
        <ellipse cx="80" cy="252" rx="42" ry="9" fill="rgba(255,255,255,0.15)" />

        {/* antena */}
        <line x1="80" y1="28" x2="80" y2="10" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="80" cy="7" r="5" fill="#60b4ff" />
        <motion.circle cx="80" cy="7" r="9" fill="none" stroke="#60b4ff" strokeWidth="1.5" opacity="0.5"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />

        {/* cabeça */}
        <rect x="44" y="28" width="72" height="64" rx="18" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

        {/* olho esquerdo */}
        <motion.g animate={eyeControls} style={{ originX: "60px", originY: "59px" }}>
          <rect x="51" y="50" width="18" height="18" rx="5" fill="#dbeeff" stroke="#185FA5" strokeWidth="1.5" />
          <circle cx="60" cy="59" r="5" fill="#185FA5" />
          <circle cx="62" cy="57" r="1.5" fill="white" />
        </motion.g>
        {/* olho direito */}
        <motion.g animate={eyeControls} style={{ originX: "100px", originY: "59px" }}>
          <rect x="91" y="50" width="18" height="18" rx="5" fill="#dbeeff" stroke="#185FA5" strokeWidth="1.5" />
          <circle cx="100" cy="59" r="5" fill="#185FA5" />
          <circle cx="102" cy="57" r="1.5" fill="white" />
        </motion.g>

        {/* boca */}
        <rect x="64" y="78" width="32" height="6" rx="3" fill="#dbeeff" stroke="#b5d4f4" strokeWidth="1" />
        <rect x="66" y="79.5" width="8" height="3" rx="1.5" fill="#185FA5" />
        <rect x="76" y="79.5" width="8" height="3" rx="1.5" fill="#185FA5" />
        <rect x="86" y="79.5" width="6" height="3" rx="1.5" fill="#185FA5" />

        {/* pescoço */}
        <rect x="72" y="92" width="16" height="12" rx="4" fill="rgba(255,255,255,0.7)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />

        {/* corpo */}
        <rect x="30" y="104" width="100" height="90" rx="20" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

        {/* painel peito */}
        <rect x="50" y="118" width="60" height="42" rx="10" fill="#EBF4FF" stroke="#c4d9f0" strokeWidth="1" />
        <circle cx="66" cy="132" r="5" fill="#185FA5" opacity="0.9" />
        <motion.circle cx="66" cy="132" r="5" fill="#60b4ff"
          animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
        <circle cx="80" cy="132" r="5" fill="#1D9E75" opacity="0.9" />
        <motion.circle cx="80" cy="132" r="5" fill="#1D9E75"
          animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 1.6, repeat: Infinity, delay: 0.4 }} />
        <circle cx="94" cy="132" r="5" fill="#EF9F27" opacity="0.9" />
        <motion.circle cx="94" cy="132" r="5" fill="#EF9F27"
          animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />
        <rect x="58" y="146" width="44" height="6" rx="3" fill="#dbeafa" />
        <motion.rect x="58" y="146" height="6" rx="3" fill="#185FA5"
          animate={{ width: [8, 44, 8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

        {/* braço esquerdo */}
        <motion.g animate={armL} style={{ originX: "30px", originY: "116px" }}>
          <rect x="6" y="108" width="24" height="56" rx="12" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <rect x="10" y="158" width="16" height="14" rx="7" fill="#dbeafa" stroke="#c4d9f0" strokeWidth="1" />
        </motion.g>

        {/* braço direito */}
        <motion.g animate={armR} style={{ originX: "130px", originY: "116px" }}>
          <rect x="130" y="108" width="24" height="56" rx="12" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <rect x="134" y="158" width="16" height="14" rx="7" fill="#dbeafa" stroke="#c4d9f0" strokeWidth="1" />
        </motion.g>

        {/* pernas */}
        <rect x="52" y="194" width="24" height="42" rx="12" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <rect x="84" y="194" width="24" height="42" rx="12" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />

        {/* pés */}
        <rect x="46" y="228" width="36" height="16" rx="8" fill="#dbeafa" stroke="#c4d9f0" strokeWidth="1" />
        <rect x="78" y="228" width="36" height="16" rx="8" fill="#dbeafa" stroke="#c4d9f0" strokeWidth="1" />
      </svg>
    </motion.div>
  )
}

// ── Partículas ───────────────────────────────────────────────────────────────
const PARTICLES = [
  { x: "8%",  y: "18%", size: 5, delay: 0 },
  { x: "90%", y: "12%", size: 4, delay: 0.9 },
  { x: "5%",  y: "72%", size: 7, delay: 1.5 },
  { x: "93%", y: "68%", size: 4, delay: 0.3 },
  { x: "22%", y: "88%", size: 4, delay: 2.1 },
  { x: "78%", y: "82%", size: 6, delay: 1.1 },
  { x: "52%", y: "6%",  size: 3, delay: 0.6 },
]

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <motion.div key={i}
          style={{
            position: "absolute", left: p.x, top: p.y,
            width: p.size, height: p.size,
            borderRadius: "50%", background: "rgba(255,255,255,0.65)",
            zIndex: 1, pointerEvents: "none",
          }}
          animate={{ y: [0, -16, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 3 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </>
  )
}

// ── Badges ───────────────────────────────────────────────────────────────────
const BADGES = [
  { label: "+10 projetos", sub: "entregues" },
  { label: "2 anos",        sub: "de mercado" },
  { label: "ISO 27001",     sub: "certificado" },
]

// ── HERO ─────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {/* foto de fundo tecnológica clara (placa de circuito) */}
      <img
        src="/tecnology.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center",
          zIndex: 0,
        }}
      />

      {/* overlay direcional: escuro na esquerda, transparente na direita */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(105deg, rgba(8,22,58,0.94) 0%, rgba(12,36,82,0.84) 36%, rgba(18,52,110,0.58) 62%, rgba(8,22,58,0.10) 100%)",
      }} />

      {/* vinheta vertical suave */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(8,22,58,0.4) 0%, transparent 18%, transparent 82%, rgba(8,22,58,0.45) 100%)",
      }} />

      <Particles />

      {/* conteúdo */}
      <div
        className="hero-layout"
        style={{
          position: "relative", zIndex: 2,
          width: "100%", maxWidth: 1200,
          margin: "0 auto", padding: "88px 48px 72px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: 40, flexWrap: "wrap",
        }}
      >

        {/* esquerda */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: "1 1 380px", maxWidth: 560 }}
        >
          {/* eyebrow */}
          <div className="hero-eyebrow" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: "#60b4ff" }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#60b4ff" }}>
              Desenvolvimento de tecnologia
            </span>
          </div>

          {/* título */}
          <h1 style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            fontWeight: 700, lineHeight: 1.08,
            color: "#ffffff", marginBottom: 20,
            letterSpacing: "-0.025em",
          }}>
            Plataforma{" "} do
            <span style={{ color: "#60b4ff" }}> Contador</span>{" "}
            
          </h1>

          {/* descrição */}
          <p style={{
            fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
            color: "rgba(255,255,255,0.68)",
            lineHeight: 1.78, marginBottom: 38, maxWidth: 460,
          }}>
            Centralize, automatize e escale a venda de soluções contábeis em um único ambiente.
          </p>

          {/* botões */}
          <div className="hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 52 }}>
            <motion.a
              href="#services"
              whileHover={{ y: -2, boxShadow: "0 18px 44px rgba(24,95,165,0.55)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px", background: "#185FA5", color: "#fff",
                borderRadius: 40, fontWeight: 600, fontSize: 14,
                textDecoration: "none", letterSpacing: "0.02em",
                transition: "box-shadow 0.2s",
              }}
            >
              Ver soluções
              <svg viewBox="0 0 24 24" width={15} height={15} stroke="#fff" fill="none" strokeWidth={2.5} strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ background: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px",
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.88)",
                borderRadius: 40, fontWeight: 500, fontSize: 14,
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(6px)",
                transition: "background 0.2s",
              }}
            >
              Falar com especialista
            </motion.a>
          </div>

          {/* badges */}
          <div className="hero-badges" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {BADGES.map((b, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
                style={{
                  display: "flex", flexDirection: "column", gap: 2,
                  paddingRight: 24,
                  borderRight: i < BADGES.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <span style={{ fontSize: 19, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>{b.label}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.42)", fontWeight: 500 }}>{b.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* direita: robô + cards flutuantes */}
        <motion.div
          className="hero-robot"
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: "1 1 260px", display: "flex",
            flexDirection: "column", alignItems: "center",
            position: "relative", minHeight: 340,
          }}
        >
          {/* halo */}
          <div style={{
            position: "absolute", top: "36%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 280, height: 280, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,180,255,0.2) 0%, transparent 68%)",
            pointerEvents: "none",
          }} />

          {/* card: deploy */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute", top: 16, left: -16,
              background: "rgba(255,255,255,0.96)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 14, padding: "10px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              display: "flex", alignItems: "center", gap: 10,
              zIndex: 3, whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" width={16} height={16} stroke="#185FA5" fill="none" strokeWidth={2} strokeLinecap="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 11, color: "#6b8aaa", margin: 0 }}>####</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0d1e3a", margin: 0 }}>v2.4.0 em produção ✓</p>
            </div>
          </motion.div>

          {/* card: uptime */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute", top: 110, right: -20,
              background: "rgba(255,255,255,0.96)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 14, padding: "10px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              zIndex: 3, whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
            }}
          >
            <p style={{ fontSize: 11, color: "#6b8aaa", margin: "0 0 3px" }}>####</p>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#1D9E75", margin: 0 }}>
              99.98%
              <span style={{ fontSize: 12, fontWeight: 500, color: "#6b8aaa" }}> / 12 meses</span>
            </p>
          </motion.div>

          {/* card: stack */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            style={{
              position: "absolute", bottom: 32, left: -8,
              background: "rgba(255,255,255,0.96)",
              border: "1px solid rgba(255,255,255,0.6)",
              borderRadius: 14, padding: "10px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              zIndex: 3, whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", gap: 10,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1D9E75", flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 11, color: "#6b8aaa", margin: 0 }}>Stack moderno</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#0d1e3a", margin: 0 }}>React · Node · AWS</p>
            </div>
          </motion.div>

          <Robot />
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: 28, left: "50%",
          transform: "translateX(-50%)", zIndex: 3,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.38)", textTransform: "uppercase" }}>scroll</span>
        <svg viewBox="0 0 24 24" width={16} height={16} stroke="rgba(255,255,255,0.38)" fill="none" strokeWidth={2} strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

      {/* responsivo */}
      <style>{`
        @media (max-width: 768px) {
          .hero-layout  { flex-direction: column !important; text-align: center; padding: 64px 24px 52px !important; }
          .hero-robot   { display: none !important; }
          .hero-text    { max-width: 100% !important; }
          .hero-eyebrow { justify-content: center !important; }
          .hero-badges  { justify-content: center !important; }
          .hero-btns    { justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}
