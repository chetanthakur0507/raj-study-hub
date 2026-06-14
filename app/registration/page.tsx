import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import RegistrationForm from '@/components/RegistrationForm';
import { IMAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Registration',
  description: 'Register for membership at RAJ STUDY HUB — premium study library in Dhakia.',
};

export default function RegistrationPage() {
  return (
    <PageLayout>
      <PageHero
        title="Registration Form"
        subtitle="Join our premium study community"
        image={IMAGES.reading}
      />
      <RegistrationForm hideHeader />
    </PageLayout>
  );
}
