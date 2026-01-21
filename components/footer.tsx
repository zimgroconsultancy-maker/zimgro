"use client"

import Link from "next/link"
import { Globe, Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle, ArrowUp } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Language Courses", href: "#services" },
    { label: "HSK Certification", href: "#services" },
    { label: "Translation Services", href: "#services" },
    { label: "Travel & Tours", href: "#about" }
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ],
  careers: [
    { label: "Job Vacancies", href: "#vacancies" },
    { label: "Alumni Network", href: "#team" },
    { label: "Partner Companies", href: "#vacancies" },
    { label: "Career Guidance", href: "#contact" }
  ],
  languages: [
    { label: "Chinese", href: "#services" },
    { label: "Chinese", href: "#services" },
    { label: "Chinese", href: "#services" },
    { label: "Chinese", href: "#services" },

  ]
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/zimgro", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/zimgro", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/zimgro", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/zimgro", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/zimgro", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/263123456789", label: "WhatsApp" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-card relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 bg-gold text-gold-foreground rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-gold/10 rounded-xl">
                <Globe className="h-7 w-7 text-gold" />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-card">Zimgro</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-card/50">Consultancy</p>
              </div>
            </Link>
            <p className="text-card/60 text-sm leading-relaxed mb-6 max-w-xs">
              Connecting cultures through language education, travel experiences, 
              and international career opportunities since 2015.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-card/5 rounded-lg text-card/60 hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-card">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-card/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-card">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-card/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-5 text-card">Careers</h4>
            <ul className="space-y-3">
              {footerLinks.careers.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-card/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold mb-5 text-card">Languages</h4>
            <ul className="space-y-3">
              {footerLinks.languages.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-card/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-card/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-card/40">
            © {new Date().getFullYear()} Zimgro Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-card/40">
            <Link href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
