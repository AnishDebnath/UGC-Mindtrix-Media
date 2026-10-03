import React from 'react';
import { Heart, MessageCircle, Star, MapPin, Grid, Home, User } from 'lucide-react';
import { HERO_PROFILES, PHONE_PROFILE, PHONE_FRIEND_CARD } from '@/data/mockData';
import { Profile } from '@/types';

import avatarHipsterBeardImg from '@/assets/images/avatar_hipster_beard_1790979384816.jpg';
import avatarGreenCapImg from '@/assets/images/avatar_green_cap_1790979403136.jpg';

interface HeroSectionProps {
  onSelectProfile: (profile: Profile) => void;
  onSendReaction: (emoji: string, profile: Profile) => void;
  onOpenVideoChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectProfile
}) => {
  // Repeat profiles array for smooth seamless infinite marquee scrolling
  const marqueeProfiles = [
    ...HERO_PROFILES,
    ...HERO_PROFILES,
    ...HERO_PROFILES,
    ...HERO_PROFILES,
    ...HERO_PROFILES
  ];

  return (
    <section id="hero" className="relative w-full pt-1 sm:pt-3 pb-24 overflow-hidden">
      {/* Top Banner Section: Centered "MINDTRIX" Background Text with Right-to-Left Marquee Cards */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 sm:py-6 my-2 min-h-[260px] sm:min-h-[320px] md:min-h-[360px] flex items-center justify-center">
        {/* Giant Black Typography Background: MINDTRIX */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <svg
            viewBox="0 0 1400 320"
            className="w-full h-full object-fill scale-y-110"
            preserveAspectRatio="none"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#111111"
              fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
              fontWeight="900"
              fontSize="340"
              letterSpacing="-6"
            >
              MINDTRIX
            </text>
          </svg>
        </div>

        {/* Edge-to-Edge Marquee Track: Moving from Right to Left */}
        <div className="relative z-10 w-full overflow-hidden flex items-center">
          <div className="animate-marquee flex gap-3 sm:gap-4 lg:gap-5 py-3 items-center">
            {marqueeProfiles.map((profile, index) => (
              <div
                key={`${profile.id}-${index}`}
                onClick={() => onSelectProfile(profile)}
                className="group relative w-[180px] sm:w-[220px] md:w-[250px] aspect-square rounded-[22px] sm:rounded-[28px] shrink-0 cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                {/* Outer Card with Crisp White Border and Rounded Photo */}
                <div className="relative w-full h-full rounded-[22px] sm:rounded-[28px] overflow-hidden border-[2.5px] border-white shadow-2xl bg-neutral-900">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Right Online Pill Badge */}
                  {profile.isOnline && (
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 px-2 sm:px-2.5 py-0.5 bg-white rounded-full text-[9px] sm:text-[11px] font-bold text-neutral-900 flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#22c55e]" />
                      <span>Online</span>
                    </div>
                  )}

                  {/* Bottom Dark Gradient Scrim Overlay with Flag & Name */}
                  <div className="absolute inset-x-0 bottom-0 pt-10 sm:pt-14 pb-2.5 sm:pb-3.5 px-2.5 sm:px-3.5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                    <div className="flex items-center gap-1 sm:gap-1.5 text-white font-display text-[11px] sm:text-[13px] lg:text-[14px] font-bold uppercase tracking-wider truncate drop-shadow-md">
                      <span className="text-xs sm:text-sm shrink-0">{profile.flag}</span>
                      <span className="truncate">{profile.name} , {profile.age}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Showcase Section: Edge-to-Edge Desktop View Matching Screenshot */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-8 sm:pt-12 pb-20">
        {/* Section Headline */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-[#111111] uppercase leading-none">
            DISCOVER PROFILES. START CHATTING ON WIZZCHAT
          </h2>
        </div>

        {/* Edge-to-Edge Visual Composition Area */}
        <div className="relative w-full min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex items-center justify-center">
          {/* Background Typography "CHAT NOW" Anchored at the Bottom Side */}
          <div className="absolute inset-x-0 bottom-2 sm:bottom-4 z-0 flex items-end justify-center pointer-events-none select-none overflow-hidden h-[300px] sm:h-[360px] md:h-[400px] lg:h-[440px]">
            <svg
              viewBox="0 0 1600 360"
              className="w-full h-full object-fill"
              preserveAspectRatio="none"
            >
              <text
                x="50%"
                y="92%"
                textAnchor="middle"
                fill="#ffffff"
                fontFamily="'Anton', 'Oswald', 'Impact', sans-serif"
                fontWeight="900"
                fontSize="380"
                letterSpacing="-16"
              >
                CHAT NOW
              </text>
            </svg>
          </div>

          {/* Centerpiece Container with Slim iPhone & Floating Accents */}
          <div className="relative z-10 flex items-center justify-center w-full max-w-[1240px] px-4">
            {/* Relative Frame */}
            <div className="relative flex items-center justify-center">
              {/* 1. Top-Left Floating 5-Star Badge (Tilted -12deg, shifted downward) */}
              <div className="absolute top-16 sm:top-18 -left-10 sm:-left-16 md:-left-20 z-30 bg-[#d5d0f8] px-3.5 sm:px-4 py-1.5 rounded-full shadow-[0_12px_30px_-5px_rgba(45,34,106,0.35)] border border-white/90 flex items-center gap-1 text-[#2d226a] transform -rotate-12 transition-transform duration-300 hover:rotate-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#2d226a] text-[#2d226a]" />
                ))}
              </div>

              {/* 2. Bottom-Left Floating Profile Card with Following Badge (Tilted -6deg, shifted downward) */}
              <div className="absolute bottom-5 sm:bottom-6 -left-24 sm:-left-36 md:-left-44 lg:-left-48 z-20 w-32 sm:w-38 md:w-42 bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                {/* Following Badge */}
                <div className="mb-1.5">
                  <span className="text-[9px] sm:text-[10px] font-bold bg-[#cde4f0] text-[#1a4457] px-2.5 py-0.5 rounded-full inline-block shadow-sm">
                    Following
                  </span>
                </div>
                {/* Photo */}
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-1.5 bg-neutral-100">
                  <img
                    src={PHONE_FRIEND_CARD.avatar}
                    alt={PHONE_FRIEND_CARD.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Bar */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-neutral-600 px-1">
                  <span className="flex items-center gap-0.5">❤️ {PHONE_FRIEND_CARD.likes}</span>
                  <span className="flex items-center gap-0.5">💬 {PHONE_FRIEND_CARD.comments}</span>
                  <span className="flex items-center gap-0.5">🚀 {PHONE_FRIEND_CARD.shares}</span>
                </div>
              </div>

              {/* 3. Center Slim Clean iPhone Mockup */}
              <div className="relative z-25 w-[285px] sm:w-[305px] md:w-[320px] rounded-[48px] bg-black p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.15)] border-[4px] border-[#18181a]">
                {/* Inner Screen Canvas */}
                <div className="relative rounded-[42px] overflow-hidden bg-gradient-to-b from-[#dbeef8] via-[#e6e8fa] to-[#ded9f8] text-neutral-900 flex flex-col h-[595px] sm:h-[630px] select-none shadow-inner justify-between p-3.5">
                  
                  {/* ZONE 1: TOP PART */}
                  <div className="flex flex-col gap-2.5 z-20 w-full">
                    {/* Status Bar */}
                    <div className="w-[92%] max-w-[250px] mx-auto flex items-center justify-between text-[11px] font-bold text-neutral-800">
                      <span>9:41</span>

                      {/* Dynamic Island Notch */}
                      <div className="w-[86px] h-[23px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#111116] border border-neutral-800 flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-[#0a0a14]" />
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#0d0d18] border border-neutral-800" />
                      </div>

                      <div className="flex items-center gap-1.5 text-xs">
                        <span>📶</span>
                        <div className="w-4.5 h-2.5 border border-neutral-800 rounded-sm p-0.5 flex items-center">
                          <div className="h-full w-full bg-neutral-900 rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Header Pill & Grid Button */}
                    <div className="w-[92%] max-w-[250px] mx-auto flex items-center justify-between gap-2 pt-0.5">
                      <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm flex-1 min-w-0">
                        <div className="w-6 h-6 rounded-full ring-1.5 ring-amber-400 overflow-hidden bg-neutral-300 shrink-0">
                          <img
                            src={HERO_PROFILES[0].avatar}
                            alt="Michael Bates"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="truncate">
                          <div className="text-[11px] font-bold leading-none text-neutral-900 truncate">Michael Bates</div>
                          <div className="text-[9px] text-neutral-600 leading-none mt-0.5 flex items-center gap-0.5 font-medium truncate">
                            <MapPin className="w-2.5 h-2.5 text-neutral-500 shrink-0" /> Washington, USA
                          </div>
                        </div>
                      </div>

                      <button className="w-8 h-8 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-xs border border-white/50 text-neutral-700 shadow-sm shrink-0">
                        <Grid className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* ZONE 2: CENTER IMAGE PART */}
                  <div className="flex items-center justify-center my-auto py-1 z-10 w-full">
                    <div className="relative w-[92%] max-w-[250px] aspect-[9/16] rounded-[24px] overflow-hidden shadow-xl border-[1.5px] border-white/90 bg-neutral-900">
                      <img
                        src={PHONE_PROFILE.avatar}
                        alt={PHONE_PROFILE.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* ZONE 3: BOTTOM PART */}
                  <div className="flex flex-col items-center gap-2.5 z-20 pb-0.5 w-full">
                    <div className="py-1.5 px-3.5 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-between border border-white/60 text-neutral-700 shadow-sm w-[90%] max-w-[220px]">
                      <div className="flex items-center gap-1.5 text-[#2c1a6e] font-bold text-[11px] bg-[#c6b8f7] px-3.5 py-1 rounded-full shadow-sm">
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </div>
                      <button className="text-neutral-500 hover:text-neutral-900 px-1.5 transition-colors"><Heart className="w-4 h-4" /></button>
                      <button className="text-neutral-500 hover:text-neutral-900 px-1.5 transition-colors"><MessageCircle className="w-4 h-4" /></button>
                      <button className="text-neutral-500 hover:text-neutral-900 px-1.5 transition-colors"><User className="w-4 h-4" /></button>
                    </div>

                    <div className="flex justify-center pt-0.5">
                      <div className="w-24 h-1 bg-neutral-900/90 rounded-full" />
                    </div>
                  </div>

                </div>
              </div>

              {/* 4. Top-Right Floating Chat Bubble (Tilted -3deg, shifted downward) */}
              <div className="absolute top-20 sm:top-24 -right-20 sm:-right-32 md:-right-36 lg:-right-40 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl py-2 px-3 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white w-40 sm:w-48 flex items-center gap-2.5 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-100 shadow-sm">
                  <img
                    src={avatarHipsterBeardImg}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 bg-neutral-200 rounded-full w-full" />
                  <div className="h-2 bg-neutral-200 rounded-full w-3/4" />
                </div>
              </div>

              {/* 5. Bottom-Right Floating Chat Bubble (Tilted -3deg, shifted downward) */}
              <div className="absolute bottom-16 sm:bottom-18 -right-16 sm:-right-26 md:-right-30 lg:-right-34 z-30 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl py-2 px-3 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.25)] border border-white w-40 sm:w-48 flex items-center gap-2.5 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-100 shadow-sm">
                  <img
                    src={avatarGreenCapImg}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 bg-neutral-200 rounded-full w-full" />
                  <div className="h-2 bg-neutral-200 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
