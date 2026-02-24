import React from "react";
import { 
  ArrowRight, 
  Play, 
  Heart, 
  Users, 
  BookOpen,
  Music,
  Flame,
  MapPin,
  Calendar,
  Clock,
  Star
} from "lucide-react";

// --- MOCK MINISTRIES ---
const MINISTRIES = [
  { name: "Adoración", icon: Music },
  { name: "Jóvenes", icon: Flame },
  { name: "Familia", icon: Users },
  { name: "Escuela Bíblica", icon: BookOpen },
  { name: "Obra Social", icon: Heart },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite; /* Slower for readability */
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Image with Gradient Mask */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=3840&auto=format&fit=crop')] bg-cover bg-center opacity-30"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            
            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Calle Haya 2, Madrid, España
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)"
              }}
            >
              AD Madureira<br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                Madrid
              </span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
              Bienvenidos a nuestra casa. Un lugar de adoración, comunión y crecimiento espiritual en el corazón de Madrid. Ven tal como eres y experimenta el amor de Dios.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                Nuestros Horarios
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                <Play className="w-4 h-4 fill-current" />
                Ver Culto en Vivo
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            
            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/d/1p6LmR0vIl9j6V96unNclD6_3Y6IJ4h_E" alt="AD Madureira Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">Próximo Culto</div>
                    <div className="text-sm text-zinc-400">Domingo 10:00 AM</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Capacidad del Templo</span>
                    <span className="text-white font-medium">Abierto a todos</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-white to-[#ffcd75]" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="flex justify-between items-center text-center">
                  <StatItem value="3" label="Cultos/Semana" />
                  <div className="w-px h-10 bg-white/10" />
                  <StatItem value="+10" label="Iglesias en España" />
                  <div className="w-px h-10 bg-white/10" />
                  <StatItem value="100%" label="Bienvenidos" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    EN VIVO
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <Heart className="w-3 h-3 text-red-500" />
                    FAMILIA
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">Nuestros Ministerios</h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {/* Triple list for seamless loop */}
                  {[...MINISTRIES, ...MINISTRIES, ...MINISTRIES].map((ministry, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      {/* Brand Icon */}
                      <ministry.icon className="h-6 w-6 text-white" />
                      {/* Brand Name */}
                      <span className="text-lg font-bold text-white tracking-tight">
                        {ministry.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
