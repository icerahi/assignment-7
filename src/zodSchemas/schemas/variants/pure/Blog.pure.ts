import * as z from 'zod';

// prettier-ignore
export const BlogModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    content: z.string(),
    view: z.number().int(),
    published: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    userId: z.number().int()
}).strict();

export type BlogModelType = z.infer<typeof BlogModelSchema>;
