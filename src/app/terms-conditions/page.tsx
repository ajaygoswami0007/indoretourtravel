import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsConditionsPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Terms and Conditions" subtitle="Please read these terms carefully." />
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80 prose prose-lg">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>These Terms and Conditions ("Terms") govern your use of the TourEase website and services (collectively, the "Service") operated by TourEase ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            
            <h3 className="text-xl font-semibold text-primary pt-4">Bookings and Payments</h3>
            <p>All bookings made through the Service are subject to availability. We reserve the right to refuse or cancel any booking at our discretion. Prices for services are subject to change without notice. Payment must be made in full at the time of booking or as otherwise specified.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">Cancellations and Refunds</h3>
            <p>Cancellation policies vary depending on the service booked. Please refer to the specific cancellation terms provided at the time of booking. Refunds, if applicable, will be processed according to our refund policy.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">User Responsibilities</h3>
            <p>You agree to provide accurate and complete information when making a booking. You are responsible for your conduct and any damages caused by you or your party during the use of our services. You must comply with all applicable laws and regulations.</p>
            
            <h3 className="text-xl font-semibold text-primary pt-4">Limitation of Liability</h3>
            <p>To the fullest extent permitted by applicable law, TourEase shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">Changes to Terms</h3>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">Contact Us</h3>
            <p>If you have any questions about these Terms, please contact us at support@tourease.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
