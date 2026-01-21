"use client"

import { Languages, Plane, UtensilsCrossed, GraduationCap, Building2, Handshake } from "lucide-react"

const disciplines = [
  {
    icon: Languages,
    title: "Language Centre",
    description: "Professional language training in Chinese, French, Portuguese, and German with certified instructors.",
    number: "01"
  },
  {
    icon: Plane,
    title: "Travel & Tours",
    description: "Curated travel experiences to China and beyond, combining cultural immersion with language practice.",
    number: "02"
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Authentic dining experiences that bring international cuisines and cultures closer to you.",
    number: "03"
  },
  {
    icon: GraduationCap,
    title: "HSK Courses",
    description: "Comprehensive HSK preparation from Level 1 to 6, designed for official Chinese proficiency certification.",
    number: "04"
  },
  {
    icon: Building2,
    title: "Business Services",
    description: "Professional interpretation and translation services for international business communications.",
    number: "05"
  },
  {
    icon: Handshake,
    title: "Career Placement",
    description: "Dedicated job placement services connecting our alumni with high-paying interpreter positions.",
    number: "06"
  }
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium tracking-wide uppercase rounded-full mb-6">
              About Zimgro
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
              A Multifaceted Approach to Success
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zimgro Consultancy is your gateway to international opportunities. We combine 
              language education, cultural experiences, and career services to prepare you for 
              success in the global marketplace. Our comprehensive approach ensures you gain 
              not just language skills, but real-world competencies.
            </p>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {disciplines.map((discipline, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-serif font-bold text-muted/30 group-hover:text-gold/20 transition-colors duration-500">
                {discipline.number}
              </span>
              
              {/* Icon */}
              <div className="relative p-4 bg-gold/10 rounded-xl w-fit mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                <discipline.icon className="h-6 w-6 text-gold group-hover:text-gold-foreground transition-colors duration-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {discipline.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {discipline.description}
              </p>
              
              {/* Hover Line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
