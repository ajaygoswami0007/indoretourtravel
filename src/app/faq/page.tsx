import SectionTitle from '@/components/shared/section-title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of cab services do you offer?",
    answer: "We offer a variety of services including Outstation Cabs for inter-city travel, In-City Cabs for local commutes, Self-Drive Car rentals, Custom Travel Packages (like weekend getaways, pilgrimage tours), and Corporate Bookings.",
  },
  {
    question: "How can I book a cab?",
    answer: "You can book a cab easily through our website using the step-by-step booking interface. You can also call us directly or reach out via WhatsApp for bookings or inquiries.",
  },
  {
    question: "Are your cabs clean and well-maintained?",
    answer: "Absolutely! Cleanliness and maintenance are our top priorities. All our cabs are regularly sanitized and undergo strict quality checks to ensure a comfortable and hygienic journey.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the service type and timing of cancellation. Generally, cancellations made well in advance (e.g., 24 hours for outstation) may be eligible for a full or partial refund. Please refer to the specific terms during booking or contact support for details.",
  },
  {
    question: "Are your drivers professional and verified?",
    answer: "Yes, all our drivers are thoroughly vetted, experienced, and trained to be professional and courteous. Your safety and comfort are paramount to us.",
  },
  {
    question: "What if my flight/train is delayed?",
    answer: "For airport/railway station pickups, we typically monitor flight/train timings. However, it's always best to inform us of any significant delays as soon as possible so we can make necessary arrangements.",
  },
  {
    question: "Do you offer 24x7 support?",
    answer: "Yes, our customer support team is available 24x7 to assist you with bookings, queries, or any issues you might face during your travel.",
  },
  {
    question: "What types of cars are available in your fleet?",
    answer: "Our fleet includes a variety of vehicles such as Sedans (e.g., Dzire, Honda City), SUVs (e.g., Innova, XUV500), Hatchbacks (e.g., Swift), and Tempo Travellers for larger groups. You can view details on our Fleet page.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Frequently Asked Questions" subtitle="Find answers to common queries about our services." />
        
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
