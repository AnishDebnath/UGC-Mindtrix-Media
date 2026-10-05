import React from 'react';

interface WhatWeStandForSectionProps {
  onDiscoverMore: () => void;
}

// Exact Swirl Icon from the design
const SwirlIcon: React.FC = () => (
  <svg viewBox="0 0 36 36" fill="currentColor" className="w-12 h-12 text-black">
    <path d="M18 4C10.27 4 4 10.27 4 18c0 4.48 2.11 8.48 5.4 11.03a1.5 1.5 0 0 0 1.85-2.37C8.42 24.49 6.8 21.43 6.8 18c0-6.19 5.01-11.2 11.2-11.2 4.67 0 8.68 2.87 10.34 6.94a1.5 1.5 0 1 0 2.78-1.13C28.87 7.91 23.83 4 18 4zm0 6.5c-4.14 0-7.5 3.36-7.5 7.5 0 2.65 1.25 5.01 3.19 6.52a1.5 1.5 0 1 0 1.85-2.37A4.68 4.68 0 0 1 13.3 18c0-2.6 2.1-4.7 4.7-4.7 1.95 0 3.63 1.2 4.31 2.91a1.5 1.5 0 1 0 2.79-1.11C23.95 12.37 21.2 10.5 18 10.5zm0 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
  </svg>
);

export const WhatWeStandForSection: React.FC<WhatWeStandForSectionProps> = ({
  onDiscoverMore
}) => {
  return (
    <section id="stand-for" className="w-full bg-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14">
          {/* Left Big Stacked Headline */}
          <div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 uppercase leading-[0.88]">
              WHAT WE<br />STAND FOR
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="max-w-md flex flex-col items-start gap-4">
            <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-normal">
              Mindtrix Media is a creative studio crafting UGC ads, reels, and product showcases that turn viewers into customers.
            </p>
            <button
              onClick={onDiscoverMore}
              className="px-6 py-2.5 bg-[#ded9ff] hover:bg-[#d0c9ff] text-neutral-900 font-display text-xs font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
            >
              DISCOVER MORE
            </button>
          </div>
        </div>

        {/* 3-Column Staggered Layout with 1:1 Square Ratio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* ROW 1 - COL 1: BRINGING PEOPLE CLOSER (Soft Sky Blue) */}
          <div className="w-full aspect-square bg-[#f0f7fc] rounded-[32px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <SwirlIcon />
            <div>
              <h3 className="font-display text-3xl sm:text-[32px] lg:text-[36px] font-black tracking-tight text-neutral-900 uppercase leading-[1.05] mb-6">
                BRINGING PEOPLE<br />CLOSER
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Shaping meaningful connections and growth for the next generation.
              </p>
            </div>
          </div>

          {/* ROW 1 - COL 2: SELF-WORTH AND CONFIDENCE (Soft Lavender / Blush) */}
          <div className="w-full aspect-square bg-[#f9f0fb] rounded-[32px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <SwirlIcon />
            <div>
              <h3 className="font-display text-3xl sm:text-[32px] lg:text-[36px] font-black tracking-tight text-neutral-900 uppercase leading-[1.05] mb-6">
                SELF-WORTH AND<br />CONFIDENCE
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Creating a space where new friendships grow and confidence builds.
              </p>
            </div>
          </div>

          {/* ROW 1 - COL 3: Empty spacer on desktop for staggered stepped feel */}
          <div className="hidden lg:block pointer-events-none" />

          {/* ROW 2 - COL 1: Empty spacer on desktop */}
          <div className="hidden lg:block pointer-events-none" />

          {/* ROW 2 - COL 2: THE JOY OF REAL CONVERSATIONS (Soft Lime Green) */}
          <div className="w-full aspect-square bg-[#f4faea] rounded-[32px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <SwirlIcon />
            <div>
              <h3 className="font-display text-3xl sm:text-[32px] lg:text-[36px] font-black tracking-tight text-neutral-900 uppercase leading-[1.05] mb-6">
                THE JOY OF REAL<br />CONVERSATIONS
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Offering a vibrant space where social interaction feels free and natural.
              </p>
            </div>
          </div>

          {/* ROW 2 - COL 3: MEET REAL PEOPLE YOUR AGE (Soft Icy Cyan Blue) */}
          <div className="w-full aspect-square bg-[#edf7f9] rounded-[32px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <SwirlIcon />
            <div>
              <h3 className="font-display text-3xl sm:text-[32px] lg:text-[36px] font-black tracking-tight text-neutral-900 uppercase leading-[1.05] mb-6">
                MEET REAL PEOPLE<br />YOUR AGE
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                At Mindtrix Media, we're building content where real, genuine stories come first.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
