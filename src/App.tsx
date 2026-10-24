/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScrollProvider, useSmoothScroll } from './context/SmoothScrollContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { FoodStoryScroll } from './sections/story/FoodStoryScroll';
import { MenuSection } from './sections/MenuSection';
import { FoodGallery } from './sections/FoodGallery';
import { CafeStorySection } from './sections/CafeStorySection';
import { ReviewsSection } from './sections/ReviewsSection';
import { LocationSection } from './sections/LocationSection';
import { ContactSection } from './sections/ContactSection';

function CafeApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollTo } = useSmoothScroll();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'story',
        'favourites',
        'connection',
        'menu',
        'gallery',
        'about',
        'reviews',
        'location',
        'contact',
      ];
      const scrollPosition = window.scrollY + 240;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      scrollTo(0, { duration: 1.2 });
    } else {
      scrollTo(`#${sectionId}`, { offset: -76, duration: 1.2 });
    }
  };

  const scrollToMenu = () => {
    handleNavigate('menu');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] selection:bg-[#FFDD17] selection:text-[#050708] flex flex-col justify-between transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMenuCTA={scrollToMenu}
      />

      {/* Main Viewport Content */}
      <main className="flex-1">
        {/* Hero Section & Interactive Pizza Experience */}
        <HeroSection
          onExploreMenu={scrollToMenu}
          onDiscoverCafe={() => handleNavigate('about')}
        />

        {/* Scroll Experience & Food Storytelling */}
        <FoodStoryScroll
          onExploreMenu={scrollToMenu}
          onDiscoverCafe={() => handleNavigate('about')}
        />

        {/* Interactive Food Menu Experience */}
        <MenuSection />

        {/* Premium Pure Veg Food Gallery */}
        <FoodGallery />

        {/* Cafe Story Section */}
        <CafeStorySection onExploreMenu={scrollToMenu} />

        {/* Customer Reviews Section */}
        <ReviewsSection />

        {/* Location & Directions Section */}
        <LocationSection />

        {/* Contact & Inquiries Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <CafeApp />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
