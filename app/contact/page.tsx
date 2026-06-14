import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import ContactUs from '@/components/ContactUs';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact RAJ STUDY HUB — Near Panchayat Ghar, Dhakia. Call +91 8006013014.',
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Visit us, call us, or send us a message"
        image={IMAGES.workspace}
      />
      <ContactUs hideHeader />
    </PageLayout>
  );
}
