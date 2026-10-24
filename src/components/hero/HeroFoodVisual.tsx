import React, { useState } from 'react';
import { Sparkles, Flame, Eye, RefreshCw, Box } from 'lucide-react';
import { ThreePizzaCanvas } from './ThreePizzaCanvas';

export interface HeroFoodVisualProps {
  onExploreMenu?: () => void;
}

export const HeroFoodVisual: React.FC<HeroFoodVisualProps> = ({
  onExploreMenu,
}) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'campaign'>('interactive');
  const [threeLoaded, setThreeLoaded] = useState(false);

  return (
    <div className="relative w-full max-w-[560px] lg:max-w-none mx-auto flex flex-col items-center select-none">
      {/* Background Ambient Radial Glow (Anti-slop: disciplined, warm restaurant glow) */}
      <div
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#FFDD17]/12 via-[#E01E25]/8 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Container Card */}
      <div className="relative w-full aspect-[4/3.6] sm:aspect-[4/3.4] lg:aspect-[4/3.3] rounded-3xl bg-gradient-to-b from-[#0D1015] to-[#07090C] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden flex items-center justify-center p-2 sm:p-4">
        {/* Subtle Top-Bar Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
          {/* Authentic Pure Vegetarian Green Indicator */}
          <div className="flex items-center gap-2 bg-[#050708]/80 backdrop-blur-md border border-white/8 px-3 py-1.5 rounded-xl">
            <div className="veg-indicator" title="100% Pure Vegetarian" />
            <span className="text-xs font-semibold text-[#00843D] tracking-wide">
              100% Pure Veg
            </span>
          </div>

          {/* Mode Switcher: Interactive Canvas vs Campaign Visual */}
          <div className="flex items-center gap-1 bg-[#050708]/85 backdrop-blur-md border border-white/10 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-[#FFDD17] text-[#050708] font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              aria-label="View interactive pizza"
            >
              <Box className="w-3.5 h-3.5" />
              <span>Interactive</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('campaign')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'campaign'
                  ? 'bg-[#FFDD17] text-[#050708] font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
              aria-label="View campaign visual"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Campaign</span>
            </button>
          </div>
        </div>

        {/* 3D WebGL Canvas Mode */}
        {viewMode === 'interactive' ? (
          <div className="w-full h-full relative z-10 flex items-center justify-center">
            <ThreePizzaCanvas
              interactive={true}
              onLoaded={() => setThreeLoaded(true)}
            />
          </div>
        ) : (
          /* Editorial Advertising Still Campaign Frame Mode */
          <div className="w-full h-full relative z-10 flex items-center justify-center p-6">
            <div className="relative w-full h-full max-w-md flex items-center justify-center group">
              {/* Wooden Serving Board Background Graphic */}
              <div className="absolute w-72 h-72 sm:w-84 sm:h-84 rounded-full bg-[#1A1612] border-4 border-[#2D241C] shadow-2xl flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
                {/* Wood Grain Lines */}
                <div className="absolute inset-4 rounded-full border border-white/5 opacity-50" />
                <div className="absolute inset-10 rounded-full border border-white/5 opacity-30" />
              </div>

              {/* High-Contrast Food Advertising Artwork */}
              <svg
                className="relative z-10 w-64 h-64 sm:w-76 sm:h-76 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transform group-hover:rotate-3 transition-transform duration-700"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Artisanal Handcrafted Pizza Advertising Artwork"
              >
                {/* Wood-fired crust ring */}
                <circle cx="100" cy="100" r="92" fill="#BA7324" stroke="#87480E" strokeWidth="5" />
                {/* Charred wood-fired spots */}
                <circle cx="35" cy="75" r="5" fill="#422108" opacity="0.8" />
                <circle cx="150" cy="50" r="6" fill="#422108" opacity="0.85" />
                <circle cx="165" cy="120" r="5.5" fill="#422108" opacity="0.8" />
                <circle cx="70" cy="170" r="6" fill="#422108" opacity="0.75" />
                <circle cx="120" cy="175" r="4" fill="#422108" opacity="0.75" />
                <circle cx="30" cy="130" r="4.5" fill="#422108" opacity="0.8" />

                {/* Melted Cheese Surface */}
                <circle cx="100" cy="100" r="78" fill="#FFDC52" />
                {/* Sauce Marbling */}
                <path d="M55 70 Q80 50 110 65 Q145 55 155 85 Q135 120 150 145 Q115 160 85 145 Q60 150 48 120 Q65 95 55 70Z" fill="#D32F2F" opacity="0.92" />
                <path d="M70 85 Q95 75 115 90 Q130 80 140 100 Q125 125 135 135 Q110 145 90 130 Q75 135 65 115 Q80 98 70 85Z" fill="#FFEB80" />

                {/* Toppings: Cherry Tomatoes */}
                <circle cx="72" cy="75" r="11" fill="#E01E25" stroke="#B71C1C" strokeWidth="1.5" />
                <path d="M72 65 Q74 61 77 65 Q74 67 72 65Z" fill="#00843D" />
                <circle cx="135" cy="80" r="12" fill="#E01E25" stroke="#B71C1C" strokeWidth="1.5" />
                <path d="M135 69 Q138 65 141 69 Q138 71 135 69Z" fill="#00843D" />
                <circle cx="100" cy="140" r="12.5" fill="#E01E25" stroke="#B71C1C" strokeWidth="1.5" />
                <circle cx="65" cy="125" r="10" fill="#E01E25" stroke="#B71C1C" strokeWidth="1.5" />
                <circle cx="130" cy="130" r="11" fill="#E01E25" stroke="#B71C1C" strokeWidth="1.5" />

                {/* Toppings: Fresh Basil Leaves */}
                <path d="M95 90 C85 75 92 60 110 70 C114 90 102 96 95 90Z" fill="#00843D" />
                <path d="M125 105 C145 95 140 82 125 82 C115 88 120 108 125 105Z" fill="#00843D" />
                <path d="M75 105 C60 115 68 130 85 122 C88 110 78 100 75 105Z" fill="#00843D" />

                {/* Toppings: Bell Pepper Strips (#FFDD17) */}
                <path d="M100 65 Q115 58 125 68 Q118 75 100 65Z" fill="#FFDD17" stroke="#E6C805" strokeWidth="1" />
                <path d="M55 100 Q45 115 58 125 Q62 115 55 100Z" fill="#FFDD17" stroke="#E6C805" strokeWidth="1" />
                <path d="M115 115 Q130 118 125 130 Q115 125 115 115Z" fill="#FFDD17" stroke="#E6C805" strokeWidth="1" />

                {/* Black Olives */}
                <circle cx="85" cy="115" r="6" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
                <circle cx="115" cy="85" r="6" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="6.5" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
                <circle cx="145" cy="105" r="5.5" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom Feature Bar */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs">
          <div className="bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl flex items-center gap-2 text-neutral-200">
            <Flame className="w-4 h-4 text-[#E01E25]" />
            <span className="font-medium">Wood-Fired Stone Baked</span>
          </div>

          <div className="bg-[#050708]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-neutral-300 font-mono text-[11px] tabular-nums">
            10-inch · Fresh Daily
          </div>
        </div>
      </div>
    </div>
  );
};
