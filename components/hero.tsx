"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Globe2, ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-gradient-to-br
                 from-[#2a1a12]
                 via-[#3b2418]
                 to-[#1e120c]"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#c9a27e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#8b5e3c]/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-8">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-sm font-medium tracking-wide">
            Connecting Cultures Through Language
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8 text-white">
          Bridge the Gap
          <br />
          <span className="text-gold">Between Worlds</span>
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
          With the rise of Chinese and foreign investors around the world, skilled
          language interpreters are in high demand. Zimgro Consultancy opens doors
          to exceptional career opportunities in Chinese, French, Portuguese, and German.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          {/* Explore Services Button */}
          <Button
            size="lg"
            className="h-14 px-8 text-base bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
            asChild
          >
            <Link href="#services">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Get in Touch Button (now gold) */}
          <Button
            size="lg"
            className="h-14 px-8 text-base bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
            onClick={scrollToContact}
          >
            Get in Touch
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors duration-300">
                <Users className="h-5 w-5 text-gold" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-gold">500+</p>
            </div>
            <p className="text-sm text-white/50 pl-12">Students Trained</p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors duration-300">
                <Award className="h-5 w-5 text-gold" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-gold">95%</p>
            </div>
            <p className="text-sm text-white/50 pl-12">Pass Rate</p>
          </div>
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors duration-300">
                <Globe2 className="h-5 w-5 text-gold" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-gold">4</p>
            </div>
            <p className="text-sm text-white/50 pl-12">Languages</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-gold">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
