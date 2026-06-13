import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Shipping Policy',
  description: 'Shipping policy for products sold by RAJ STUDY HUB.',
};

export default function ShippingPolicyPage() {
  return (
    <PageLayout>
      <PageHero title="Shipping Policy" subtitle="Delivery information for our products" />
      <PolicyLayout title="Shipping Policy">
        <p>
          At RAJ STUDY HUB, we may provide shipping services for books, stationery, study materials, or other products if available.
        </p>

        <h3>1. Order Processing</h3>
        <ul>
          <li>Orders are usually processed within 1–3 working days after confirmation.</li>
          <li>Customers will be informed in case of any delay.</li>
        </ul>

        <h3>2. Shipping Time</h3>
        <ul>
          <li>Delivery time may vary depending on location and courier services.</li>
          <li>Estimated delivery time is generally 3–10 working days.</li>
        </ul>

        <h3>3. Shipping Charges</h3>
        <ul>
          <li>Shipping charges, if applicable, will be shown during checkout or order confirmation.</li>
        </ul>

        <h3>4. Delivery Responsibility</h3>
        <ul>
          <li>Customers must provide accurate address and contact details.</li>
          <li>RAJ STUDY HUB is not responsible for delays caused by incorrect information or courier service issues.</li>
        </ul>

        <h3>5. Damaged or Incorrect Items</h3>
        <ul>
          <li>If you receive a damaged or incorrect item, contact us within 7 days with proper details and photos.</li>
          <li>Eligible items may be replaced according to our Replacement Policy.</li>
        </ul>

        <h3>6. No Refund Policy</h3>
        <ul>
          <li>Products are eligible only for replacement within 7 days.</li>
          <li>No refunds will be provided.</li>
        </ul>
      </PolicyLayout>
    </PageLayout>
  );
}
