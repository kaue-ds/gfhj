import React from 'react';
import { WorldMap } from '@/components/ui/map';
import { MapPin, Calendar, Instagram, ExternalLink, Clock, Navigation, Map } from 'lucide-react';

const churches = [
  {
    id: 1,
    city: "Madrid",
    subtitle: "Sede Principal en España",
    address: "Calle del Haya Nº2 | 2ª planta, 28044 Madrid",
    mapsQuery: "Calle del Haya 2, 28044 Madrid, Spain", // Búsqueda limpia para Google Maps
    schedule: "Domingo 11:00 AM",
    instagram: "@admadureiramadrid",
    instagramUrl: "https://www.instagram.com/admadureiramadrid/",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1200&auto=format&fit=crop", // Updated to a working Unsplash image
    featured: true
  }
];

export const ChurchesPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pt-32 pb-24">
      
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 relative z-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md mb-8">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#ffcd75]" />
              Nuestras Iglesias
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] text-white mb-6">
            Iglesia Madureira<br />
            <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
              en Madrid
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Encuentra tu casa espiritual. Una iglesia unida por la fe, visión y pasión por el Evangelio, expandiéndose desde Brasil hacia las naciones.
          </p>
        </div>
      </div>

      {/* Full Width World Map Component */}
      <div className="w-full relative mb-24 overflow-hidden">
        {/* Gradient fades for top and bottom to blend with background */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
        
        <div className="w-full max-w-[1600px] mx-auto opacity-80 scale-110 md:scale-100">
          <WorldMap
            dots={[
              // Conexiones dentro de Brasil
              { start: { lat: -22.9068, lng: -43.1729, label: "Río de Janeiro" }, end: { lat: -23.5505, lng: -46.6333, label: "São Paulo" } },
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: -15.7975, lng: -47.8919, label: "Brasília" } },
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: -12.9714, lng: -38.5014, label: "Salvador" } },
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: -3.1190, lng: -60.0217, label: "Manaus" } },
              // Conexiones desde Brasil al mundo
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: 40.4168, lng: -3.7038, label: "Madrid" } },
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: 38.7223, lng: -9.1393, label: "Lisboa" } },
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: 25.7617, lng: -80.1918, label: "Miami" } },
              { start: { lat: -22.9068, lng: -43.1729 }, end: { lat: -8.8390, lng: 13.2894, label: "Luanda" } },
              // Conexiones dentro de España
            ]}
            lineColor="#ffcd75"
          />
        </div>
      </div>

      {/* Churches Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {churches.map((church) => {
            if (church.featured) {
              return (
                <div key={church.id} className="lg:col-span-2 flex flex-col md:flex-row rounded-3xl overflow-hidden transition-colors duration-500 group">
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px] overflow-hidden">
                    <img 
                      src={church.image} 
                      alt={church.city} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950/80" />
                    <div className="absolute top-6 left-6 bg-[#ffcd75] text-zinc-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {church.subtitle}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-transparent">
                    <div className="absolute top-0 right-0 p-32 bg-[#ffcd75]/5 blur-[100px] rounded-full pointer-events-none" />
                    
                    <h3 className="text-4xl md:text-5xl font-medium text-white mb-10 tracking-tight">
                      {church.city}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                      {/* Address Card */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-5 h-5 text-[#ffcd75]" />
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Dirección</p>
                          </div>
                          <p className="text-white text-lg leading-snug mb-6">{church.address}</p>
                        </div>
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.mapsQuery)}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center gap-2 bg-[#ffcd75]/10 text-[#ffcd75] hover:bg-[#ffcd75]/20 px-4 py-2.5 rounded-xl text-sm font-medium transition-all w-full"
                        >
                          <Navigation className="w-4 h-4" /> Cómo llegar
                        </a>
                      </div>

                      {/* Schedule Card */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-5 h-5 text-[#ffcd75]" />
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Horario</p>
                          </div>
                          <p className="text-white text-xl font-medium mb-6">{church.schedule}</p>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm bg-zinc-900/50 px-4 py-2.5 rounded-xl">
                          <Calendar className="w-4 h-4" /> Culto General
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                      <a 
                        href={church.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 w-full bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-lg"
                      >
                        <Instagram className="w-5 h-5 text-[#ffcd75]" />
                        <span className="font-medium">Síguenos en {church.instagram}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}

        </div>
      </div>

    </div>
  );
};

// Pequeño componente de icono para el header
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}
