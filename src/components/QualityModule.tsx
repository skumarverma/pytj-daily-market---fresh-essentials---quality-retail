import React from 'react';
import { Snowflake, ShieldCheck, Scale, Check, X, Sparkles, Phone, Store, ArrowLeft, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA, WHY_CHOOSE_US } from '../data/marketData';

interface QualityModuleProps {
  onNavigate?: (moduleId: string) => void;
}

export const QualityModule: React.FC<QualityModuleProps> = ({ onNavigate }) => {
  const comparisonData = [
    {
      feature: "Perishable Freshness & Cold Storage",
      traditional: "Limited or no cold storage; fast spoilage under heat & humidity",
      pytj: "Dedicated commercial chillers & cold storage preserving crispness and hygiene",
    },
    {
      feature: "Shopping Convenience",
      traditional: "Fragmented: 4-5 different distant vendors for fish, chicken, greens, and soap",
      pytj: "100% One-Stop: Everything under one clean, air-cooled roof at Nyokir Complex",
    },
    {
      feature: "Hygiene & Sanitization",
      traditional: "Exposed road dust, flies, open wooden cutting logs",
      pytj: "Sanitized stainless steel counters, clean tiled floor, temperature control",
    },
    {
      feature: "Weighing & Pricing Transparency",
      traditional: "Manual rough weights, arbitrary pricing without bills",
      pytj: "Digital calibrated weighing scales, clear tags, GST legal invoices",
    },
    {
      feature: "Direct Owner Accountability",
      traditional: "Anonymous street sellers with no guarantee on bad produce",
      pytj: "Direct contact to Managing Director Smt. Yabom Buchi Nyokir with verified trade license",
    },
  ];

  return (
    <div id="quality" className="py-8 md:py-12 space-y-12">
      {/* Module Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          Freshness Promise • Quality Commitment & Cold-Chain Standards
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 font-serif tracking-tight">
          Why Itanagar Consumers Choose PYTJ Daily Market
        </h1>
        <p className="mt-3 text-base text-stone-600">
          See how our investment in cold storage, hygienic handling, and organized multi-category retail delivers real value to your household every day.
        </p>
      </div>

      {/* 4 Feature Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {WHY_CHOOSE_US.map((item, idx) => {
          const icons = [
            <Store className="w-6 h-6 text-amber-600" />,
            <Snowflake className="w-6 h-6 text-sky-600" />,
            <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            <Scale className="w-6 h-6 text-indigo-600" />
          ];
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shadow-xs border border-stone-200 mb-4">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-bold font-serif text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Cold Storage Deep Dive Highlight */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <Snowflake className="w-3.5 h-3.5 text-sky-400" />
              Modern Retail Cold-Chain
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
              Extending Freshness & Safeguarding Your Family’s Health
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              In Itanagar’s climate, unchilled leafy greens wilt within hours and meats lose safety fast. At PYTJ Daily Market, we solve this with <strong>commercial display coolers, beverage chillers, and deep freezers</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Farm-crisp vegetables preserved all day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Sanitized, temperature-controlled fish & poultry</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Cold dairy, juices & beverages always chilled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Zero chemical preservatives or unsafe sprays</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-700 shadow-2xl">
            <img
              src="/images/store-front-cooling.jpg"
              alt="Cold storage refrigeration at supermarket"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-sky-300">
                ❄️ Integrated Commercial Cooling & Ice Beds
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
            Traditional Bazaar vs. PYTJ Daily Market
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Comparing your everyday experience when shopping with us
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-stone-300 text-stone-900 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Quality Standard</th>
                <th className="py-3 px-4 text-stone-500">Traditional Roadside Outlets</th>
                <th className="py-3 px-4 text-emerald-800 bg-emerald-100/60 rounded-t-lg">
                  PYTJ Daily Market Experience
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-stone-900">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 text-stone-600">
                    <div className="flex items-start gap-1.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-stone-900 bg-emerald-50/50">
                    <div className="flex items-start gap-1.5 text-emerald-950">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                      <span>{row.pytj}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-stone-500">
            Have questions about how we handle perishables or source our food?
          </p>
          <a
            href={`tel:${BUSINESS_DATA.primaryPhone}`}
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Talk directly to store management: +91 8575291355</span>
          </a>
        </div>
      </div>

      {/* Module Page Navigation Footer */}
      {onNavigate && (
        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Fresh Departments & Offerings</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-xs cursor-pointer ml-auto"
          >
            <span>Next: Contact Owners & Store Location</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
