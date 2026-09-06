import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { LegacyStats } from '@/components/home/LegacyStats';
import { StoryPreview } from '@/components/home/StoryPreview';
import { TimelineSection } from '@/components/home/TimelineSection';
import { TheMaster } from '@/components/home/TheMaster';
import { BoxingYogaShowcase } from '@/components/home/BoxingYogaShowcase';
import { StudentsSpotlight } from '@/components/home/StudentsSpotlight';
import { WomensBoxingSection } from '@/components/home/WomensBoxingSection';
import { FCSCommunitySection } from '@/components/home/FCSCommunitySection';
import { BeyondBoxingGrid } from '@/components/home/BeyondBoxingGrid';
import { SculptorSection } from '@/components/home/SculptorSection';
import { KozhikodeSection } from '@/components/home/KozhikodeSection';
import { DaveedSection } from '@/components/home/DaveedSection';
import { LegacyToday } from '@/components/home/LegacyToday';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <LegacyStats />
      <StoryPreview />
      <TimelineSection />
      <TheMaster />
      <BoxingYogaShowcase />
      <StudentsSpotlight />
      <WomensBoxingSection />
      <FCSCommunitySection />
      <BeyondBoxingGrid />
      <SculptorSection />
      <KozhikodeSection />
      <DaveedSection />
      <LegacyToday />
    </div>
  );
}
