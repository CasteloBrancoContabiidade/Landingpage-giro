import Link from "next/link"
import logo from '@/public/logo.png';
import Image from 'next/image';

const footerLinks = {
  produtos: [
    { label: "Plataformas SaaS", href: "#services" },
    { label: "Automação com IA", href: "#services" },
    { label: "Apps Mobile", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
  ],
  empresa: [
    { label: "Sobre", href: "#about" },
    { label: "Cases", href: "#cases" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Carreiras", href: "#" },
  ],
  contato: [
    { label: "contato@girohub.com", href: "mailto:contato@girohub.com" },
    { label: "+55 (11) 4002-8922", href: "tel:+551140028922" },
    { label: "Seg–Sex, 9h–18h", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="footer"
  className="pt-16 border-t border-[var(--line)] bg-black text-white">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[60px] mb-14">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="#hero"
              className="font-serif text-[1.3rem] font-black tracking-tight text-[var(--ink)] mb-3.5 block"
            >
              <Image
            src={logo}
            alt="GiroHub"
            width={150}
            height={70}
            className="-translate-x-2"
            priority
          />
            </Link>
            <p className="text-sm font-light text-white leading-relaxed">
              Tecnologia que move negócios. Feira de Santana, Brasil.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h5 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white mb-5">
              Produtos
            </h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-sm font-light text-white transition-colors duration-250 hover:text-[var(--orange)] flex items-center gap-1.5"
                  >
                    <span className="opacity-0 -translate-x-1.5 transition-all duration-300 text-[0.7rem] group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h5 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white mb-5">
              Empresa
            </h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-sm font-light text-white transition-colors duration-250 hover:text-[var(--orange)] flex items-center gap-1.5"
                  >
                    <span className="opacity-0 -translate-x-1.5 transition-all duration-300 text-[0.7rem] group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h5 className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-white mb-5">
              Contato
            </h5>
            <ul className="flex flex-col gap-3">
              {footerLinks.contato.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group text-sm font-light text-white transition-colors duration-250 hover:text-[var(--orange)] flex items-center gap-1.5"
                  >
                    <span className="opacity-0 -translate-x-1.5 transition-all duration-300 text-[0.7rem] group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between py-6 border-t border-[var(--line)] flex-wrap gap-3">
          <p className="text-xs text-white">© 2025 GiroHub. Todos os direitos reservados.</p>
          <span className="text-xs text-white">
            Feito com 🧡 em Feira de Santana
          </span>
        </div>
      </div>
    </footer>
  )
}
