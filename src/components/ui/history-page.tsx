import React from 'react';
import { Flame, Star, BookOpen, Globe, MapPin, Users, Music, CheckCircle2 } from 'lucide-react';

export const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-24">
      
      {/* Hero Header with Background Image */}
      <div className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop" 
            alt="Historia Madureira Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-zinc-950/80 to-zinc-950" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md mb-8 shadow-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#ffcd75]" />
              Nuestra Historia
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.1] text-white mb-6">
            De Brasil al Mundo y su<br />
            <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
              Llegada a España
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-serif italic">
            El legado de fe de un hombre que transformó millones de vidas.
          </p>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Timeline Line */}
        <div className="relative border-l-2 border-white/5 md:ml-6 space-y-24 pb-12">
          
          {/* Era 1: Orígenes */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[1.35rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border-2 border-white/10 shadow-[0_0_15px_rgba(255,205,117,0.1)]">
              <BookOpen className="w-4 h-4 text-[#ffcd75]" />
            </div>
            
            <div className="space-y-6">
              <span className="text-[#ffcd75] font-serif italic text-lg tracking-wide">1903 - 1924</span>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Los Orígenes: Un Joven en Río de Janeiro</h2>
              <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
                <p>La historia del Ministerio de Madureira es inseparable de la vida de un hombre extraordinario: <strong className="text-zinc-200">Paulo Leivas Macalão</strong>, considerado por muchos como el "Apóstol del Siglo 20", un hombre de fibra, de elevada moral y poseedor de un liderazgo firme.</p>
                <p>Paulo Leivas Macalão nació el 17 de septiembre de 1903 en Santana do Livramento (Rio Grande do Sul), pero migró temprano para la ciudad de Río de Janeiro con su familia. Su vida cambiaría para siempre en 1924, cuando se convirtió al evangelio pentecostal.</p>
                <p>El joven Macalão fue el segundo miembro bautizado por el misionero sueco Gunnar Vingren y el primer secretario de la recién fundada iglesia Asamblea de Dios en Río de Janeiro. Este encuentro marcaría el destino no solo de su vida, sino de millones de personas en Brasil y el mundo.</p>
              </div>
            </div>
          </div>

          {/* Era 2: Nacimiento (Highlight Card) */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[1.35rem] top-8 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border-2 border-[#ffcd75] shadow-[0_0_20px_rgba(255,205,117,0.3)]">
              <Star className="w-4 h-4 text-[#ffcd75] fill-[#ffcd75]" />
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffcd75]/10 blur-[80px] rounded-full pointer-events-none" />
              
              <span className="text-[#ffcd75] font-serif italic text-lg tracking-wide">15 de Noviembre de 1929</span>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mt-2 mb-6">El Nacimiento de Madureira</h2>
              <div className="space-y-4 text-lg leading-relaxed text-zinc-300 relative z-10">
                <p>La fecha más importante en la historia del Ministerio de Madureira es el 15 de noviembre de 1929. Por orientación del misionero Gunnar Vingren, Paulo Leivas Macalão inicia la evangelización de los suburbios de la Central do Brasil, comenzando por Realengo, Bangu, Santa Cruz, etc.</p>
                <p>Trabajó incansablemente en la evangelización de Realengo, Bangu, Campo Grande, Santa Cruz, Marechal Hermes, así como en los alrededores del Estado de Río de Janeiro. Varias congregaciones fueron abiertas en los lugares donde pasó. Con más cuatro o cinco hermanos, tocando su violín, acompañado del hermano Balbino que tocaba trombón, inauguró un pequeño salón en la Rua José Machado, 76, en Vaz Lobo. En ese mismo local, fue fundada la Asamblea de Dios de Madureira el 15 de noviembre de 1929.</p>
              </div>
            </div>
          </div>

          {/* Era 3: Crecimiento */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[1.35rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border-2 border-white/10">
              <Users className="w-4 h-4 text-[#ffcd75]" />
            </div>
            
            <div className="space-y-12">
              <div>
                <span className="text-[#ffcd75] font-serif italic text-lg tracking-wide">1930 - 1958</span>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mt-2 mb-6">La Ordenación y el Crecimiento</h2>
                <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
                  <p>El 17 de agosto de 1930, el misionero Gunnar Vingren, entonces líder de la Asamblea de Dios en Río de Janeiro, aprovechando la presencia del pastor Lewi Pethrus (líder de la Iglesia Filadelfia en Estocolmo, Suecia) que visitaba Brasil, consagró al joven Paulo Leivas Macalão, entonces con 27 años de edad, al ministerio pastoral.</p>
                  <p>Con el pasar de los años, el trabajo creció exponencialmente. El 1 de mayo de 1953 se concretizó un gran sueño con la inauguración del bellísimo templo de la Asamblea de Dios en Madureira, primera Catedral de las Asambleas de Dios en América Latina, singular en su belleza de estilo gótico y líneas suaves.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">La Creación de la CONAMAD</h2>
                <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
                  <p>Un momento decisivo llegó en 1958. Con iglesias esparcidas por todo el territorio nacional, manteniendo un vínculo fraterno y peculiar de unidad entre sí, el pastor Paulo Macalão funda en 1958 la Convención Nacional de Madureira, para asegurar la unidad del trabajo.</p>
                  <p>Sin embargo, el momento decisivo vino en 1989, cuando la CONAMAD fue oficialmente fundada. Este evento marcó un punto de inflexión en la historia del Ministerio de Madureira, proporcionando una estructura organizacional unificada para las iglesias asociadas al ministerio en todo Brasil.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Era 4: Transición y Hoy */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[1.35rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border-2 border-white/10">
              <Globe className="w-4 h-4 text-[#ffcd75]" />
            </div>
            
            <div className="space-y-12">
              <div>
                <span className="text-[#ffcd75] font-serif italic text-lg tracking-wide">1982 - Actualidad</span>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mt-2 mb-6">La Transición del Liderazgo</h2>
                <div className="space-y-4 text-lg leading-relaxed text-zinc-400">
                  <p>Paulo Leivas Macalão pasó a estar con el Señor el 26 de agosto de 1982, a los 79 años de edad.</p>
                  <p>Después del fallecimiento del Pastor Macalão en 1982, su yerno, el Pastor Manoel Ferreira, asumió el liderazgo del ministerio. Fue bajo su visión y liderazgo que la idea de una convención nacional específica para el Ministerio de Madureira comenzó a tomar forma concreta.</p>
                  <p>Manoel Ferreira asumió la presidencia de la Convenção Nacional das Assembleias de Dios do Ministério de Madureira (CONAMAD) el 1 de mayo de 1987, y en 1990 la iglesia madre, la Asamblea de Dios de Madureira. En 2017, en la 39ª Asamblea General Ordinaria de la CONAMAD, en la AD Brás, Dr. Manoel Ferreira fue aclamado Bispo Primaz Mundial de las Asambleas de Dios Ministerio de Madureira.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-white mb-3">El Ministerio Hoy</h3>
                  <p className="text-zinc-400">Hoy, la CONAMAD representa una de las mayores organizaciones pentecostales de Brasil, con iglesias en todos los estados del país y una creciente presencia internacional. Con más de noventa mil ministros, forman la gran Nación Madureira.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-white mb-3">Visión Inclusiva</h3>
                  <p className="text-zinc-400">Una característica distintiva del Ministerio es que ordena mujeres para todas las funciones ministeriales, algo poco común en muchos grupos pentecostales tradicionales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Era 5: Llegada a España (Highlight Card with Image) */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[1.35rem] top-8 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border-2 border-[#ffcd75] shadow-[0_0_20px_rgba(255,205,117,0.3)]">
              <MapPin className="w-4 h-4 text-[#ffcd75]" />
            </div>
            
            <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-48 md:h-64 w-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2000&auto=format&fit=crop" 
                  alt="España" 
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              
              <div className="p-8 md:p-12 pt-0 relative z-10">
                <span className="text-[#ffcd75] font-serif italic text-lg tracking-wide">9 de Diciembre de 2008</span>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mt-2 mb-6">La Obra en España</h2>
                <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
                  <p>El Ministerio de Madureira siempre tuvo una visión global, con presencia en América Latina, Europa, África y Estados Unidos, abarcando más de 90 países.</p>
                  <p>La llegada a España es parte de este movimiento misionero global, impulsado principalmente por la inmigración brasileña y latinoamericana en las primeras décadas del siglo XXI.</p>
                  <p>El hito oficial fue el 9 de diciembre de 2008, cuando se registró en el Ministerio de Justicia de España la primera iglesia: Iglesia Evangélica Asamblea de Dios Misionera Ministerio de Madureira en Madrid, con número de inscripción 021417.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Era 6: Presente en España */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[1.35rem] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border-2 border-white/10">
              <Flame className="w-4 h-4 text-[#ffcd75]" />
            </div>
            
            <div className="space-y-16">
              
              {/* Liderazgo y Red */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Liderazgo y Red Actual</h2>
                <p className="text-lg text-zinc-400 mb-8">Al frente de la obra en España está el Pastor Presidente Valdomiro dos Santos, quien lidera la expansión del ministerio en territorio español. Junto a él trabaja el Pastor Myro y un equipo de líderes comprometidos. Actualmente nuestra sede principal se encuentra en:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Madrid (Sede Principal - Calle Haya 2)'].map((city, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                      <MapPin className="w-5 h-5 text-[#ffcd75] shrink-0" />
                      <span className="text-zinc-200 font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doctrina */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Doctrina y Práctica</h2>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
                  <p className="text-lg text-zinc-400 mb-6">Mantenemos las mismas convicciones doctrinales que caracterizan al movimiento desde sus orígenes:</p>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      "Fe pentecostal clásica",
                      "La Biblia como única regla de fe",
                      "Dones espirituales en operación",
                      "Sanidad divina",
                      "Segunda venida de Cristo",
                      "Ordenación de mujeres",
                      "Alabanza con excelencia",
                      "Acción social y misiones"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ffcd75] shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legado Musical */}
              <div className="relative overflow-hidden rounded-3xl border border-[#ffcd75]/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Music className="w-48 h-48 text-[#ffcd75]" />
                </div>
                <div className="relative z-10">
                  <Music className="w-8 h-8 text-[#ffcd75] mb-6" />
                  <h2 className="text-3xl font-medium text-white tracking-tight mb-4">El Legado Musical: La Harpa Cristã</h2>
                  <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                    Un aspecto fundamental del legado de Madureira es la música. Paulo Leivas Macalão compuso, tradujo y adaptó cerca de 252 himnos de uno de los mayores himnarios pentecostales del país - la <strong>HARPA CRISTÃ</strong>, utilizada por millones de creyentes en Brasil. Este énfasis en la música y la adoración continúa siendo una marca distintiva de las iglesias Madureira en todo el mundo, incluyendo España.
                  </p>
                </div>
              </div>

              {/* Visión de Futuro */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Una Visión de Futuro</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  El Ministerio de Madureira en España no es solo una extensión de la obra brasileña, sino una expresión genuina del pentecostalismo en tierra española. Con una membresía diversa, estas iglesias representan la universalidad del evangelio.
                </p>
                <p className="text-xl font-serif italic text-white border-l-2 border-[#ffcd75] pl-6 py-2">
                  "La visión es clara: establecer iglesias fuertes, familias sanas y comunidades transformadas por el poder del Evangelio."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
