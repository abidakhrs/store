// app/page.tsx
import MultiSectionScroll from '@/components/home/MultiSectionScroll';

export default function HomePage() {
  return (
    <main className="w-full h-screen overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Renders the full viewport interactive layout cleanly */}
      <MultiSectionScroll />
    </main>
  );
}