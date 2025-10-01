import * as z from 'zod';

// prettier-ignore
export const ProjectResultSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    thumbnail: z.string().nullable(),
    projectLink: z.string(),
    liveSite: z.string().nullable(),
    description: z.string(),
    features: z.string(),
    user: z.unknown(),
    userId: z.number().int()
}).strict();

export type ProjectResultType = z.infer<typeof ProjectResultSchema>;
