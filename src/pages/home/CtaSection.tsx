import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface CtaSectionProps {
  onJoinWaitlist: () => void;
  onSubscribe: (email: string) => void;
  onScrollToAbout: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onJoinWaitlist,
  onSubscribe,
  onScrollToAbout
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    onSubscribe(email.trim());
    setIsSuccess(true);
    setName('');
    setPhone('');
    setEmail('');
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section
      className="relative w-full pt-16 pb-28 overflow-visible select-none"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 55%, rgba(255,255,255,0) 100%)',
        backgroundSize: '100% 320px',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 1. Top Sub-Bar Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full pb-6">
        {/* Left: About us */}
        <button
          onClick={onScrollToAbout}
          className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-black transition-colors cursor-pointer shrink-0"
        >
          About us
        </button>

        {/* Center: A SPACE MADE FOR EVERYTHING THAT MAKES YOU */}
        <h3 className="font-display text-lg sm:text-2xl md:text-[26px] lg:text-[28px] font-black tracking-tight text-neutral-900 uppercase text-center px-4">
          A SPACE MADE FOR EVERYTHING THAT MAKES YOU
        </h3>

        {/* Right: JOIN WAITLIST Pill Button */}
        <button
          onClick={onJoinWaitlist}
          className="px-5 sm:px-6 py-2 bg-gradient-to-r from-[#cad5f8] via-[#dcd2fa] to-[#ebd0fb] hover:opacity-95 text-neutral-900 font-display text-[11px] sm:text-xs font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap shrink-0"
        >
          JOIN WAITLIST
        </button>
      </div>

      {/* Full-Width Segmented Horizontal Line */}
      <div className="w-full flex items-center justify-between gap-3 sm:gap-4 mb-20 sm:mb-24 px-2 sm:px-4">
        <div className="flex-1 h-[1.5px] bg-[#d1dce7]" />
        <div className="flex-1 h-[1.5px] bg-[#d1dce7]" />
        <div className="flex-1 h-[1.5px] bg-[#d1dce7]" />
        <div className="flex-1 h-[1.5px] bg-[#d1dce7]" />
        <div className="flex-1 h-[1.5px] bg-[#d1dce7]" />
        <div className="flex-1 h-[1.5px] bg-[#d1dce7]" />
      </div>

      {/* 2. Main Center CTA Banner ("COME AS YOU ARE WELCOME HERE.") */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Massive 2-Line Stacked Headline */}
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-black tracking-tight text-neutral-900 uppercase leading-[0.88] mb-12 sm:mb-16">
            COME AS YOU ARE<br />WELCOME HERE.
          </h2>

          {/* Master Tilted Capsule with 3 Separated Fields inside */}
          <form onSubmit={handleSubmit} className="w-full max-w-3xl relative">
            
            {/* Outer Frosted Glass Aura Ring with Exact Tilt Angle (-3.5deg) */}
            <div className="bg-white/45 backdrop-blur-xl rounded-[36px] sm:rounded-full p-2.5 sm:p-3 shadow-[0_20px_50px_-10px_rgba(45,34,106,0.1)] border border-white/80 transform -rotate-[3.5deg] hover:rotate-0 transition-all duration-300">
              
              {/* Inner White Capsule Container */}
              <div className="flex flex-col sm:flex-row items-center bg-white rounded-[30px] sm:rounded-full p-2 sm:p-1.5 shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80">
                
                {/* Field 1: Name */}
                <div className="w-full sm:w-[28%] px-4 py-2 sm:py-2.5 flex items-center">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full text-xs sm:text-sm text-neutral-900 bg-transparent placeholder-neutral-400 font-medium focus:outline-none"
                  />
                </div>

                {/* Field 2: Phone Number */}
                <div className="w-full sm:w-[32%] px-4 py-2 sm:py-2.5 flex items-center">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full text-xs sm:text-sm text-neutral-900 bg-transparent placeholder-neutral-400 font-medium focus:outline-none"
                  />
                </div>

                {/* Field 3: Email Address + Action Button */}
                <div className="w-full sm:w-[40%] pl-4 pr-1 py-1 flex items-center justify-between gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full min-w-0 text-xs sm:text-sm text-neutral-900 bg-transparent placeholder-neutral-400 font-medium focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-7 py-3 bg-gradient-to-r from-[#d5d0fa] to-[#e4d6fb] hover:opacity-95 text-neutral-900 font-display text-xs sm:text-sm font-black tracking-wider uppercase rounded-full transition-all active:scale-95 shadow-sm cursor-pointer shrink-0"
                  >
                    {isSuccess ? (
                      <span className="flex items-center gap-1.5 text-emerald-800">
                        <Check className="w-4 h-4" /> SIGNED
                      </span>
                    ) : (
                      'SIGN UP'
                    )}
                  </button>
                </div>

              </div>

            </div>

            {isSuccess && (
              <p className="text-xs sm:text-sm font-bold text-emerald-700 mt-4 animate-in fade-in">
                🎉 Welcome {name || 'aboard'}! You're on our priority VIP list.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
