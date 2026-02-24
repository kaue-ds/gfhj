import React from 'react';
import { ArrowRight } from "lucide-react";

export function BlogPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const blogPosts = [
    {
      id: 'nuevo-nacimiento',
      title: 'El Nuevo Nacimiento: Tu Nueva Vida en la Familia de Dios',
      excerpt: '¿Alguna vez te has preguntado qué significa realmente "nacer de nuevo"? Descubre lo que la Palabra de Dios enseña sobre este nuevo comienzo y tu nueva identidad en Cristo.',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop',
      date: '24 Feb 2026',
      category: 'Enseñanza'
    },
    // Placeholder for future posts
    {
      id: 'proximamente-1',
      title: 'El Poder de la Oración en Tiempos de Crisis',
      excerpt: 'Aprende cómo la oración constante puede transformar tu perspectiva y traer paz en medio de las tormentas de la vida.',
      image: 'https://images.unsplash.com/photo-1544427920-c49ccfaf8c56?q=80&w=800&auto=format&fit=crop',
      date: 'Próximamente',
      category: 'Vida Cristiana'
    },
    {
      id: 'proximamente-2',
      title: 'Entendiendo el Propósito de Dios para tu Vida',
      excerpt: 'Todos fuimos creados con un propósito divino. Descubre los pasos prácticos para alinear tu vida con la voluntad perfecta de Dios.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
      date: 'Próximamente',
      category: 'Crecimiento'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 text-zinc-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Nuestro Blog
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Artículos, enseñanzas y reflexiones para edificar tu vida espiritual y crecer en el conocimiento de la Palabra de Dios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="group bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:bg-zinc-900 transition-colors flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#ffcd75] border border-[#ffcd75]/20">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-zinc-500 mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                {post.id === 'nuevo-nacimiento' ? (
                  <button 
                    onClick={() => setCurrentPage('blog-post-nuevo-nacimiento')}
                    className="flex items-center gap-2 text-[#ffcd75] hover:text-[#ffcd75]/80 font-medium transition-colors mt-auto w-fit"
                  >
                    Leer artículo completo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <span className="text-zinc-600 font-medium mt-auto">
                    Próximamente
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
