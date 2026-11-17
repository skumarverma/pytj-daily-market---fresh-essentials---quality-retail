import React, { useState } from 'react';
import { Sparkles, MapPin, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/marketData';
import { BrandLogo } from './BrandSignboard';

interface NavbarProps {
  activeModule: string;
  onSelectModule: (moduleId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeModule, onSelectModule }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home Page' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'quality', label: 'Quality & Cold-Chain' },
    { id: 'contact', label: 'Contact Owners' },
  ];

  const handleNavClick = (id: string) => {
    onSelectModule(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Nyokir Complex, '0' Point Tinali, Itanagar</span>
            </span>
            <span className="hidden md:inline text-stone-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>{BUSINESS_DATA.tagline}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-stone-400 font-mono">
            <span>TL: {BUSINESS_DATA.tradeLicenseNo}</span>
            <span>•</span>
            <span>GST: {BUSINESS_DATA.gstin}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <BrandLogo size="md" className="group-hover:scale-105 transition-transform" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black font-serif tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap">
                  PYTJ DAILY MARKET
                </span>
                <span className="hidden xl:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 whitespace-nowrap">
                  Itanagar
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium hidden sm:block whitespace-nowrap">
                Fresh Essentials, Quality Products, Every Day
              </p>
            </div>
          </div>

          {/* Primary Store Navigation Links in Horizontal Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-stone-100/90 p-1.5 rounded-2xl border border-stone-200/80 shadow-2xs">
            {navItems.map((item) => {
              const isActive = activeModule === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm ring-1 ring-amber-700/20'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white border-t border-stone-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2 px-1">
            Explore Store Sections:
          </p>
          <div className="space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                  activeModule === item.id
                    ? 'bg-amber-600 text-white shadow-xs font-bold'
                    : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                <span>{item.label}</span>
                {activeModule === item.id && (
                  <span className="text-[11px] bg-amber-700 px-2 py-0.5 rounded-md font-normal">
                    Active
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
