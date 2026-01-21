"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services & Courses" },
  { href: "#team", label: "Our Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#vacancies", label: "Vacancies" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1a1a2e]/98 backdrop-blur-md border-b border-[#1a1a2e]/20 shadow-lg"
          : "bg-[#1a1a2e]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-gold/10 transition-colors duration-300">
              <img
                src="/favicon.ico"
                alt="Zimgro logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-white transition-colors duration-300">
                Zimgro
              </span>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 transition-colors duration-300">
                Consultancy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="h-11 px-6 bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300 shadow-md shadow-gold/20"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-300 text-white/70 hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button
                  className="w-full h-12 bg-gold text-gold-foreground hover:bg-gold/90"
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
