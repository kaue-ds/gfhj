import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="w-full min-h-screen py-32 lg:py-40 bg-zinc-950 text-zinc-300 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-serif font-bold text-white mb-6">
          Hablemos
        </h1>
        
        <p className="text-lg md:text-xl font-light text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Nos encantaría saber de ti. Si tienes alguna pregunta, necesitas oración o simplemente quieres conectar con nosotros, la forma más rápida de hacerlo es a través de nuestro Instagram.
        </p>

        <div className="flex flex-col items-center justify-center gap-8">
          <a 
            href="https://www.instagram.com/admadureiramadrid/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
          >
            <Instagram className="w-6 h-6" />
            <span>Envíanos un mensaje directo</span>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-xl border-t border-white/10 pt-12">
            <div className="flex flex-col items-center gap-3 text-zinc-400">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <MapPin className="w-5 h-5 text-[#ffcd75]" />
              </div>
              <h3 className="text-white font-medium">Ubicación</h3>
              <p className="text-sm text-center">Calle del Haya Nº2<br/>2ª planta, Madrid</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 text-zinc-400">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Mail className="w-5 h-5 text-[#ffcd75]" />
              </div>
              <h3 className="text-white font-medium">Email</h3>
              <p className="text-sm">secretaria.admmmadrid@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
