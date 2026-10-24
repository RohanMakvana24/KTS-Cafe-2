import React from 'react';
import { ArrowRight, Sparkles, Utensils, Flame, Heart } from 'lucide-react';
import { MenuItem, MenuCategory } from '../../data/menuData';

export interface AtAGlanceShowcaseProps {
  featuredItems: MenuItem[];
  onSelectCategory: (category: MenuCategory) => void;
}

export const AtAGlanceShowcase: React.FC<AtAGlanceShowcaseProps> = ({
  featuredItems,
  onSelectCategory,
}) => {
  return (
    <div className="w-full">
      {/* Editorial Intro Banner */}
      <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-[#141A26] dark:via-[#0E131C] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/12 shadow-sm dark:shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors duration-200">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-[#FFDD17] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-[#FFDD17]" />
            <span>Featured Overview</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
            Quick Taste of KT’s Cafe
          </h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
            A curated overview highlighting staple dishes from Maggie’s Corner, our Farali selection, and street Chaats. Browse below or select any category to explore the complete offerings.
          </p>
        </div>

        {/* Quick Category Jumps */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onSelectCategory("Maggie’s Corner")}
            className="px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-800 dark:text-white transition-colors"
          >
            Maggie’s Corner →
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory("Chaat’s")}
            className="px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-800 dark:text-white transition-colors"
          >
            Chaat’s →
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory("Sandwich")}
            className="px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-800 dark:text-white transition-colors"
          >
            Sandwiches →
          </button>
        </div>
      </div>

      {/* 3 Featured Cards in an Editorial 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {featuredItems.map((item, idx) => {
          // Visual accent tone by item
          const accents = [
            {
              border: 'border-[#FFDD17]/60 hover:border-[#FFDD17]',
              bg: 'from-[#1E2312] to-[#0E1116]',
              accentColor: '#FFDD17',
              pillBg: 'bg-[#FFDD17]/20 text-amber-800 dark:text-[#FFDD17]',
              categoryLabel: 'Maggie’s Corner',
              targetCat: "Maggie’s Corner" as MenuCategory,
              icon: <Flame className="w-8 h-8 text-amber-500" />,
            },
            {
              border: 'border-[#E01E25]/50 hover:border-[#E01E25]',
              bg: 'from-[#221315] to-[#0E1116]',
              accentColor: '#E01E25',
              pillBg: 'bg-[#E01E25]/15 text-[#E01E25]',
              categoryLabel: 'Farali Fasting',
              targetCat: 'Farali' as MenuCategory,
              icon: <Heart className="w-8 h-8 text-[#E01E25]" />,
            },
            {
              border: 'border-[#00843D]/50 hover:border-[#00843D]',
              bg: 'from-[#101E17] to-[#0E1116]',
              accentColor: '#00843D',
              pillBg: 'bg-[#00843D]/15 text-[#00843D]',
              categoryLabel: 'Chaat’s Special',
              targetCat: "Chaat’s" as MenuCategory,
              icon: <Utensils className="w-8 h-8 text-[#00843D]" />,
            },
          ][idx % 3];

          return (
            <div
              key={item.id}
              className={`relative rounded-3xl bg-white dark:bg-gradient-to-b ${accents.bg} border ${accents.border} p-6 sm:p-7 shadow-md dark:shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="veg-indicator" title="100% Pure Vegetarian" />
                    <span className="text-xs font-semibold text-[#00843D] tracking-wide uppercase">
                      Pure Veg
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${accents.pillBg}`}>
                    {accents.categoryLabel}
                  </span>
                </div>

                {/* Graphical Presentation Container */}
                <div className="my-6 aspect-[16/10] rounded-2xl bg-neutral-100 dark:bg-black/40 border border-neutral-200 dark:border-white/8 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none mb-2">
                      {accents.icon}
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Item Details */}
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFDD17] transition-colors leading-tight">
                  {item.name}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-body">
                  {item.description || 'Prepared fresh with authentic local seasonings.'}
                </p>
              </div>

              {/* Price & Action */}
              <div className="mt-6 pt-5 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-400 block">
                    Price
                  </span>
                  <span className="font-mono text-2xl font-extrabold text-amber-600 dark:text-[#FFDD17] tabular-nums">
                    ₹{item.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCategory(accents.targetCat)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-white bg-neutral-100 dark:bg-white/10 hover:bg-[#FFDD17] hover:text-[#050708] px-3.5 py-2 rounded-xl transition-all"
                >
                  <span>View Section</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
