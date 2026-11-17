import React from 'react';
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Snowflake,
  Store,
  Award,
  ShoppingBag,
  Truck,
  Sparkles,
  Building2,
  Scale,
  UserCheck,
  Tag
} from 'lucide-react';
import {
  BUSINESS_DATA,
  DEPARTMENTS
} from '../data/marketData';

interface HomePageModuleProps {
  onNavigate: (moduleId: string, targetElementId?: string) => void;
}

export const HomePageModule: React.FC<HomePageModuleProps> = ({ onNavigate }) => {

  return (
    <div className="py-8 md:py-12 space-y-16">
      {/* ========================================================= */}
      {/* 1. HERO SHOWCASE: Brand Identity & Atmosphere (Pitch Deck Pages 1 & 2) */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-2xl border border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>M/s PYTJ Daily Market • Itanagar</span>
                </div>
                <div className="text-[11px] sm:text-xs text-stone-300 font-mono flex items-center gap-1.5 bg-stone-800/80 px-2.5 py-1 rounded-full border border-stone-700">
                  <span className="text-amber-400 font-bold">TL NO:</span>
                  <span>IMC/DEV-23/2026/1783</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-serif tracking-tight leading-[1.12]">
                Fresh Essentials, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                  Quality Products,
                </span>{' '}
                <br />
                Every Single Day.
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Arunachal Pradesh’s premier modern retail destination at Nyokir Complex, '0' Point Tinali. Bringing fresh vegetables, fruits, meat, fish, groceries, and daily essentials under one clean, cold-storage-backed roof.
              </p>
            </div>

            {/* Quick Status Line */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open All 7 Days • Daily Fresh Arrivals</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5 text-amber-300">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nyokir Complex, '0' Point Tinali</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Gallery */}
          <div className="lg:col-span-5 relative p-4 sm:p-5 bg-stone-950/80 border-t lg:border-t-0 lg:border-l border-stone-800/80 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {/* Card 1: Fresh Produce (Real Store Photo) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-stone-800 hover:border-amber-500/50 transition-all duration-300 shadow-md">
                <img
                  src="/images/fresh-produce.jpg"
                  alt="PYTJ Daily Market Fresh Produce & Voltas Chiller"
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-amber-300 backdrop-blur-xs bg-stone-900/60 px-2 py-0.5 rounded-md border border-amber-400/20">
                    🥬 Fresh Produce
                  </span>
                </div>
              </div>

              {/* Card 2: Meat & Fish (Real Store Photo with Attendant & Scale) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-stone-800 hover:border-sky-500/50 transition-all duration-300 shadow-md">
                <img
                  src="/images/meat-and-fish.jpg"
                  alt="PYTJ Fresh Fish & Meat Counter"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-sky-300 backdrop-blur-xs bg-stone-900/60 px-2 py-0.5 rounded-md border border-sky-400/20">
                    🐟 Meat & Fish Counter
                  </span>
                </div>
              </div>

              {/* Card 3: Grocery Aisles (Real Store Photo with Shelves & POS) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-stone-800 hover:border-emerald-500/50 transition-all duration-300 shadow-md">
                <img
                  src="/images/grocery-essentials.jpg"
                  alt="PYTJ Grocery Aisles & POS Checkout"
                  className="w-full h-full object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-emerald-300 backdrop-blur-xs bg-stone-900/60 px-2 py-0.5 rounded-md border border-emerald-400/20">
                    🛒 Grocery & FMCG
                  </span>
                </div>
              </div>

              {/* Card 4: Cold Storage Facility & Cashier */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-stone-800 hover:border-amber-500/50 transition-all duration-300 shadow-md">
                <img
                  src="/images/store-front-cooling.jpg"
                  alt="PYTJ Cold Chain & Store Facility"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-stone-200 backdrop-blur-xs bg-stone-900/60 px-2 py-0.5 rounded-md border border-stone-700">
                    ❄️ Cold Storage & Facility
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-400">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Actual Store Floor • Nyokir Complex, Itanagar</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ABOUT & LEADERSHIP PREVIEW: Concise Story + Button Below (Pitch Deck Pages 2, 4, 12) */}
      {/* ========================================================= */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Business & Leadership • Overview</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-serif text-stone-900">
            Modernizing Everyday Retail in Arunachal Pradesh
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Transitioning Itanagar from fragmented open-air street vending into a clean, air-cooled, multi-category retail hub backed by cold storage.
          </p>
        </div>

        {/* 2 Concise Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card A: Who We Are & The Vision */}
          <div
            onClick={() => onNavigate('about', 'who-we-are')}
            className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between space-y-4 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                Multi-Category Retail Under One Roof
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Operating from Flat/Block No. 01, Nyokir Complex, '0' Point Tinali. We eliminate the inconvenience of visiting 4-5 distant open-air vendors by consolidating fresh produce, meats, staples, and cosmetics in one clean, hygienic destination.
              </p>
            </div>
            <div className="space-y-3 pt-3 border-t border-stone-200/80">
              <div className="flex flex-col gap-1.5 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Prime commercial location at '0' Point Tinali, Itanagar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Clean, sanitized, and customer-friendly shopping aisles</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-800 pt-1">
                <span>View Full Enterprise Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card B: Promoter & Enterprise Leadership */}
          <div
            onClick={() => onNavigate('about', 'leadership-profile')}
            className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between space-y-4 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                Led by Managing Director Smt. Yabom Buchi Nyokir
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A Graduate Entrepreneur with 5 years of hands-on business experience. Possessing practical expertise in retail store operations, vendor sourcing, cold-chain standards, and community consumer preferences across Arunachal Pradesh.
              </p>
            </div>
            <div className="space-y-3 pt-3 border-t border-stone-200/80">
              <div className="flex flex-col gap-1.5 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Graduate Entrepreneur with 5 Years Retail Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Trade License: IMC/DEV-23/2026/1783</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-800 pt-1">
                <span>View Leadership Bio & Vision</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Explore Button Below Info */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-stone-900 hover:bg-amber-600 text-white transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Learn More About Our Story & Leadership</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CORE SERVICES & FRESH COUNTERS: Perfect Banner Cards (Pitch Deck Page 5) */}
      {/* ========================================================= */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
        {/* Section Header */}
        <div className="pb-5 border-b border-stone-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2">
            <Store className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Departments • Daily Fresh Arrivals</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Featured Fresh Counters & Daily Essentials
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            A comprehensive preview of our core daily perishables, butchery counter, and grocery staples photographed directly on our retail floor at Nyokir Complex, Itanagar.
          </p>
        </div>

        {/* 3 Featured Department Banner Cards - Perfect Proportion */}
        <div className="space-y-6 sm:space-y-8">
          {DEPARTMENTS.slice(0, 3).map((dept, index) => {
            const isMeatFish = dept.id === 'meat-fish';
            const isProduce = dept.id === 'produce';
            return (
              <div
                key={dept.id}
                className="group bg-white rounded-3xl border border-stone-200/90 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden sm:min-h-[290px] md:min-h-[300px]"
              >
                {/* Balanced Image Section with Fixed Aspect Ratio & Precise Framing */}
                <div className="relative w-full sm:w-[300px] md:w-[340px] lg:w-[360px] shrink-0 aspect-[4/3] sm:aspect-auto sm:self-stretch overflow-hidden bg-stone-100">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className={`w-full h-full object-cover ${
                      isMeatFish
                        ? 'object-[center_25%]'
                        : isProduce
                        ? 'object-[center_35%]'
                        : 'object-[center_40%]'
                    } group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>

                {/* Content on Right Side - Full Details from Service Card */}
                <div className="p-6 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-stone-700 bg-stone-100 px-2.5 py-0.5 rounded-md border border-stone-200">
                        Department 0{index + 1}
                      </span>
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                        {dept.badge}
                      </span>
                      {dept.b2bAvailable && (
                        <>
                          <span className="text-stone-300">•</span>
                          <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                            <Truck className="w-3 h-3" />
                            <span>Commercial Wholesale Available</span>
                          </span>
                        </>
                      )}
                    </div>

                    {/* Department Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-amber-900 mt-1">
                        {dept.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                        {dept.description}
                      </p>
                    </div>

                    {/* Department Quality Standards (from Service Page) */}
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                        <span>Quality Standards & Service Commitments</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {dept.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 bg-stone-50 p-2 sm:p-2.5 rounded-xl border border-stone-200/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug text-[11px] sm:text-xs">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Popular Daily Items (from Service Page) */}
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-amber-700" />
                        <span>Popular Items Available Daily</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dept.popularItems.slice(0, 2).map((item, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-amber-50/40 border border-amber-200/80"
                          >
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="font-bold text-stone-900 text-xs truncate">
                                {item.name}
                              </span>
                              <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 shrink-0">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-600 mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Bar & Explore Button */}
                  <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-3">
                    <span className="text-xs text-stone-500 font-medium hidden sm:inline select-text cursor-default">
                      Fresh daily inventory available in-store
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        sessionStorage.setItem('pytj_selected_dept', dept.id);
                        window.dispatchEvent(new Event('pytj_dept_change'));
                        onNavigate('services', 'department-showcase');
                      }}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-600 group-hover:bg-amber-700 text-white shadow-xs group-hover:translate-x-1 transition-all cursor-pointer ml-auto sm:ml-0"
                    >
                      <span>Explore {dept.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Button Below Info */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold bg-stone-900 hover:bg-amber-600 text-white transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Explore All Retail & Wholesale Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. QUALITY STANDARDS & VALUE PILLARS: Unified Cold-Chain & Distinction + Button Below (Pitch Deck Pages 4, 9 & 14) */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300/80 shadow-sm space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Snowflake className="w-3.5 h-3.5 text-blue-600" />
            <span>Quality Commitment & Distinction • Cold-Chain Focus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-serif text-stone-900">
            Why Itanagar Consumers Choose PYTJ Daily Market
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Unlike conventional open street vendors exposed to roadside dust and heat, PYTJ Daily Market combines modern commercial refrigeration with verified food safety standards and 100% digital weighing accuracy.
          </p>
        </div>

        {/* Exactly 2 Preview Cards in a Clean 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Cold-Chain Freshness */}
          <div
            onClick={() => onNavigate('quality')}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Snowflake className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-mono">
                  Pillar 01 • Active Refrigeration
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                Cold-Chain Freshness & Spoilage Protection
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Dedicated Voltas multi-deck commercial chillers and deep freezers lock in natural moisture, crispness, and vital vitamins—safeguarding perishables from heat and humidity.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-stone-100">
              <div className="flex flex-col gap-1.5 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Farm-fresh crispness locked in from morning to evening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero chemical preservatives or unsafe artificial sprays</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-800 pt-1">
                <span>Explore Cold-Chain Standards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Sanitized Prep & Precision */}
          <div
            onClick={() => onNavigate('quality')}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-mono">
                  Pillar 02 • Certified Standards
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">
                100% Sanitized Prep & Digital Calibrated Weighing
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Daily sterilized stainless steel meat & fish preparation surfaces, zero-dust air-cooled aisles, and precision digital scales ensure complete hygiene and transparent GST billing.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-stone-100">
              <div className="flex flex-col gap-1.5 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Daily sterilized stainless steel meat & fish prep</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% calibrated digital weighing scales & legal receipts</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-800 pt-1">
                <span>Explore Hygiene & Weighing Standards</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Cold Storage & Hygiene Infrastructure Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-amber-200/90 shadow-2xs">
          <div className="flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-stone-800">
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Voltas Commercial Chillers & Freezers</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sanitized Stainless Steel Meat & Fish Prep</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-700 shrink-0" />
              <span>100% Calibrated Digital Scales</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Clean, Air-Cooled, Zero-Dust Aisles</span>
            </div>
          </div>
        </div>

        {/* Explore Button Below Info */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onNavigate('quality')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-xs sm:text-sm font-bold bg-stone-900 hover:bg-amber-600 text-white transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>Explore Complete Quality Standards & Cold Storage</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. STORE LOCATION & DIRECT CONNECT: Minimum Info + Button Below (Pitch Deck Page 15) */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-r from-stone-900 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30">
            Store Location & Contact Directory • Slide 15
          </span>
          <h3 className="text-2xl sm:text-4xl font-black font-serif text-white">
            Connect Directly with Store Management
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Led by Managing Director Smt. Yabom Buchi Nyokir. Visit our store or explore our direct contact directory for daily fresh arrivals, commercial wholesale supply, and customer support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-amber-300 font-mono">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Flat/Block No. 01, Nyokir Complex, O’ Point Tinali, Itanagar – 791111</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Phone: +91 8575291355</span>
            <span className="hidden sm:inline">•</span>
            <span>Email: pytjGroup@gmail.com</span>
          </div>
        </div>

        {/* Explore Button Below Info */}
        <div className="pt-4 border-t border-stone-800 flex justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>View Full Store Location, Map & Contact Directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
