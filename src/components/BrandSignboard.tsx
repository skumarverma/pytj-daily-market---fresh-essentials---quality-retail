import React from 'react';

export const BrandLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }> = ({
  size = 'md',
  className = ''
}) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-13 h-13 sm:w-14 sm:h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  }[size];

  return (
    <img
      src="/images/pytj-logo.png"
      alt="PYTJ Daily Market Official Logo"
      className={`rounded-full object-contain shrink-0 drop-shadow-md select-none ${dimensions} ${className}`}
      title="PYTJ Daily Market - Official Seal"
    />
  );
};


export const OfficialSignboardCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative bg-stone-950 text-white rounded-2xl border-2 border-stone-800 p-6 md:p-8 shadow-2xl overflow-hidden font-sans ${className}`}>
      {/* Decorative subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

      {/* Top Registration Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-800 text-xs md:text-sm text-stone-300 font-mono">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">TL NO:</span>
          <span>IMC/DEV-23/2026/1783</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">GSTIN:</span>
          <span className="tracking-wide">12AQMPB0460H1ZE</span>
        </div>
      </div>

      {/* Main Brand Title */}
      <div className="relative z-10 py-6 text-center">
        {/* Leaf Graphic */}
        <div className="flex justify-center items-center mb-2 text-amber-500">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A9.87 9.87 0 0 0 17 8m2.5-4C16.8 4 14.8 5.4 13.9 7.4 15.6 7.6 17.5 8.7 18.7 10.3c1.7-1.1 2.8-3 2.8-5.3 0-.5-.4-1-2-1M6.5 7C5.1 7 4 8.1 4 9.5c0 1.9 1 3.5 2.5 4.5 1-1.3 2.5-2.2 4.2-2.5C9.8 9.3 8.3 7 6.5 7Z" />
          </svg>
        </div>


        <div className="flex items-center justify-center gap-4">
          <div className="hidden sm:block h-[2px] flex-1 bg-gradient-to-r from-transparent via-amber-500 to-amber-500" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-serif uppercase">
            PYTJ DAILY MARKET
          </h2>
          <div className="hidden sm:block h-[2px] flex-1 bg-gradient-to-l from-transparent via-amber-500 to-amber-500" />
        </div>

        {/* Shopping Cart with Divider Lines */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-[1px] w-16 sm:w-28 bg-stone-700" />
          <div className="text-amber-400 text-lg">🛒</div>
          <div className="h-[1px] w-16 sm:w-28 bg-stone-700" />
        </div>

        <p className="mt-2 text-xs md:text-sm tracking-widest uppercase text-amber-400/90 font-medium">
          Fresh Essentials, Quality Products, Every Day
        </p>
      </div>

      {/* Bottom Contact Details */}
      <div className="relative z-10 pt-4 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm text-stone-300">
        <div className="flex items-start gap-2">
          <span className="text-amber-400 text-base shrink-0">📍</span>
          <div>
            <span className="font-semibold text-white">Address:</span> Flat/Block No. 01, Nyokir Complex, '0' Point Tinali, Itanagar, Arunachal Pradesh - 791111
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-amber-400 text-base shrink-0">✉️</span>
          <div>
            <span className="font-semibold text-white">Emails:</span>{' '}
            <div className="space-y-0.5">
              <a href="mailto:PytjGroup7@gmail.com" className="hover:text-amber-300 block">
                PytjGroup7@gmail.com
              </a>
              <a href="mailto:pytjGroup@gmail.com" className="hover:text-amber-300 block text-stone-400">
                pytjGroup@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-amber-400 text-base shrink-0">📞</span>
          <div>
            <span className="font-semibold text-white">Owner Calls:</span>{' '}
            <div className="space-y-0.5 font-mono">
              <a href="tel:+916909504999" className="text-amber-400 font-bold hover:underline block">
                +91 6909504999
              </a>
              <a href="tel:+918575291355" className="text-stone-300 hover:text-amber-300 block">
                +91 8575291355
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
