import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BlogIncludeObjectSchema as BlogIncludeObjectSchema } from './objects/BlogInclude.schema';
import { BlogOrderByWithRelationInputObjectSchema as BlogOrderByWithRelationInputObjectSchema } from './objects/BlogOrderByWithRelationInput.schema';
import { BlogWhereInputObjectSchema as BlogWhereInputObjectSchema } from './objects/BlogWhereInput.schema';
import { BlogWhereUniqueInputObjectSchema as BlogWhereUniqueInputObjectSchema } from './objects/BlogWhereUniqueInput.schema';
import { BlogScalarFieldEnumSchema } from './enums/BlogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlogFindManySelectSchema: z.ZodType<Prisma.BlogSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    view: z.boolean().optional(),
    published: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BlogSelect>;

export const BlogFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    view: z.boolean().optional(),
    published: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
  }).strict();

export const BlogFindManySchema: z.ZodType<Prisma.BlogFindManyArgs> = z.object({ select: BlogFindManySelectSchema.optional(), include: z.lazy(() => BlogIncludeObjectSchema.optional()), orderBy: z.union([BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BlogScalarFieldEnumSchema, BlogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BlogFindManyArgs>;

export const BlogFindManyZodSchema = z.object({ select: BlogFindManySelectSchema.optional(), include: z.lazy(() => BlogIncludeObjectSchema.optional()), orderBy: z.union([BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BlogScalarFieldEnumSchema, BlogScalarFieldEnumSchema.array()]).optional() }).strict();