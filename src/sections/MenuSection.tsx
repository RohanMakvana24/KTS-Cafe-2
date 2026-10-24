import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SearchX, Sparkles, Filter, Info, RotateCcw } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
  CATEGORY_DESCRIPTIONS,
} from '../data/menuData';
import { MenuSearchFilter } from '../components/menu/MenuSearchFilter';
import { MenuItemCard } from '../components/menu/MenuItemCard';
import { AtAGlanceShowcase } from '../components/menu/AtAGlanceShowcase';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('At a Glance');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Featured items for "At a Glance" shortcut view
  const featuredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.isAtAGlance);
  }, []);

  // 2. Count items per category
  const itemCounts = useMemo(() => {
    const counts: Record<MenuCategory, number> = {
      'At a Glance': featuredItems.length,
      "Maggie’s Corner": 0,
      Farali: 0,
      "Chaat’s": 0,
      Sandwich: 0,
      'Street Bite': 0,
      Beverages: 0,
    };

    MENU_ITEMS.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category] += 1;
      }
    });

    return counts;
  }, [featuredItems]);

  // 3. Filtered items based on Category or Search Query
  const displayedItems = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();

    // If searching, search across all items case-insensitively
    if (trimmed) {
      return MENU_ITEMS.filter((item) => {
        return (
          item.name.toLowerCase().includes(trimmed) ||
          item.category.toLowerCase().includes(trimmed) ||
          (item.description && item.description.toLowerCase().includes(trimmed))
        );
      });
    }

    // Default category view
    if (activeCategory === 'At a Glance') {
      return featuredItems;
    }

    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory, searchQuery, featuredItems]);

  return (
    <section id="menu" className="relative py-20 sm:py-28 lg:py-36 bg-[var(--bg-page)] border-t dark:border-white/10 border-neutral-200 overflow-hidden scroll-mt-20 sm:scroll-mt-24 transition-colors duration-200">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-[#FFDD17]/5 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-[#E01E25]/5 blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide">
        {/* Section Heading as requested */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            kicker="KT’s Cafe Menu"
            title="Something Delicious Awaits."
            subtitle="Discover your favourites, from comforting Maggie to classic street-food bites."
            align="center"
            accentColor="yellow"
          />
        </div>

        {/* Search Input & Category Navigation */}
        <MenuSearchFilter
          categories={MENU_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          onClearSearch={() => setSearchQuery('')}
          itemCounts={itemCounts}
        />

        {/* Category Description Banner (when not searching) */}
        {!searchQuery && (
          <div className="mb-8 flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-white/8 flex-wrap gap-3">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span>{activeCategory}</span>
                <span className="text-xs font-mono font-normal text-neutral-500 dark:text-neutral-400">
                  ({displayedItems.length} {displayedItems.length === 1 ? 'item' : 'items'})
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {CATEGORY_DESCRIPTIONS[activeCategory]}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#00843D]" />
              <span>100% Pure Vegetarian Kitchen</span>
            </div>
          </div>
        )}

        {/* Search Results Summary Banner (when searching) */}
        {searchQuery && (
          <div className="mb-8 flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-white/8 flex-wrap gap-2 text-xs sm:text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">
              Found <strong className="text-amber-600 dark:text-[#FFDD17] font-bold">{displayedItems.length}</strong> items matching{' '}
              <span className="italic font-medium text-neutral-900 dark:text-white">"{searchQuery}"</span>
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-amber-600 dark:text-[#FFDD17] hover:underline flex items-center gap-1 font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Search
            </button>
          </div>
        )}

        {/* Main Menu Display Area */}
        {displayedItems.length === 0 ? (
          /* Empty Search State */
          <div className="py-20 flex flex-col items-center justify-center text-center rounded-3xl bg-white dark:bg-[#0D1016] border border-neutral-200 dark:border-white/10 p-8 max-w-md mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-400 mb-4">
              <SearchX className="w-8 h-8 text-[#E01E25]" />
            </div>
            <h4 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">No dishes found</h4>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
              We couldn't find any dish matching "{searchQuery}". Try searching for Maggie, Sandwich, Puri, or Dabeli.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-6 px-4 py-2 rounded-xl bg-[#FFDD17] text-[#050708] font-bold text-xs hover:bg-[#F3D007] transition-colors"
            >
              Clear Search &amp; Show All
            </button>
          </div>
        ) : activeCategory === 'At a Glance' && !searchQuery ? (
          /* At a Glance Featured Experience */
          <div>
            <AtAGlanceShowcase
              featuredItems={featuredItems}
              onSelectCategory={(cat) => setActiveCategory(cat)}
            />

            {/* Below the 3 featured shortcuts, show quick category overview cards */}
            <div className="pt-6 border-t border-neutral-200 dark:border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">
                    Explore All KT’s Cafe Sections
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Select a section to view all authentic dishes and pricing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {(
                  [
                    "Maggie’s Corner",
                    'Farali',
                    "Chaat’s",
                    'Sandwich',
                    'Street Bite',
                    'Beverages',
                  ] as MenuCategory[]
                ).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className="p-4 rounded-2xl bg-white dark:bg-[#0D1016] hover:bg-neutral-50 dark:hover:bg-[#141A24] border border-neutral-200/80 dark:border-white/8 hover:border-[#FFDD17]/50 text-left transition-all duration-200 group flex flex-col justify-between shadow-sm dark:shadow-none"
                  >
                    <div>
                      <span className="text-xs font-mono text-amber-600 dark:text-[#FFDD17]">
                        {itemCounts[cat]} items
                      </span>
                      <h5 className="font-heading font-bold text-sm text-neutral-900 dark:text-white mt-1 group-hover:text-amber-600 dark:group-hover:text-[#FFDD17] transition-colors">
                        {cat}
                      </h5>
                    </div>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-3 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      Browse →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Standard Multi-Column Food Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Pricing & Kitchen Transparency Advisory */}
        <div className="mt-14 p-5 rounded-2xl bg-white dark:bg-[#0D1016] border border-neutral-200/80 dark:border-white/8 flex items-start sm:items-center gap-3.5 shadow-sm dark:shadow-none">
          <Info className="w-5 h-5 text-amber-500 dark:text-[#FFDD17] shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
            <strong className="text-neutral-900 dark:text-white font-semibold">Rajkot Kitchen Note:</strong> All items are 100% pure vegetarian and prepared fresh to order. For items marked <span className="text-amber-600 dark:text-[#FFDD17] font-semibold">“Price on request”</span> (such as Cold Drinks and Sealed Mineral Waters), current brand availability and pricing are confirmed directly at the service counter.
          </div>
        </div>
      </Container>
    </section>
  );
};
