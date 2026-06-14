import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about RAJ STUDY HUB.',
};

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHero
        title="FAQ"
        subtitle="Find answers to common questions"
        image={IMAGES.focus}
      />
      <FAQ hideHeader />
    </PageLayout>
  );
}
