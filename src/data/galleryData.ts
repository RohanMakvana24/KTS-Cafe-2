export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  visualType: 'pizza' | 'maggie' | 'panipuri' | 'sandwich' | 'dabeli' | 'beverage';
  aspectRatio: 'featured' | 'landscape' | 'portrait' | 'square';
  gridSpan: string; // Tailwind grid span classes
  imageAlt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-pizza-woodfired',
    title: 'Artisanal Wood-Fired Margherita',
    category: 'Wood-Fired Pizza',
    tag: '10-inch Crust',
    description: 'Stone-baked thin crust with blistered golden edges, bubbling mozzarella, San Marzano reduction, and fresh garden basil.',
    visualType: 'pizza',
    aspectRatio: 'featured',
    gridSpan: 'col-span-12 lg:col-span-8 lg:row-span-2 min-h-[360px] sm:min-h-[460px] lg:min-h-[540px]',
    imageAlt: 'Handcrafted wood-fired artisanal pizza with melted cheese and fresh basil',
  },
  {
    id: 'gallery-maggie-butter',
    title: 'Signature Butter Masala Maggie',
    category: "Maggie’s Corner",
    tag: 'Steaming Hot',
    description: 'Wok-tossed noodles in rich butter, sweet corn, crunchy bell peppers, and house-blended aromatic masala spices.',
    visualType: 'maggie',
    aspectRatio: 'landscape',
    gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[290px]',
    imageAlt: 'Steaming bowl of butter masala Maggie with corn and garden vegetables',
  },
  {
    id: 'gallery-panipuri-live',
    title: 'Live Crispy Pani Puri Platter',
    category: "Chaat’s Special",
    tag: 'Pani Puri Live',
    description: 'Crisp semolina puris filled with spiced black chana, mashed potatoes, and chilled sweet-tangy mint coriander water.',
    visualType: 'panipuri',
    aspectRatio: 'landscape',
    gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[260px] sm:min-h-[290px]',
    imageAlt: 'Crisp golden puris served with mint water and spiced tamarind filling',
  },
  {
    id: 'gallery-sandwich-grilled',
    title: 'Triple-Decker Grilled Sandwich',
    category: 'Sandwich',
    tag: 'Cheese & Veg',
    description: 'Slow-grilled with distinctive golden ridges, loaded with seasoned vegetables, fresh green mint chutney, and molten cheese.',
    visualType: 'sandwich',
    aspectRatio: 'square',
    gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[280px] sm:min-h-[320px]',
    imageAlt: 'Golden toasted multi-layer vegetable grilled sandwich with cheese stretch',
  },
  {
    id: 'gallery-dabeli-masala',
    title: 'Rajkot Special Masala Dabeli',
    category: 'Street Bite',
    tag: 'Street Favourite',
    description: 'Soft pav bun stuffed with rich aromatic potato masala, roasted masala peanuts, ruby pomegranate pearls, and nylon sev.',
    visualType: 'dabeli',
    aspectRatio: 'square',
    gridSpan: 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[280px] sm:min-h-[320px]',
    imageAlt: 'Traditional dabeli loaded with spiced potato, pomegranate, peanuts, and sev',
  },
  {
    id: 'gallery-beverage-frappe',
    title: 'Royal Hazelnut Cold Coffee & Chaas',
    category: 'Beverages',
    tag: 'Chilled Brew',
    description: 'Rich dark espresso blended with roasted hazelnut syrup, chilled thick milk, chocolate drizzle, alongside fresh Gujarati chaas.',
    visualType: 'beverage',
    aspectRatio: 'square',
    gridSpan: 'col-span-12 lg:col-span-4 min-h-[280px] sm:min-h-[320px]',
    imageAlt: 'Chilled hazelnut cold coffee frappe and fresh spiced buttermilk',
  },
];
