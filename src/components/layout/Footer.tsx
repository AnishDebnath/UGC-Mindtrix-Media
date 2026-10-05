import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import mindtrixLogo from '@/assets/logo.png';

interface FooterProps {
  onOpenDownload: (platform: 'ios' | 'android' | 'all') => void;
  onOpenLegal: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownload,
  onOpenLegal
}) => {
  return (
    <footer className="w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto select-none">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Column 1 (Left): MINDTRIX Logo + Bottom Copyright (No extra description, exact to screenshot) */}
        <div className="md:col-span-4 flex flex-col justify-between min-h-[170px]">
          <div>
            <img
              src={mindtrixLogo}
              alt="Mindtrix Media"
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
          </div>
          <div className="text-xs sm:text-[13px] text-neutral-800 font-normal flex items-center gap-1.5 mt-8 md:mt-0">
            <span>ⓒ 2026 Mindtrix Media. All rights reserved.</span>
          </div>
        </div>

        {/* Column 2: USEFUL PAGES */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 mb-3.5">
            USEFUL PAGES
          </h4>
          <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-800 font-normal">
            <li>
              <button
                onClick={() => onOpenLegal('Terms and conditions')}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Terms and conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('Privacy policy')}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Privacy policy
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('Community Guidelines')}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Community Guidelines
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('Cookies policy')}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Cookies policy
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('Cookie Settings')}
                className="hover:text-black transition-colors cursor-pointer text-left"
              >
                Cookie Settings
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: SOCIAL MEDIA */}
        <div className="md:col-span-2">
          <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 mb-3.5">
            SOCIAL MEDIA
          </h4>
          <ul className="space-y-2 text-xs sm:text-[13px] text-neutral-800 font-normal">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-neutral-800" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <span className="font-bold text-xs text-neutral-800">𝕏</span> X.com
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <span className="font-bold text-xs text-neutral-800">♪</span> TikTok
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 text-neutral-800" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: DOWNLOAD MINDTRIX */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900 mb-3.5">
            DOWNLOAD MINDTRIX
          </h4>
          <div className="flex flex-col gap-2 text-xs sm:text-[13px] text-neutral-800 font-normal">
            <button
              onClick={() => onOpenDownload('ios')}
              className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer text-left"
            >
              <span className="text-base text-neutral-900 leading-none"></span> Apple iOS
            </button>
            <button
              onClick={() => onOpenDownload('android')}
              className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer text-left"
            >
              <span className="text-xs text-neutral-900 leading-none">▶</span> Google Android
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
