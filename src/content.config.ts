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
      featured: z.boolean().default(false),
      // Lower numbers sort first on the projects grid and home page.
      order: z.number().default(100),
    }),
});

export const collections = { projects };
