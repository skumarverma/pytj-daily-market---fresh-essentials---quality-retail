import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/marketData';

export const FloatingContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* Direct Call Circular Button */}
      <div className="relative group">
        <a
          href={`tel:${BUSINESS_DATA.primaryPhone}`}
          aria-label={`Direct Call to Owner (${BUSINESS_DATA.primaryPhone})`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white bg-amber-600 hover:bg-amber-700 shadow-2xl border-2 border-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
          title={`Call Owner (${BUSINESS_DATA.primaryPhone})`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden group-hover:flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold text-white bg-stone-900 shadow-lg whitespace-nowrap pointer-events-none transition-opacity">
          Call Owner
        </div>
      </div>

      {/* WhatsApp Circular Button */}
      <div className="relative group">
        <a
          href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}?text=${encodeURIComponent(
            'Hello PYTJ Daily Market owner! I have a question about store items.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat with Owner"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white bg-emerald-600 hover:bg-emerald-700 shadow-2xl border-2 border-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          title="Chat with Owner on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden group-hover:flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold text-white bg-stone-900 shadow-lg whitespace-nowrap pointer-events-none transition-opacity">
          Chat on WhatsApp
        </div>
      </div>
    </div>
  );
};

