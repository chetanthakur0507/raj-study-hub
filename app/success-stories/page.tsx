import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SuccessStories from '@/components/SuccessStories';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Success stories from students at RAJ STUDY HUB.',
};

export default function SuccessStoriesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Success Stories"
        subtitle="Real achievements from our study community"
        image={IMAGES.about1}
      />
      <SuccessStories />
    </PageLayout>
  );
}
