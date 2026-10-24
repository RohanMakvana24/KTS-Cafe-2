import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Search, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { MenuCategory, MENU_CATEGORIES } from '../../data/menuData';

export interface MenuSearchFilterProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  itemCounts: Record<MenuCategory, number>;
}

export const MenuSearchFilter: React.FC<MenuSearchFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  itemCounts,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mb-10 space-y-6">
      {/* Top Row: Search Input */}
      <div className="relative max-w-xl mx-auto">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search our menu (e.g. Masala Maggie, Pani Puri, Dabeli, Butter Milk)..."
            className="w-full h-13 pl-12 pr-12 rounded-2xl bg-white dark:bg-[#0D1016] border border-neutral-300/80 dark:border-white/12 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#FFDD17] focus:ring-2 focus:ring-[#FFDD17]/25 shadow-sm dark:shadow-none transition-all font-body"
            aria-label="Search menu items"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={onClearSearch}
              className="absolute right-3.5 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {searchQuery && (
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 text-center font-mono">
            Searching across all menu categories
          </p>
        )}
      </div>

      {/* Category Tabs: Horizontally Scrollable Bar with Touch Snapping */}
      <div className="relative flex items-center">
        {/* Left Scroll Chevrons for Desktop / Tablet */}
        <button
          type="button"
          onClick={() => handleScroll('left')}
          className="hidden sm:flex shrink-0 p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 -mx-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat && !searchQuery;
            const count = itemCounts[cat] || 0;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  if (searchQuery) onClearSearch();
                  onSelectCategory(cat);
                }}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 flex items-center gap-2 select-none ${
                  isActive
                    ? 'text-[#050708]'
                    : 'bg-white dark:bg-[#0D1016] text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200/80 dark:border-white/8 shadow-sm dark:shadow-none'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#FFDD17] rounded-xl shadow-[0_4px_16px_rgba(255,221,23,0.35)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                {count > 0 && (
                  <span
                    className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full tabular-nums ${
                      isActive ? 'bg-[#050708]/20 text-[#050708]' : 'bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Chevron */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          className="hidden sm:flex shrink-0 p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
          aria-label="Scroll categories right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
