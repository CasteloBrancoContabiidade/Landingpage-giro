"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from 'next/image';
import logo from '@/public/logo.png';

const navLinks = [
  { href: "#services", label: "Produtos" },
  { href: "#about", label: "Sobre" },
  { href: "#tech", label: "Tecnologia" },
  { href: "#cases", label: "Cases" },
  { href: "#contact", label: "Contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = document.querySelectorAll("section[id]")
      const scrollY = window.scrollY + 120

      sections.forEach((section) => {
        const el = section as HTMLElement
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection("#" + section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[var(--nav-h)] z-[500] border-b border-white/10 backdrop-blur-md bg-white/10 transition-colors duration-300 ${
          isScrolled ? "bg-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : ""
        }`}
      >
        <div className="w-[90%] max-w-[1180px] mx-auto h-[var(--nav-h)] flex items-center justify-between">
          
          <Image
            src={logo}
            alt="GiroHub"
            width={150}
            height={70}
            priority
            className="-translate-x-40"
          />

          <ul className="hidden md:flex gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--orange)] after:transition-all after:duration-350 hover:text-white hover:after:w-full ${
                    activeSection === link.href
                      ? "text-[var(--orange)]"
                      : "text-white/70"
                  }`}
                  style={{ transitionTimingFunction: "var(--ease)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden md:block px-[22px] py-[9px] border border-white/20 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--orange)] hover:border-[var(--orange)] hover:text-white"
          >
            Fale conosco
          </Link>

          <button
            className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-white rounded-sm transition-transform duration-400 ${
                isMobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
              style={{ transitionTimingFunction: "var(--ease)" }}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-white rounded-sm transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[1.5px] bg-white rounded-sm transition-transform duration-400 ${
                isMobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
              style={{ transitionTimingFunction: "var(--ease)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#0B1220] z-[490] flex items-center transition-all duration-600 ${
          isMobileMenuOpen
            ? "[clip-path:inset(0_0_0%_0)]"
            : "[clip-path:inset(0_0_100%_0)]"
        }`}
        style={{ transitionTimingFunction: "var(--ease)" }}
      >
        <nav className="p-[10%] flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="font-serif text-[clamp(2.4rem,8vw,4rem)] font-black leading-tight text-white/80 tracking-tight transition-colors duration-200 hover:text-[var(--orange)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}