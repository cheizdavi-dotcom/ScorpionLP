'use server';

/**
 * @fileOverview A flow to generate alternative headlines for a landing page.
 *
 * - generateAlternativeHeadline - A function that generates alternative headlines.
 * - GenerateAlternativeHeadlineInput - The input type for the generateAlternativeHeadline function.
 * - GenerateAlternativeHeadlineOutput - The return type for the generateAlternativeHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAlternativeHeadlineInputSchema = z.object({
  originalHeadline: z
    .string()
    .describe('The original headline for the landing page.'),
});

export type GenerateAlternativeHeadlineInput = z.infer<
  typeof GenerateAlternativeHeadlineInputSchema
>;

const GenerateAlternativeHeadlineOutputSchema = z.object({
  alternativeHeadline: z
    .string()
    .describe('An alternative headline for the landing page.'),
});

export type GenerateAlternativeHeadlineOutput = z.infer<
  typeof GenerateAlternativeHeadlineOutputSchema
>;

export async function generateAlternativeHeadline(
  input: GenerateAlternativeHeadlineInput
): Promise<GenerateAlternativeHeadlineOutput> {
  return generateAlternativeHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAlternativeHeadlinePrompt',
  input: {schema: GenerateAlternativeHeadlineInputSchema},
  output: {schema: GenerateAlternativeHeadlineOutputSchema},
  prompt: `You are a marketing expert tasked with generating alternative headlines for landing pages.

  Generate an alternative headline that is as effective as, or more effective than, the original headline provided.

  Original Headline: {{{originalHeadline}}}

  Alternative Headline:`, // Keep it simple and focused on the alternative headline.
});

const generateAlternativeHeadlineFlow = ai.defineFlow(
  {
    name: 'generateAlternativeHeadlineFlow',
    inputSchema: GenerateAlternativeHeadlineInputSchema,
    outputSchema: GenerateAlternativeHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
