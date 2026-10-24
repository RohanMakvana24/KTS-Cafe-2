import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Navigation } from 'lucide-react';
import { Container } from '../common/Container';
import { SITE_CONFIG } from '../../data/siteConfig';
import { BrandLogo } from '../common/BrandLogo';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

export const Footer: React.FC = () => {
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#hero') {
      scrollTo(0, { duration: 1.2 });
    } else {
      scrollTo(targetId, { offset: -76, duration: 1.2 });
    }
  };

  return (
    <footer className="border-t dark:border-white/10 border-neutral-200/90 bg-[var(--bg-subtle)] pt-14 pb-10 transition-colors duration-200">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b dark:border-white/10 border-neutral-200/90">
          {/* Brand & Pure Veg Statement */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-5">
              <BrandLogo variant="horizontal" size="lg" />
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-body leading-relaxed max-w-sm mb-5">
              Rajkot’s beloved destination for comforting street-food cravings, artisanal Maggies, wood-fired styled pizzas, and chilled thick shakes.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-3 py-1.5 rounded-xl">
              <div className="veg-indicator" title="100% Pure Vegetarian" />
              <span>100% Pure Vegetarian Kitchen</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#FFDD17] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, '#menu')}
                  className="hover:text-amber-600 dark:hover:text-[#FFDD17] transition-colors"
                >
                  Food Menu &amp; Specials
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Visual Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Our Story &amp; Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleNavClick(e, '#location')}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Location &amp; Map
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Visit & Connect */}
          <div className="md:col-span-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#FFDD17] mb-4">
              Visit &amp; Connect
            </h4>
            <div className="space-y-3 text-xs text-neutral-600 dark:text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E01E25] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {SITE_CONFIG.verifiedAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 dark:text-[#FFDD17] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.verifiedPhoneNumber}`}
                  className="hover:text-neutral-900 dark:hover:text-white font-medium transition-colors"
                >
                  {SITE_CONFIG.verifiedPhoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${SITE_CONFIG.verifiedWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-[#00843D] text-neutral-700 dark:text-neutral-300 hover:text-white border border-neutral-200 dark:border-white/10 transition-colors"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-[#E01E25] text-neutral-700 dark:text-neutral-300 hover:text-white border border-neutral-200 dark:border-white/10 transition-colors"
                  aria-label="Follow on Instagram"
                  title="Instagram @kts_cafe"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={SITE_CONFIG.googleMapsDestinationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-[#FFDD17] text-neutral-700 dark:text-neutral-300 hover:text-[#050708] border border-neutral-200 dark:border-white/10 transition-colors"
                  aria-label="Get Directions in Google Maps"
                  title="Google Maps"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-body">
          <p>© {new Date().getFullYear()} KT’s Cafe, Rajkot. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with pride for Rajkot foodies</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#00843D]">100% Pure Veg</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};
