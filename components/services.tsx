"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"
import type { ReactElement } from "react"

// ── Tipos ─────────────────────────────────────────────────────────────────────

interface Service {
  id: string
  accent: string
  icon: ReactElement
  title: string
  description: string
  stat: string
  statLabel: string
}

interface StatItem {
  num: string
  label: string
}

// ── Dados ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    id: "01",
    accent: "#60b4ff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Produtos Digitais",
    description: "Criação e estruturação de soluções digitais prontas para escalar seu negócio.",
    stat: "+120",
    statLabel: "produtos entregues",
  },
  {
    id: "02",
    accent: "#5ee8c0",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 6v28M6 20h28M10 10l20 20M10 30l20-20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automação de Processos",
    description: "Elimine tarefas manuais e aumente a eficiência com fluxos automatizados.",
    stat: "−70%",
    statLabel: "tempo operacional",
  },
  {
    id: "03",
    accent: "#a89fff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 16h12M14 24h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 10v20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Plataformas Inteligentes",
    description: "Sistemas digitais para gestão, controle e operação em um único ambiente.",
    stat: "100%",
    statLabel: "visibilidade do negócio",
  },
  {
    id: "04",
    accent: "#60b4ff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 4v32M4 20h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 8l24 24M8 32L32 8" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
      </svg>
    ),
    title: "Escala de Operação",
    description: "Prepare sua empresa para crescer sem aumentar custos operacionais.",
    stat: "3x",
    statLabel: "mais capacidade",
  },
  {
    id: "05",
    accent: "#fbbf60",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <rect x="10" y="10" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="2" fill="currentColor" />
        <circle cx="25" cy="15" r="2" fill="currentColor" />
        <circle cx="15" cy="25" r="2" fill="currentColor" />
        <circle cx="25" cy="25" r="2" fill="currentColor" />
        <path d="M15 15L25 15M15 15L15 25M25 25L25 15M25 25L15 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Integrações Digitais",
    description: "Conecte ferramentas e centralize suas operações de forma inteligente.",
    stat: "+50",
    statLabel: "integrações disponíveis",
  },
  {
    id: "06",
    accent: "#5ee8c0",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <rect x="8" y="12" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12V9a2 2 0 014 0v3M22 12V9a2 2 0 014 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 24h16M12 28h16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Experiência do Usuário",
    description: "Interfaces simples, rápidas e pensadas para máxima usabilidade.",
    stat: "98%",
    statLabel: "satisfação dos clientes",
  },
]

const stats: StatItem[] = [
  { num: "+2.400", label: "empresas atendidas" },
  { num: "60%",    label: "redução de custos" },
  { num: "0",      label: "multas em 12 meses" },
  { num: "30 dias",label: "para setup completo" },
]

// ── Mascote ───────────────────────────────────────────────────────────────────

function AccountantBot(): ReactElement {
  return (
    <div style={{ position: "relative", width: 110, height: 138, flexShrink: 0 }}>
      <svg viewBox="0 0 110 138" width="110" height="138" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="55" cy="132" rx="30" ry="6" fill="rgba(255,255,255,0.1)" />
        <line x1="55" y1="20" x2="55" y2="8" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="55" cy="6" r="4" fill="#60b4ff" />
        {/* cabeça */}
        <rect x="25" y="20" width="60" height="46" rx="14" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        {/* olho esq */}
        <rect x="31" y="31" width="14" height="14" rx="4" fill="#dbeeff" stroke="#185FA5" strokeWidth="1.2" />
        <circle cx="38" cy="38" r="4" fill="#185FA5" />
        <circle cx="39.5" cy="36.5" r="1.2" fill="white" />
        {/* olho dir */}
        <rect x="65" y="31" width="14" height="14" rx="4" fill="#dbeeff" stroke="#185FA5" strokeWidth="1.2" />
        <circle cx="72" cy="38" r="4" fill="#185FA5" />
        <circle cx="73.5" cy="36.5" r="1.2" fill="white" />
        {/* boca */}
        <path d="M44 54 Q55 62 66 54" stroke="#185FA5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* pescoço */}
        <rect x="47" y="65" width="16" height="8" rx="3" fill="rgba(255,255,255,0.5)" />
        {/* corpo */}
        <rect x="18" y="72" width="74" height="50" rx="14" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        {/* painel */}
        <rect x="28" y="82" width="54" height="30" rx="8" fill="#EBF4FF" stroke="#c4d9f0" strokeWidth="1" />
        <path d="M34 90h42M34 97h32M34 104h38" stroke="#185FA5" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
        {/* braços */}
        <rect x="2" y="74" width="16" height="32" rx="8" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <rect x="5" y="102" width="10" height="9" rx="4" fill="#dbeafa" />
        <line x1="10" y1="109" x2="10" y2="118" stroke="#185FA5" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="92" y="74" width="16" height="32" rx="8" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <rect x="95" y="102" width="10" height="9" rx="4" fill="#dbeafa" />
        {/* pernas */}
        <rect x="30" y="120" width="18" height="10" rx="5" fill="#dbeafa" />
        <rect x="62" y="120" width="18" height="10" rx="5" fill="#dbeafa" />
      </svg>

      {/* balão */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: -100,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 10,
          padding: "5px 12px",
          fontSize: 11,
          fontWeight: 600,
          color: "#fff",
          whiteSpace: "nowrap",
          lineHeight: 1.5,
        }}
      >
        Tudo automatizado!
        <div
          style={{
            position: "absolute",
            left: -7,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderRight: "7px solid rgba(255,255,255,0.25)",
          }}
        />
      </div>
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps): ReactElement {
  const ref = useReveal(index * 80)

  return (
    <div
      ref={ref}
      className="reveal group relative flex flex-col overflow-hidden bg-white/90 backdrop-blur-md rounded-2xl border border-white/30 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
      style={{
        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* barra topo */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${service.accent}, ${service.accent}44)`,
        }}
      />

      <div className="flex flex-col flex-1 p-8">
        {/* ícone + número */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${service.accent}22`, color: service.accent }}
          >
            {service.icon}
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: `${service.accent}80`,
            }}
          >
            {service.id}
          </span>
        </div>

        {/* título */}
        <h3 className="text-[1.3rem] font-medium tracking-tight mb-3 text-black transition-colors duration-300 group-hover:text-[var(--orange)] relative z-10">
          {service.title}
        </h3>

        {/* descrição */}
        <p className="text-sm text-black/70 leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* rodapé: métrica + link */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: `1px solid ${service.accent}28` }}
        >
          <span
            style={{ fontSize: 20, fontWeight: 700, color: service.accent, lineHeight: 1 }}
          >
            {service.stat}
          </span>
          <span
            style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4, maxWidth: 90 }}
          >
            {service.statLabel}
          </span>
          <Link
            href="#contact"
            className="ml-auto text-sm font-semibold transition-all duration-300 group-hover:translate-x-1 inline-flex items-center gap-1"
            style={{ color: "var(--orange, #f97316)" }}
          >
            Ver solução →
          </Link>
        </div>
      </div>

      {/* glow hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${service.accent}18 0%, transparent 55%)`,
        }}
      />

      {/* linha animada */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${service.accent}, ${service.accent}44)`,
        }}
      />
    </div>
  )
}

// ── Seção ─────────────────────────────────────────────────────────────────────

export function Services(): ReactElement {
  const headerRef = useReveal()

  return (
    <section
      id="services"
      className="py-[120px] relative overflow-hidden text-white bg-gradient-to-br from-[#EAF2FF] via-[#3B82F6] to-[#1E3A8A]"
    >
      {/* glow fundo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-[rgba(255,255,255,0.08)] blur-[120px] rounded-full -top-[150px] right-[10%]" />
        <div className="absolute w-[400px] h-[400px] bg-[rgba(255,255,255,0.05)] blur-[100px] rounded-full bottom-[0px] left-[10%]" />
      </div>

      <div className="w-[90%] max-w-[1180px] mx-auto relative z-10">

        {/* header */}
        <div
          ref={headerRef}
          className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
              01 — Produtos
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] leading-none text-white mb-6">
              O que entregamos
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed max-w-[420px]">
              Uma plataforma completa para digitalizar e automatizar a operação
              contábil — do lançamento à entrega ao fisco.
            </p>
          </div>

          {/* mascote — só desktop */}
          <div className="hidden md:flex items-end pb-2">
            <AccountantBot />
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* banner de credibilidade */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl px-8 py-6 bg-white/10 backdrop-blur-md border border-white/20">
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col gap-1 text-center flex-1 min-w-[110px]">
              <span className="text-white font-bold leading-none" style={{ fontSize: 24 }}>
                {item.num}
              </span>
              <span className="text-white/50 font-medium" style={{ fontSize: 12 }}>
                {item.label}
              </span>
            </div>
          ))}
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:-translate-y-0.5"
          >
            Começar agora
            <svg
              viewBox="0 0 16 16"
              width={14}
              height={14}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
            >
              <path d="M3 8h10M8 3l5 5-5 5" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
