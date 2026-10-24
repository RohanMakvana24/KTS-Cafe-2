import React from 'react';
import { X, Sparkles, MapPin, Clock, Phone, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';
import { Button } from './Button';

export interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'menu' | 'cafe' | 'contact';
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0D1015] border border-white/12 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Subtle glow */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFDD17]/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'menu' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFDD17] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>KT’s Cafe Menu Preview</span>
            </div>
            <h3 id="modal-title" className="font-heading text-2xl font-bold text-white">
              Signature Menu Collection
            </h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-normal">
              Freshly crafted every day in Rajkot with hand-kneaded dough, rich cheese, and fresh vegetables. Here is a sneak peek into our signature specialties:
            </p>

            <div className="mt-5 space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span><strong>Wood-Fired Pizzas:</strong> Truffle Margherita, Peri Peri Paneer, Veggie Supreme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span><strong>Specialty Sizzlers:</strong> Exotic Paneer Tikka Sizzler, Italian Pasta Sizzler</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span><strong>Gourmet Bites:</strong> Grilled Cheese Sandwiches, Maggi Bowls, Loaded Nachos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00843D] shrink-0" />
                <span><strong>Chilled Brews:</strong> Royal Hazelnut Frappe, Belgian Mocha, Peach Ice Tea</span>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-end gap-3">
              <Button variant="secondary" size="sm" onClick={onClose}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  onClose();
                  const comp = document.getElementById('components');
                  if (comp) comp.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Inspect Sample Cards
              </Button>
            </div>
          </div>
        )}

        {type === 'cafe' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFDD17] uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>Rajkot, Gujarat · India</span>
            </div>
            <h3 id="modal-title" className="font-heading text-2xl font-bold text-white">
              Discover KT’s Cafe
            </h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-normal">
              Located in the heart of Rajkot, Gujarat, KT’s Cafe offers a vibrant, welcoming space where food lovers gather over sizzling hot platters, cheesy wood-fired pizzas, and cold brew coffees.
            </p>

            <div className="mt-5 space-y-3 p-4 rounded-2xl bg-white/5 border border-white/8 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFDD17] shrink-0 mt-0.5" />
                <span>Near Kalawad Road / University Road, Rajkot, Gujarat 360005</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FFDD17] shrink-0" />
                <span>Open Daily: 11:00 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFDD17] shrink-0" />
                <span>Dine-In, Takeaway &amp; Quick Delivery</span>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-end gap-3">
              <Button variant="primary" size="sm" onClick={onClose}>
                Understood
              </Button>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFDD17] uppercase tracking-wider mb-2">
              <Navigation className="w-4 h-4" />
              <span>Location &amp; Inquiries</span>
            </div>
            <h3 id="modal-title" className="font-heading text-2xl font-bold text-white">
              Visit KT’s Cafe Rajkot
            </h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-normal">
              We look forward to hosting you and your friends! Drop by for afternoon coffee or an evening pizza celebration.
            </p>

            <div className="mt-5 space-y-3 p-4 rounded-2xl bg-white/5 border border-white/8 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFDD17] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Address</strong>
                  <span>Opp. Crystal Mall, Kalawad Road, Rajkot, Gujarat 360005</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFDD17] shrink-0" />
                <div>
                  <strong className="text-white block">Reservations &amp; Orders</strong>
                  <span>+91 98250 12345 / info@ktscafe.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FFDD17] shrink-0" />
                <div>
                  <strong className="text-white block">Opening Hours</strong>
                  <span>Monday – Sunday: 11:00 AM – 11:30 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-end gap-3">
              <Button variant="primary" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
