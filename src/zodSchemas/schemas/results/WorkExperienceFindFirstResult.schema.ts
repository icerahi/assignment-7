import * as z from 'zod';
export const WorkExperienceFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  company: z.string(),
  position: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  user: z.unknown(),
  userId: z.number().int()
}));