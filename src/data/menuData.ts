export type MenuCategory =
  | 'At a Glance'
  | "Maggie’s Corner"
  | 'Farali'
  | "Chaat’s"
  | 'Sandwich'
  | 'Street Bite'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'At a Glance'>;
  price: number | null;
  priceNote?: string;
  description?: string;
  isAtAGlance?: boolean;
  isVeg: boolean;
  tag?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  'At a Glance',
  "Maggie’s Corner",
  'Farali',
  "Chaat’s",
  'Sandwich',
  'Street Bite',
  'Beverages',
];

export const CATEGORY_DESCRIPTIONS: Record<MenuCategory, string> = {
  'At a Glance': 'Featured highlights and quick favourites across our kitchen.',
  "Maggie’s Corner": 'Freshly simmered noodles tossed in house spices, fresh vegetables, and melted cheese.',
  Farali: 'Traditional fasting-friendly recipes prepared with care and authentic seasonings.',
  "Chaat’s": 'Crispy puris, tangy chutneys, and classic street-side chaats freshly assembled to order.',
  Sandwich: 'Layered toasts and grilled sandwiches loaded with fresh veggies, butter, and cheese.',
  'Street Bite': 'Rajkot’s beloved street-side delights, soft buns, and aromatic dabelis.',
  Beverages: 'Refreshing chilled drinks, traditional butter milk, and packaged mineral waters.',
};

export const MENU_ITEMS: MenuItem[] = [
  // --- Maggie’s Corner ---
  {
    id: 'plain-maggie',
    name: 'Plain Maggie',
    category: "Maggie’s Corner",
    price: 50,
    isAtAGlance: true,
    isVeg: true,
    description: 'Classic warm instant noodles prepared simple and comforting.',
  },
  {
    id: 'masala-maggie',
    name: 'Masala Maggie',
    category: "Maggie’s Corner",
    price: 70,
    isVeg: true,
    description: 'Simmered with aromatic Indian masala spice blend.',
  },
  {
    id: 'vegetable-maggie',
    name: 'Vegetable Maggie',
    category: "Maggie’s Corner",
    price: 90,
    isVeg: true,
    description: 'Tossed with crunchy bell peppers, garden peas, and onions.',
  },
  {
    id: 'butter-maggie',
    name: 'Butter Maggie',
    category: "Maggie’s Corner",
    price: 70,
    isVeg: true,
    description: 'Rich and silky noodles tossed with generous butter.',
  },
  {
    id: 'cheese-butter-maggie',
    name: 'Cheese Butter Maggie',
    category: "Maggie’s Corner",
    price: 100,
    isVeg: true,
    description: 'Topped with melted cheese and butter for extra richness.',
  },
  {
    id: 'vegetable-cheese-maggie',
    name: 'Vegetable Cheese',
    category: "Maggie’s Corner",
    price: 120,
    isVeg: true,
    description: 'Fresh vegetables folded with creamy melted cheese.',
  },
  {
    id: 'vegetable-tadka-maggie',
    name: 'Vegetable Tadka',
    category: "Maggie’s Corner",
    price: 127,
    isVeg: true,
    description: 'Spiced with a fragrant sizzling vegetable tempering.',
  },
  {
    id: 'cheese-vegetable-tadka-maggie',
    name: 'Cheese Vegetable Tadka',
    category: "Maggie’s Corner",
    price: 140,
    isVeg: true,
    description: 'Sizzling tadka vegetables crowned with melted cheese.',
  },
  {
    id: 'hot-schezwan-maggie',
    name: 'Hot Schezwan',
    category: "Maggie’s Corner",
    price: 70,
    isVeg: true,
    description: 'Spicy wok-tossed noodles with fiery Schezwan chili sauce.',
  },

  // --- Farali ---
  {
    id: 'special-upvas-farali-bhel',
    name: 'Special Upvas Farali Bhel',
    category: 'Farali',
    price: 100,
    isAtAGlance: true,
    isVeg: true,
    description: 'Crunchy fasting-friendly potato crisps and nuts tossed in tangy farali chutney.',
  },

  // --- Chaat’s ---
  {
    id: 'pani-puri',
    name: 'Pani Puri',
    category: "Chaat’s",
    price: 42,
    description: 'Pani Puri Live',
    isAtAGlance: true,
    isVeg: true,
    tag: 'Live Assembly',
  },
  {
    id: 'sev-puri',
    name: 'Sev Puri',
    category: "Chaat’s",
    price: 83,
    isVeg: true,
    description: 'Flat crispy puris layered with spiced potatoes, tangy chutneys, and fine sev.',
  },
  {
    id: 'dahi-puri',
    name: 'Dahi Puri',
    category: "Chaat’s",
    price: 83,
    isVeg: true,
    description: 'Crispy puffed puris filled with potatoes, sweetened curd, and sweet-tangy chutney.',
  },
  {
    id: 'ragda-puri',
    name: 'Ragda Puri',
    category: "Chaat’s",
    price: 83,
    isVeg: true,
    description: 'Crisp puris drenched in warm spiced yellow pea ragda and toppings.',
  },
  {
    id: 'bhel-puri',
    name: 'Bhel Puri',
    category: "Chaat’s",
    price: 83,
    isVeg: true,
    description: 'Puffed rice tossed with onions, tomatoes, raw mango, sev, and assorted chutneys.',
  },
  {
    id: 'ragda-pani-puri',
    name: 'Ragda Pani Puri',
    category: "Chaat’s",
    price: 42,
    isVeg: true,
    description: 'Hot ragda filling paired with refreshing spiced herb water.',
  },
  {
    id: 'special-bhel',
    name: 'Special Bhel',
    category: "Chaat’s",
    price: 60,
    isVeg: true,
    description: 'House signature bhel mixture with fresh garnishes.',
  },
  {
    id: 'ragda-petis',
    name: 'Ragda Petis',
    category: "Chaat’s",
    price: 83,
    isVeg: true,
    description: 'Pan-fried potato patties served over steaming hot spiced ragda.',
  },
  {
    id: 'daal-pakwan',
    name: 'Daal Pakwan',
    category: "Chaat’s",
    price: 50,
    isVeg: true,
    description: 'Crisp seasoned flatbread served with tempered chana dal and chutneys.',
  },
  {
    id: 'dahi-vada',
    name: 'Dahi Vada',
    category: "Chaat’s",
    price: 83,
    isVeg: true,
    description: 'Soft lentil dumplings soaked in chilled whipped yogurt with roasted cumin and tamarind.',
  },
  {
    id: 'chana-protine-plate',
    name: 'Chana Protine Plate',
    category: "Chaat’s",
    price: 100,
    isVeg: true,
    description: 'Nutritious seasoned chickpeas tossed with lemon, coriander, and fresh herbs.',
  },
  {
    id: 'extra-pau',
    name: 'Extra Pau',
    category: "Chaat’s",
    price: 15,
    isVeg: true,
    description: 'Freshly baked soft bread pav accompaniment.',
  },

  // --- Sandwich ---
  {
    id: 'bread-butter-sandwich',
    name: 'Bread Butter',
    category: 'Sandwich',
    price: 30,
    isVeg: true,
    description: 'Fresh bread slices spread with generous salted butter.',
  },
  {
    id: 'bread-butter-jam-sandwich',
    name: 'Bread Butter Jam',
    category: 'Sandwich',
    price: 50,
    description: 'Kissan Jam — Mixfruit / Pineapple',
    isVeg: true,
  },
  {
    id: 'masala-sandwich',
    name: 'Masala Sandwich',
    category: 'Sandwich',
    price: 50,
    isVeg: true,
    description: 'Stuffed with spiced potato filling, mint chutney, and chaat masala.',
  },
  {
    id: 'cheese-masala-sandwich',
    name: 'Cheese Masala Sandwich',
    category: 'Sandwich',
    price: 90,
    isVeg: true,
    description: 'Masala sandwich topped with a rich layer of grated cheese.',
  },
  {
    id: 'vegetable-sandwich',
    name: 'Vegetable Sandwich',
    category: 'Sandwich',
    price: 70,
    isVeg: true,
    description: 'Fresh sliced cucumbers, tomatoes, and capsicum with herb butter.',
  },
  {
    id: 'vegetable-tost',
    name: 'Vegetable Tost',
    category: 'Sandwich',
    price: 90,
    isVeg: true,
    description: 'Toasted golden crisp with fresh vegetable fillings and chutney.',
  },
  {
    id: 'vegetable-cheese-sandwich',
    name: 'Vegetable Cheese',
    category: 'Sandwich',
    price: 80,
    isVeg: true,
    description: 'Classic vegetable sandwich with creamy cheese slices.',
  },
  {
    id: 'vegetable-cheese-tost',
    name: 'Vegetable Cheese Tost',
    category: 'Sandwich',
    price: 100,
    isVeg: true,
    description: 'Toasted golden crust filled with molten cheese and crisp vegetables.',
  },
  {
    id: 'nutella-cheese-sandwich',
    name: 'Nutella Cheese Sandwich',
    category: 'Sandwich',
    price: 100,
    isVeg: true,
    description: 'Sweet and savory fusion with rich chocolate hazelnut spread and cheese.',
  },
  {
    id: 'pineapple-cheese-pineapple',
    name: 'Pineapple Cheese Pineapple',
    category: 'Sandwich',
    price: 110,
    isVeg: true,
    description: 'Signature combination of juicy pineapple slices and savory cheese layers.',
  },
  {
    id: 'cheese-grill',
    name: 'Cheese Grill',
    category: 'Sandwich',
    price: 60,
    isVeg: true,
    description: 'Grilled with golden ridge marks and melting cheese.',
  },

  // --- Street Bite ---
  {
    id: 'bread-katka',
    name: 'Bread Katka',
    category: 'Street Bite',
    price: 83,
    isVeg: true,
    description: 'Rajkot’s famous street specialty of spiced bread pieces tossed in rich savory gravy.',
  },
  {
    id: 'dabeli',
    name: 'Dabeli',
    category: 'Street Bite',
    price: 45,
    isVeg: true,
    description: 'Spiced potato filling in a soft bun with roasted peanuts, pomegranate, and sweet chutney.',
  },
  {
    id: 'cheese-dabeli',
    name: 'Cheese Dabeli',
    category: 'Street Bite',
    price: 70,
    isVeg: true,
    description: 'Classic dabeli elevated with generous grated cheese.',
  },
  {
    id: 'maskabun-jam-butter',
    name: 'Maskabun Jam Butter',
    category: 'Street Bite',
    price: 43,
    isVeg: true,
    description: 'Soft bun smeared with creamy makkhan butter and fruit jam.',
  },
  {
    id: 'bread-butter-street',
    name: 'Bread Butter',
    category: 'Street Bite',
    price: 30,
    isVeg: true,
    description: 'Quick street-style bread slices buttered fresh.',
  },
  {
    id: 'bread-butter-jam-street',
    name: 'Bread Butter Jam',
    category: 'Street Bite',
    price: 50,
    description: 'Kissan Jam — Mixfruit / Pineapple',
    isVeg: true,
  },

  // --- Beverages ---
  {
    id: 'butter-milk',
    name: 'Butter Milk',
    category: 'Beverages',
    price: 20,
    isVeg: true,
    description: 'Refreshing traditional Gujarati spiced chaas with roasted cumin.',
  },
  {
    id: 'cold-drink',
    name: 'Cold Drink',
    category: 'Beverages',
    price: null,
    priceNote: 'Price on request',
    isVeg: true,
    description: 'Chilled carbonated soft drinks. Inquire at counter for available flavours.',
  },
  {
    id: 'chilled-mineral-water-1ltr',
    name: 'Chilled Mineral Water (1 Ltr)',
    category: 'Beverages',
    price: 20,
    isVeg: true,
    description: '1 Litre chilled purified mineral drinking water.',
  },
  {
    id: 'chilled-sealed-mineral-water-1ltr',
    name: 'Chilled Sealed Mineral Water (1 Ltr)',
    category: 'Beverages',
    price: null,
    priceNote: 'Price on request',
    isVeg: true,
    description: '1 Litre factory-sealed chilled mineral water. Price confirmed at counter.',
  },
  {
    id: 'chilled-mineral-water-500ml',
    name: 'Chilled Mineral Water (500 ML)',
    category: 'Beverages',
    price: 10,
    isVeg: true,
    description: '500 ML chilled purified mineral drinking water.',
  },
  {
    id: 'chilled-sealed-mineral-water-500ml',
    name: 'Chilled Sealed Mineral Water (500 ML)',
    category: 'Beverages',
    price: null,
    priceNote: 'Price on request',
    isVeg: true,
    description: '500 ML factory-sealed chilled mineral water. Price confirmed at counter.',
  },
  {
    id: 'bisleri-vedica-spring-water',
    name: 'Bisleri Vedica Spring Water',
    category: 'Beverages',
    price: 60,
    isVeg: true,
    description: 'Himalayan mountain spring water naturally enriched with minerals.',
  },
];
