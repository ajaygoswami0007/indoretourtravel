import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TourEase: Best Cab & Taxi Service in Indore, Ujjain, Bhopal | Book Online 24x7',
  description: 'TourEase offers the best cab service in Indore, Ujjain, Bhopal, and Dewas. Book affordable airport taxi, outstation cabs (Indore to Ujjain, Indore to Omkareshwar, Indore to Bhopal), local cabs, and tempo travellers online 24x7. Clean cars, professional drivers, and on-time service guaranteed for your travel needs, including Mahakaleshwar temple visits and Omkareshwar darshan.',
  keywords: 'cab service in Indore, taxi service in Indore, local cab in Indore, book cab in Indore, Indore airport cab, Indore to Ujjain cab, Indore to Omkareshwar taxi, Indore to Dewas cab, Indore to Bhopal taxi service, Ujjain to Omkareshwar taxi, Ujjain cab service, Dewas cab booking, Bhopal taxi service, airport taxi in Indore, affordable taxi service in Indore, best cab service in Indore, 24x7 cab booking Indore, outstation taxi from Indore, one-way cab Indore, round trip cab Indore, Indore local sightseeing taxi, taxi for Omkareshwar darshan, cab for Mahakaleshwar temple Ujjain, book tempo traveller in Indore, family taxi Indore, sedan cab Indore, SUV taxi Indore, Indore cab booking online, Indore taxi for outstation, airport pickup drop Indore, tempo traveller on rent Indore, corporate cab service Indore, tourist cab in Indore, daily cab rental Indore, Indore holiday cab packages, cab for wedding in Indore, luxury cab in Indore, taxi service near Indore railway station, cab near Indore airport, Ujjain cab operators, Bhopal cab contact number, best taxi company in Indore, taxi stand in Indore, Indore cab driver contact',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
