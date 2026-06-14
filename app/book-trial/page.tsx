import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import BookFreeTrial from '@/components/BookFreeTrial';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book Free Trial',
  description: 'Book a free trial visit at RAJ STUDY HUB and experience our premium study facilities.',
};

export default function BookTrialPage() {
  return (
    <PageLayout>
      <PageHero
        title="Book Free Trial"
        subtitle="Experience our facilities firsthand"
        image={IMAGES.hero}
      />
      <BookFreeTrial hideHeader />
    </PageLayout>
  );
}
