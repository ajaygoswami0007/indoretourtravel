// src/ai/flows/faqGenerator.ts
import { defineFlow } from 'genkit';
import { z } from 'zod';
// Assuming genkit setup is in ../genkit.ts. Adjust if genkit instance is elsewhere.
import { ai } from '../genkit'; 

export const generateFaqFlow = defineFlow(
  {
    name: 'generateFaqFlow', // This name is used by runFlow('generateFaqFlow', ...)
    inputSchema: z.object({ topic: z.string() }),
    outputSchema: z.array(z.object({ question: z.string(), answer: z.string() })),
  },
  async (input) => {
    // This is a mock implementation.
    // In a real scenario, this would use an AI model (e.g., ai.generate) to generate FAQs.
    console.log(`AI Flow: Generating FAQs for topic: ${input.topic}`);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Mocked response
    if (input.topic.toLowerCase().includes("error")) {
        throw new Error("Simulated error in AI flow for topic: " + input.topic);
    }

    if (input.topic.toLowerCase().includes("empty")) {
        return [];
    }


    return [
      { 
        question: `What is the cancellation policy for ${input.topic}?`, 
        answer: `For ${input.topic}, cancellations made 24 hours in advance are typically fully refundable. For cancellations within 24 hours, a fee may apply. Please check specific terms at booking.` 
      },
      { 
        question: `Is the vehicle insured when I book for ${input.topic}?`, 
        answer: `Yes, all vehicles provided for ${input.topic} are covered by comprehensive insurance for your safety and peace of mind.` 
      },
      { 
        question: `How can I book ${input.topic} services with TourEase?`, 
        answer: `You can easily book ${input.topic} services through our website's booking portal. Alternatively, you can call our 24x7 customer support for assistance.` 
      },
      {
        question: `What payment methods are accepted for ${input.topic}?`,
        answer: `We accept various payment methods for ${input.topic}, including major credit/debit cards, net banking, and popular UPI apps. Cash payment options may be available depending on the service.`
      }
    ];
  }
);
