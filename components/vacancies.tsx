"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Banknote, Briefcase, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

const vacancies = [
  {
    title: "Chinese-English Interpreter",
    company: "Global Trade Solutions",
    location: "Shanghai, China",
    type: "Full-time",
    salary: "$60,000 - $85,000",
    posted: "2 days ago",
    requirements: ["HSK Level 5+", "2+ years experience", "Business background"],
    featured: true
  },
  {
    title: "French-Portuguese Translator",
    company: "EU Commission",
    location: "Brussels, Belgium",
    type: "Contract",
    salary: "€55,000 - €75,000",
    posted: "1 week ago",
    requirements: ["Native French", "DALF C2", "Legal terminology"],
    featured: false
  },
  {
    title: "German Business Consultant",
    company: "Deutsche Investment Group",
    location: "Frankfurt, Germany",
    type: "Full-time",
    salary: "€65,000 - €90,000",
    posted: "3 days ago",
    requirements: ["Fluent German", "MBA preferred", "Finance experience"],
    featured: true
  },
  {
    title: "Mandarin Teacher",
    company: "International School Network",
    location: "London, UK",
    type: "Full-time",
    salary: "£45,000 - £60,000",
    posted: "5 days ago",
    requirements: ["HSK Level 6", "Teaching certification", "Native speaker"],
    featured: false
  }
]

export function Vacancies() {
  return (
    <section id="vacancies" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium tracking-wide uppercase rounded-full mb-6">
              Career Opportunities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
              Exclusive Jobs for Our Alumni
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with leading international companies to bring exclusive high-paying 
              opportunities directly to our graduates. Your language skills are in demand worldwide.
            </p>
          </div>
        </div>

        {/* Vacancies List */}
        <div className="space-y-6">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className={`group p-6 lg:p-8 bg-card rounded-2xl border transition-all duration-500 ${
                vacancy.featured 
                  ? "border-gold/30 shadow-lg hover:shadow-xl" 
                  : "border-border hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              {vacancy.featured && (
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full mb-4">
                  Featured Position
                </span>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-gold/10 rounded-xl hidden sm:flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                      <Briefcase className="h-6 w-6 text-gold group-hover:text-gold-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                        {vacancy.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-gold font-medium">{vacancy.company}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-gold" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-gold" />
                          {vacancy.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Banknote className="h-4 w-4 text-gold" />
                          {vacancy.salary}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {vacancy.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                  <span className="text-sm text-muted-foreground">{vacancy.posted}</span>
                  <Button 
                    asChild 
                    className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-md shadow-gold/10"
                  >
                    <Link href="#contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl border border-border">
          <p className="text-lg text-foreground mb-4 font-medium">
            Want to post a job vacancy or need more information?
          </p>
          <p className="text-muted-foreground mb-6">
            We are always looking for new partnership opportunities with international companies.
          </p>
          <Button 
            variant="outline" 
            asChild 
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 bg-transparent"
          >
            <Link href="#contact">
              Contact Our Career Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
