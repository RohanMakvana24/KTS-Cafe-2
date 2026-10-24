"use client";
import React from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
  highlight?: string;
}

export const testimonials: TestimonialItem[] = [
  {
    text: "The stone-baked margherita and peri-peri paneer pizza are easily the best in Rajkot! Super fresh crust, generous cheese, and amazing ambiance for friends.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Pooja Patel",
    role: "Food Blogger & Local Diner",
    rating: 5,
    highlight: "Stone-Baked Pizza",
  },
  {
    text: "KT's special butter Maggi and thick cold coffee is our mandatory evening ritual after college. Consistent taste and quick service every single time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Aakash Mehta",
    role: "Regular Guest",
    rating: 5,
    highlight: "Butter Maggi & Cold Coffee",
  },
  {
    text: "Pure veg heaven! Clean kitchen, wonderful courteous staff, and the paneer tikka sandwich was toasted to crispy perfection. Highly recommended.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Dr. Riddhi Shah",
    role: "Family Visitor",
    rating: 5,
    highlight: "100% Pure Veg",
  },
  {
    text: "Loved the quiet, ambient corner seating on the first floor. Perfect spot for quick meetings while sipping an iced caramel frappe.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Harsh Joshi",
    role: "Creative Consultant",
    rating: 5,
    highlight: "Cozy Ambiance",
  },
  {
    text: "From crispy cheese loaded fries to sizzling hot sizzlers, everything we ordered was piping hot and 100% pure vegetarian. Five stars for quality!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Neha Vora",
    role: "Weekend Food Enthusiast",
    rating: 5,
    highlight: "Loaded Fries & Sizzlers",
  },
  {
    text: "Great taste, hygienic preparation, and honest pricing. It's rare to find such high food consistency in town. The chocolate indulgence shake is unbelievable.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Ketan Trivedi",
    role: "Rajkot Resident",
    rating: 5,
    highlight: "Chocolate Shake",
  },
  {
    text: "Celebrated my sister's birthday here last Friday. The staff was so welcoming and the garlic bread platter was the highlight of our evening.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Bhavna Dave",
    role: "Guest",
    rating: 5,
    highlight: "Garlic Bread Platter",
  },
  {
    text: "Best spot on Kalawad Road for genuine comfort food. The spicy schezwan noodles and kitkat shake hit the sweet spot every visit.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Manan Kothari",
    role: "Student",
    rating: 5,
    highlight: "Schezwan Noodles",
  },
  {
    text: "Warm hospitality and delicious food. Even during peak rush hours, orders are served hot with smiling faces. Proud to have KT's Cafe in our neighbourhood.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80",
    name: "Simran Desai",
    role: "Diner",
    rating: 5,
    highlight: "Warm Hospitality",
  },
];

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <article
      className="group relative p-5 sm:p-7 rounded-3xl border border-neutral-200/90 dark:border-white/10 bg-white/95 dark:bg-[#0E131C]/95 backdrop-blur-md shadow-lg shadow-black/4 dark:shadow-black/25 max-w-[280px] min-[380px]:max-w-xs sm:max-w-sm w-full text-left transition-all duration-300 hover:border-amber-400/50 dark:hover:border-[#FFDD17]/40 hover:shadow-xl hover:shadow-amber-500/5 dark:hover:shadow-[#FFDD17]/10 hover:-translate-y-1"
    >
      {/* Top Row: 5 Star rating & Highlight Tag */}
      <div className="flex items-center justify-between gap-2 mb-3.5">
        <div className="flex items-center gap-1 text-[#FFDD17]" aria-label="5 out of 5 stars">
          {[...Array(item.rating || 5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#FFDD17] text-[#FFDD17]" />
          ))}
        </div>
        {item.highlight && (
          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-[#FFDD17] border border-amber-500/20">
            {item.highlight}
          </span>
        )}
      </div>

      {/* Quote Body */}
      <div className="relative">
        <Quote className="w-5 h-5 text-neutral-300 dark:text-neutral-700 absolute -top-1 -left-1 opacity-40 pointer-events-none" />
        <p className="text-xs sm:text-[13px] text-neutral-700 dark:text-neutral-300 leading-relaxed font-body pl-3">
          "{item.text}"
        </p>
      </div>

      {/* Diner Profile Strip */}
      <div className="flex items-center gap-3 mt-4 pt-3.5 border-t border-neutral-100 dark:border-white/5">
        <div className="relative shrink-0">
          <img
            width={40}
            height={40}
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full object-cover border border-[#FFDD17]/40 shadow-sm"
          />
          <span
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00843D] border-2 border-white dark:border-[#0E131C] flex items-center justify-center text-white"
            title="Verified Diner"
          >
            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
          </span>
        </div>

        <div className="flex flex-col min-w-0">
          <span className="font-heading font-semibold text-xs sm:text-sm tracking-tight text-neutral-900 dark:text-white leading-tight truncate">
            {item.name}
          </span>
          <span className="text-[11px] leading-tight text-neutral-500 dark:text-neutral-400 tracking-tight truncate mt-0.5 font-body">
            {item.role}
          </span>
        </div>
      </div>
    </article>
  );
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const duration = props.duration || 32;

  return (
    <div
      className={`relative overflow-hidden marquee-container select-none ${props.className || ""}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className="animate-marquee-vertical flex flex-col will-change-transform"
        style={
          {
            "--marquee-duration": `${duration}s`,
          } as React.CSSProperties
        }
      >
        {/* Set A */}
        <div className="flex flex-col gap-6 pb-6">
          {props.testimonials.map((item, i) => (
            <TestimonialCard key={`col-a-${i}`} item={item} />
          ))}
        </div>

        {/* Set B (Exact duplicate for a mathematically seamless, zero-jump loop) */}
        <div className="flex flex-col gap-6 pb-6" aria-hidden="true">
          {props.testimonials.map((item, i) => (
            <TestimonialCard key={`col-b-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
