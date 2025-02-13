import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const cv = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.enum([
      "education",
      "publications",
      "conferences",
      "research",
      "teaching-experience",
      "professional-experience",
      "grants-and-awards",
      "languages",
      "software",
    ]),
    entries: z
      .array(
        z.object({
          year: z.string(),
          content: z.string(),
          description: z.string().optional(),
          amount: z.string().optional(),
        }),
      )
      .optional(),
    content: z.string().optional(),
  }),
});

export const collections = { blog, work, projects, cv };
