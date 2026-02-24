import React from 'react';
import { Globe, Flame, BookOpen, MapPin, Users, Music } from 'lucide-react';

const timelineData = [
  {
    id: "origenes",
    year: "1903 - 1929",
    title: "Los Orígenes y el Nacimiento",
    icon: <Flame className="w-5 h-5 text-[#ffcd75]" />,
    image: "https://images.unsplash.com/photo-1548625361-ed82b98c94eb?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>La historia del Ministerio de Madureira es inseparable de la vida de <strong>Paulo Leivas Macalão</strong>, considerado el "Apóstol del Siglo 20". Nacido en 1903, su vida cambió en 1924 al convertirse al evangelio pentecostal, siendo el segundo miembro bautizado por el misionero sueco Gunnar Vingren.</p>
        <p>El <strong>15 de noviembre de 1929</strong>, tras evangelizar incansablemente los suburbios de Río de Janeiro tocando su violín, inauguró un pequeño salón en Vaz Lobo, fundando oficialmente la Asamblea de Dios de Madureira.</p>
      </div>
    )
  },
  {
    id: "crecimiento",
    year: "1930 - 1989",
    title: "Crecimiento y la Creación de CONAMAD",
    icon: <BookOpen className="w-5 h-5 text-[#ffcd75]" />,
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>En 1930, Macalão fue ordenado al ministerio pastoral. El trabajo creció exponencialmente hasta que el 1 de mayo de 1953 se inauguró la <strong>Catedral de las Asambleas de Dios en Madureira</strong>, la primera en América Latina con un hermoso estilo gótico.</p>
        <p>Para asegurar la unidad de las iglesias, en 1958 se funda la Convención Nacional de Madureira, que en 1989 se consolidaría oficialmente como <strong>CONAMAD</strong>.</p>
        <p>Un legado fundamental de esta época es la música: Macalão compuso, tradujo y adaptó cerca de 252 himnos de la <strong>Harpa Cristã</strong>, patrimonio histórico del ministerio.</p>
      </div>
    )
  },
  {
    id: "transicion",
    year: "1982 - Actualidad",
    title: "Transición y Expansión Global",
    icon: <Globe className="w-5 h-5 text-[#ffcd75]" />,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>Tras el fallecimiento del Pastor Macalão en 1982, su yerno, el <strong>Pastor Manoel Ferreira</strong>, asumió el liderazgo, siendo aclamado en 2017 como Obispo Primaz Mundial.</p>
        <p>Hoy, la CONAMAD es una de las mayores organizaciones pentecostales de Brasil con más de 90,000 ministros. Una característica distintiva es la <strong>ordenación de mujeres</strong> para todas las funciones ministeriales, destacando su visión inclusiva con presencia en más de 90 países.</p>
      </div>
    )
  },
  {
    id: "espana",
    year: "2008",
    title: "La Llegada a España",
    icon: <MapPin className="w-5 h-5 text-[#ffcd75]" />,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>Impulsada por la inmigración brasileña y latinoamericana, la obra llega a España. El <strong>9 de diciembre de 2008</strong> se registró oficialmente la primera iglesia en Madrid.</p>
        <p>Al frente de la obra en España está el <strong>Pastor Presidente Valdomiro dos Santos</strong>, quien junto al Pastor Myro y un equipo de líderes comprometidos, expanden la visión de establecer iglesias Madureira en todo el territorio español.</p>
      </div>
    )
  },
  {
    id: "futuro",
    year: "Hoy y el Futuro",
    title: "La Iglesia Madureira en Madrid",
    icon: <Users className="w-5 h-5 text-[#ffcd75]" />,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-4">
        <p>Actualmente nuestra sede principal se encuentra en Madrid (Calle Haya 2). Mantenemos nuestra fe pentecostal clásica, el énfasis en la adoración con excelencia y el compromiso con misiones y acción social.</p>
        <p>Integrados en la FEREDE, nuestra visión es clara: establecer iglesias fuertes, familias sanas y comunidades transformadas. Somos un lugar de adoración vibrante y formación bíblica para personas de todas las nacionalidades.</p>
      </div>
    )
  }
];

export const HistorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden font-sans" id="historia">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#ffcd75]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20 md:mb-32 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md mb-6">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#ffcd75]" />
            Nuestra Historia
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-[1.1]">
          De Brasil al Mundo y su<br />
          <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
            Llegada a España
          </span>
        </h2>
      </div>

      {/* Alternating Blocks */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-24 md:space-y-32 relative z-10">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ffcd75]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />
                  <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  {/* Floating Icon Badge */}
                  <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} z-30 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl shadow-2xl`}>
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`order-1 flex flex-col justify-center ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#ffcd75]/50" />
                  <span className="text-[#ffcd75] font-serif italic tracking-widest text-sm sm:text-base">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-medium text-white mb-6 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-zinc-400 leading-relaxed text-base sm:text-lg space-y-4">
                  {item.content}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
