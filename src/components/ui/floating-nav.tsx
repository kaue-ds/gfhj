import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

interface FloatingNavProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export const FloatingNav = ({ currentPage = 'home', setCurrentPage }: FloatingNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", id: "home" },
    { name: "Historia Madureira", id: "historia" },
    { name: "Podcast Madureira", id: "podcast" },
    { name: "Iglesias Madureira en España", id: "iglesias" },
    { name: "Agenda", id: "agenda" },
    { name: "Galería", id: "galeria" },
    { name: "Blog", id: "blog" },
    { name: "Contáctanos", id: "contacto" },
  ];

  const handleNav = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(id);
    }
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none font-sans">
      <div className="w-full max-w-6xl relative pointer-events-auto">
        {/* Main Navbar Pill */}
        <nav className="flex items-center justify-between bg-zinc-950/60 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2.5 shadow-2xl">
          
          {/* Logo / Brand */}
          <div 
            className="flex items-center gap-2 pl-2 cursor-pointer"
            onClick={(e) => handleNav('home', e)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 overflow-hidden">
              <img src="https://lh3.googleusercontent.com/d/1p6LmR0vIl9j6V96unNclD6_3Y6IJ4h_E" alt="AD Madureira Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-serif font-bold text-white tracking-tight hidden sm:block">
              AD Madureira
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
            {navItems.filter(item => item.id !== 'home').map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`transition-colors ${currentPage === item.id ? 'text-[#ffcd75]' : 'hover:text-[#ffcd75]'}`}
                onClick={(e) => handleNav(item.id, e)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-4">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`font-medium text-lg py-2 border-b border-white/5 last:border-0 transition-colors ${currentPage === item.id ? 'text-[#ffcd75]' : 'text-zinc-300 hover:text-[#ffcd75]'}`} 
                onClick={(e) => handleNav(item.id, e)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
