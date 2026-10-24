import React from 'react';
import { MenuItem } from '../../data/menuData';

export interface MenuItemCardProps {
  item: MenuItem;
  featured?: boolean;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, featured = false }) => {
  // Category badge colors & icon accents
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Maggie’s Corner":
        return {
          badge: 'bg-[#FFDD17]/10 text-[#FFDD17] border-[#FFDD17]/25',
          accent: '#FFDD17',
          tag: 'Noodles',
        };
      case 'Farali':
        return {
          badge: 'bg-[#E01E25]/10 text-[#E01E25] border-[#E01E25]/25',
          accent: '#E01E25',
          tag: 'Fasting Special',
        };
      case "Chaat’s":
        return {
          badge: 'bg-[#FFDD17]/10 text-[#FFDD17] border-[#FFDD17]/25',
          accent: '#FFDD17',
          tag: 'Street Chaat',
        };
      case 'Sandwich':
        return {
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
          accent: '#00843D',
          tag: 'Grilled & Toasted',
        };
      case 'Street Bite':
        return {
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
          accent: '#F59E0B',
          tag: 'Rajkot Street Bite',
        };
      case 'Beverages':
        return {
          badge: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
          accent: '#38BDF8',
          tag: 'Chilled',
        };
      default:
        return {
          badge: 'bg-white/10 text-neutral-300 border-white/20',
          accent: '#FFFFFF',
          tag: category,
        };
    }
  };

  const theme = getCategoryTheme(item.category);

  return (
    <div
      className={`relative rounded-2xl bg-white dark:bg-[#0D1016] border transition-all duration-200 flex flex-col justify-between p-5 sm:p-6 group ${
        featured
          ? 'border-[#FFDD17] shadow-md dark:shadow-[0_10px_30px_rgba(255,221,23,0.12)] hover:-translate-y-1'
          : 'border-neutral-200/80 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/25 hover:-translate-y-1 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-xl'
      }`}
    >
      <div>
        {/* Top Meta Header: Veg Indicator, Category Tag */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-neutral-200/60 dark:border-white/8">
          <div className="flex items-center gap-2">
            {item.isVeg && <div className="veg-indicator" title="100% Pure Vegetarian" />}
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              {item.category}
            </span>
          </div>

          {item.tag ? (
            <span className="text-[10px] font-semibold text-amber-600 dark:text-[#FFDD17] bg-[#FFDD17]/15 dark:bg-[#FFDD17]/10 border border-[#FFDD17]/40 dark:border-[#FFDD17]/25 px-2 py-0.5 rounded-full">
              {item.tag}
            </span>
          ) : (
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${theme.badge}`}>
              {theme.tag}
            </span>
          )}
        </div>

        {/* Item Name */}
        <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFDD17] transition-colors leading-snug">
          {item.name}
        </h3>

        {/* Optional Description / Specific Note */}
        {item.description && (
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-body">
            {item.description}
          </p>
        )}
      </div>

      {/* Price & Action Footer */}
      <div className="mt-5 pt-4 border-t border-neutral-200/60 dark:border-white/8 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
            Price
          </span>
          {item.price !== null ? (
            <span className="font-mono text-lg sm:text-xl font-bold text-amber-600 dark:text-[#FFDD17] tabular-nums tracking-tight">
              ₹{item.price}
            </span>
          ) : (
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-2.5 py-1 rounded-md mt-0.5">
              {item.priceNote || 'Ask at counter'}
            </span>
          )}
        </div>

        {/* Subtle Brand Dot / Vegetarian Seal */}
        <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00843D]" />
          <span>Pure Veg</span>
        </div>
      </div>
    </div>
  );
};
