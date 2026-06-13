import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Privacy & Refund Policy',
  description: 'Privacy and refund policy for RAJ STUDY HUB.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero title="Privacy & Refund Policy" subtitle="Our policies for students and customers" />
      <PolicyLayout title="Privacy & Refund Policy">
        <p>
          At RAJ STUDY HUB, we aim to provide quality services and a smooth experience for all students and customers.
        </p>

        <h3>1. Study Hub / Library Fees</h3>
        <ul>
          <li>Registration fees and seat booking charges are non-refundable.</li>
          <li>Monthly membership or study seat fees once paid are generally non-refundable.</li>
          <li>In special cases, management may review refund requests at its discretion.</li>
        </ul>

        <p>
          At RAJ STUDY HUB, customer satisfaction is important to us. If we sell products such as books, stationery, accessories, or study materials, the following replacement policy will apply:
        </p>

        <h3>2. Replacement Eligibility</h3>
        <ul>
          <li>Products can be replaced within 7 days of delivery or purchase.</li>
          <li>Items must be unused and in original condition.</li>
          <li>Replacement is applicable only for damaged, defective, or incorrect items.</li>
        </ul>

        <h3>3. No Refund Policy</h3>
        <ul>
          <li>RAJ STUDY HUB does not provide refunds on purchased items.</li>
          <li>Only replacement requests will be accepted within the eligible period.</li>
        </ul>

        <h3>4. Non-Replacement Items</h3>
        <p>The following items may not be eligible for replacement:</p>
        <ul>
          <li>Used or damaged items caused by misuse</li>
          <li>Digital products or downloadable materials</li>
          <li>Customized items</li>
        </ul>

        <h3>5. Replacement Process</h3>
        <p>To request a replacement, customers must contact us with:</p>
        <ul>
          <li>Order details</li>
          <li>Product photos (if damaged or incorrect)</li>
        </ul>
      </PolicyLayout>
    </PageLayout>
  );
}
