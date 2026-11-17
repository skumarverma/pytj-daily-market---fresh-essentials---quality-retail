import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Phone,
  PackageCheck,
  Truck,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Tag,
  Store,
  Layers
} from 'lucide-react';
import {
  DEPARTMENTS,
  VALUE_ADDED_PRODUCTS,
  BUSINESS_DATA,
  REVENUE_STREAMS,
  SERVICES_WE_PROVIDE,
  Department
} from '../data/marketData';

interface ServicesModuleProps {
  onNavigate?: (moduleId: string) => void;
}

export const ServicesModule: React.FC<ServicesModuleProps> = ({ onNavigate }) => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>(() => {
    const saved = sessionStorage.getItem('pytj_selected_dept');
    return saved && DEPARTMENTS.some((d) => d.id === saved) ? saved : 'produce';
  });

  useEffect(() => {
    const syncDept = (e?: Event) => {
      const customEvent = e as CustomEvent<string> | undefined;
      const targetId = customEvent?.detail || sessionStorage.getItem('pytj_selected_dept');
      if (targetId && DEPARTMENTS.some((d) => d.id === targetId)) {
        setSelectedDeptId(targetId);
        sessionStorage.setItem('pytj_selected_dept', targetId);
      }
    };
    syncDept();
    window.addEventListener('pytj_dept_change', syncDept as EventListener);
    return () => window.removeEventListener('pytj_dept_change', syncDept as EventListener);
  }, []);

  const currentDept: Department =
    DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <div id="services" className="py-8 md:py-12 space-y-12">
      {/* Module Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
          <Store className="w-3.5 h-3.5 text-amber-700" />
          Our Services • Retail & Wholesale
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 font-serif tracking-tight">
          Our Retail & Wholesale Services
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          From farm-fresh produce and cold-chain meats to everyday grocery staples, certified cosmetics, and dedicated commercial supply for Itanagar hospitality businesses.
        </p>
      </div>

      {/* Services We Provide: Official Commitment */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-2xs">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 self-start">
              <Store className="w-3.5 h-3.5 text-amber-700" />
              <span>Services We Provide • Official Service Commitment</span>
            </span>
            <span className="text-xs font-semibold text-amber-800">

            </span>
          </div>
          <blockquote className="text-stone-800 text-sm sm:text-base leading-relaxed italic border-l-4 border-amber-600 pl-4 py-1">
            "{SERVICES_WE_PROVIDE.quote}"
          </blockquote>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs">
            {SERVICES_WE_PROVIDE.pillars.map((p, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-amber-200/80 shadow-2xs">
                <span className="font-bold text-stone-900 block">{p.title}</span>
                <span className="text-[11px] text-stone-600 leading-tight block mt-0.5">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5 Department Selector Tabs */}
      <div className="w-full bg-stone-100/80 p-2 sm:p-3 rounded-3xl border border-stone-200/80 shadow-2xs">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {DEPARTMENTS.map((dept, index) => {
            const isSelected = selectedDeptId === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => {
                  setSelectedDeptId(dept.id);
                  sessionStorage.setItem('pytj_selected_dept', dept.id);
                }}
                className={`flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400/50 scale-[1.02]'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 shadow-2xs'
                  }`}
              >
                <span
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-serif shrink-0 ${isSelected
                      ? 'bg-amber-500 text-stone-950 font-black'
                      : 'bg-stone-200 text-stone-700 font-semibold'
                    }`}
                >
                  {index + 1}
                </span>
                <span>{dept.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Department Showcase */}
      <div id="department-showcase" className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Image Showcase */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full overflow-hidden">
            <img
              src={currentDept.image}
              alt={currentDept.name}
              className={`w-full h-full object-cover min-h-[340px] sm:min-h-[420px] ${
                currentDept.id === 'meat-fish' ? 'object-[center_20%]' : 'object-center'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-stone-950 shadow-sm">
                  {currentDept.badge}
                </span>
                {currentDept.b2bAvailable && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-600 text-white flex items-center gap-1 shadow-sm">
                    <Truck className="w-3 h-3" />
                    Commercial Bulk & Wholesale
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-white">
                {currentDept.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-lg leading-relaxed">
                {currentDept.tagline}
              </p>
            </div>
          </div>

          {/* Right Department Details */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                {currentDept.description}
              </p>

              {/* Department Service Standards */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>Department Quality Standards</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentDept.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-stone-800 bg-stone-50 p-2.5 rounded-xl border border-stone-200/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Items in this Department */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-700" />
                  <span>Popular Items Available Daily</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDept.popularItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-amber-400 hover:bg-white transition-all shadow-2xs"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-stone-900 text-xs sm:text-sm truncate">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Specialty & Value-Added Products */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Value-Added & Packaged Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
            PYTJ Value-Added and Local Packaged Products
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            In addition to fresh food, we curate and package authentic regional food items, bakery staples, and everyday convenience products tailored to Arunachal Pradesh families and catering clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUE_ADDED_PRODUCTS.map((prod, idx) => {
            const isLast = idx === VALUE_ADDED_PRODUCTS.length - 1;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-stone-800/80 border border-stone-700/70 hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 ${isLast
                    ? 'sm:col-span-2 lg:col-span-3 sm:flex-row sm:items-center sm:space-y-0 sm:gap-6 bg-gradient-to-r from-stone-800/90 via-stone-800/80 to-stone-850'
                    : ''
                  }`}
              >
                <div className={isLast ? 'sm:flex-1' : ''}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      Product Category 0{idx + 1}
                    </span>
                    {isLast && (
                      <span className="text-[10px] font-semibold text-amber-200/80 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                        Household Essentials
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-1">
                    {prod.desc}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t border-stone-700/60 flex items-center text-xs text-stone-400 ${isLast
                      ? 'sm:pt-0 sm:border-t-0 sm:border-l sm:pl-6 sm:shrink-0 sm:flex-row sm:items-center sm:gap-4'
                      : ''
                    }`}
                >
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Available at Store
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3 Core Revenue Streams & Service Channels */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Revenue Model & Operating Channels</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Integrated Retail, Own-Brand & Wholesale Operations
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
            PYTJ Daily Market operates three distinct, synergistic revenue streams designed to serve everyday household shoppers as well as commercial institutional clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVENUE_STREAMS.map((stream, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-200">
                  Revenue Stream 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold font-serif text-stone-900">
                  {stream.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {stream.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/80 text-[11px] text-stone-700 space-y-1">
                {idx === 0 && (
                  <>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Daily walk-in household customers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Transparent MRP & electronic digital billing</span>
                    </div>
                  </>
                )}
                {idx === 1 && (
                  <>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Higher-margin proprietary product lines</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Local packaging supporting regional tastes</span>
                    </div>
                  </>
                )}
                {idx === 2 && (
                  <>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Hotels, restaurants, cafes & caterers</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Scheduled bulk delivery with GST invoicing</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial B2B Supply Banner */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Truck className="w-3.5 h-3.5" />
            <span>Commercial B2B Supply Partner</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Supplying Itanagar Hotels, Restaurants & Catering Kitchens
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            Enjoy contracted wholesale rates, calibrated produce crates, fresh fish/poultry cuts, and compliant GST invoices (GSTIN: {BUSINESS_DATA.gstin}).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}?text=${encodeURIComponent(
              'Hello PYTJ Daily Market! I represent a commercial business/hotel/restaurant in Itanagar and would like to discuss wholesale supply partnership.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire for Wholesale Rates</span>
          </a>
          <a
            href={`tel:${BUSINESS_DATA.primaryPhone}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Commercial Desk</span>
          </a>
        </div>
      </div>

      {/* Module Page Navigation Footer */}
      {onNavigate && (
        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: About Our Story</span>
          </button>

          <button
            onClick={() => onNavigate('quality')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-xs cursor-pointer ml-auto"
          >
            <span>Next: Quality Standards & Cold Storage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
