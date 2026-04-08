"use client"

import Link from "next/link"
import { useReveal } from "@/hooks/use-reveal"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: 130, suffix: "+", label: "Projetos entregues" },
  { value: 97, suffix: "%", label: "Clientes satisfeitos" },
  { value: 38, suffix: "", label: "Especialistas" },
  { value: 7, suffix: " anos", label: "No mercado" },
]

const features = [
  {
    title: "Metodologia ágil real",
    description: "Sprints quinzenais, demo ao cliente, entrega incremental.",
  },
  {
    title: "Código que você possui",
    description: "Sem lock-in. Repositório, documentação e acesso total são seus.",
  },
  {
    title: "Suporte pós-lançamento",
    description: "Monitoramento 24/7 e evolução contínua do produto.",
  },
]

export function About() {
  const leftRef = useReveal()
  const rightRef = useReveal(100)

  return (
    <section
      id="about"
      className="py-[120px] bg-[var(--bg-2)] border-t border-b border-[var(--line)]"
    >
      <div className="w-[90%] max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div ref={leftRef} className="reveal">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[var(--orange)] mb-5">
            02 — Sobre
          </div>
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight text-[var(--ink)] mb-6">
            Engenharia com
            <br />
            <em className="italic font-bold text-[var(--orange)]">propósito</em>
          </h2>
          <p className="text-[0.95rem] font-light text-[var(--muted)] leading-relaxed mb-5">
            A GiroHub transforma ideias complexas em produtos digitais que funcionam de verdade. Somos 38 engenheiros, designers e estrategistas unidos por uma missão: fazer tecnologia que as pessoas usam com prazer.
          </p>
          <p className="text-[0.95rem] font-light text-[var(--muted)] leading-relaxed mb-5">
            Não somos uma fábrica de software. Somos o parceiro técnico que seu negócio precisa para crescer sem travar.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-[30px] py-3.5 bg-[var(--orange)] text-white rounded-full font-semibold text-sm tracking-wide border-2 border-[var(--orange)] transition-all duration-300 hover:bg-[#0046cc] hover:border-[#0046cc] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,87,255,0.3)]"
          >
            Conheça o time
          </Link>
        </div>

        {/* Right */}
        <div ref={rightRef} className="reveal">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-0.5 bg-[var(--line)] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden mb-7">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--surface)] p-7 px-6 transition-colors duration-300 hover:bg-[var(--bg)]"
              >
                <div className="font-serif text-[3rem] font-black tracking-tight text-[var(--orange)] leading-none mb-1.5">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[0.78rem] text-[var(--muted)] tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="flex items-start gap-3.5 p-4 border border-[var(--line)] rounded-[10px] bg-[var(--surface)] transition-all duration-300 hover:border-[rgba(0,87,255,0.3)] hover:bg-[var(--bg)]"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--orange)] shrink-0 mt-1.5" />
                <div>
                  <strong className="block text-[0.9rem] font-semibold mb-[3px]">
                    {feat.title}
                  </strong>
                  <span className="text-[0.82rem] text-[var(--muted)]">
                    {feat.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
