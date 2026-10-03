import React, { useState } from 'react';
import { UWE_PROFILE } from '@/data/mockData';
import { Profile } from '@/types';

import uweSangerTealImg from '@/assets/images/uwe_sanger_teal_1790985575257.jpg';
import asianGuyGreencapImg from '@/assets/images/asian_guy_greencap_1790985591686.jpg';

interface BottomShowcaseSectionProps {
  onSelectProfile: (profile: Profile) => void;
  onSendReaction: (emoji: string, profile: Profile) => void;
}

export const BottomShowcaseSection: React.FC<BottomShowcaseSectionProps> = ({
  onSelectProfile,
  onSendReaction
}) => {
  const [fireClicked, setFireClicked] = useState(false);

  return (
    <section className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none bg-white">
      {/* Giant Typography Watermark: WIZZCHAT */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <svg
          viewBox="0 0 1600 360"
          className="w-full h-full object-fill opacity-80"
          preserveAspectRatio="none"
        >
          <text
            x="50%"
            y="52%"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#f1f3f5"
            fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="330"
            letterSpacing="-8"
          >
            WIZZCHAT
          </text>
        </svg>
      </div>

      {/* Center Interactive Showcase Composition */}
      <div className="relative max-w-5xl mx-auto z-10 flex items-center justify-center min-h-[460px]">
        
        {/* Relative Anchor Frame */}
        <div className="relative flex items-center justify-center">
          
          {/* 1. Top-Left Floating Chat Bubble: "Then my job here is done 💛" */}
          <div className="absolute top-10 sm:top-12 -left-20 sm:-left-36 md:-left-48 lg:-left-56 z-20 bg-white px-4 sm:px-5 py-2 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-white text-neutral-800 text-xs sm:text-[13px] font-semibold whitespace-nowrap transform -rotate-[7deg] hover:rotate-0 transition-transform duration-300">
            Then my job here is done 💛
          </div>

          {/* 2. Center Profile Card: Uwe Sanger (Tilted +5deg) */}
          <div
            onClick={() => onSelectProfile({ ...UWE_PROFILE, avatar: uweSangerTealImg })}
            className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-square bg-white rounded-[40px] sm:rounded-[46px] p-2.5 sm:p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.22)] border-[3px] border-white cursor-pointer transform rotate-[5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 group"
          >
            {/* Inner Photo Container */}
            <div className="relative w-full h-full rounded-[32px] sm:rounded-[38px] overflow-hidden bg-neutral-900 shadow-inner">
              <img
                src={uweSangerTealImg}
                alt="UWE SANGER"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Top-Right Online Badge */}
              <div className="absolute top-3.5 right-3.5 z-20 px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-neutral-900 text-[10px] sm:text-[11px] font-bold rounded-full shadow-sm flex items-center gap-1.5 border border-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                <span>Online</span>
              </div>

              {/* Bottom Scrim & Name Label */}
              <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
                <div className="flex items-center gap-2 text-white font-display text-base sm:text-lg font-black uppercase tracking-wider drop-shadow-md">
                  <span className="text-lg sm:text-xl">🇨🇦</span>
                  <span>UWE SANGER , 22</span>
                </div>
              </div>
            </div>

            {/* Floating Fire Reaction Circle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFireClicked(true);
                onSendReaction('🔥', { ...UWE_PROFILE, avatar: uweSangerTealImg });
                setTimeout(() => setFireClicked(false), 700);
              }}
              className={`absolute -bottom-3 sm:-bottom-4 right-4 sm:right-6 z-30 w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full shadow-[0_12px_28px_-5px_rgba(0,0,0,0.22)] border-[2.5px] border-white flex items-center justify-center text-2xl sm:text-3xl transition-transform active:scale-95 cursor-pointer ${
                fireClicked ? 'scale-125' : 'hover:scale-110'
              }`}
              title="Send Fire Reaction"
            >
              🔥
            </button>
          </div>

          {/* 3. Top-Right Floating Chat Bubble: "Hi 👋 Ready to chat?" */}
          <div className="absolute top-8 sm:top-10 -right-16 sm:-right-32 md:-right-40 lg:-right-48 z-20 bg-white px-4 sm:px-5 py-2 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-white text-neutral-800 text-xs sm:text-[13px] font-semibold whitespace-nowrap transform -rotate-[7deg] hover:rotate-0 transition-transform duration-300">
            Hi 👋 Ready to chat?
          </div>

          {/* 4. Right Floating Round Avatar with Attached Online Green Dot */}
          <div className="absolute top-36 sm:top-40 -right-14 sm:-right-24 md:-right-32 lg:-right-36 z-20 flex items-center">
            {/* Green Dot pinned on the left */}
            <span className="w-3.5 h-3.5 rounded-full bg-[#22c55e] ring-2 ring-white shadow-sm z-30 -mr-2" />
            
            {/* Round Avatar */}
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full ring-3 ring-white shadow-xl overflow-hidden bg-neutral-200">
              <img
                src={asianGuyGreencapImg}
                alt="Online User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
