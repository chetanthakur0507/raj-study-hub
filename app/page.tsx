import dynamic from 'next/dynamic';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Amenities from '@/components/Amenities';
import CTASection from '@/components/CTASection';

const Gallery = dynamic(() => import('@/components/Gallery'));
const SuccessStories = dynamic(() => import('@/components/SuccessStories'));
const FAQ = dynamic(() => import('@/components/FAQ'));

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <AboutUs compact />
      <Amenities compact />
      <Gallery />
      <SuccessStories />
      <CTASection />
      <FAQ />
    </PageLayout>
  );
}
