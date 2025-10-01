import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutExperiencesInputObjectSchema as UserUpdateWithoutExperiencesInputObjectSchema } from './UserUpdateWithoutExperiencesInput.schema';
import { UserUncheckedUpdateWithoutExperiencesInputObjectSchema as UserUncheckedUpdateWithoutExperiencesInputObjectSchema } from './UserUncheckedUpdateWithoutExperiencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExperiencesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutExperiencesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExperiencesInput>;
export const UserUpdateToOneWithWhereWithoutExperiencesInputObjectZodSchema = makeSchema();
