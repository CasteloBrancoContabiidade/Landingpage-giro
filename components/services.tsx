"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        {/* Ícone tecnológico: cubo digital */}
        <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Produtos Digitais",
    description: "Criação e estruturação de soluções digitais prontas para escalar seu negócio.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        {/* Ícone tecnológico: fluxo/automatização */}
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 6v28M6 20h28M10 10l20 20M10 30l20-20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automação de Processos",
    description: "Elimine tarefas manuais e aumente a eficiência com fluxos automatizados.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        {/* Ícone tecnológico: plataforma / rede */}
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 16h12M14 24h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 10v20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Plataformas Inteligentes",
    description: "Sistemas digitais para gestão, controle e operação em um único ambiente.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        {/* Ícone tecnológico: escala / crescimento */}
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 4v32M4 20h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 8l24 24M8 32L32 8" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
      </svg>
    ),
    title: "Escala de Operação",
    description: "Prepare sua empresa para crescer sem aumentar custos operacionais.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        {/* Ícone tecnológico: integrações / conexões */}
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
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        {/* Ícone tecnológico: interface / UX */}
        <rect x="8" y="12" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12V9a2 2 0 014 0v3M22 12V9a2 2 0 014 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 24h16M12 28h16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Experiência do Usuário",
    description: "Interfaces simples, rápidas e pensadas para máxima usabilidade.",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useReveal(index * 80)

  return (
    <div
      ref={ref}
      className="reveal group bg-white p-8 relative overflow-hidden transition-all duration-300 rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-blue-300"
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-transparent" />

      {/* ÍCONE */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 transition-all duration-300 group-hover:scale-110 relative z-10">
        {service.icon}
      </div>

      {/* TÍTULO */}
      <h3 className="font-serif text-[1.3rem] font-black tracking-tight mb-3 transition-colors duration-300 group-hover:text-[var(--orange)] relative z-10 text-black">
        {service.title}
      </h3>

      {/* DESCRIÇÃO */}
      <p className="text-sm text-black/80 leading-relaxed mb-6 relative z-10">
        {service.description}
      </p>

      {/* CTA */}
      <Link
        href="#contact"
        className="text-sm font-semibold text-[var(--orange)] transition-all duration-300 group-hover:translate-x-1 inline-block relative z-10"
      >
        Ver solução →
      </Link>

      {/* linha animada */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--orange)] transition-all duration-500 group-hover:w-full" />
    </div>
  )
}

export function Services() {
  const headerRef = useReveal()

  return (
    <section
      id="services"
      className="py-[120px] relative overflow-hidden text-white bg-gradient-to-br from-[#EAF2FF] to-[#2563EB]"
    >
      {/* glow fundo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-[rgba(255,255,255,0.08)] blur-[120px] rounded-full -top-[150px] right-[10%]" />
        <div className="absolute w-[400px] h-[400px] bg-[rgba(255,255,255,0.05)] blur-[100px] rounded-full bottom-[0px] left-[10%]" />
      </div>

      <div className="w-[90%] max-w-[1180px] mx-auto relative z-10">
        <div ref={headerRef} className="reveal mb-14">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-white/70 mb-5">
            01 — Produtos
          </div>

          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight text-white mb-6">
            O que a GiroHub
            <span className="text-[var(--orange)]"> <em>entrega</em></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}