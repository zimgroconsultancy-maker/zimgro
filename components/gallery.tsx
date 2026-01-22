"use client"

import { useState } from "react"
import { Play, X, Images } from "lucide-react"

const galleryItems = [
  {
    type: "image",
    src: "gall1.jpeg",
    alt: "",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    type: "video",
    src: "fk1.mp4",
    thumbnail: "fk1-thumb.jpeg",  // <- add this
    alt: "",
    span: ""
  },
  {
    type: "image",
    src: "gall2.jpeg",
    alt: "Chinese calligraphy class",
    span: ""
  },
  {
    type: "image",
    src: "gall4.jpeg",
    alt: "",
    span: ""
  },
  {
    type: "video",
    src: "fk3.mp4",
    thumbnail: "fk3-thumb.jpeg",  // <- add this
    alt: "",
    span: ""
  },
  {
    type: "image",
    src: "gall3.jpeg",
    alt: "",
    span: "lg:col-span-2"
  },
  {
    type: "image",
    src: "laho4.jpeg",
    alt: "",
    span: "lg:col-span-2"
  }
]

export function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium tracking-wide uppercase rounded-full mb-6">
            <Images className="inline h-4 w-4 mr-2 -mt-0.5" />
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
            Life at Zimgro
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our vibrant learning community through photos and videos of classes, 
            events, and student experiences.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl ${item.span} group cursor-pointer`}
            >
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-card text-sm font-medium">{item.alt}</p>
                </div>
                
                {item.type === "video" && (
                  <button
                    type="button"
                    onClick={() => setSelectedVideo(item.src)}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Play ${item.alt}`}
                  >
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Play className="h-6 w-6 text-gold-foreground ml-1" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-card hover:text-gold transition-colors duration-300"
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          <div 
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="Video player"
              className="w-full h-full rounded-2xl shadow-2xl"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
