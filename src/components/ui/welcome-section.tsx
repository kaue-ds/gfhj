import { ArrowRight, Calendar, Heart } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-zinc-950 text-white relative overflow-hidden font-sans">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column (Image & Badge) */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:sticky md:top-32">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-red-400" />
                Una casa de fe para tu familia
              </span>
            </div>
            
            {/* Vertical Image in Glassmorphism Card */}
            <div className="relative w-full aspect-[3/4] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 left-0 -ml-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              
              <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
                <img 
                  src="https://drive.google.com/thumbnail?id=1BSIzIh3v3z83QqHdwg7LNu2rRMKoQg5i&sz=w800" 
                  alt="Pastor predicando" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8">
            <h2 className="mb-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[1.1]">
              Bienvenido a<br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                nuestra iglesia
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                En la Iglesia Evangélica Asamblea de Dios – Ministerio de Madureira en Madrid somos una familia cristiana pentecostal que ama a Jesús y cree en el poder de la Palabra de Dios para transformar vidas.
              </p>
              <p>
                Aquí encontrarás un lugar para adorar, aprender, sanar y crecer. No importa de dónde vienes ni cómo llegas: queremos caminar contigo, ayudarte a fortalecer tu fe y servirte con amor y respeto. Nos alegrará recibirte en uno de nuestros cultos.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 mb-12 flex items-center gap-4">
              <div className="h-12 w-1 bg-gradient-to-b from-[#ffcd75] to-transparent rounded-full" />
              <div>
                <p className="text-xl font-bold tracking-tight text-white">Pr. Nombre Apellido</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mt-1">Pastor Presidente</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]">
                Conoce a nuestro pastor
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                <Calendar className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                Planifica tu visita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
