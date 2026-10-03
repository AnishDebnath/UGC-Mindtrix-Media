import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/home';
import { scrollToId } from '@/utils/scroll';

const noop = () => {};

export default function App() {
  return (
    <div className="min-h-screen bg-landing-gradient relative overflow-x-hidden text-neutral-900 selection:bg-indigo-100 flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar
        onOpenLogin={noop}
        onOpenVideoChat={noop}
        onScrollTo={scrollToId}
      />

      {/* Home Page Sections */}
      <HomePage />

      {/* Footer */}
      <Footer
        onOpenDownload={noop}
        onOpenLegal={noop}
      />
    </div>
  );
}
