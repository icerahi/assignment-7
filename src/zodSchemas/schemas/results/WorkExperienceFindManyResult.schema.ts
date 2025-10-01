import * as z from 'zod';
export const WorkExperienceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  company: z.string(),
  position: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  user: z.unknown(),
  userId: z.number().int()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});