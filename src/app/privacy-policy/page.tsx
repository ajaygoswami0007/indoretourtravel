
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ClientRenderedDate from '@/components/shared/client-rendered-date';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Privacy Policy" subtitle="Your privacy is important to us." />
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/80 prose prose-lg">
            <p>Last updated: <ClientRenderedDate /></p>
            <p>TourEase ("us", "we", or "our") operates the TourEase website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            
            <h3 className="text-xl font-semibold text-primary pt-4">Information Collection and Use</h3>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, phone number, pickup and drop-off locations, and travel dates.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">Use of Data</h3>
            <p>TourEase uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary pt-4">Data Security</h3>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h3 className="text-xl font-semibold text-primary pt-4">Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at support@tourease.com.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
