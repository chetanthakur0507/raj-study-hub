import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using RAJ STUDY HUB services.',
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero title="Terms of Service" subtitle="Terms and conditions for our services" />
      <PolicyLayout title="Terms of Service">
        <p>
          Welcome to RAJ STUDY HUB. By accessing our study hub, website, or services, you agree to follow the terms and conditions mentioned below.
        </p>

        <h3>1. General Usage</h3>
        <ul>
          <li>RAJ STUDY HUB provides a disciplined and peaceful study environment for students.</li>
          <li>Students and visitors are expected to maintain proper behavior and respect the study atmosphere.</li>
        </ul>

        <h3>2. Registration & Access</h3>
        <ul>
          <li>Valid registration details must be provided during admission.</li>
          <li>QR access, digital attendance, or login credentials must not be shared with others.</li>
          <li>Unauthorized entry is strictly prohibited.</li>
        </ul>

        <h3>3. Study Hub Rules</h3>
        <ul>
          <li>Maintain silence inside the study area.</li>
          <li>Any damage to property or equipment may result in penalties.</li>
          <li>Misconduct, disturbance, or inappropriate behavior may lead to suspension of access.</li>
        </ul>

        <h3>4. Fees & Payments</h3>
        <ul>
          <li>All fees must be paid on time.</li>
          <li>Registration or membership fees are non-refundable unless decided otherwise by management.</li>
        </ul>

        <h3>5. Digital Services</h3>
        <ul>
          <li>RAJ STUDY HUB may use CCTV surveillance, digital attendance systems, and access control systems for security and management purposes.</li>
        </ul>

        <h3>6. Website Usage</h3>
        <ul>
          <li>Users must not misuse the website or attempt unauthorized access to any system or data.</li>
          <li>Information available on the website is for general informational purposes only.</li>
        </ul>

        <h3>7. Replacement Policy</h3>
        <ul>
          <li>If products are sold by RAJ STUDY HUB, only replacement requests within 7 days may be accepted for damaged or incorrect items.</li>
          <li>No refunds will be provided.</li>
        </ul>

        <h3>8. Changes to Terms</h3>
        <p>RAJ STUDY HUB may update these Terms of Service at any time without prior notice.</p>
      </PolicyLayout>
    </PageLayout>
  );
}
