"use client"

const partners = [
  "Fiscora",
  "Castelobranco",
  "ChinaDireta",
  "Geceti",
  "Metamind",
  "IApessoas",
]

function PartnerItem({ name }: { name: string }) {
  return (
    <span className="partner-item font-serif text-lg font-bold tracking-wide whitespace-nowrap transition-colors duration-300">
      {name}
    </span>
  )
}

export function Partners() {
  return (
    <section
      id="partners"
      className="py-13 border-t border-b border-[var(--line)] overflow-hidden"
    >
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <p className="text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-[var(--muted)] text-center mb-7">
          Empresas que confiam na GiroHub
        </p>
        <div className="overflow-hidden">
          <div
            className="flex gap-16 w-max"
            style={{ animation: "tickerPartners 22s linear infinite" }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <PartnerItem key={i} name={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
