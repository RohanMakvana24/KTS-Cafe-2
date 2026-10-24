import React, { useEffect, useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../../data/galleryData';
import { GalleryArtwork } from './GalleryArtwork';

export interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!item) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handlePrev, handleNext, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 45) {
      handlePrev(); // swiped right -> show previous item
    } else if (deltaX < -45) {
      handleNext(); // swiped left -> show next item
    }
    setTouchStartX(null);
  };

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 16 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-[#0D1016] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0A0D12]">
          <div className="flex items-center gap-3">
            <div className="veg-indicator" title="100% Pure Vegetarian" />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFDD17]">
                {item.category}
              </span>
              <h3 id="lightbox-title" className="font-heading text-lg sm:text-xl font-bold text-white">
                {item.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 mr-2 tabular-nums">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
              aria-label="Close image lightbox (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Artwork Canvas with Previous/Next Arrows */}
        <div className="relative flex-1 min-h-[280px] sm:min-h-[400px] max-h-[58vh] bg-[#050708] flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
          <GalleryArtwork
            type={item.visualType}
            className="w-full h-full max-h-[54vh] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#FFDD17] text-white hover:text-[#050708] border border-white/15 hover:border-[#FFDD17] shadow-xl backdrop-blur-sm transition-all focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image (Left arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#FFDD17] text-white hover:text-[#050708] border border-white/15 hover:border-[#FFDD17] shadow-xl backdrop-blur-sm transition-all focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image (Right arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Details Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0A0D12] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-neutral-300 font-body leading-relaxed max-w-2xl">
            {item.description}
          </p>
          <div className="flex items-center gap-2 shrink-0 text-xs text-neutral-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
            <span>100% Pure Vegetarian Dish</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
