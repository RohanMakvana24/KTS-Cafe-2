import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { useTheme } from '../../context/ThemeContext';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { BrandLogo } from '../common/BrandLogo';

export interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenMenuCTA?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = 'hero',
  onNavigate,
  onOpenMenuCTA,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollTo } = useSmoothScroll();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(id);
    } else {
      if (id === 'hero') {
        scrollTo(0, { duration: 1.2 });
      } else {
        scrollTo(`#${id}`, { offset: -76, duration: 1.2 });
      }
    }
  };

  const handleMenuCTA = () => {
    setMobileMenuOpen(false);
    if (onOpenMenuCTA) {
      onOpenMenuCTA();
    } else if (onNavigate) {
      onNavigate('menu');
    } else {
      scrollTo('#menu', { offset: -76, duration: 1.2 });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-navbar)] backdrop-blur-md border-b dark:border-white/10 border-black/8 transition-colors duration-200">
      <Container size="wide">
        {/* Top Bar Contract: 3 zones separated by gap-6 / gap-8 */}
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-18 sm:h-20">
          {/* Zone 1: Unique Custom Brand Logo with subtle hover micro-interaction */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('hero');
              } else {
                scrollTo(0, { duration: 1.2 });
              }
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 25 }}
            className="relative flex items-center select-none group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDD17] rounded-xl"
            aria-label="KT's Cafe — A Bite of Happiness — Return to top"
          >
            <BrandLogo variant="horizontal" size="md" />
          </motion.a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleItemClick(item.id, e)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-amber-600 dark:text-[#FFDD17] font-semibold'
                      : 'hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbarActiveUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFDD17] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Theme Toggle & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button (Light/Dark) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl border border-neutral-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#FFDD17] transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                onClick={handleMenuCTA}
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Menu
              </Button>
            </div>

            {/* Mobile / Tablet Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[var(--bg-elevated)] border-b dark:border-white/10 border-black/8 px-4 py-5 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleItemClick(item.id, e)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-neutral-100 dark:bg-white/10 text-amber-600 dark:text-[#FFDD17] font-semibold'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Theme switcher toggle inside mobile drawer */}
              <div className="pt-2 pb-1">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium bg-neutral-100/80 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-white/8 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {theme === 'dark' ? (
                      <Sun className="w-4 h-4 text-[#FFDD17]" />
                    ) : (
                      <Moon className="w-4 h-4 text-neutral-700" />
                    )}
                    <span>Appearance: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                  </span>
                  <span className="text-xs uppercase font-semibold text-neutral-500 dark:text-neutral-400">
                    Switch
                  </span>
                </button>
              </div>

              <div className="pt-2 border-t dark:border-white/10 border-neutral-200/80">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={handleMenuCTA}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Explore Menu
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
