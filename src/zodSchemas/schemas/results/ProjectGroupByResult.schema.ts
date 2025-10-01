import * as z from 'zod';
export const ProjectGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  thumbnail: z.string(),
  projectLink: z.string(),
  liveSite: z.string(),
  description: z.string(),
  features: z.string(),
  userId: z.number().int(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    thumbnail: z.number(),
    projectLink: z.number(),
    liveSite: z.number(),
    description: z.number(),
    features: z.number(),
    user: z.number(),
    userId: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    userId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    thumbnail: z.string().nullable(),
    projectLink: z.string().nullable(),
    liveSite: z.string().nullable(),
    description: z.string().nullable(),
    features: z.string().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    thumbnail: z.string().nullable(),
    projectLink: z.string().nullable(),
    liveSite: z.string().nullable(),
    description: z.string().nullable(),
    features: z.string().nullable(),
    userId: z.number().int().nullable()
  }).nullable().optional()
}));