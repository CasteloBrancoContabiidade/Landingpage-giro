"use client"

import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

export function Contact() {
  const ref = useReveal()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setShowSuccess(true)
    ;(e.target as HTMLFormElement).reset()

    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-[120px] bg-[var(--bg-2)] border-t border-[var(--line)]">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <div
          ref={ref}
          className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-start bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-7 sm:p-10 lg:p-[60px]"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[var(--orange)] mb-5">
              06 — Contato
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-black leading-tight tracking-tight mb-5">
              Vamos construir
              <br />
              <em className="italic text-[var(--orange)]">juntos?</em>
            </h2>
            <p className="text-[0.95rem] font-light text-[var(--muted)] leading-relaxed mb-8">
              Nossa equipe responde em até 24 horas com uma proposta técnica objetiva.
            </p>

            <div className="flex flex-col gap-2.5 mb-7">
              <a
                href="mailto:contato@girohub.com"
                className="text-sm text-[var(--muted)] transition-colors duration-250 hover:text-[var(--orange)]"
              >
                contato@girohub.com
              </a>
              <a
                href="tel:+551140028922"
                className="text-sm text-[var(--muted)] transition-colors duration-250 hover:text-[var(--orange)]"
              >
                +55 (11) 4002-8922
              </a>
              <span className="text-sm text-[var(--muted)]">São Paulo, SP — Brasil</span>
            </div>

            <div className="flex gap-2.5">
              {["in", "⌥", "◉"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-[var(--line)] rounded-full flex items-center justify-center text-xs text-[var(--muted)] transition-all duration-300 hover:border-[var(--orange)] hover:text-white hover:bg-[var(--orange)] hover:-translate-y-0.5"
                  aria-label={["LinkedIn", "GitHub", "Instagram"][i]}
                  style={{ transitionTimingFunction: "var(--ease)" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor="name"
                  className="text-[0.78rem] font-semibold tracking-wider uppercase text-[var(--muted)]"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome"
                  required
                  className="px-4 py-3.5 bg-[var(--bg)] border-[1.5px] border-[var(--line)] rounded-[10px] text-[0.9rem] text-[var(--ink)] transition-all duration-300 outline-none placeholder:text-[var(--muted)] focus:border-[var(--orange)] focus:bg-[var(--surface)]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <label
                  htmlFor="company"
                  className="text-[0.78rem] font-semibold tracking-wider uppercase text-[var(--muted)]"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Sua empresa"
                  className="px-4 py-3.5 bg-[var(--bg)] border-[1.5px] border-[var(--line)] rounded-[10px] text-[0.9rem] text-[var(--ink)] transition-all duration-300 outline-none placeholder:text-[var(--muted)] focus:border-[var(--orange)] focus:bg-[var(--surface)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="email"
                className="text-[0.78rem] font-semibold tracking-wider uppercase text-[var(--muted)]"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                required
                className="px-4 py-3.5 bg-[var(--bg)] border-[1.5px] border-[var(--line)] rounded-[10px] text-[0.9rem] text-[var(--ink)] transition-all duration-300 outline-none placeholder:text-[var(--muted)] focus:border-[var(--orange)] focus:bg-[var(--surface)]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <label
                htmlFor="message"
                className="text-[0.78rem] font-semibold tracking-wider uppercase text-[var(--muted)]"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Conte sobre seu projeto..."
                required
                className="px-4 py-3.5 bg-[var(--bg)] border-[1.5px] border-[var(--line)] rounded-[10px] text-[0.9rem] text-[var(--ink)] transition-all duration-300 outline-none resize-none placeholder:text-[var(--muted)] focus:border-[var(--orange)] focus:bg-[var(--surface)]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group self-start inline-flex items-center gap-2 px-[30px] py-3.5 bg-[var(--orange)] text-white rounded-full font-semibold text-sm tracking-wide border-2 border-[var(--orange)] transition-all duration-300 hover:bg-[#0046cc] hover:border-[#0046cc] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,87,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando…" : "Enviar mensagem"}{" "}
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] border-[1.5px] border-current rounded-full text-[0.6rem] transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </button>
            {showSuccess && (
              <div className="px-[18px] py-3 bg-[rgba(0,87,255,0.08)] border border-[rgba(0,87,255,0.25)] rounded-[10px] text-sm font-medium text-[var(--orange)]">
                ✓ Mensagem enviada! Retornamos em até 24h.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
