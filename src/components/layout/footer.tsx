import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">TourEase Indore</h3>
            <p className="text-sm mb-4">
              Your trusted partner for cab service in Indore, Ujjain, Bhopal, and Dewas. Experience clean cabs, professional Indore cab drivers, and on-time service for airport taxi, outstation, and local travel. Book your Indore taxi 24x7.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 hover:text-primary transition-colors" /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About TourEase Indore</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Indore Cab Services</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Our Indore Taxi Fleet</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book Cab in Indore</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">Indore Taxi FAQs</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">Customer Reviews</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/booking?pickupLocation=Indore" className="hover:text-primary transition-colors">Cab Service in Indore</Link></li>
              <li><Link href="/booking?dropLocation=Ujjain" className="hover:text-primary transition-colors">Indore to Ujjain Cab</Link></li>
              <li><Link href="/booking?dropLocation=Bhopal" className="hover:text-primary transition-colors">Indore to Bhopal Taxi</Link></li>
              <li><Link href="/booking?dropLocation=Omkareshwar" className="hover:text-primary transition-colors">Taxi for Omkareshwar</Link></li>
              <li><Link href="/booking?dropLocation=Dewas" className="hover:text-primary transition-colors">Indore to Dewas Cab</Link></li>
              <li><Link href="/booking?serviceType=airport" className="hover:text-primary transition-colors">Indore Airport Taxi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us (Indore)</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" />Main Taxi Stand, Near Indore Railway Station, Indore, MP</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" />Indore Cab: +91-XXX-XXXXXXX</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" />support@tourease-indore.com</li>
            </ul>
            <Button 
              variant="outline" 
              className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageSquare size={18} className="mr-2" /> WhatsApp Us for Indore Taxi
              </Link>
            </Button>
             <ul className="space-y-2 text-sm mt-4">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/admin/faq-generator" className="hover:text-primary transition-colors">Admin: FAQ Generator</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} TourEase Indore. All rights reserved. Your best choice for taxi service in Indore and Madhya Pradesh.</p>
        </div>
      </div>
    </footer>
  );
}
