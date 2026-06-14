import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photo gallery of RAJ STUDY HUB premium study facilities.',
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        title="Gallery"
        subtitle="Explore our premium study spaces"
        image={IMAGES.library}
      />
      <Gallery hideHeader />
    </PageLayout>
  );
}
