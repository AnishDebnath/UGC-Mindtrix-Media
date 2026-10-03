import React from 'react';
import { Star } from 'lucide-react';
import avatarGreenCapImg from '@/assets/images/avatar_green_cap_1790979403136.jpg';
import { HERO_PROFILES } from '@/data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-visible">
      {/* Big Headline */}
      <div className="text-center mb-14 sm:mb-18">
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight text-neutral-900 uppercase leading-[0.88]">
          WHAT OUR<br />USERS LOVE
        </h2>
      </div>

      {/* Asymmetrical Testimonials Cards Grid: Left card is wider, Right card is shorter */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-10 max-w-5xl mx-auto">
        
        {/* Card 1 (Left - Wider Card: Paul Kastner) */}
        <div className="relative group w-full md:w-[56%] flex flex-col">
          {/* White Speech Bubble Container */}
          <div className="relative z-10 bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white flex flex-col justify-between h-full transition-shadow hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]">
            
            <div>
              {/* 5 Filled Golden Orange Stars */}
              <div className="flex text-[#f59e0b] gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-800 text-[14px] sm:text-[15px] leading-relaxed font-normal mb-8">
                Genuinely love using Wiss Chat. It feels safe, welcoming, and easy to connect with new people without pressure. The conversations feel real, and the community is surprisingly kind and respectful. It's one of the few chat platforms where I actually feel comfortable being myself.
              </p>
            </div>

            {/* Author Row */}
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 ring-2 ring-white shadow-sm shrink-0">
                <img
                  src={HERO_PROFILES[3].avatar}
                  alt="Paul Kastner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-[17px] font-black tracking-wider text-neutral-900 uppercase leading-tight">
                  PAUL KASTNER
                </h3>
                <div className="text-xs text-neutral-500 font-medium flex items-center gap-1 mt-0.5">
                  <span>Canada</span>
                  <span>🇨🇦</span>
                </div>
              </div>
            </div>
          </div>

          {/* Speech Bubble Tail at the Bottom pointing downward-left */}
          <div className="absolute -bottom-5 left-14 sm:left-20 z-10 pointer-events-none">
            <svg
              width="44"
              height="24"
              viewBox="0 0 44 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_8px_8px_rgba(0,0,0,0.06)]"
            >
              <path
                d="M0 0C6 1 14 6 18 14C22 22 26 24 30 24C34 24 38 18 44 0H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Card 2 (Right - Shorter Width Card: Steffen Achen) */}
        <div className="relative group w-full md:w-[44%] flex flex-col">
          {/* White Speech Bubble Container */}
          <div className="relative z-10 bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white flex flex-col justify-between h-full transition-shadow hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]">
            
            <div>
              {/* 5 Filled Golden Orange Stars */}
              <div className="flex text-[#f59e0b] gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-800 text-[14px] sm:text-[15px] leading-relaxed font-normal mb-8">
                Wiss Chat is honestly one of my favorite apps right now. The design is clean, the features are simple, and meeting new people feels fun instead of awkward Every chat.
              </p>
            </div>

            {/* Author Row */}
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 ring-2 ring-white shadow-sm shrink-0">
                <img
                  src={avatarGreenCapImg}
                  alt="Steffen Achen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-[17px] font-black tracking-wider text-neutral-900 uppercase leading-tight">
                  STEFFEN ACHEN
                </h3>
                <div className="text-xs text-neutral-500 font-medium flex items-center gap-1 mt-0.5">
                  <span>USA</span>
                  <span>🇺🇸</span>
                </div>
              </div>
            </div>
          </div>

          {/* Speech Bubble Tail at the Bottom pointing downward-left */}
          <div className="absolute -bottom-5 left-14 sm:left-18 z-10 pointer-events-none">
            <svg
              width="44"
              height="24"
              viewBox="0 0 44 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_8px_8px_rgba(0,0,0,0.06)]"
            >
              <path
                d="M0 0C6 1 14 6 18 14C22 22 26 24 30 24C34 24 38 18 44 0H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};
