import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.enum(['Paper', 'PDF', 'Code', 'Demo', 'Slides', 'Report', 'Project']),
  href: z.url(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    type: z.enum(['Publication', 'Preprint', 'Technical Report', 'Project']),
    status: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    tags: z.array(z.string()).default([]),
    contribution: z.string().optional(),
    cover: z.string().optional(),
    accent: z.enum(['violet', 'cyan', 'coral', 'lime']).default('violet'),
    links: z.array(linkSchema).default([]),
  }),
});

export const collections = { work };
