"use client"

import { useState } from "react"
import { CheckCircle, GraduationCap, Briefcase, Heart, Plane, Award, Globe2, BookOpen, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const languages = [
  {
    name: "Chinese (Mandarin)",
    flag: "🇨🇳",
    features: ["HSK Levels 1-6", "Business Chinese", "Interpretation", "Cultural Training"]
  },
  {
    name: "Chinese (Mandarin)",
    flag: "🇨🇳",
    features: ["HSK Levels 1-6", "Business Chinese", "Interpretation", "Cultural Training"]
  },
  {
     name: "Chinese (Mandarin)",
    flag: "🇨🇳",
    features: ["HSK Levels 1-6", "Business Chinese", "Interpretation", "Cultural Training"]
  },
  {
     name: "Chinese (Mandarin)",
    flag: "🇨🇳",
    features: ["HSK Levels 1-6", "Business Chinese", "Interpretation", "Cultural Training"]
  }
]

const advantages = [
  {
    icon: GraduationCap,
    title: "International Scholarships",
    description: "Access prestigious scholarships at top universities in China, France, Germany, and Portugal."
  },
  {
    icon: Briefcase,
    title: "High-Salary Opportunities",
    description: "Multilingual professionals earn 15-30% more. Interpreters and translators are in high demand."
  },
  {
    icon: Heart,
    title: "Cross-Cultural Relationships",
    description: "Language opens doors to meaningful connections and multicultural families worldwide."
  },
  {
    icon: TrendingUp,
    title: "Business Advantages",
    description: "Negotiate directly with international partners and expand into new markets."
  },
  {
    icon: Plane,
    title: "Travel & Adventure",
    description: "Navigate foreign countries with confidence and connect authentically with locals."
  },
  {
    icon: Award,
    title: "Career Advancement",
    description: "Stand out in competitive job markets with in-demand language skills."
  }
]

const hskLevels = [
  { level: 1, skills: "Basic phrases, simple conversations", duration: "3 months" },
  { level: 2, skills: "Daily expressions, simple tasks", duration: "3 months" },
  { level: 3, skills: "General topics, travel communication", duration: "4 months" },
  { level: 4, skills: "Abstract topics, fluent discussion", duration: "5 months" },
  { level: 5, skills: "News, professional communication", duration: "5 months" },
  { level: 6, skills: "Native-level comprehension", duration: "5 months" }
]

export function Services() {
  const [activeTab, setActiveTab] = useState<"languages" | "advantages" | "hsk">("languages")

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium tracking-wide uppercase rounded-full mb-6">
            Services & Courses
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
            Unlock Your Global Potential
          </h2>
          <p className="text-lg text-muted-foreground">
            Master the languages of international business and open doors to limitless opportunities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { id: "languages", label: "Our Languages", icon: Globe2 },
            { id: "advantages", label: "Why Learn Languages", icon: TrendingUp },
            { id: "hsk", label: "HSK Levels", icon: BookOpen }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-gold/30"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Languages Tab */}
        {activeTab === "languages" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-gold/30 transition-all duration-500"
              >
                <div className="p-8 bg-foreground text-card text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-5xl mb-3 block relative">{language.flag}</span>
                  <h3 className="text-xl font-serif font-semibold relative">{language.name}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {language.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Advantages Tab */}
        {activeTab === "advantages" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                  <advantage.icon className="h-7 w-7 text-gold group-hover:text-gold-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* HSK Levels Tab */}
        {activeTab === "hsk" && (
          <div>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-medium rounded-full mb-4">
                Official Chinese Proficiency Certification
              </span>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The HSK is the standardized Chinese proficiency test recognized worldwide. 
                Our structured courses take you from complete beginner to native-level mastery.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hskLevels.map((hsk, index) => (
                <div
                  key={hsk.level}
                  className="group relative p-8 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  {/* Level Badge */}
                  <div className={`absolute top-0 right-0 px-5 py-2 rounded-bl-2xl font-bold text-sm ${
                    index < 2 ? "bg-accent text-accent-foreground" : 
                    index < 4 ? "bg-gold text-gold-foreground" : 
                    "bg-primary text-primary-foreground"
                  }`}>
                    HSK {hsk.level}
                  </div>
                  
                  <div className="pt-6">
                    <p className="text-4xl font-serif font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                      Level {hsk.level}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{hsk.skills}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="text-sm font-semibold text-gold">{hsk.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            asChild 
            className="h-14 px-8 text-base bg-gold text-gold-foreground hover:bg-gold/90 shadow-lg shadow-gold/20"
          >
            <Link href="#contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
