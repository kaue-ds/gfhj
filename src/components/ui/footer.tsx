import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Flame } from "lucide-react";

interface FooterProps {
  description?: string;
  copyright?: string;
  setCurrentPage?: (page: string) => void;
}

const defaultSections = [
  {
    title: "Nosotros",
    links: [
      { name: "Historia", id: "historia" },
    ],
  },
  {
    title: "Conexión",
    links: [
      { name: "Agenda", id: "agenda" },
      { name: "Iglesias en España", id: "iglesias" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "Podcast", id: "podcast" },
      { name: "Blog", id: "blog" },
      { name: "Galería", id: "galeria" },
      { name: "Contacto", id: "contacto" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/admadureiramadrid/", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com/people/ADMM-Madrid/100078279038503/?mibextid=wwXIfr&rdid=qMyBrJQjCOPKLcbn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19zS95SSHz%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio", label: "Facebook" },
  { icon: <FaYoutube className="size-5" />, href: "https://www.youtube.com/@PodcastMadureira", label: "YouTube" },
];

const defaultLegalLinks = [
  { name: "Términos y Condiciones", id: "terminos" },
  { name: "Política de Privacidad", id: "privacidad" },
];

export const Footer = ({
  description = "Una casa de fe para tu familia. Un lugar para adorar, aprender, sanar y crecer en el corazón de Madrid.",
  copyright = "© 2024 AD Madureira Madrid. Todos los derechos reservados.",
  setCurrentPage,
}: FooterProps) => {
  const handleNav = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(id);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white border-t border-white/10 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          
          {/* Left Column (Brand & Socials) */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/d/1p6LmR0vIl9j6V96unNclD6_3Y6IJ4h_E" alt="AD Madureira Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-2xl font-serif font-bold tracking-tight text-white">
                AD Madureira
              </h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-zinc-400">
              {defaultSocialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-[#ffcd75] transition-colors">
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Links Grid) */}
          <div className="grid w-full gap-8 sm:grid-cols-3 lg:gap-20">
            {defaultSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-white tracking-tight">{section.title}</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  {defaultSections[sectionIdx].links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-[#ffcd75] transition-colors"
                    >
                      <a 
                        href={`#${link.id}`}
                        onClick={(e) => handleNav(link.id, e)}
                        className="cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar (Copyright & Legal) */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs font-medium text-zinc-500 md:flex-row md:items-center md:text-left">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {defaultLegalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#ffcd75] transition-colors">
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(link.id, e)}
                  className="cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
