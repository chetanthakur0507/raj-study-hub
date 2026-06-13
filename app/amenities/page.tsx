import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import Amenities from '@/components/Amenities';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Amenities',
  description: 'Premium amenities at RAJ STUDY HUB — AC, WiFi, QR access, CCTV, charging points, and more.',
};

export default function AmenitiesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Our Amenities"
        subtitle="Comfort, convenience, security, and a distraction-free atmosphere"
        image={IMAGES.study}
      />
      <Amenities />
    </PageLayout>
  );
}
