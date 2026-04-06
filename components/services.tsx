"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <rect x="4" y="4" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 20h14M20 13v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Plataformas SaaS",
    description: "Do MVP ao produto escalável. Arquitetura multi-tenant, integrações e painel de controle completo para seu time.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 10v10l6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Automação com IA",
    description: "Processos repetitivos eliminados. Fluxos inteligentes com modelos de linguagem integrados ao seu sistema atual.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <path d="M8 32V16l12-8 12 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="15" y="22" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Apps Mobile",
    description: "iOS e Android de alta performance. React Native ou nativo — entregamos experiência que os usuários amam.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <path d="M6 20h28M20 6v28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Cloud & DevOps",
    description: "Infraestrutura escalável em AWS e GCP. Kubernetes, monitoramento e deploy contínuo com SLA de 99,9%.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <path d="M10 28l8-16 6 10 4-6 6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Analytics & BI",
    description: "Dados que falam. Dashboards em tempo real, data warehouse e relatórios que guiam decisões estratégicas.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
        <rect x="8" y="12" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12V9a2 2 0 014 0v3M22 12V9a2 0 014 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Integrações API",
    description: "Conectamos qualquer sistema. ERPs, bancos, marketplaces — nossa equipe conhece cada protocolo do mercado.",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useReveal(index * 80)

  return (
    <div
      ref={ref}
      className="reveal group bg-white backdrop-blur-sm p-9 px-8 relative overflow-hidden transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.06)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(0,87,255,0.15),transparent_70%)]" />

      <div className="w-11 h-11 border border-[var(--line)] rounded-[10px] flex items-center justify-center text-[var(--orange)] mb-[22px] transition-all duration-300 group-hover:bg-[var(--orange-dim)] group-hover:border-[rgba(0,87,255,0.3)] relative z-10">
        {service.icon}
      </div>

      <h3 className="font-serif text-[1.3rem] font-black tracking-tight mb-3 transition-colors duration-300 group-hover:text-[var(--orange)] relative z-10 text-black">
        {service.title}
      </h3>

      <p className="text-sm font-light text-black/90 leading-relaxed mb-5 relative z-10">
        {service.description}
      </p>

      <Link
        href="#contact"
        className="text-xs font-semibold text-[var(--orange)] tracking-wider transition-all duration-300 group-hover:tracking-widest relative z-10"
      >
        Saiba mais ↗
      </Link>
    </div>
  )
}

export function Services() {
  const headerRef = useReveal()

  return (
    <section
      id="services"
      className="py-[120px] relative overflow-hidden text-white bg-[#185FA5]"
    >
      {/* glow sutil */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] bg-[rgba(0,87,255,0.12)] blur-[120px] rounded-full -top-[150px] right-[10%]" />
        <div className="absolute w-[400px] h-[400px] bg-[rgba(0,87,255,0.06)] blur-[100px] rounded-full bottom-[0px] left-[10%]" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="w-[90%] max-w-[1180px] mx-auto relative z-10">
        <div ref={headerRef} className="reveal mb-14">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-5">
            01 — Produtos
          </div>

          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight text-white mb-6">
            O que a GiroHub
            <br />
            <span className="text-[var(--orange)]">entrega</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-[var(--radius)] overflow-hidden">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}