"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"

const cases = [
  {
    icon: "🏦",
    tags: ["Fintech", "SaaS", "React"],
    title: "Plataforma de Crédito B2B",
    description: "Dashboard para análise de risco e concessão de crédito com +R$1,8B em operações processadas mensalmente.",
    metrics: [
      { value: "3×", label: "Velocidade de análise" },
      { value: "40%", label: "Redução de inadimplência" },
    ],
    featured: true,
    gradient: "from-[#0a1628] to-[#1a2840]",
  },
  {
    icon: "🏥",
    tags: ["Healthtech", "Mobile"],
    title: "App de Telemedicina",
    description: "480 mil pacientes ativos. Triagem com IA integrada.",
    featured: false,
    gradient: "from-[#100a20] to-[#201030]",
  },
  {
    icon: "🚚",
    tags: ["Logística", "Enterprise"],
    title: "Sistema de Rastreamento",
    description: "7.200 veículos. Custo operacional -31%.",
    featured: false,
    gradient: "from-[#071018] to-[#0e1c28]",
  },
]

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  const ref = useReveal(index * 80)

  return (
    <article
      ref={ref}
      className={`reveal group border border-[var(--line)] rounded-[var(--radius)] overflow-hidden bg-[var(--surface)] flex flex-col transition-all duration-400 hover:border-[rgba(0,87,255,0.35)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${
        caseItem.featured ? "lg:row-span-2" : ""
      }`}
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br ${caseItem.gradient}`}>
        <div
          className={`flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${
            caseItem.featured ? "min-h-[280px] text-[5rem]" : "min-h-[200px] text-[4rem]"
          }`}
          style={{ transitionTimingFunction: "var(--ease)" }}
        >
          {caseItem.icon}
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href="#contact"
            className="px-[22px] py-2.5 bg-[var(--orange)] text-white rounded-full font-semibold text-xs"
          >
            {caseItem.featured ? "Ver case completo ↗" : "Ver case ↗"}
          </Link>
        </div>
      </div>
      <div className="p-6 px-7 flex-1">
        <div className="flex gap-2 flex-wrap mb-3">
          {caseItem.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-[3px] border border-[var(--line)] rounded-full text-[0.68rem] tracking-wider uppercase text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-[clamp(1.3rem,2vw,1.8rem)] font-black tracking-tight mb-2.5">
          {caseItem.title}
        </h3>
        <p className="text-sm font-light text-[var(--muted)] leading-relaxed mb-5">
          {caseItem.description}
        </p>
        {caseItem.metrics && (
          <div className="flex gap-7 pt-4 border-t border-[var(--line)]">
            {caseItem.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-[3px]">
                <strong className="font-serif text-[1.6rem] font-black text-[var(--orange)] leading-none">
                  {metric.value}
                </strong>
                <span className="text-[0.75rem] text-[var(--muted)]">{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export function Cases() {
  const headerRef = useReveal()

  return (
    <section id="cases" className="py-[120px] bg-black border-t border-[var(--line)]">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <div ref={headerRef} className="reveal mb-14">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[var(--orange)] mb-5">
            04 — Cases
          </div>
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight text-white mb-6">
            Resultados <em className="italic font-bold text-[var(--orange)]">reais</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] lg:grid-rows-2 gap-4">
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.title} caseItem={caseItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
