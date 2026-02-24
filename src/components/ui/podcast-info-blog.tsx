import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export function PodcastInfoBlog({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="w-full min-h-screen py-32 lg:py-40 bg-zinc-950 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex w-full flex-col gap-8">
          <button 
            onClick={() => setCurrentPage('podcast')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Podcast
          </button>
          
          <h4 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter max-w-xl font-serif font-bold text-white">
            Más sobre el Podcast
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Article */}
          <div className="flex flex-col gap-6 md:col-span-2">
            <div className="bg-zinc-900 rounded-xl aspect-video overflow-hidden relative">
              <img 
                src="https://drive.google.com/thumbnail?id=1xj8AOz2Hlofjhee2TPqBvxoin9H4lRBm&sz=w1920" 
                alt="Podcast Studio" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Badge variant="secondary" className="bg-[#ffcd75] text-black hover:bg-[#ffcd75]/90">Historia</Badge>
              <div className="flex flex-row gap-4 items-center">
                <p className="flex flex-row gap-2 text-sm items-center">
                  <span className="text-zinc-500">Con</span>{" "}
                  <Avatar className="h-6 w-6 border border-zinc-700">
                    <AvatarImage src="https://drive.google.com/thumbnail?id=1o02PZzlWB60QzzKSWZ-hGq5SkhIn8KCS&sz=w200" className="object-cover scale-150 object-top" />
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <span className="text-zinc-300">Sandra Ruibal</span>
                </p>
                <p className="flex flex-row gap-2 text-sm items-center">
                  <span className="text-zinc-500">&</span>{" "}
                  <Avatar className="h-6 w-6 border border-zinc-700">
                    <AvatarImage src="https://drive.google.com/thumbnail?id=1mc619gr6-h0BO-YR6Xy-O0OSUHWzMynH&sz=w200" className="object-cover object-top" />
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                  <span className="text-zinc-300">Pr. Myro</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 mt-6">
              <h3 className="text-3xl md:text-5xl tracking-tight font-serif font-bold text-white leading-tight">
                La Historia de Cómo Todo Empezó
              </h3>
              <div className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed space-y-8">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#ffcd75] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8] pt-2">
                  En AD Madureira Madrid, ya existía un espacio dedicado especialmente para un podcast –un sitio listo en la web de la iglesia, esperando ser llenado con vida y Palabra. Pero no había nadie que tomara el micrófono.
                </p>
                <p>
                  Tras muchas oraciones por ese espacio vacío, Dios unió los caminos. Sandra Ruibal, una joven de AD Madureira A Coruña, se convirtió en la respuesta a esa petición. Ella fue la persona que Dios envió para ser la voz detrás de ese micrófono, contando desde el primer momento con el respaldo absoluto del Pastor Presidente de AD Madureira Madrid.
                </p>
                
                <blockquote className="border-l-4 border-[#ffcd75] pl-6 py-4 my-10 bg-zinc-900/40 rounded-r-xl">
                  <p className="text-white font-serif italic text-xl md:text-2xl leading-relaxed">
                    "AD Madureira ya tiene el sitio para podcast. Sandra, tú eres la persona que Dios envió para llenarlo. Hazlo representando a Madureira en toda España, no solo Madrid, sino un ministerio nacional para todos los hermanos."
                  </p>
                  <footer className="mt-6 text-sm font-sans text-[#ffcd75] uppercase tracking-widest font-semibold">— Pastor Myro</footer>
                </blockquote>

                <p>
                  Tras oración ferviente, el Señor abrió puertas: conocimiento técnico, equipo y unción vinieron. Sandra tomó ese espacio "vacío" y lo transformó en Podcast Madureira –ahora un canal vivo que une creyentes de toda España.
                </p>
                <p>
                  Lo que era un sitio sin voz se convirtió en un altavoz divino, llevando predicaciones, testimonios y restauración a miles. Dios siempre tiene el tiempo perfecto. Sandra fue la respuesta a esa necesidad.
                </p>
                
                <div className="pt-10 pb-6 border-t border-zinc-800/60 mt-12 text-center">
                  <p className="text-[#ffcd75] font-serif italic text-2xl md:text-3xl">
                    "El Señor abre camino donde no lo hay"
                  </p>
                  <p className="text-zinc-500 text-sm tracking-widest uppercase mt-4 font-semibold">
                    <a 
                      href="https://www.biblegateway.com/passage/?search=Isa%C3%ADas%2043:19&version=RVR1960" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#ffcd75] transition-colors"
                    >
                      Isaías 43:19
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Article 1 */}
          <div className="flex flex-col gap-6 bg-zinc-900/30 p-8 md:p-10 rounded-3xl border border-zinc-800/50">
            <div className="flex flex-row gap-4 items-center">
              <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">Propósito</Badge>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="max-w-3xl text-2xl md:text-3xl tracking-tight font-serif font-bold text-white">
                Bienvenido a Podcast Madureira
              </h3>
              <div className="text-zinc-400 text-base md:text-lg font-light leading-relaxed space-y-6">
                <p className="text-[#ffcd75] font-serif italic text-xl md:text-2xl">Este no es un canal más. Este es un encuentro divino.</p>
                <p>
                  Aquí creemos que cada episodio puede ser la respuesta a una oración, la fuerza para un corazón cansado, la luz para alguien que está a punto de rendirse. Aquí creemos que Dios sigue hablando… y tal vez hoy te quiera hablar a ti.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">El Espíritu Santo toca lo que nadie ve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">La Palabra confronta, sana y restaura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">Los testimonios despiertan fe dormida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">La presencia de Dios cambia atmósferas y destinos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary Article 2 */}
          <div className="flex flex-col gap-6 bg-zinc-900/30 p-8 md:p-10 rounded-3xl border border-zinc-800/50">
            <div className="flex flex-row gap-4 items-center">
              <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">Comunidad</Badge>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="max-w-3xl text-2xl md:text-3xl tracking-tight font-serif font-bold text-white">
                Un Espacio Para Ti
              </h3>
              <div className="text-zinc-400 text-base md:text-lg font-light leading-relaxed space-y-6">
                <p>
                  Ven con tus preguntas, tus luchas, tus miedos, tus sueños. Aquí hay un Dios que provee paz, que provee dirección, que provee vida… Un Dios que sigue siendo Jireh, el que nunca te ha fallado.
                </p>
                <p className="text-white font-medium pt-2">Cada episodio está creado para llegar a lo más profundo:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">Conversaciones que sacuden el alma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">Verdades que rompen cadenas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">Momentos donde el cielo toca la tierra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#ffcd75] mt-1">✦</span> 
                    <span className="text-zinc-300">Palabras que encienden el propósito</span>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/80">
                  <p className="italic text-zinc-300 text-base">
                    <span className="text-[#ffcd75] mr-2">✨</span>
                    Te invito, de corazón, a suscribirte. No por nosotros… sino por lo que Dios quiere hacer en ti a través de este contenido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
