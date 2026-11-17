import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, Store } from 'lucide-react';
import { BUSINESS_DATA, DEPARTMENTS } from '../data/marketData';

interface FooterProps {
  onSelectModule: (moduleId: string, targetElementId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectModule }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 font-sans border-t border-stone-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                  PYTJ DAILY MARKET
                </h3>
                <p className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                  Fresh Essentials • Quality Products
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              M/s PYTJ Daily Market brings fresh farm produce, fish, meats, pantry groceries, cosmetics, and cold-chain convenience under one roof in Itanagar, Arunachal Pradesh.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-stone-400">
              <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800">
                TL: {BUSINESS_DATA.tradeLicenseNo}
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800">
                GSTIN: {BUSINESS_DATA.gstin}
              </span>
            </div>
          </div>

          {/* Store Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Store Directory
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectModule('home')}
                  className="hover:text-amber-400 transition-colors text-stone-400 hover:underline cursor-pointer"
                >
                  Home & Highlights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectModule('about')}
                  className="hover:text-amber-400 transition-colors text-stone-400 hover:underline cursor-pointer"
                >
                  About Our Story & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectModule('services')}
                  className="hover:text-amber-400 transition-colors text-stone-400 hover:underline cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectModule('quality')}
                  className="hover:text-amber-400 transition-colors text-stone-400 hover:underline cursor-pointer"
                >
                  Quality Standards & Cold Storage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectModule('contact')}
                  className="hover:text-amber-400 transition-colors text-stone-400 hover:underline cursor-pointer"
                >
                  Contact Owners & Store Location
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services List */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => {
                      sessionStorage.setItem('pytj_selected_dept', dept.id);
                      window.dispatchEvent(new CustomEvent('pytj_dept_change', { detail: dept.id }));
                      onSelectModule('services', 'department-showcase');
                    }}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    • {dept.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Owner Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact to Owners
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Flat/Block No. 01, Nyokir Complex, O’ Point Tinali, Itanagar, Arunachal Pradesh - 791111</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${BUSINESS_DATA.primaryPhone}`} className="hover:text-amber-400 font-mono font-bold">
                  +91 8575291355 / +91 6909504999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${BUSINESS_DATA.primaryEmail}`} className="hover:text-amber-400">
                  {BUSINESS_DATA.primaryEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{BUSINESS_DATA.serviceSchedule.days} • Daily Fresh Arrivals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <strong>PYTJ Daily Market</strong> (M/s PYTJ Daily Market). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Leadership: Smt. Yabom Buchi Nyokir (MD)</span>
            <span>•</span>
            <span>Itanagar, Arunachal Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
