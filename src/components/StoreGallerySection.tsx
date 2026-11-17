import React, { useState } from 'react';
import { Camera, CheckCircle2, X } from 'lucide-react';

export const StoreGallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const realStorePhotos = [
    {
      title: "Fresh Produce Display & Chiller Zone",
      category: "Vegetables, Fruits & Beverages",
      description: "Tiered wooden display racks holding daily fresh squash (chayote), green cabbage, carrots, beans, and Voltas commercial beverage chiller with air-conditioned cooling.",
      imageUrl: "/images/fresh-produce.jpg",
      features: ["Wooden tiered vegetable racks", "Fresh hill squash & green cabbages", "Voltas commercial beverage chiller", "Deep chest freezer for perishables"]
    },
    {
      title: "Main Grocery & FMCG Aisles",
      category: "Staples, Snacks & Packaged Foods",
      description: "Organized green shelving stocked with noodles, cereals, cooking oils, lentils, tea, biscuits, and centralized packaging table with modern POS checkout.",
      imageUrl: "/images/grocery-essentials.jpg",
      features: ["Full range of packaged snacks & noodles", "Breakfast cereals & grains", "Organized retail shelving", "Digital billing with calibrated scale"]
    },
    {
      title: "Fresh Fish & Poultry Meat Counter",
      category: "Hygienic Daily Protein",
      description: "Sanitized blue counter with fresh river fish (Rohu, Katla), cleaned poultry cuts, and upright digital electronic weighing scale operated by trained uniformed staff.",
      imageUrl: "/images/meat-and-fish.jpg",
      features: ["Daily fresh whole fish & cuts", "Dressed tender farm chicken", "Essae digital electronic scale", "Uniformed store attendants"]
    },
    {
      title: "Registered Signboard & Front Desk",
      category: "Official Business Identity",
      description: "Official municipal registered signboard at Nyokir Complex, '0' Point Tinali with IMC Trade License and verified GST registration.",
      imageUrl: "/images/store-front-cooling.jpg",
      features: ["TL NO: IMC/DEV-23/2026/1783", "GSTIN: 12AQMPB0460H1ZE", "Flat/Block No. 01, Nyokir Complex", "Direct Owner Lines"]
    }
  ];

  const current = realStorePhotos[activePhoto];
  const isMeatFish = current.imageUrl.includes('meat-and-fish');

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Floor Tour</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Real Store Floor & Departments
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            See the actual departments and clean setup inside PYTJ Daily Market at Nyokir Complex, Itanagar.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Verified & Licensed Retail Facility</span>
          </span>
        </div>
      </div>

      {/* Main Interactive Showcase - Enlarged Photo Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Image Showcase - Larger & Higher Impact */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-xl border border-stone-300 group min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] bg-stone-950 cursor-pointer flex flex-col justify-end"
        >
          <img
            src={current.imageUrl}
            alt={current.title}
            className={`absolute inset-0 w-full h-full object-cover ${
              isMeatFish ? 'object-[center_20%]' : 'object-center'
            } transition-transform duration-500 group-hover:scale-102`}
          />

          <div className="relative z-10 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent p-6 sm:p-8 text-white pointer-events-none">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {current.category}
            </span>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-white mt-1">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 mt-1.5 max-w-2xl leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Right Department List Switcher with Visual Thumbnails */}
        <div className="lg:col-span-4 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
          {realStorePhotos.map((photo, idx) => {
            const isCurrent = activePhoto === idx;
            const photoIsMeatFish = photo.imageUrl.includes('meat-and-fish');
            return (
              <div
                key={idx}
                onClick={() => setActivePhoto(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-amber-50/90 border-amber-500 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-stone-50 border-stone-200 hover:border-amber-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* Thumbnail Image */}
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 border ${
                      isCurrent ? 'border-amber-500 ring-2 ring-amber-400/40' : 'border-stone-200'
                    } ${photoIsMeatFish ? 'object-[center_20%]' : 'object-center'}`}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                        Area 0{idx + 1}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 shadow-2xs">
                          Active View
                        </span>
                      )}
                    </div>
                    <h5 className="font-bold text-stone-900 text-sm mt-0.5 truncate">
                      {photo.title}
                    </h5>
                    <p className="text-xs text-stone-600 mt-0.5 line-clamp-1">
                      {photo.category}
                    </p>
                  </div>
                </div>

                {isCurrent && (
                  <div className="mt-3 pt-2.5 border-t border-amber-200/80 grid grid-cols-2 gap-1.5 text-[11px] text-stone-700">
                    {photo.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Uncropped Full-Resolution Photo Viewing */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-700 flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/80">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {current.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {current.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-2 sm:p-4 flex items-center justify-center overflow-auto max-h-[70vh]">
              <img
                src={current.imageUrl}
                alt={current.title}
                className="max-w-full max-h-[68vh] object-contain rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-950/80 border-t border-stone-800 text-xs text-stone-300 flex items-center justify-between">
              <span>M/s PYTJ Daily Market • Nyokir Complex, '0' Point Tinali, Itanagar</span>
              <span className="text-amber-400 font-medium">Original In-Store Photo</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
