import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { Eye, Sparkles, ZoomIn, Utensils } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { GalleryArtwork } from '../components/gallery/GalleryArtwork';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';

export const FoodGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  const handleNavigateLightbox = (index: number) => {
    if (index >= 0 && index < GALLERY_ITEMS.length) {
      setSelectedItem(GALLERY_ITEMS[index]);
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 lg:py-40 bg-[var(--bg-page)] border-t dark:border-white/10 border-neutral-200 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[450px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#E01E25]/5 blur-[160px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading as requested */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <SectionHeading
            kicker="Visual Gallery"
            title="A Feast for the Eyes."
            subtitle="Little moments, delicious bites, and flavours worth sharing."
            align="center"
            accentColor="yellow"
          />
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-7">
          {GALLERY_ITEMS.map((item, index) => {
            const isFeatured = item.aspectRatio === 'featured';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D1016] group cursor-pointer shadow-xl ${item.gridSpan}`}
                onClick={() => handleOpenLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View enlarged photo of ${item.title}`}
              >
                {/* Background Food Visual Artwork Canvas */}
                <div className="w-full h-full p-4 sm:p-6 flex items-center justify-center transform group-hover:scale-[1.04] transition-transform duration-500 ease-out">
                  <GalleryArtwork
                    type={item.visualType}
                    className="w-full h-full max-h-[460px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Restrained Top Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="veg-indicator" title="100% Pure Vegetarian" />
                  <span className="text-[11px] font-mono font-semibold text-neutral-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Affordance on Top Right */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                  <div className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[#FFDD17] shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Restrained Bottom Gradient Scrim & Meta Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#050708] via-[#050708]/80 to-transparent p-5 sm:p-6 flex flex-col justify-end">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFDD17] font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3
                    className={`font-heading font-bold text-white group-hover:text-[#FFDD17] transition-colors leading-tight ${
                      isFeatured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-base sm:text-lg'
                    }`}
                  >
                    {item.title}
                  </h3>
                  {isFeatured && (
                    <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-body leading-relaxed max-w-xl line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Focus Ring & Border Illumination */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#FFDD17]/50 group-focus-visible:border-[#FFDD17] transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Gallery Lightbox Modal with AnimatePresence */}
        <AnimatePresence>
          {selectedItem && (
            <GalleryLightbox
              item={selectedItem}
              items={GALLERY_ITEMS}
              onClose={handleCloseLightbox}
              onNavigate={handleNavigateLightbox}
            />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
