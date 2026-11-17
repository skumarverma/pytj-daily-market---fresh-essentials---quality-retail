import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  Sparkles,
  Phone,
  MessageCircle,
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Target,
  Building2,
  AlertTriangle,
  Layers,
  Users,
  MapPin,
  Mail,
  ShoppingBag,
  ChevronRight
} from 'lucide-react';
import {
  BUSINESS_DATA,
  MARKET_CHALLENGES,
  CORE_SOLUTIONS,
  STP_STRATEGY,
  GROWTH_ROADMAP,
  BENCHMARKING_DATA,
  GO_TO_MARKET_STEPS,
  MARKET_OPPORTUNITY,
  FUND_UTILIZATION
} from '../data/marketData';
import { StoreGallerySection } from './StoreGallerySection';

interface AboutModuleProps {
  onNavigate?: (moduleId: string) => void;
}

export const AboutModule: React.FC<AboutModuleProps> = ({ onNavigate }) => {
  return (
    <div id="about" className="py-8 md:py-12 space-y-12">
      {/* Module Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          Official Profile • PYTJ Daily Market
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 font-serif tracking-tight">
          Pioneering Organized & Hygienic Everyday Retail in Arunachal Pradesh
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          From farm-fresh produce and cold-chain meats to pantry staples and personal care, discover our story, our leadership under Managing Director Smt. Yabom Buchi Nyokir, and our mission to modernize daily shopping in Itanagar.
        </p>
      </div>

      {/* Two Column Layout: Enterprise Story & MD Leadership */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Who We Are & Operating Commitments */}
        <div id="who-we-are" className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-3">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Who We Are & What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mb-4">
              Freshness, Quality & Complete Convenience Under One Roof
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>PYTJ Daily Market</strong> is an established multi-category retail enterprise operating from Flat/Block No. 01, Nyokir Complex, O’ Point Tinali, Itanagar. Founded to address the long-standing challenges of fragmented grocery shopping in Arunachal Pradesh, we bring together everyday household necessities into a single, clean, and organized shopping destination.
              </p>
              <p>
                We serve our community with farm-fresh vegetables, seasonal fruits, hygienically handled meat and river fish, packaged groceries, daily household staples, and certified cosmetics. Backed by practical retail expertise and an intimate understanding of local consumer habits, we are building an integrated retail ecosystem supported by commercial cold storage, resilient sourcing, and our upcoming own-brand product range.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-600 text-stone-800 text-sm font-medium italic">
                "Our long-term ambition is to expand across Arunachal Pradesh and gradually establish PYTJ Daily Market as the region's most trusted household retail brand."
              </div>
            </div>
          </div>

          {/* 4 Core Operational Commitments */}
          <div className="pt-6 border-t border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Our Operational Commitments
              </span>
              <span className="text-xs text-amber-800 font-semibold">
                Customer-First Standards
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-center hover:border-amber-400 transition-colors">
                <span className="text-xs font-bold text-stone-900 block">Quality</span>
                <span className="text-[11px] text-stone-600 mt-0.5 block">Graded & Verified</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-center hover:border-amber-400 transition-colors">
                <span className="text-xs font-bold text-stone-900 block">Freshness</span>
                <span className="text-[11px] text-stone-600 mt-0.5 block">Daily Morning Stock</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-center hover:border-amber-400 transition-colors">
                <span className="text-xs font-bold text-stone-900 block">Convenience</span>
                <span className="text-[11px] text-stone-600 mt-0.5 block">Everything Under 1 Roof</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-center hover:border-amber-400 transition-colors">
                <span className="text-xs font-bold text-stone-900 block">Reliability</span>
                <span className="text-[11px] text-stone-600 mt-0.5 block">Consistent Fair Pricing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Managing Director Profile */}
        <div id="leadership-profile" className="lg:col-span-5 flex flex-col justify-between bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-stone-800 shadow-xl relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-stone-950">
                Key Person & Leadership
              </span>
              <span className="text-xs text-amber-400 font-mono font-semibold">
                Official Business Profile
              </span>
            </div>

            {/* MD Info Header */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-600 flex items-center justify-center text-3xl font-black text-white shadow-lg border-2 border-amber-400/40 shrink-0">
                <UserCheck className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  {BUSINESS_DATA.managingDirector.name}
                </h3>
                <p className="text-amber-400 font-semibold text-sm">
                  {BUSINESS_DATA.managingDirector.title}
                </p>
                <p className="text-xs text-stone-300 mt-0.5 font-medium">
                  {BUSINESS_DATA.managingDirector.experience}
                </p>
              </div>
            </div>

            {/* Bio & Vision */}
            <div className="space-y-3.5 text-stone-300 text-sm leading-relaxed border-t border-stone-800 pt-4">
              <p>
                {BUSINESS_DATA.managingDirector.bio}
              </p>
              <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700/70">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Founder & Managing Director Vision:
                </span>
                <p className="text-stone-300 text-xs italic leading-relaxed">
                  "{BUSINESS_DATA.managingDirector.vision}"
                </p>
              </div>
            </div>
          </div>

          {/* Direct Line to MD */}
          <div className="relative z-10 pt-6 border-t border-stone-800 mt-6">
            <p className="text-xs text-stone-400 mb-3">
              Direct connection for wholesale orders, business partnerships, or customer feedback:
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={`tel:${BUSINESS_DATA.primaryPhone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call ({BUSINESS_DATA.phones[0]})</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}?text=${encodeURIComponent('Hello Smt. Yabom Buchi Nyokir! I would like to connect with PYTJ Daily Market management regarding shopping / wholesale inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="text-[11px] text-stone-400 mt-2 text-center">
              Alternate Line: <span className="text-stone-300 font-mono">{BUSINESS_DATA.phones[1]}</span> • Email: <span className="text-stone-300 font-mono">{BUSINESS_DATA.primaryEmail}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Real Store Setup & Department Tour */}
      <StoreGallerySection />

      {/* Strategic Market Focus: STP Framework */}
      <section className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Target className="w-3.5 h-3.5 text-amber-700" />
            <span>Strategic Market Focus • STP Strategy</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Precision Market Strategy: Segmentation, Targeting & Positioning
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            How PYTJ Daily Market meets consumer and commercial demand across the Itanagar Capital Complex with focused retail execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Segmentation */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Users className="w-6 h-6 text-amber-800" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                01. Market Segmentation
              </span>
              <h3 className="text-lg font-bold font-serif text-stone-900">
                Broad Consumer & B2B Segments
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {STP_STRATEGY.segmentation.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Urban households & working couples</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Hotels, restaurants & institutional caterers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Beauty & personal care enthusiasts</span>
              </div>
            </div>
          </div>

          {/* Card 2: Targeting */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Target className="w-6 h-6 text-amber-800" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                02. Strategic Targeting
              </span>
              <h3 className="text-lg font-bold font-serif text-stone-900">
                Quality & Convenience Seekers
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {STP_STRATEGY.targeting.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Families demanding fresh, hygienic staples</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Consumers seeking 1-stop time-saving shopping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Transparent MRP & affordable market pricing</span>
              </div>
            </div>
          </div>

          {/* Card 3: Positioning */}
          <div className="bg-white rounded-2xl p-6 border-2 border-amber-300/80 bg-gradient-to-b from-amber-50/50 to-white hover:border-amber-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                03. Market Positioning
              </span>
              <h3 className="text-lg font-bold font-serif text-stone-900">
                Arunachal's Trusted One-Stop Destination
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                {STP_STRATEGY.positioning.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-amber-200/80 space-y-1.5 text-[11px] text-stone-800 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Bridging farm freshness with modern hygiene</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Dedicated commercial cold-chain preservation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Strong regional roots and dependable service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Size & Seizing the Opportunity */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span>Market Opportunity & Industry Size</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
              Market Size: Seizing the Opportunity
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-mono self-start sm:self-auto">
            {MARKET_OPPORTUNITY.source}
          </span>
        </div>

        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          India’s expanding retail and FMCG landscape creates strong growth potential for convenient, diversified, and locally accessible retail businesses like PYTJ Daily Market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Indian Retail Market */}
          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Indian Retail Market
            </span>
            <p className="text-xs text-stone-200 leading-relaxed">
              {MARKET_OPPORTUNITY.retail}
            </p>
          </div>

          {/* Indian FMCG Market */}
          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Indian FMCG Market
            </span>
            <p className="text-xs text-stone-200 leading-relaxed">
              {MARKET_OPPORTUNITY.fmcg}
            </p>
          </div>

          {/* Market Trends */}
          <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Market Trends
            </span>
            <p className="text-xs text-stone-200 leading-relaxed">
              {MARKET_OPPORTUNITY.trends}
            </p>
          </div>
        </div>
      </section>

      {/* Market Challenges & Strategic Solutions */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Market Challenges & Strategic Solutions</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Addressing Key Regional Retail Challenges
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            How PYTJ Daily Market resolves local supply gaps in Arunachal Pradesh through cold storage, unified shopping, and structured supply chains.
          </p>
        </div>

        {/* 4 Challenges & Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {MARKET_CHALLENGES.map((challenge, idx) => {
            const solution = CORE_SOLUTIONS[idx];
            return (
              <div
                key={challenge.id}
                className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col justify-between space-y-4 hover:border-amber-400 hover:shadow-md transition-all"
              >
                {/* Challenge */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
                    <AlertTriangle className="w-3 h-3" />
                    <span>Market Challenge {idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold font-serif text-stone-900">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {challenge.desc}
                  </p>
                </div>

                {/* Solution */}
                {solution && (
                  <div className="pt-3 border-t border-stone-200/80 space-y-1.5 bg-white p-3.5 rounded-xl border border-stone-100">
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>PYTJ Solution: {solution.title}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Benchmarking Success & Regional Differentiation */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Market Benchmarking & Regional Differentiation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Standing Out in the Arunachal Retail Landscape
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
            {BENCHMARKING_DATA.issuesWithExisting}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-stone-800 font-bold text-sm">
              <Building2 className="w-4 h-4 text-stone-500" />
              <span>Current Itanagar Retail Landscape</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {BENCHMARKING_DATA.existingSolutions}
            </p>
            <div className="p-3.5 rounded-xl bg-stone-100 text-stone-700 text-xs leading-relaxed">
              <strong>Local Reality:</strong> Shoppers typically visit crowded open wet markets for fish and meat, separate grocery stores for staples, and specialty stores for cosmetics, enduring split trips and unpredictable perishability.
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-2 border-amber-300/80 space-y-3">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>The PYTJ Competitive Advantage</span>
            </div>
            <p className="text-xs text-stone-800 leading-relaxed">
              {BENCHMARKING_DATA.competitiveAdvantage}
            </p>
            <div className="p-3.5 rounded-xl bg-amber-100/80 border border-amber-200 text-amber-950 text-xs font-medium leading-relaxed">
              <strong>Customer Benefit:</strong> Families and commercial buyers enjoy a modern, hygienic one-stop shopping experience backed by commercial refrigeration, verified weights, and friendly local service.
            </div>
          </div>
        </div>
      </section>

      {/* Growth Roadmap: Scaling for Success & Go-to-Market Strategy */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Strategic Growth Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
            Scaling PYTJ Daily Market for Long-Term Success
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 italic">
            "To transform PYTJ Daily Market into a scalable, integrated retail and own-brand consumer products business with a strong presence across Arunachal Pradesh and beyond."
          </p>
        </div>

        {/* 4 Phase Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GROWTH_ROADMAP.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-amber-400 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 font-black font-serif flex items-center justify-center text-lg shadow-sm">
                {item.step}
              </div>
              <h3 className="text-base font-bold font-serif text-white">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Go-To-Market Execution Steps */}
        <div className="pt-6 border-t border-stone-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Go-To-Market Execution Framework
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight">
                Sequential Expansion Pillars
              </h3>
              <p className="text-xs text-stone-300">
                Five phased operational milestones to scale retail reach and commercial partnerships across Arunachal Pradesh.
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-stone-950 shadow-sm shrink-0 self-start sm:self-auto">
              5 Phased Milestones
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {GO_TO_MARKET_STEPS.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-amber-400/80 transition-all flex items-center gap-3 text-xs text-stone-100 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  {sIdx + 1}
                </div>
                <span className="font-semibold text-xs leading-snug">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Capital Deployment / Fund Utilization */}
        <div className="pt-6 border-t border-stone-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                Fund Utilization: Strategic Capital Deployment
              </span>
              <p className="text-xs text-stone-300 mt-0.5">
                "Strategic capital deployment will strengthen operational capabilities and create a solid foundation for sustainable, long-term business growth."
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-amber-500 text-stone-950 shrink-0 self-start sm:self-auto">
              Our Ask: Strategic Allocations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
            {FUND_UTILIZATION.map((fund, fIdx) => (
              <div
                key={fIdx}
                className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/70 text-center space-y-1.5 hover:border-amber-400 transition-colors"
              >
                <div className="text-2xl font-black font-serif text-amber-400">
                  {fund.percentage}%
                </div>
                <div className="text-xs font-semibold text-stone-200">
                  {fund.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Page Navigation Footer */}
      {onNavigate && (
        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home Page</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-xs cursor-pointer ml-auto"
          >
            <span>Next: Fresh Departments & Offerings</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
