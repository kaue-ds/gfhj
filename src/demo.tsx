import React, { useState } from 'react';
import HeroSection from '@/components/ui/glassmorphism-trust-hero';
import { WelcomeSection } from '@/components/ui/welcome-section';
import { AboutSection } from '@/components/ui/about-section';
import { HistoryPage } from '@/components/ui/history-page';
import { ChurchesPage } from '@/components/ui/churches-page';
import { GalleryPage } from '@/components/ui/gallery-page';
import { PodcastPage } from '@/components/ui/podcast-page';
import { PodcastInfoBlog } from '@/components/ui/podcast-info-blog';
import { TermsPage } from '@/components/ui/terms-page';
import { PrivacyPage } from '@/components/ui/privacy-page';
import { ContactPage } from '@/components/ui/contact-page';
import { BlogPage } from '@/components/ui/blog-page';
import { BlogPostPage } from '@/components/ui/blog-post-page';
import { AgendaPage } from '@/components/ui/agenda-page';
import { FloatingNav } from '@/components/ui/floating-nav';
import { Footer } from '@/components/ui/footer';

export default function HeroDemo() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="w-full h-screen overflow-y-auto bg-zinc-950">
      <FloatingNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <HeroSection setCurrentPage={setCurrentPage} />
          <WelcomeSection />
          <AboutSection />
        </>
      )}

      {currentPage === 'historia' && (
        <HistoryPage />
      )}

      {currentPage === 'iglesias' && (
        <ChurchesPage />
      )}

      {currentPage === 'galeria' && (
        <GalleryPage />
      )}

      {currentPage === 'podcast' && (
        <PodcastPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'podcast-info' && (
        <PodcastInfoBlog setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'terminos' && (
        <TermsPage />
      )}

      {currentPage === 'privacidad' && (
        <PrivacyPage />
      )}

      {currentPage === 'contacto' && (
        <ContactPage />
      )}

      {currentPage === 'blog' && (
        <BlogPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'blog-post-nuevo-nacimiento' && (
        <BlogPostPage setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'agenda' && (
        <AgendaPage />
      )}

      {/* Placeholder for other pages */}
      {currentPage !== 'home' && currentPage !== 'historia' && currentPage !== 'iglesias' && currentPage !== 'galeria' && currentPage !== 'podcast' && currentPage !== 'podcast-info' && currentPage !== 'terminos' && currentPage !== 'privacidad' && currentPage !== 'contacto' && currentPage !== 'blog' && currentPage !== 'blog-post-nuevo-nacimiento' && currentPage !== 'agenda' && (
        <div className="min-h-screen flex items-center justify-center text-white pt-32 pb-24">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif text-[#ffcd75]">Próximamente</h1>
            <p className="text-zinc-400">Esta página está en construcción.</p>
          </div>
        </div>
      )}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
