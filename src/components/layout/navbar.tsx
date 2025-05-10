
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/#tourist-places', label: 'Tourist Places' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  const getIsActive = (linkHref: string) => {
    if (pathname === '/') {
      return linkHref === '/';
    }
    // Original logic for non-home pages, or for more complex scenarios on home page if '/' isn't strictly matched
    return (pathname === linkHref || (linkHref.includes('#') && pathname === linkHref.split('#')[0]));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Car className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold text-primary">TourEase</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                getIsActive(link.href)
                ? "text-primary" 
                : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Car className="h-7 w-7 text-primary" />
                  <span className="text-2xl font-bold text-primary">TourEase</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      getIsActive(link.href)
                      ? "text-primary" 
                      : "text-foreground/70"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

