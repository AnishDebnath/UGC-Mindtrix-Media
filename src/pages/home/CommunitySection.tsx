import React from 'react';
import { HERO_PROFILES } from '@/data/mockData';

import communityWideFriendsImg from '@/assets/images/community_wide_friends_1790982804862.jpg';
import communityManSunlightImg from '@/assets/images/community_man_sunlight_1790982822414.jpg';
import brunetteShirtLeftImg from '@/assets/images/brunette_shirt_left_1790982842053.jpg';
import windblownHairWomanImg from '@/assets/images/windblown_hair_woman_1790982857578.jpg';
import tousledGuySkyImg from '@/assets/images/tousled_guy_sky_1790982870552.jpg';
import womanBandanaPixieImg from '@/assets/images/woman_bandana_pixie_1790982884567.jpg';

interface CommunitySectionProps {
  onOpenVideoChat: () => void;
  onMeetCommunity: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onOpenVideoChat,
  onMeetCommunity
}) => {
  const emojis = ['👍', '❤️', '😂', '🥰', '😲'];

  return (
    <section id="community" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-visible">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 sm:mb-16">
        <div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 uppercase leading-[0.88]">
            THE WIZZCHAT<br />COMMUNITY
          </h2>
        </div>

        <div className="max-w-md flex flex-col items-start gap-4">
          <p className="text-neutral-800 text-sm sm:text-base leading-relaxed font-normal">
            WizzChat is a community rooted in respect and understanding, where everyone can feel safe, heard, and included.
          </p>
          <button
            onClick={onMeetCommunity}
            className="px-6 py-2.5 bg-[#ded9ff] hover:bg-[#d0c9ff] text-neutral-900 font-display text-xs font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            MEET OUR WIZZCHAT
          </button>
        </div>
      </div>

      {/* 3D Isometric Perspective Stage in 16:9 Ratio */}
      <div className="relative w-full max-w-[940px] mx-auto py-12 sm:py-16 flex items-center justify-center [perspective:1600px] overflow-visible select-none">
        
        {/* Tilted 3D Stage */}
        <div 
          className="relative w-full aspect-[16/9] transition-transform duration-500 ease-out"
          style={{
            transform: 'rotateX(22deg) rotateY(-16deg) rotateZ(6deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 1. Rear Card: Same Size (16:9), equal upside (-44px) and right-side (+44px) offset */}
          <div 
            className="absolute inset-0 w-full h-full aspect-[16/9] bg-gradient-to-tr from-[#bfe0f7] via-[#d4ebf9] to-[#eaf5fc] rounded-[36px] sm:rounded-[44px] shadow-[0_30px_70px_-10px_rgba(20,60,100,0.22)] border-[2.5px] border-white pointer-events-none"
            style={{
              transform: 'translate3d(44px, -44px, -30px)'
            }}
          />

          {/* 2. Main Front Pure White Board in 16:9 Ratio */}
          <div className="relative w-full h-full aspect-[16/9] bg-white rounded-[36px] sm:rounded-[44px] p-3 sm:p-4 md:p-5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.24)] border border-white flex flex-col justify-between">
            
            {/* Top-Right Floating "Following" Badge */}
            <div 
              className="absolute -top-3.5 right-6 sm:right-12 z-30 px-4 sm:px-5 py-1 sm:py-1.5 bg-[#cde4f0] text-[#1a4457] font-display text-[11px] sm:text-xs font-bold rounded-full shadow-md border border-white/90"
              style={{ transform: 'rotate(-8deg)' }}
            >
              Following
            </div>

            {/* Seamless 4-Column Balanced Grid: 9:16 Flanks + 1:1 Center Quad */}
            <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5 h-full w-full">
              
              {/* COLUMN 1: Full-Height 9:16 Vertical Portrait (Span 3) */}
              <div 
                onClick={onOpenVideoChat}
                className="col-span-3 h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
              >
                <img
                  src={brunetteShirtLeftImg}
                  alt="Community member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* COLUMN 2 & 3: Center Grid with 4 Square 1:1 Images (Span 6) */}
              <div className="col-span-6 h-full flex flex-col justify-between gap-2.5 sm:gap-3.5 relative">
                
                {/* Top Center: 2 Side-by-Side 1:1 Square Cards */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3.5 flex-1 min-h-0">
                  {/* Top-Left Square Card (Friends with Online Badge) */}
                  <div 
                    onClick={onOpenVideoChat}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={communityWideFriendsImg}
                      alt="Community friends"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[9px] sm:text-[10px] font-bold text-neutral-900 flex items-center gap-1 shadow-sm border border-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                      <span>Online</span>
                    </div>
                  </div>

                  {/* Top-Right Square Card (Tousled Guy) */}
                  <div 
                    onClick={onOpenVideoChat}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={tousledGuySkyImg}
                      alt="Community member"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Larger Reaction Bar Centered on Seam */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                  <div className="pointer-events-auto bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_12px_30px_-5px_rgba(0,0,0,0.25)] border border-white flex items-center gap-2 sm:gap-2.5">
                    {emojis.map((emoji) => (
                      <span
                        key={emoji}
                        className="text-base sm:text-lg hover:scale-130 transition-transform cursor-pointer"
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Center: 2 Side-by-Side 1:1 Square Cards */}
                <div className="flex items-center justify-between gap-2.5 sm:gap-3.5 flex-1 min-h-0">
                  {/* Bottom-Left Square Card (Windblown Hair) */}
                  <div 
                    onClick={onOpenVideoChat}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={windblownHairWomanImg}
                      alt="Community member"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom-Right Square Card (Pixie Bandana) */}
                  <div 
                    onClick={onOpenVideoChat}
                    className="w-1/2 h-full aspect-square rounded-[16px] sm:rounded-[20px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
                  >
                    <img
                      src={womanBandanaPixieImg}
                      alt="Community member"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

              </div>

              {/* COLUMN 4: Full-Height 9:16 Vertical Portrait (Span 3) */}
              <div 
                onClick={onOpenVideoChat}
                className="col-span-3 h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer group relative"
              >
                <img
                  src={communityManSunlightImg}
                  alt="Community member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

          {/* 3. Floating Video Chat Pill Bar: Shifted further bottom-side */}
          <div 
            className="absolute -bottom-8 sm:-bottom-10 left-4 sm:left-8 z-40"
            style={{ transform: 'translateZ(45px)' }}
          >
            <button
              onClick={onOpenVideoChat}
              className="flex items-center gap-2.5 sm:gap-3 bg-gradient-to-r from-[#cad5f8] via-[#dcd2fa] to-[#ebd0fb] hover:opacity-95 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_20px_40px_-5px_rgba(45,34,106,0.35)] border border-white/90 transition-all active:scale-95 cursor-pointer"
            >
              {/* Overlapping Mini Avatars */}
              <div className="flex items-center -space-x-2">
                {HERO_PROFILES.slice(0, 5).map((prof) => (
                  <div
                    key={prof.id}
                    className="w-6 sm:w-7 h-6 sm:h-7 rounded-full ring-2 ring-white overflow-hidden shadow-sm bg-neutral-200"
                  >
                    <img
                      src={prof.avatar}
                      alt={prof.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Action Text */}
              <span className="font-display text-xs sm:text-[13px] font-black tracking-wider text-neutral-900 uppercase pr-1">
                START VIDEO CHAT
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
