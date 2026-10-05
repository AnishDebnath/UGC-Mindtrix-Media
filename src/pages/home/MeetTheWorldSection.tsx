import React from 'react';
import { Profile } from '@/types';
import { HERO_PROFILES } from '@/data/mockData';

import skincareImg from '@/assets/UGC product image/skincare/Skincare_advertisement_on_stone.jpg';
import lipstickImg from '@/assets/UGC product image/lipstick/Lipstick_advertisement_on_marble.jpg';

interface MeetTheWorldSectionProps {
  onSelectProfile: (profile: Profile) => void;
  onSendReaction: (emoji: string, profile: Profile) => void;
  onDiscoverMore: () => void;
}

export const MeetTheWorldSection: React.FC<MeetTheWorldSectionProps> = ({
  onSelectProfile,
  onSendReaction,
  onDiscoverMore
}) => {
  const simoneProfile = HERO_PROFILES[2]; // Simone Lange
  const emojis = ['👍', '❤️', '😂', '🥰', '😲'];

  return (
    <section className="relative w-full py-24 mb-6 overflow-hidden">
      {/* Distinct Ambient Background Strip (Harmonious Soft Pastel Canvas with Subtle Glow) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f2effe]/90 via-[#f9f7ff] to-[#eaf3fc]/90 border-y border-white/80 pointer-events-none" />

      {/* Subtle Ambient Decorative Glow Orbs */}
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl pointer-events-none" />

      {/* Main Section Content Wrapper */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, Button */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between min-h-[440px]">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-normal text-neutral-900 uppercase leading-[1.3] mb-8">
                MEET THE<br />WORLD,ONE<br />CHAT AT A<br />TIME
              </h2>
            </div>

            <div className="max-w-md flex flex-col items-start gap-4 mt-auto">
              <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
                Mindtrix Media is a creative studio crafting UGC ads, reels, and product showcases that turn viewers into customers.
              </p>
              <button
                onClick={onDiscoverMore}
                className="px-7 py-3 bg-[#ded9ff] hover:bg-[#d0c9ff] text-neutral-900 font-display text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition matching reference image */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px]">
            {/* Main Card (Simone Lange) with Surrounding Floating Overlays */}
            <div className="relative flex items-center justify-center">
              {/* 1. Top-Left Floating Emoji Reaction Bar (Tilted -6deg) */}
              <div className="absolute top-8 -left-10 sm:-left-14 md:-left-26 z-30 bg-white/95 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] border border-white flex items-center gap-1.5 sm:gap-2 transform -rotate-6 transition-transform duration-300 hover:rotate-0">
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => onSendReaction(emoji, simoneProfile)}
                    className="text-sm sm:text-base hover:scale-130 transition-transform cursor-pointer"
                    title={emoji}
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              {/* 2. Small Polaroid Card (Man in Safari Hat) partially tucked behind the large card */}
              <div className="absolute bottom-8 sm:bottom-10 -left-18 sm:-left-26 md:-left-30 lg:-left-32 z-10 w-36 sm:w-42 bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.22)] border border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-1.5 bg-neutral-100">
                  <img
                    src={skincareImg}
                    alt="Skincare product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-neutral-600 px-1">
                  <span className="flex items-center gap-0.5">❤️ 12k</span>
                  <span className="flex items-center gap-0.5">💬 500</span>
                  <span className="flex items-center gap-0.5">🚀 1.5k</span>
                </div>
              </div>

              {/* 3. Main Central Profile Card (z-20) */}
              <div
                onClick={() => onSelectProfile(simoneProfile)}
                className="relative z-20 w-[275px] sm:w-[315px] md:w-[330px] bg-white rounded-[32px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border border-white cursor-pointer transform hover:scale-[1.01] transition-transform duration-300"
              >
                {/* Photo Canvas */}
                <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-neutral-900 mb-2">
                  <img
                    src={lipstickImg}
                    alt="Lipstick product"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Footer: Flag & Simone Lange Name */}
                <div className="px-2 py-0.5 flex items-center gap-2 text-neutral-900 font-display text-sm sm:text-base font-black uppercase tracking-wider">
                  <span className="text-base sm:text-lg">🇱🇷</span>
                  <span>SIMONE LANGE , 24</span>
                </div>
              </div>

              {/* 4. Floating Top-Right Speech Bubble (Tilted -4deg) */}
              <div className="absolute top-16 sm:top-24 -right-14 sm:-right-20 md:-right-24 z-30 bg-white/95 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] border border-white text-neutral-900 text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transform -rotate-4 transition-transform duration-300 hover:rotate-0">
                <span>Love the overall feel</span>
                <span>🫶</span>
              </div>

              {/* 5. Floating Bottom-Right Bubble (Tilted -4deg) */}
              <div className="absolute bottom-28 sm:bottom-26 -right-10 sm:-right-16 md:-right-20 z-30 bg-white/95 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] border border-white text-neutral-900 text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transform -rotate-4 transition-transform duration-300 hover:rotate-0">
                <span>Don't Miss This!</span>
                <span>👀</span>
              </div>

              {/* 6. Floating Bottom-Right Following Tag */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-0 sm:-right-2 z-30 px-4 sm:px-5 py-1.5 bg-[#cde4f0] text-[#1a4457] font-display text-sm sm:text-base font-bold rounded-full shadow-lg border border-white/80 transform -rotate-6">
                Following
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
