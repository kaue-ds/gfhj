import React, { useState } from 'react';
import { Play, Headphones, Youtube, Info, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { ProfileSelector } from '@/components/ui/profile-selector';
import AnimatedSocialLinks, { type Social } from '@/components/ui/social-links';

const socials: Social[] = [
  {
    name: 'YouTube',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    url: 'https://www.youtube.com/@PodcastMadureira'
  },
  {
    name: 'Spotify',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
  },
  {
    name: 'Instagram',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
  }
];

const episodes = [
  {
    id: 1,
    title: "",
    description: "",
    duration: "45 min",
    image: "https://drive.google.com/thumbnail?id=1xj8AOz2Hlofjhee2TPqBvxoin9H4lRBm&sz=w1920",
    youtubeUrl: "#",
    spotifyUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Fe en Tiempos Difíciles",
    description: "Una conversación profunda sobre cómo mantener la esperanza cuando enfrentamos adversidades.",
    duration: "38 min",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "#",
    spotifyUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "El Propósito de Dios",
    description: "Aprende a identificar y caminar en el propósito que Dios ha diseñado para ti.",
    duration: "52 min",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "#",
    spotifyUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Restauración Familiar",
    description: "Principios bíblicos para sanar y fortalecer los lazos familiares.",
    duration: "41 min",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "#",
    spotifyUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Liderazgo Servicial",
    description: "El modelo de Jesús para liderar con humildad y amor.",
    duration: "48 min",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "#",
    spotifyUrl: "#",
    featured: false,
  }
];

export const PodcastPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'spotify'>('youtube');
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const featuredEpisode = episodes.find(e => e.featured) || episodes[0];
  const regularEpisodes = episodes.filter(e => !e.featured);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-24 overflow-x-hidden">
      
      {/* Hero Section (Netflix Style) */}
      <div className="relative w-full min-h-[85vh] flex flex-col justify-center pt-40 pb-20">
        <div className="absolute inset-0">
          <img 
            src={featuredEpisode.image} 
            alt={featuredEpisode.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#ffcd75] flex items-center gap-2 drop-shadow-md">
                <Headphones className="w-4 h-4" />
                Podcast Madureira
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black text-white mb-4 tracking-tight leading-tight drop-shadow-2xl">
              PODCAST MADUREIRA
            </h1>
            <h2 className="text-sm md:text-base font-sans font-semibold text-[#ffcd75] uppercase tracking-widest mb-8 drop-shadow-md">
              Asambleas de Dios - Ministerio Madureira España
            </h2>
            
            <p className="text-base md:text-lg font-sans font-light text-white/90 mb-4 leading-relaxed drop-shadow-md max-w-2xl">
              Bienvenido a Podcast Madureira, un espacio de enseñanza, inspiración y reflexión bíblica para toda España. Aquí encontrarás mensajes poderosos, testimonios transformadores y charlas profundas sobre la fe cristiana, diseñadas para fortalecer tu caminar con Dios.
            </p>
            <p className="text-base md:text-lg font-sans font-light text-white/90 mb-10 leading-relaxed drop-shadow-md max-w-2xl">
              Escúchanos regularmente y sé parte de una comunidad en crecimiento espiritual.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-bold hover:bg-white/90 transition-colors">
                <Play className="w-5 h-5 fill-current" />
                Reproducir
              </button>
              <button 
                onClick={() => setCurrentPage('podcast-info')}
                className="flex items-center gap-2 bg-zinc-500/40 text-white px-6 py-3 rounded-md font-bold hover:bg-zinc-500/60 transition-colors backdrop-blur-sm"
              >
                <Info className="w-5 h-5" />
                Más información
              </button>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-medium text-zinc-300 uppercase tracking-wider mb-2 drop-shadow-md">Síguenos en nuestras redes</h3>
              <div className="flex justify-start -ml-5">
                <AnimatedSocialLinks socials={socials} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsables del Podcast */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ProfileSelector 
          title="Responsables del Podcast"
          profiles={[
            {
              id: "sandra",
              label: "Sandra Ruibal",
              icon: <img src="https://drive.google.com/thumbnail?id=1o02PZzlWB60QzzKSWZ-hGq5SkhIn8KCS&sz=w800" alt="Sandra Ruibal" className="w-full h-full object-cover scale-[1.35] object-top" />,
            },
            {
              id: "pastor",
              label: "Pr. Myro",
              icon: <img src="https://drive.google.com/thumbnail?id=1mc619gr6-h0BO-YR6Xy-O0OSUHWzMynH&sz=w800" alt="Pr. Myro" className="w-full h-full object-cover object-top" />,
            }
          ]}
          onProfileSelect={(id) => setSelectedProfile(id)}
        />
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-6 border-b border-white/10 pb-4">
          <button 
            onClick={() => setActiveTab('youtube')}
            className={`flex items-center gap-2 text-lg font-medium transition-colors ${activeTab === 'youtube' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Youtube className={`w-5 h-5 ${activeTab === 'youtube' ? 'text-red-500' : ''}`} />
            Ver en YouTube
            {activeTab === 'youtube' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-t-full" />
            )}
          </button>
          
          <button 
            onClick={() => setActiveTab('spotify')}
            className={`flex items-center gap-2 text-lg font-medium transition-colors ${activeTab === 'spotify' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <svg viewBox="0 0 24 24" className={`w-5 h-5 fill-current ${activeTab === 'spotify' ? 'text-[#1DB954]' : ''}`}>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Escuchar en Spotify
            {activeTab === 'spotify' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1DB954] rounded-t-full" />
            )}
          </button>
        </div>
      </div>

      {/* Episodes Row */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-medium text-white mb-4">Episodios Recientes</h3>
        
        <div className="relative group">
          <div className="flex gap-4 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {regularEpisodes.map((episode) => (
              <div 
                key={episode.id} 
                className="flex-none w-[280px] sm:w-[320px] snap-start group/card cursor-pointer"
              >
                <div className="relative aspect-video rounded-md overflow-hidden mb-3 bg-zinc-900 transition-transform duration-300 group-hover/card:scale-105 group-hover/card:shadow-xl group-hover/card:z-10">
                  <img 
                    src={episode.image} 
                    alt={episode.title}
                    className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-5 h-5 text-white fill-current ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
                    {episode.duration}
                  </div>
                </div>
                
                <h4 className="text-white font-medium text-base line-clamp-1 group-hover/card:text-[#ffcd75] transition-colors">
                  {episode.title}
                </h4>
                <p className="text-zinc-500 text-sm line-clamp-2 mt-1">
                  {episode.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sandra Ruibal Biography Modal */}
      {selectedProfile === 'sandra' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProfile(null)}>
          <div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProfile(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-2 bg-zinc-800/50 rounded-full hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-zinc-800 mx-auto md:mx-0 shadow-xl">
                <img src="https://drive.google.com/thumbnail?id=1o02PZzlWB60QzzKSWZ-hGq5SkhIn8KCS&sz=w800" alt="Sandra Ruibal" className="w-full h-full object-cover scale-[1.35] object-top" />
              </div>
              <div className="flex-1 space-y-4 text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                <h3 className="text-3xl font-serif font-bold text-white mb-4 text-center md:text-left">Sandra Ruibal</h3>
                <p>Sandra Ruibal es una joven miembro de la iglesia Asamblea de Dios Ministerio Madureira en A Coruña. Nació en el evangelio, dentro del movimiento pentecostal, y desde muy pequeña creció rodeada de enseñanza bíblica, oración y pasión por la presencia de Dios.</p>
                <p>Con el tiempo comprendió que su fe no era solo una herencia, sino un llamado personal. Dios la llamó a predicar, y desde entonces ha decidido caminar en obediencia, preparando su vida, su carácter y su voz para servir a esta generación.</p>
                <p>Es la presentadora del Podcast Madureira, un proyecto digital evangelístico respaldado por el Pastor Presidente Valdomiro dos Santos, que nace con la convicción de que el mandato de Marcos 16:15 sigue vigente hoy: "Id por todo el mundo y predicad el evangelio".</p>
                <p>Cada mensaje compartido es una oportunidad para expandir el Reino de Dios.</p>
                <p>Su ministerio está enfocado en predicar la palabra de Dios, abordando temas como identidad, carácter, santidad, propósito y decisiones desde una base bíblica clara y transformadora.</p>
                <p>Vive con una certeza que define su mensaje: el evangelio no para en nosotros.</p>
                <p>Ha sido alcanzada para alcanzar. Transformada para transformar. Llamada para enviar. Y su misión es clara: participar activamente en la expansión del Reino de Dios en esta generación.</p>
                <p>Su deseo no es construir una plataforma personal, sino levantar una generación firme, encendida y comprometida con Cristo.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
