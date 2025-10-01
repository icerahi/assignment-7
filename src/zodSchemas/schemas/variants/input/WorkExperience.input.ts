import * as z from 'zod';

// prettier-ignore
export const WorkExperienceInputSchema = z.object({
    id: z.number().int(),
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date().optional().nullable(),
    user: z.unknown(),
    userId: z.number().int()
}).strict();

export type WorkExperienceInputType = z.infer<typeof WorkExperienceInputSchema>;
