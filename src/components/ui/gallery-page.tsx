import React from 'react';
import Slideshow from '@/components/ui/slideshow';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Mesa Directiva",
    desc: "Liderazgo y dirección de nuestra iglesia.",
    url: "https://drive.google.com/thumbnail?id=1rTY9JIIB-3gLkDQT-2scg69KuYvj1e7h&sz=w1200",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Santa Cena",
    desc: "Comunión y recuerdo del sacrificio de Cristo.",
    url: "https://drive.google.com/thumbnail?id=1rUI45_B1s14e8zefXgfNoRNmcoOQ7U_E&sz=w1200",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Alabanza Piano",
    desc: "Adoración a través de la música.",
    url: "https://drive.google.com/thumbnail?id=1lsobSxn7UG-_Px2xu74_QAjO_2qe-FHR&sz=w1200",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Nuestros Pastores",
    desc: "Guiando a la congregación con amor y fe.",
    url: "https://drive.google.com/thumbnail?id=174YFmEN0pxeZAqN5h_0U2M0N4UAsEdvS&sz=w1200",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "Culto General",
    desc: "Momentos de adoración en familia.",
    url: "https://drive.google.com/thumbnail?id=1CVC5-njjVVItrfbfBdWtMMo9KAKwOwwb&sz=w1200",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Mesa de Santa Cena",
    desc: "Preparativos para la comunión.",
    url: "https://drive.google.com/thumbnail?id=1m8Twad3JCZDV_VjY6-clAEYDnVSvTcn0&sz=w1200",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "Pastora en Alabanza",
    desc: "Nuestra pastora ministrando en la alabanza.",
    url: "https://drive.google.com/thumbnail?id=1sFPhBFHHdgeBXhkQ5a_jY1__cwy1-LIh&sz=w1200",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    objectPosition: "center 20%",
  },
];

export const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans pb-24">
      <Slideshow />
      <div className="pt-24">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="Nuestra Galería"
          description="Explora los momentos más destacados de nuestra comunidad. Arrastra las imágenes para reordenarlas."
        />
        
        <div className="container mx-auto px-4 mt-16 flex justify-center">
          <a 
            href="https://t.me/boost?c=3327055645" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#24A1DE] hover:bg-[#1d82b5] text-white px-8 py-4 rounded-2xl font-medium transition-all hover:scale-105 shadow-lg shadow-[#24A1DE]/20"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.25-5.58 3.68-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.89.03-.25.38-.51 1.03-.78 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.12 0 .37.03.51.14.11.09.15.22.16.34-.01.05-.01.16-.02.25z"/>
            </svg>
            Fotos de los Cultos
          </a>
        </div>
      </div>
    </div>
  );
};
