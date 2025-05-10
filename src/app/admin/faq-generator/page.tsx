// Ensure this path is correct based on your project structure
// For this example, we assume generateFaqFlow exists and is callable.
// Since we cannot modify src/ai, we rely on its pre-existence.
// If the flow is in `src/ai/flows/faqGenerator.ts` and exports `generateFaqFlow`,
// and `src/ai/dev.ts` imports it, it should be available via the Genkit client.
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/shared/section-title';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { runFlow } from '@genkit-ai/next/client';
// Assuming the flow is named generateFaqFlow
// This import path depends on how flows are exposed/built.
// For this example, we assume it's callable via its string name.
// import type { generateFaqFlow } from '@/ai/flows/faqGenerator'; // This is for type hints, actual call is by string.

interface FAQ {
  question: string;
  answer: string;
}

export default function FaqGeneratorPage() {
  const [topic, setTopic] = useState<string>('Outstation Cabs');
  const [generatedFaqs, setGeneratedFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateFaqs = async () => {
    if (!topic) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedFaqs([]);

    try {
      // The first argument to runFlow is the flow name (string)
      const faqs = await runFlow('generateFaqFlow', { topic });
      setGeneratedFaqs(faqs || []); // Ensure faqs is an array
    } catch (e: any) {
      console.error("Error generating FAQs:", e);
      setError(e.message || 'Failed to generate FAQs. Ensure the AI flow is running and configured correctly.');
      setGeneratedFaqs([]); // Clear faqs on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Admin: FAQ Generator" subtitle="Automatically generate FAQs based on a topic using AI." />

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle>Generate FAQs</CardTitle>
            <CardDescription>Enter a topic (e.g., 'Cancellation Policy', 'Self-Drive Cars') to generate relevant FAQs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="topic">Topic</Label>
              <Input 
                id="topic" 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)} 
                placeholder="e.g., Outstation Cabs"
              />
            </div>
            <Button onClick={handleGenerateFaqs} disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? 'Generating...' : 'Generate FAQs'}
            </Button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </CardContent>
        </Card>

        {generatedFaqs.length > 0 && (
          <Card className="max-w-2xl mx-auto mt-8 shadow-xl">
            <CardHeader>
              <CardTitle>Generated FAQs for "{topic}"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {generatedFaqs.map((faq, index) => (
                <div key={index} className="p-4 border rounded-md bg-background">
                  <h4 className="font-semibold text-primary">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
                <p className="text-xs text-muted-foreground">Note: These FAQs are AI-generated. Please review and edit them before publishing.</p>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
