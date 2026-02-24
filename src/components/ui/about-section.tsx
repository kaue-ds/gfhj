"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface AboutSectionProps {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Quiénes Somos",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    description:
      "Somos la Iglesia Evangélica Asamblea de Dios – Ministerio de Madureira en Madrid. Una comunidad cristiana pentecostal que cree en el poder del Evangelio para transformar vidas. Nos reunimos cada semana para adorar a Dios, estudiar Su Palabra y servir a nuestra comunidad.",
  },
  {
    id: 2,
    title: "Qué Creemos",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop",
    description:
      "Creemos en la Biblia como Palabra de Dios, en la Trinidad (Padre, Hijo y Espíritu Santo), en la salvación por gracia mediante la fe en Jesucristo, en el bautismo en aguas y en el Espíritu Santo, en los dones espirituales y en la segunda venida de Cristo.",
  },
  {
    id: 3,
    title: "Nuestra Historia",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=800&auto=format&fit=crop",
    description:
      "El Ministerio de Madureira nació en 1929 en Río de Janeiro, Brasil, fundado por el pastor Paulo Leivas Macalão. Nuestra iglesia en Madrid fue inscrita oficialmente en 2008 y desde entonces servimos a la comunidad hispana y latina con el Evangelio de Jesucristo.",
  },
  {
    id: 4,
    title: "Nuestro Pastor",
    image: "https://drive.google.com/thumbnail?id=1BSIzIh3v3z83QqHdwg7LNu2rRMKoQg5i&sz=w800",
    description:
      "El Pastor Valdomiro dos Santos lidera nuestra congregación con pasión por Dios y amor por las personas. Su ministerio está enfocado en predicar la Palabra con fidelidad, fortalecer a las familias y formar discípulos de Cristo.",
  },
  {
    id: 5,
    title: "Ministerio de Madureira",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    description:
      "Formamos parte del Ministerio de Madureira (CONAMAD), una de las convenciones más grandes de las Asambleas de Dios, con presencia en más de 100 países. Nuestra cobertura espiritual garantiza respaldo, formación y unidad doctrinal.",
  },
];

export const AboutSection = ({ features = defaultFeatures }: AboutSectionProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-zinc-950 text-white relative overflow-hidden font-sans">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10 mb-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#ffcd75]" />
              Sobre la Iglesia
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1]">
            Conoce más sobre<br />
            <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
              nuestra historia y fe
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col md:flex-row items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Column (Accordion) */}
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-6 !no-underline transition group"
                  >
                    <h6
                      className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors ${
                        tab.id === activeTabId ? "text-[#ffcd75]" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-base text-zinc-400 leading-relaxed pb-4">
                      {tab.description}
                    </p>
                    {/* Mobile Image Fallback */}
                    <div className="mt-4 md:hidden relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
                      <div className="w-full h-full rounded-xl overflow-hidden relative z-10">
                        <img
                          src={tab.image}
                          alt={tab.title}
                          className="object-cover w-full h-full grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column (Image Preview) */}
          <div className="relative hidden w-1/2 md:block sticky top-32">
            {/* Glassmorphism Card */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#ffcd75]/10 blur-[80px] pointer-events-none" />
              
              <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
                <img
                  key={activeImage} // Force re-render for animation if needed
                  src={activeImage}
                  alt="Feature preview"
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 animate-in fade-in zoom-in-95"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
