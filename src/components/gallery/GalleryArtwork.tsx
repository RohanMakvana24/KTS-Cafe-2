import React from 'react';

export interface GalleryArtworkProps {
  type: 'pizza' | 'maggie' | 'panipuri' | 'sandwich' | 'dabeli' | 'beverage';
  className?: string;
}

export const GalleryArtwork: React.FC<GalleryArtworkProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'pizza':
      return (
        <svg
          className={`w-full h-full object-contain ${className}`}
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Wood-fired artisanal pizza with melted cheese and fresh basil"
        >
          {/* Dark Stone Background Texture */}
          <rect width="400" height="300" fill="#0C0F14" />
          <circle cx="200" cy="150" r="140" fill="#141822" opacity="0.6" />

          {/* Wooden Pizza Peel */}
          <ellipse cx="200" cy="155" rx="135" ry="125" fill="#1E1712" stroke="#33241A" strokeWidth="4" />
          <path d="M70 155 Q200 170 330 155" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />

          {/* Wood-Fired Crust */}
          <circle cx="200" cy="150" r="115" fill="#B26C21" stroke="#7A420A" strokeWidth="6" />
          {/* Charred Wood-Fired Spots */}
          <circle cx="110" cy="115" r="7" fill="#3D1D05" opacity="0.85" />
          <circle cx="280" cy="95" r="8" fill="#3D1D05" opacity="0.9" />
          <circle cx="295" cy="180" r="7.5" fill="#3D1D05" opacity="0.85" />
          <circle cx="160" cy="245" r="8" fill="#3D1D05" opacity="0.8" />
          <circle cx="230" cy="250" r="6" fill="#3D1D05" opacity="0.8" />
          <circle cx="100" cy="190" r="6.5" fill="#3D1D05" opacity="0.85" />

          {/* Melted Mozzarella Cheese Bed */}
          <circle cx="200" cy="150" r="98" fill="#FFDC52" />
          {/* San Marzano Tomato Sauce Streaks */}
          <path
            d="M135 110 Q175 90 220 105 Q260 95 270 135 Q245 180 260 210 Q215 225 180 210 Q145 215 130 180 Q150 145 135 110Z"
            fill="#D32F2F"
            opacity="0.92"
          />
          <path
            d="M160 130 Q190 120 215 135 Q235 125 245 150 Q225 180 235 195 Q205 205 180 190 Q165 195 150 170 Q170 145 160 130Z"
            fill="#FFE885"
          />

          {/* Toppings: Cherry Tomato Halves */}
          <circle cx="160" cy="120" r="14" fill="#E01E25" stroke="#9A0007" strokeWidth="2" />
          <circle cx="240" cy="125" r="15" fill="#E01E25" stroke="#9A0007" strokeWidth="2" />
          <circle cx="200" cy="205" r="16" fill="#E01E25" stroke="#9A0007" strokeWidth="2" />
          <circle cx="150" cy="185" r="13" fill="#E01E25" stroke="#9A0007" strokeWidth="2" />
          <circle cx="245" cy="190" r="14" fill="#E01E25" stroke="#9A0007" strokeWidth="2" />

          {/* Fresh Basil Leaves (Pure Veg Green) */}
          <path d="M195 140 C180 120 190 100 215 112 C220 135 205 145 195 140Z" fill="#00843D" />
          <path d="M235 160 C260 148 255 130 235 130 C222 140 228 165 235 160Z" fill="#00843D" />
          <path d="M165 160 C145 172 155 192 175 180 C180 165 168 152 165 160Z" fill="#00843D" />

          {/* Bell Pepper Strips */}
          <path d="M200 105 Q220 95 235 110 Q225 120 200 105Z" fill="#FFDD17" stroke="#D1B300" strokeWidth="1.5" />
          <path d="M140 150 Q125 170 142 182 Q148 170 140 150Z" fill="#FFDD17" stroke="#D1B300" strokeWidth="1.5" />
          <path d="M220 170 Q240 175 235 190 Q220 185 220 170Z" fill="#FFDD17" stroke="#D1B300" strokeWidth="1.5" />

          {/* Black Olives */}
          <circle cx="180" cy="170" r="8" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
          <circle cx="220" cy="130" r="8" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
          <circle cx="195" cy="150" r="8.5" fill="#1A1A1A" stroke="#333333" strokeWidth="2.5" />
        </svg>
      );

    case 'maggie':
      return (
        <svg
          className={`w-full h-full object-contain ${className}`}
          viewBox="0 0 300 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Steaming hot butter masala Maggie noodles in ceramic bowl"
        >
          <rect width="300" height="220" fill="#0C0F14" />
          <circle cx="150" cy="115" r="95" fill="#131720" />

          {/* Black Ceramic Cafe Bowl Rim */}
          <ellipse cx="150" cy="120" rx="90" ry="65" fill="#1A1A1A" stroke="#2D2D2D" strokeWidth="4" />
          <ellipse cx="150" cy="115" rx="82" ry="56" fill="#F59E0B" />

          {/* Golden Curled Noodles Matrix */}
          <path
            d="M95 110 Q115 85 140 110 Q165 135 190 105 Q210 85 220 115"
            stroke="#FDE047"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M90 120 Q120 135 150 115 Q180 95 205 125"
            stroke="#FEF08A"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M105 100 Q130 115 155 95 Q185 115 210 100"
            stroke="#EAB308"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M110 130 Q140 110 170 130 Q195 115 215 125"
            stroke="#FACC15"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Rich Melting Butter Pat */}
          <rect x="135" y="100" width="30" height="18" rx="4" fill="#FEF9C3" stroke="#FDE047" strokeWidth="1.5" />

          {/* Sweet Corn Kernels */}
          <circle cx="115" cy="115" r="4.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
          <circle cx="130" cy="125" r="4.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
          <circle cx="175" cy="120" r="4.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
          <circle cx="190" cy="110" r="4.5" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />

          {/* Fresh Green Peas (Veg Green) */}
          <circle cx="120" cy="95" r="4.5" fill="#00843D" />
          <circle cx="180" cy="100" r="4.5" fill="#00843D" />
          <circle cx="150" cy="130" r="4.5" fill="#00843D" />

          {/* Crushed Red Pepper / Masala Flecks */}
          <circle cx="140" cy="115" r="2" fill="#E01E25" />
          <circle cx="165" cy="108" r="2" fill="#E01E25" />
          <circle cx="130" cy="105" r="1.5" fill="#E01E25" />

          {/* Rising Steam Waves */}
          <path d="M135 80 Q130 65 138 50" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M150 75 Q155 60 148 45" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M165 80 Q160 65 168 50" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'panipuri':
      return (
        <svg
          className={`w-full h-full object-contain ${className}`}
          viewBox="0 0 300 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Crispy puffed puris with spiced potato and chilled mint pani"
        >
          <rect width="300" height="220" fill="#0C0F14" />

          {/* Terracotta / Brass Chaat Platter */}
          <ellipse cx="150" cy="120" rx="100" ry="70" fill="#1C1814" stroke="#382C22" strokeWidth="3" />

          {/* Bowl of Chilled Mint Pani (Spiced Green Water) */}
          <ellipse cx="150" cy="115" rx="42" ry="32" fill="#1B4D2E" stroke="#00843D" strokeWidth="3" />
          <ellipse cx="150" cy="112" rx="36" ry="26" fill="#2E7D32" />
          {/* Mint Leaves in bowl */}
          <circle cx="145" cy="110" r="3" fill="#A5D6A7" />
          <circle cx="155" cy="115" r="2.5" fill="#A5D6A7" />
          <circle cx="140" cy="116" r="2" fill="#C8E6C9" />

          {/* Crisp Puffed Puris Around Bowl */}
          {/* Puri 1 (Top Left) */}
          <ellipse cx="100" cy="90" rx="22" ry="18" fill="#D98A32" stroke="#9A5615" strokeWidth="2" />
          <ellipse cx="98" cy="88" rx="18" ry="14" fill="#F5AF52" />
          {/* Cracked hole with spiced potato & ragda filling */}
          <ellipse cx="98" cy="88" rx="9" ry="7" fill="#7C4A1E" />
          <circle cx="98" cy="88" r="3" fill="#D32F2F" />

          {/* Puri 2 (Top Right) */}
          <ellipse cx="200" cy="90" rx="22" ry="18" fill="#D98A32" stroke="#9A5615" strokeWidth="2" />
          <ellipse cx="198" cy="88" rx="18" ry="14" fill="#F5AF52" />
          <ellipse cx="198" cy="88" rx="9" ry="7" fill="#7C4A1E" />
          <circle cx="198" cy="88" r="3" fill="#00843D" />

          {/* Puri 3 (Bottom Left) */}
          <ellipse cx="95" cy="140" rx="22" ry="18" fill="#D98A32" stroke="#9A5615" strokeWidth="2" />
          <ellipse cx="93" cy="138" rx="18" ry="14" fill="#F5AF52" />
          <ellipse cx="93" cy="138" rx="9" ry="7" fill="#7C4A1E" />

          {/* Puri 4 (Bottom Right) */}
          <ellipse cx="205" cy="140" rx="22" ry="18" fill="#D98A32" stroke="#9A5615" strokeWidth="2" />
          <ellipse cx="203" cy="138" rx="18" ry="14" fill="#F5AF52" />
          <ellipse cx="203" cy="138" rx="9" ry="7" fill="#7C4A1E" />

          {/* Golden Boondi droplets */}
          <circle cx="120" cy="130" r="3" fill="#FFDD17" />
          <circle cx="178" cy="132" r="3" fill="#FFDD17" />
          <circle cx="150" cy="160" r="3.5" fill="#FFDD17" />
        </svg>
      );

    case 'sandwich':
      return (
        <svg
          className={`w-full h-full object-contain ${className}`}
          viewBox="0 0 300 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Multi-layered golden grilled vegetable sandwich with cheese stretch"
        >
          <rect width="300" height="220" fill="#0C0F14" />

          {/* Wooden Serving Board */}
          <rect x="35" y="40" width="230" height="140" rx="16" fill="#1C1611" stroke="#33241A" strokeWidth="3" />

          {/* Triangle Cut Grilled Sandwich Halves */}
          {/* Half 1 (Foreground) */}
          <path d="M70 155 L165 65 L210 155 Z" fill="#D98A32" stroke="#8A4810" strokeWidth="2" />
          {/* Golden Grill Ridge Marks */}
          <path d="M95 145 L155 85" stroke="#663308" strokeWidth="3" strokeLinecap="round" />
          <path d="M120 155 L175 100" stroke="#663308" strokeWidth="3" strokeLinecap="round" />
          <path d="M145 155 L195 115" stroke="#663308" strokeWidth="3" strokeLinecap="round" />

          {/* Internal Layers Visible on Sliced Edge */}
          {/* Molten Cheese Layer */}
          <path d="M70 155 L210 155" stroke="#FFDC52" strokeWidth="6" strokeLinecap="round" />
          {/* Green Mint Chutney Layer */}
          <path d="M75 152 L205 152" stroke="#00843D" strokeWidth="3" strokeLinecap="round" />
          {/* Tomato Layer */}
          <circle cx="110" cy="154" r="4" fill="#E01E25" />
          <circle cx="160" cy="154" r="4" fill="#E01E25" />
          {/* Cucumber Layer */}
          <circle cx="135" cy="154" r="3.5" fill="#86EFAC" />
          <circle cx="185" cy="154" r="3.5" fill="#86EFAC" />

          {/* Melting Cheese Drip */}
          <path d="M125 158 Q130 170 135 158" fill="#FFDC52" />
          <path d="M170 158 Q174 168 178 158" fill="#FFDC52" />

          {/* Potato Wafers / Chips on Side */}
          <circle cx="230" cy="85" r="16" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />
          <circle cx="240" cy="110" r="15" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
        </svg>
      );

    case 'dabeli':
      return (
        <svg
          className={`w-full h-full object-contain ${className}`}
          viewBox="0 0 300 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Rajkot special spiced potato dabeli with pomegranate seeds and nylon sev"
        >
          <rect width="300" height="220" fill="#0C0F14" />

          {/* Paper Liner Plate */}
          <ellipse cx="150" cy="120" rx="95" ry="65" fill="#171A21" stroke="#2B303C" strokeWidth="2" />

          {/* Golden Toasted Pav Bun Bottom */}
          <ellipse cx="150" cy="135" rx="72" ry="32" fill="#D98A32" stroke="#8A4810" strokeWidth="2" />

          {/* Spiced Red Potato Masala Filling */}
          <ellipse cx="150" cy="120" rx="68" ry="26" fill="#B91C1C" />

          {/* Toasted Pav Bun Top */}
          <path
            d="M80 115 C80 80 220 80 220 115 C220 128 80 128 80 115 Z"
            fill="#E59840"
            stroke="#9A5615"
            strokeWidth="3"
          />
          <path d="M100 95 Q150 90 200 95" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />

          {/* Vibrant Red Pomegranate Seeds (Anar) */}
          <circle cx="105" cy="122" r="3.5" fill="#E01E25" stroke="#881337" strokeWidth="1" />
          <circle cx="130" cy="120" r="3.5" fill="#E01E25" stroke="#881337" strokeWidth="1" />
          <circle cx="160" cy="124" r="3.5" fill="#E01E25" stroke="#881337" strokeWidth="1" />
          <circle cx="190" cy="121" r="3.5" fill="#E01E25" stroke="#881337" strokeWidth="1" />

          {/* Roasted Masala Peanuts */}
          <ellipse cx="118" cy="125" rx="5" ry="3" fill="#D97706" />
          <ellipse cx="175" cy="122" rx="5" ry="3" fill="#D97706" />

          {/* Golden Crispy Nylon Sev Garnish */}
          <path d="M85 125 L95 122 M140 128 L150 125 M180 126 L195 123" stroke="#FFDD17" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 128 L112 125 M155 127 L168 124 M198 127 L208 124" stroke="#FFDD17" strokeWidth="2" strokeLinecap="round" />

          {/* Fresh Coriander Garnish */}
          <circle cx="145" cy="122" r="2.5" fill="#00843D" />
          <circle cx="168" cy="120" r="2.5" fill="#00843D" />
        </svg>
      );

    case 'beverage':
      return (
        <svg
          className={`w-full h-full object-contain ${className}`}
          viewBox="0 0 300 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Chilled hazelnut cold coffee frappe with chocolate drizzle and Gujarati chaas"
        >
          <rect width="300" height="220" fill="#0C0F14" />

          {/* Glass Coaster */}
          <ellipse cx="150" cy="165" rx="60" ry="20" fill="#171A21" stroke="#2B303C" strokeWidth="2" />

          {/* Modern Cafe Frosted Glass Cup */}
          <path
            d="M115 65 L125 155 Q150 162 175 155 L185 65 Z"
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2.5"
          />

          {/* Chilled Cold Coffee Layer */}
          <path
            d="M120 85 L127 150 Q150 156 173 150 L180 85 Z"
            fill="#5D3A1A"
          />

          {/* Belgian Chocolate Drizzle Swirls Inside Glass */}
          <path d="M125 95 Q145 110 135 130 Q160 145 170 120" stroke="#2B1506" strokeWidth="4" strokeLinecap="round" />

          {/* Whipped Cream Top Dome */}
          <path
            d="M115 65 Q150 40 185 65 Q185 75 115 75 Z"
            fill="#FFFBEB"
            stroke="#FEF3C7"
            strokeWidth="1.5"
          />

          {/* Chocolate Sauce Zigzag on Whipped Cream */}
          <path d="M125 60 Q135 52 145 62 Q155 54 165 62 Q175 55 180 62" stroke="#3D1D05" strokeWidth="2.5" strokeLinecap="round" />

          {/* Roasted Hazelnut Bits on Top */}
          <circle cx="135" cy="55" r="2" fill="#D97706" />
          <circle cx="155" cy="52" r="2" fill="#D97706" />
          <circle cx="170" cy="56" r="2" fill="#D97706" />

          {/* Drinking Straw (Brand Yellow #FFDD17) */}
          <path d="M165 40 L180 18 L190 18" stroke="#FFDD17" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Glass Condensation Droplets */}
          <circle cx="132" cy="115" r="2" fill="rgba(255,255,255,0.7)" />
          <circle cx="168" cy="135" r="2.5" fill="rgba(255,255,255,0.7)" />
          <circle cx="140" cy="140" r="1.5" fill="rgba(255,255,255,0.7)" />
        </svg>
      );
  }
};
