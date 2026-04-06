"use client"

import { useReveal } from "@/hooks/use-reveal"

const testimonials = [
  {
    quote:
      "A GiroHub entregou nosso sistema de crédito em 4 meses. Código limpo, equipe proativa e resultado acima do esperado. São parceiros de verdade.",
    author: "Ricardo Fonseca",
    role: "CTO · Meridian Bank",
    initials: "RF",
  },
  {
    quote:
      "Migramos para cloud com zero downtime. A infra ficou 38% mais barata e o time continua evoluindo o produto conosco. Não imagino sem eles.",
    author: "Carla Lima",
    role: "Head de Tech · UrbanFleet",
    initials: "CL",
  },
  {
    quote:
      "Da ideia ao app publicado em 3 meses. 480 mil downloads depois, posso dizer: GiroHub é a melhor decisão técnica que tomamos como startup.",
    author: "Marcos Vieira",
    role: "CEO · VidaConnect",
    initials: "MV",
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const ref = useReveal(index * 80)

  return (
    <div
      ref={ref}
      className="reveal p-8 border border-[var(--line)] rounded-[var(--radius)] bg-[var(--orange)] flex flex-col gap-5 transition-all duration-350 hover:border-[rgba(0,87,255,0.25)] hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      <div className="text-[var(--orange)] text-sm tracking-[3px]">★★★★★</div>
      <p className="text-[0.92rem] font-light italic text-white leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--orange)] to-[rgba(0,87,255,0.4)] flex items-center justify-center font-bold text-sm text-white shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <strong className="block text-sm font-semibold">{testimonial.author}</strong>
          <span className="text-[0.75rem] text-[var(--muted)]">{testimonial.role}</span>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const headerRef = useReveal()

  return (
    <section id="testimonials" className="py-[120px] bg-black">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <div ref={headerRef} className="reveal text-center mb-14">
          <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[var(--orange)] mb-5 justify-center">
            05 — Depoimentos
          </div>
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-black leading-none tracking-tight text-white mb-6">
            O que dizem <em className="italic font-bold text-[var(--orange)]">sobre nós</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
