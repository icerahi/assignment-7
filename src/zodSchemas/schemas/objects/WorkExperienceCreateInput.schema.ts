import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutExperiencesInputObjectSchema as UserCreateNestedOneWithoutExperiencesInputObjectSchema } from './UserCreateNestedOneWithoutExperiencesInput.schema'

const makeSchema = () => z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutExperiencesInputObjectSchema)
}).strict();
export const WorkExperienceCreateInputObjectSchema: z.ZodType<Prisma.WorkExperienceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkExperienceCreateInput>;
export const WorkExperienceCreateInputObjectZodSchema = makeSchema();
