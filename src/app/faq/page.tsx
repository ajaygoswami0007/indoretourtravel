import SectionTitle from '@/components/shared/section-title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of cab services do you offer in Indore?",
    answer: "TourEase offers a variety of cab services in Indore, including Outstation Cabs from Indore (e.g., Indore to Ujjain cab, Indore to Omkareshwar taxi, Indore to Bhopal taxi service), Local In-City Cabs in Indore, Indore Airport Cab (pickup and drop), Self-Drive Car Rentals in Indore, Custom Travel Packages, Tempo Traveller on rent in Indore, and Corporate Cab Service in Indore.",
  },
  {
    question: "How can I book a cab in Indore with TourEase?",
    answer: "You can book a cab in Indore easily through our website's online booking interface. For 24x7 cab booking Indore, you can also call us directly at our Indore cab contact number or reach out via WhatsApp. We are one of the best Ujjain cab operators as well for trips from Indore.",
  },
  {
    question: "Are your cabs in Indore clean and well-maintained?",
    answer: "Absolutely! Cleanliness and maintenance are our top priorities for all our taxi services in Indore. All our Indore cabs are regularly sanitized and undergo strict quality checks to ensure a comfortable and hygienic journey. We strive to be the best taxi company in Indore.",
  },
  {
    question: "What is your cancellation policy for Indore cab bookings?",
    answer: "Our cancellation policy varies. For outstation taxi from Indore (e.g., Indore to Ujjain one-way cab), cancellations made well in advance (e.g., 24 hours) may be eligible for a full or partial refund. Please refer to the specific terms during booking or contact our Indore taxi support.",
  },
  {
    question: "Are your Indore cab drivers professional and verified?",
    answer: "Yes, all our Indore cab drivers are thoroughly vetted, experienced, and trained to be professional and courteous. Your safety and comfort are paramount when you book a cab in Indore with us. You can get an Indore cab driver contact upon booking confirmation.",
  },
  {
    question: "What if my flight/train is delayed for an Indore airport/railway station pickup?",
    answer: "For Indore airport cab or taxi service near Indore railway station pickups, we typically monitor flight/train timings. However, it's always best to inform us of any significant delays as soon as possible so we can make necessary arrangements for your cab near Indore airport.",
  },
  {
    question: "Do you offer 24x7 support for cab booking in Indore?",
    answer: "Yes, our customer support team for Indore taxi services is available 24x7 to assist you with bookings, queries, or any issues you might face during your travel. This includes support for Dewas cab booking and Bhopal taxi service.",
  },
  {
    question: "What types of cars are available in your Indore fleet (e.g., Sedan, SUV, Tempo Traveller)?",
    answer: "Our Indore fleet includes a variety of vehicles such as Sedan cab in Indore (e.g., Dzire, Honda City), SUV taxi Indore to Ujjain (e.g., Innova, XUV500), Hatchbacks for local cab in Indore (e.g., Swift), and Tempo Traveller in Indore (9 to 26 seater) for larger groups. You can view details on our Fleet page.",
  },
  {
    question: "Can I book a one-way cab from Indore to Ujjain or other cities?",
    answer: "Yes, we offer one-way cab services from Indore to Ujjain, Bhopal, Omkareshwar, Dewas, and many other destinations. We also provide round trip cab options from Indore.",
  },
  {
    question: "Do you provide taxi for Omkareshwar darshan or cab for Mahakaleshwar temple Ujjain?",
    answer: "Yes, we specialize in taxi services for religious tourism. You can book a dedicated taxi for Omkareshwar darshan from Indore or a cab for Mahakaleshwar temple Ujjain. We also offer Ujjain to Omkareshwar taxi services.",
  },
  {
    question: "How can I find a taxi stand in Indore or get an Indore cab driver contact?",
    answer: "While we don't operate from a physical taxi stand in Indore like traditional services, our online platform allows 24x7 cab booking from anywhere in Indore. Driver contact details are shared upon booking confirmation. For urgent needs, you can call our Indore cab contact number.",
  },
  {
    question: "Do you offer corporate cab service in Indore or cabs for weddings in Indore?",
    answer: "Yes, TourEase provides reliable corporate cab service in Indore with flexible billing. We also offer cabs for weddings in Indore, including luxury cab options and tempo travellers for guest transportation."
  },
];

export default function FAQPage() {
  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="FAQs - Indore Cab Service, Taxi Booking, and More" subtitle="Find answers to common queries about our taxi service in Indore, Ujjain, Bhopal, airport cab bookings, outstation trips like Indore to Omkareshwar, and affordable tempo traveller rentals." />
        
        <div className="max-w-3xl mx-auto mt-12 bg-background p-6 sm:p-8 rounded-lg shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left hover:no-underline text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
