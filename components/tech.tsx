"use client"

import { useReveal } from "@/hooks/use-reveal"
import {
  FaMicrochip,
  FaRobot,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa"

const techStack = [
  {
    icon: <FaMicrochip className="w-8 h-8 text-blue-600" />,
    name: "Praticidade",
    category: "Resolva tudo online de forma simples e rápida.",
  },
  {
    icon: <FaRobot className="w-8 h-8 text-blue-600" />,
    name: "Especialista",
    category: "Suporte profissional para sua operação.",
  },
  {
    icon: <FaNetworkWired className="w-8 h-8 text-blue-600" />,
    name: "Transparência",
    category: "Acompanhe dados e resultados em tempo real.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
    name: "Segurança",
    category: "Seus dados protegidos com alta confiabilidade.",
  },
]

export function Tech() {
  const headerRef = useReveal()
  const gridRef = useReveal(100)
  const imageRef = useReveal(200)

  return (
    <section
      id="tech"
      className="py-[120px] text-black transition-colors duration-1000"
      style={{ backgroundColor: "var(--bg-2)" }}
    >
      <div className="w-[90%] max-w-[1180px] mx-auto">

        {/* HEADER */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-black mb-5 justify-center">
            03 — Soluções
          </div>

          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight mb-6">
            Mais controle, <em className="italic text-[var(--orange)]">menos esforço</em>
          </h2>

          <p className="text-base font-light text-[var(--muted)] max-w-[500px] leading-relaxed mx-auto">
            Automatize sua rotina contábil com soluções simples e eficientes.
          </p>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGEM */}
          <div ref={imageRef} className="reveal relative flex justify-center">
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden border-4 border-white/20">
              <img
                src="/resultado.jpg" // 🔥 troque pela sua imagem
                alt="Clientes"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CARD SOBREPOSTO */}
            <div className="absolute bottom-0 translate-y-1/2 bg-white text-black rounded-2xl px-5 py-4 shadow-xl w-[260px]">
              <p className="font-semibold text-sm text-[var(--blue)]">
                Clientes satisfeitos
              </p>
            </div>
          </div>

          {/* GRID */}
          <div
            ref={gridRef}
            className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white border border-gray-200 shadow-sm p-7 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                style={{ transitionTimingFunction: "var(--ease)" }}
              >
                <div className="text-[1.8rem] mb-4">
                  {tech.icon}
                </div>

                <div className="font-semibold text-lg mb-2">
                  {tech.name}
                </div>

                <div className="text-sm text-black leading-relaxed">
                  {tech.category}
                </div>

                <div className="mt-5 h-[2px] w-0 bg-[var(--orange)] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}