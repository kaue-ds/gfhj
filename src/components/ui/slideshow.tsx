import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop",
    text: ["ADORACIÓN", "Y ALABANZA"],
  },
  {
    img: "https://images.unsplash.com/photo-1548625361-ed82b98c94eb?q=80&w=2000&auto=format&fit=crop",
    text: ["COMUNIÓN", "FRATERNAL"],
  },
  {
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2000&auto=format&fit=crop",
    text: ["ENSEÑANZA", "DE LA PALABRA"],
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-zinc-950">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-60"
            style={{ backgroundImage: `url(${slide.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            {slide.text.map((t, j) => (
              <span 
                key={j} 
                className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl"
                style={{
                  transform: i === current ? 'translateY(0)' : 'translateY(20px)',
                  opacity: i === current ? 1 : 0,
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${j * 0.2 + 0.3}s`
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md transition-all"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 font-mono text-sm tracking-widest bg-zinc-950/50 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
        0{current + 1} / 0{slides.length}
      </div>
    </div>
  );
}
