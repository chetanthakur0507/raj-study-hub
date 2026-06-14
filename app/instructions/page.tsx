import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Instructions from '@/components/Instructions';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Instructions & Guidelines',
  description: 'Student instructions and guidelines for RAJ STUDY HUB library.',
};

export default function InstructionsPage() {
  return (
    <PageLayout>
      <PageHero
        title="Instructions & Guidelines"
        subtitle="छात्र निर्देश एवं नियम — Student Rules"
        image={IMAGES.focus}
      />
      <Instructions hideHeader />
    </PageLayout>
  );
}
