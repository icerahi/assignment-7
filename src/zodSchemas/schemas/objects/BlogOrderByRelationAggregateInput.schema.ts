import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BlogOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BlogOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BlogOrderByRelationAggregateInput>;
export const BlogOrderByRelationAggregateInputObjectZodSchema = makeSchema();
