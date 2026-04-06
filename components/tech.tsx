"use client"

import { useReveal } from "@/hooks/use-reveal"

const techStack = [
  { icon: "⚛️", name: "React", category: "Frontend" },
  { icon: "▲", name: "Next.js", category: "Framework" },
  { icon: "🟢", name: "Node.js", category: "Backend" },
  { icon: "🐍", name: "Python", category: "IA / Data" },
  { icon: "☁️", name: "AWS", category: "Cloud" },
  { icon: "🐳", name: "Docker", category: "Container" },
  { icon: "🐘", name: "PostgreSQL", category: "Database" },
  { icon: "🔷", name: "GraphQL", category: "API" },
]

export function Tech() {
  const headerRef = useReveal()
  const gridRef = useReveal(100)

  return (
    <section id="tech" className="py-[120px] text-black transition-colors duration-1000" 
    style={{ backgroundColor: '#7C3AED' }} // cor final clara
    >
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <div ref={headerRef} className="reveal text-center mb-14">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-white mb-5 justify-center">
            03 — Tecnologia
          </div>
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight text-white mb-6">
            Nossa <em className="italic font-bold text-black">stack</em>
          </h2>
          <p className="text-base font-light text-white max-w-[480px] leading-relaxed mx-auto">
            Ferramentas modernas, escolhidas para cada contexto.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 bg-white border border-[var(--line)] rounded-[var(--radius)] overflow-hidden"
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.15)] p-7 px-[22px] relative overflow-hidden transition-all duration-300 hover:bg-[rgba(139,92,246,0.14)] hover:border-[rgba(139,92,246,0.3)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--orange)] after:transition-all after:duration-[450ms] hover:after:w-full"
              style={{ transitionTimingFunction: "var(--ease)" }}
            >
              <div className="text-[1.8rem] leading-none mb-3">{tech.icon}</div>
              <div className="font-semibold text-[0.9rem] mb-1 transition-colors duration-300 group-hover:text-[var(--orange)]">
                {tech.name}
              </div>
              <div className="text-[0.7rem] text-[var(--muted)] tracking-wider uppercase">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
