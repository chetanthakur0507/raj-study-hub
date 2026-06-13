import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import AboutUs from '@/components/AboutUs';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about RAJ STUDY HUB — founded by Nitin Kumar Singh in loving memory of Shri Raj Kumar Singh.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="A vision built with love, respect, and purpose"
        image={IMAGES.about2}
      />
      <AboutUs />
    </PageLayout>
  );
}
