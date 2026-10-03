import React from 'react';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenVideoChat: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenVideoChat,
  onScrollTo
}) => {
  return (
    <header className="w-full pt-6 pb-4 px-4 sm:px-8 max-w-6xl mx-auto flex items-center justify-between text-neutral-900 text-sm select-none">
      {/* Navigation Links (Left to Center) */}
      <nav className="flex items-center gap-6 sm:gap-10 md:gap-14 font-medium text-xs sm:text-[14px] text-neutral-800">
        <button
          onClick={() => onScrollTo('hero')}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={onOpenVideoChat}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Video Chat
        </button>
        <button
          onClick={() => onScrollTo('testimonials')}
          className="hover:text-black transition-colors cursor-pointer"
        >
          Blog
        </button>
        <button
          onClick={() => onScrollTo('stand-for')}
          className="hover:text-black transition-colors cursor-pointer"
        >
          About us
        </button>
        <button
          onClick={() => onScrollTo('community')}
          className="hover:text-black transition-colors cursor-pointer"
        >
          History
        </button>
      </nav>

      {/* Right Unified Dark Capsule: [ f  G    |  Log in ] */}
      <button
        onClick={onOpenLogin}
        className="bg-[#1a1b1e] hover:bg-black text-white px-4 sm:px-5 py-2 rounded-full flex items-center gap-3 sm:gap-3.5 shadow-md cursor-pointer transition-all active:scale-95 group shrink-0"
      >
        {/* Social Icons Stack */}
        <div className="flex items-center gap-2.5 text-xs text-neutral-200">
          <span className="font-bold text-xs leading-none hover:text-white transition-colors">f</span>
          <span className="font-bold text-xs leading-none hover:text-white transition-colors">G</span>
          <span className="text-sm leading-none hover:text-white transition-colors"></span>
        </div>

        {/* Thin Divider Line */}
        <div className="w-[1px] h-3.5 bg-neutral-600" />

        {/* Log In Label */}
        <span className="text-xs sm:text-[13px] font-medium text-white tracking-wide">
          Log in
        </span>
      </button>
    </header>
  );
};
