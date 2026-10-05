import React from 'react';
import mindtrixLogo from '@/assets/logo.png';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenVideoChat: () => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
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

      {/* Right: Mindtrix Media Logo */}
      <img
        src={mindtrixLogo}
        alt="Mindtrix Media"
        className="h-10 sm:h-12 w-auto object-contain shrink-0"
      />
    </header>
  );
};
