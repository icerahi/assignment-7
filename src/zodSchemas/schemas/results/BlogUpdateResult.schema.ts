import * as z from 'zod';
export const BlogUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  view: z.number().int(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  userId: z.number().int()
}));