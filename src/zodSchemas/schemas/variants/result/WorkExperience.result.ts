import * as z from 'zod';

// prettier-ignore
export const WorkExperienceResultSchema = z.object({
    id: z.number().int(),
    company: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date().nullable(),
    user: z.unknown(),
    userId: z.number().int()
}).strict();

export type WorkExperienceResultType = z.infer<typeof WorkExperienceResultSchema>;
