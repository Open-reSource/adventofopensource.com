import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, docsSchema } from '@deramond.dev/astro/docs';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			// Days open with their story: the description stays for meta tags and cards.
			extend: z.object({ hideDescription: z.boolean().default(true) }),
		}),
	}),
};
