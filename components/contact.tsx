"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Send,
  CheckCircle,
  MessageCircle,
  Globe
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "ZIMGRO Language Consultancy",
      "4th Floor, Globe House",
      "Corner J. Moyo Street & Angwa Street",
      "Harare, Zimbabwe"
    ]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+263 78 640 9822",
      "+263 77 333 1861",
      "+263 77 943 7116",
      "+263 987 654 321"
    ]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["zimgroconsultancy@gmail.com"]
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Fri: 8:00 AM - 7:30 PM", "Saturday: 8:00 AM - 1:00 PM"]
  }
]

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/zimgroconsultancy/",
    label: "Facebook",
    color: "hover:bg-blue-600"
  },
  // {icon: Instagram, href: "https://instagram.com/zimgro", label: "Instagram", color: "hover:bg-pink-600"},
  { icon: Globe, href: "https://zimgroconsultancy.com", label: "Website", color: "hover:bg-gray-800" },
  { icon: Twitter, href: "https://x.com/zimgro_official", label: "Twitter", color: "hover:bg-sky-500" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@zimgroconsultancy_official",
    label: "YouTube",
    color: "hover:bg-red-600"
  },
  { icon: MessageCircle, href: "https://wa.me/786409822", label: "WhatsApp", color: "hover:bg-green-500" }
]

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mykkloda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" })
      } else {
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium tracking-wide uppercase rounded-full mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your career? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">Send us a message</h3>
              <p className="text-muted-foreground mb-8">Fill in your details and we will contact you shortly.</p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="New Contact Form Submission from ZIMGRO" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="h-12 bg-background border-border/60 focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="h-12 bg-background border-border/60 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 bg-background border-border/60 focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input
                        id="phone"
                        placeholder="+263 XXX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 bg-background border-border/60 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interested In</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full h-12 px-4 bg-background border border-border/60 rounded-lg text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="chinese">Chinese Language Course</option>
                      <option value="french">French Language Course</option>
                      <option value="portuguese">Portuguese Language Course</option>
                      <option value="german">German Language Course</option>
                      <option value="hsk">HSK Certification</option>
                      <option value="translation">Translation Services</option>
                      <option value="travel">Travel & Tours</option>
                      <option value="career">Career Placement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals and how we can help..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background border-border/60 focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-base bg-gold text-gold-foreground hover:bg-gold/90 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-5 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                    <info.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted rounded-xl text-muted-foreground hover:text-white ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-border h-[200px] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60782.085870709794!2d31.021073763599322!3d-17.797318741539037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sZIMGRO%20Language%20Consultancy%2C%204th%20Floor%2C%20Globe%20House%2C%20Corner%20J.%20Moyo%20%26%20Angwa%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1768997822221!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ZIMGRO Consultancy Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
