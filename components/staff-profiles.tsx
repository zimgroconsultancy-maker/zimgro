"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  GraduationCap, 
  Award, 
  Languages, 
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  Star,
  Quote,
  Users,
  Trophy
} from "lucide-react"
import { Button } from "@/components/ui/button"

const staffMembers = [
  {
    id: 1,
    name: "Dr. Chen Wei",
    role: "Director & Senior Chinese Instructor",
    image: "/placeholder.svg?height=400&width=400",
    qualifications: [
      "Ph.D. in Chinese Linguistics - Beijing University",
      "HSK Senior Examiner Certification",
      "15+ Years Teaching Experience"
    ],
    languages: ["Mandarin", "English", "Cantonese"],
    specialization: "HSK Exam Preparation & Business Chinese"
  },
  {
    id: 2,
    name: "Marie Dubois",
    role: "Head of French Language Department",
    image: "/placeholder.svg?height=400&width=400",
    qualifications: [
      "M.A. in French Literature - Sorbonne University",
      "DELF/DALF Certified Examiner",
      "Alliance Française Certified Instructor"
    ],
    languages: ["French", "English", "Portuguese"],
    specialization: "French for Business & Diplomacy"
  },
  {
    id: 3,
    name: "João Silva",
    role: "Portuguese Language Specialist",
    image: "/placeholder.svg?height=400&width=400",
    qualifications: [
      "M.A. in Applied Linguistics - University of Lisbon",
      "CAPLE Examiner Certification",
      "10+ Years Corporate Training"
    ],
    languages: ["Portuguese", "English", "Spanish"],
    specialization: "Brazilian & European Portuguese"
  },
  {
    id: 4,
    name: "Dr. Hans Mueller",
    role: "German Language Director",
    image: "/placeholder.svg?height=400&width=400",
    qualifications: [
      "Ph.D. in Germanic Studies - University of Munich",
      "Goethe-Institut Certified Instructor",
      "TestDaF Examiner"
    ],
    languages: ["German", "English", "Dutch"],
    specialization: "Technical German & Academic Preparation"
  },
  {
    id: 5,
    name: "Li Mei Ling",
    role: "Cultural Programs Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    qualifications: [
      "B.A. in International Relations - Peking University",
      "Certified Cross-Cultural Trainer",
      "Travel & Tourism Management Diploma"
    ],
    languages: ["Mandarin", "English", "Japanese"],
    specialization: "Cultural Exchange & Travel Programs"
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    role: "Career Placement Manager",
    image: "/placeholder.svg?height=400&width=400",
    qualifications: [
      "MBA in Human Resources - University of Cape Town",
      "Certified Career Counselor",
      "Corporate Partnership Specialist"
    ],
    languages: ["English", "Arabic", "French"],
    specialization: "Alumni Career Services & Corporate Relations"
  }
]

const successStories = [
  {
    name: "Maria Santos",
    role: "Chinese Interpreter at UNESCO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    story: "Zimgro helped me achieve HSK Level 6 in just 18 months. Now I work as an official interpreter at UNESCO, earning more than I ever imagined.",
    achievement: "HSK Level 6 - 98%",
    salary: "€85,000/year"
  },
  {
    name: "Jean-Pierre Dubois",
    role: "Business Consultant at Huawei",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    story: "The business Chinese course gave me the edge I needed. I now lead Huawei's French market expansion team.",
    achievement: "HSK Level 5 - 95%",
    salary: "€95,000/year"
  },
  {
    name: "Ana Ferreira",
    role: "Senior Translator at EU Parliament",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    story: "Learning Portuguese and French at Zimgro opened doors I never knew existed. The career placement program connected me with my dream job.",
    achievement: "DALF C2 - Distinction",
    salary: "€78,000/year"
  },
  {
    name: "Michael Weber",
    role: "International Trade Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    story: "The German and Chinese dual program was intense but worth every hour. I now manage trade relations between Germany and China.",
    achievement: "HSK Level 5 & Goethe C1",
    salary: "€110,000/year"
  }
]

const stats = [
  { value: "95%", label: "Pass Rate" },
  { value: "500+", label: "Graduates" },
  { value: "87%", label: "Job Placement" },
  { value: "€65K", label: "Average Salary" }
]

export function StaffProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeView, setActiveView] = useState<"staff" | "success">("staff")

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 3 >= staffMembers.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, staffMembers.length - 3) : prev - 1
    )
  }

  return (
    <section id="team" className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium tracking-wide uppercase rounded-full mb-6">
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-card mb-6 text-balance leading-tight">
            Meet the People Behind Your Success
          </h2>
          <p className="text-lg text-card/60 max-w-2xl mx-auto">
            Our qualified instructors and successful alumni showcase what&apos;s possible with dedication
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveView("staff")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeView === "staff"
                ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20"
                : "bg-card/5 text-card/70 hover:text-card border border-card/10 hover:border-gold/30"
            }`}
          >
            <Users className="h-4 w-4" />
            Expert Staff
          </button>
          <button
            onClick={() => setActiveView("success")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeView === "success"
                ? "bg-gold text-gold-foreground shadow-lg shadow-gold/20"
                : "bg-card/5 text-card/70 hover:text-card border border-card/10 hover:border-gold/30"
            }`}
          >
            <Trophy className="h-4 w-4" />
            Success Stories
          </button>
        </div>

        {/* Staff View */}
        {activeView === "staff" && (
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Staff Cards */}
            <div className="overflow-hidden px-2">
              <div 
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {staffMembers.map((staff) => (
                  <div 
                    key={staff.id} 
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                  >
                    <div className="bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl overflow-hidden h-full group hover:border-gold/30 hover:bg-card/10 transition-all duration-500">
                      <div className="relative">
                        <Image
                          src={staff.image || "/placeholder.svg"}
                          alt={staff.name}
                          width={400}
                          height={400}
                          className="w-full aspect-square object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gold" />
                        
                        <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                          <Button size="icon" className="rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-gold-foreground border-0">
                            <Linkedin className="h-5 w-5" />
                          </Button>
                          <Button size="icon" className="rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-gold-foreground border-0">
                            <Mail className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-card mb-1">
                          {staff.name}
                        </h3>
                        <p className="text-gold font-medium text-sm mb-5">
                          {staff.role}
                        </p>
                        
                        <div className="mb-5">
                          <div className="flex items-center gap-2 text-card/50 mb-3">
                            <GraduationCap className="h-4 w-4 text-gold" />
                            <span className="text-xs font-medium uppercase tracking-wider">Qualifications</span>
                          </div>
                          <ul className="space-y-2">
                            {staff.qualifications.map((qual, idx) => (
                              <li key={idx} className="text-sm text-card/70 flex items-start gap-2">
                                <Award className="h-3 w-3 text-gold mt-1.5 flex-shrink-0" />
                                {qual}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-5">
                          <div className="flex items-center gap-2 text-card/50 mb-3">
                            <Languages className="h-4 w-4 text-gold" />
                            <span className="text-xs font-medium uppercase tracking-wider">Languages</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {staff.languages.map((lang) => (
                              <span 
                                key={lang} 
                                className="px-3 py-1 bg-card/10 text-card/80 text-xs rounded-full"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-card/50 mb-3">
                            <BookOpen className="h-4 w-4 text-gold" />
                            <span className="text-xs font-medium uppercase tracking-wider">Specialization</span>
                          </div>
                          <p className="text-sm text-card/70">{staff.specialization}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gold text-gold-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gold text-gold-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(staffMembers.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * 3)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === idx 
                      ? 'bg-gold w-8' 
                      : 'bg-card/30 hover:bg-card/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Success Stories View */}
        {activeView === "success" && (
          <div>
            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-8 bg-card/5 rounded-2xl border border-card/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl lg:text-5xl font-serif font-bold text-gold mb-2">{stat.value}</p>
                  <p className="text-sm text-card/50">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Stories Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="group p-8 bg-card/5 rounded-2xl border border-card/10 hover:border-gold/30 hover:bg-card/10 transition-all duration-500"
                >
                  <Quote className="h-10 w-10 text-gold/30 mb-6" />
                  <p className="text-card/80 mb-8 italic leading-relaxed text-lg">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                    />
                    <div>
                      <p className="font-semibold text-card text-lg">{story.name}</p>
                      <p className="text-sm text-card/50">{story.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-card/10">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-card/40">{story.achievement}</p>
                      <p className="text-lg font-semibold text-gold">{story.salary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 lg:p-10 bg-gold rounded-2xl">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-gold-foreground mb-2">15+</div>
            <div className="text-sm text-gold-foreground/70">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-gold-foreground mb-2">8</div>
            <div className="text-sm text-gold-foreground/70">PhD Holders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-gold-foreground mb-2">50+</div>
            <div className="text-sm text-gold-foreground/70">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif font-bold text-gold-foreground mb-2">12</div>
            <div className="text-sm text-gold-foreground/70">Languages Spoken</div>
          </div>
        </div>
      </div>
    </section>
  )
}
