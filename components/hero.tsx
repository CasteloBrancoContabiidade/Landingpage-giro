import React from "react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bussiness.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay escuro */}
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full px-5 flex flex-col items-center text-center max-w-[600px]">
        {/* Chamada pequena */}
        <div className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-gray-400 mb-4">
          <span className="w-8 h-[1px] bg-white shrink-0" />
          MAIS CONTROLE. MENOS ERRO.
        </div>

        {/* Título principal compacto */}
        <h1 className="font-serif text-[clamp(4rem,8vw,6rem)] font-black leading-[1.05] mb-4">
  <span className="text-white">Menos custo.</span>{" "}
  <span className="text-[var(--orange)]">Mais lucro.</span>
</h1> 

        {/* Descrição */}
        <p className="text-[clamp(0.95rem,1.2vw,1rem)] font-light text-gray-300 mb-6">
          Automatize processos contábeis, reduza erros e ganhe escala sem aumentar sua equipe.
        </p>

        {/* Botões */}
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--orange)] text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,87,255,0.4)]"
          >
            Quero automatizar
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-white rounded-full font-medium text-sm border border-white/20 transition-all duration-300 hover:bg-white/5"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}