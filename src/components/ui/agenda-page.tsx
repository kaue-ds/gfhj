import React from 'react';
import { Clock, Calendar, BookOpen, Users, Heart } from 'lucide-react';

export function AgendaPage() {
  const schedule = [
    {
      day: 'Martes',
      time: '20:00',
      title: 'Culto de Oración',
      description: 'Un tiempo dedicado a buscar la presencia de Dios, interceder por las necesidades y fortalecer nuestra comunión a través de la oración.',
      icon: <Heart className="w-6 h-6 text-[#ffcd75]" />
    },
    {
      day: 'Viernes',
      time: '19:30',
      title: 'Culto de Enseñanza Bíblica',
      description: 'Profundizamos en la Palabra de Dios para crecer espiritualmente, aprender sus principios y aplicarlos en nuestra vida diaria.',
      icon: <BookOpen className="w-6 h-6 text-[#ffcd75]" />
    },
    {
      day: 'Domingo',
      time: '11:00',
      title: 'Culto de Familia',
      description: 'Nos reunimos como familia en Cristo para celebrar, adorar juntos y recibir un mensaje inspirador para toda la semana.',
      icon: <Users className="w-6 h-6 text-[#ffcd75]" />
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Nuestra Agenda
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Acompáñanos en nuestras reuniones semanales. Eres siempre bienvenido a ser parte de nuestra familia espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 transition-colors flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <div className="flex items-center gap-2 text-[#ffcd75] font-medium mb-4">
                <Calendar className="w-4 h-4" />
                <span className="uppercase tracking-wider text-sm">{item.day}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2 text-zinc-300 bg-zinc-950/50 px-4 py-2 rounded-full mb-6">
                <Clock className="w-4 h-4 text-[#ffcd75]" />
                <span className="font-mono text-lg">{item.time}</span>
              </div>
              
              <p className="text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner: Te Esperamos */}
        <div className="mt-20 rounded-2xl overflow-hidden relative h-[300px] flex items-center justify-center border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop" 
            alt="Congregation gathering" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          <div className="relative z-10 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              ¡Te Esperamos!
            </h2>
            <p className="text-lg text-zinc-300 max-w-xl mx-auto">
              No importa de dónde vengas, hay un lugar para ti en nuestra iglesia. Ven y experimenta el amor de Dios con nosotros.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
