import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = ['Propulsion', 'Robotics', 'Research', 'Leadership'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.string(),
      dates: z.string(),
      category: z.enum(CATEGORIES),
      summary: z.string(),
      cover: image().optional(),
      // Extra images shown after the cover in the project's carousel.
      gallery: z.array(image()).default([]),
      // Featured projects are the ones stacked on the home page.
      featured: z.boolean().default(false),
      // Lower numbers sort first everywhere.
      order: z.number().default(100),
      // Extra link rows under the carousel (videos, posters, repos).
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
});

export const collections = { projects };
