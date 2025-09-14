import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce
      .date()
      .optional()
      .transform((val) => val ?? new Date()),
    link: z.string().optional(),
    image: z.string().optional(),
  }),
});

const experiences = defineCollection({
  loader: glob({ base: "./src/content/experiences", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    employmentType: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce
      .date()
      .optional()
      .transform((val) => val ?? new Date()),
    location: z.string().optional(),
    locationType: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects, experiences };
