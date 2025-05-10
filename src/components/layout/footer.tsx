import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">TourEase</h3>
            <p className="text-sm mb-4">
              Your trusted partner for comfortable and reliable cab services. Experience clean cabs, professional drivers, and on-time service.
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
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/fleet" className="hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book a Cab</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" />123 Travel Lane, Cityville, Country</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" />+1 (234) 567-890</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" />support@tourease.com</li>
            </ul>
            <Button 
              variant="outline" 
              className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageSquare size={18} className="mr-2" /> WhatsApp Us
              </Link>
            </Button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/admin/faq-generator" className="hover:text-primary transition-colors">Admin: FAQ Generator</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {currentYear} TourEase. All rights reserved. Designed with care for your journey.</p>
        </div>
      </div>
    </footer>
  );
}
