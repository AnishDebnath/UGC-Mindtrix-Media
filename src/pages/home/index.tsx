import { scrollToId } from '@/utils/scroll';
import { HeroSection } from './HeroSection';
import { WhatWeStandForSection } from './WhatWeStandForSection';
import { MeetTheWorldSection } from './MeetTheWorldSection';
import { CommunitySection } from './CommunitySection';
import { TestimonialsSection } from './TestimonialsSection';
import { BottomShowcaseSection } from './BottomShowcaseSection';
import { CtaSection } from './CtaSection';

const noop = () => {};

export function HomePage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero Section */}
      <HeroSection
        onSelectProfile={noop}
        onSendReaction={noop}
        onOpenVideoChat={noop}
      />

      {/* What We Stand For Section */}
      <WhatWeStandForSection
        onDiscoverMore={() => scrollToId('community')}
      />

      {/* Meet The World Section */}
      <MeetTheWorldSection
        onSelectProfile={noop}
        onSendReaction={noop}
        onDiscoverMore={noop}
      />

      {/* The WizzChat Community Section */}
      <CommunitySection
        onOpenVideoChat={noop}
        onMeetCommunity={() => scrollToId('testimonials')}
      />

      {/* What Our Users Love Section */}
      <TestimonialsSection />

      {/* Bottom Profile Floating Showcase */}
      <BottomShowcaseSection
        onSelectProfile={noop}
        onSendReaction={noop}
      />

      {/* CTA & Waitlist Section */}
      <CtaSection
        onJoinWaitlist={noop}
        onSubscribe={noop}
        onScrollToAbout={() => scrollToId('stand-for')}
      />
    </main>
  );
}
