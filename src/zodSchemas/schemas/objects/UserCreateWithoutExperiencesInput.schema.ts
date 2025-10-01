import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateskillsInputObjectSchema as UserCreateskillsInputObjectSchema } from './UserCreateskillsInput.schema';
import { BlogCreateNestedManyWithoutUserInputObjectSchema as BlogCreateNestedManyWithoutUserInputObjectSchema } from './BlogCreateNestedManyWithoutUserInput.schema';
import { ProjectCreateNestedManyWithoutUserInputObjectSchema as ProjectCreateNestedManyWithoutUserInputObjectSchema } from './ProjectCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  email: z.string(),
  picture: z.string().optional().nullable(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  skills: z.union([z.lazy(() => UserCreateskillsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  blogs: z.lazy(() => BlogCreateNestedManyWithoutUserInputObjectSchema).optional(),
  projects: z.lazy(() => ProjectCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutExperiencesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutExperiencesInput>;
export const UserCreateWithoutExperiencesInputObjectZodSchema = makeSchema();
