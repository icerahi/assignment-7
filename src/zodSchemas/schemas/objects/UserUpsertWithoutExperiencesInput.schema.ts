import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutExperiencesInputObjectSchema as UserUpdateWithoutExperiencesInputObjectSchema } from './UserUpdateWithoutExperiencesInput.schema';
import { UserUncheckedUpdateWithoutExperiencesInputObjectSchema as UserUncheckedUpdateWithoutExperiencesInputObjectSchema } from './UserUncheckedUpdateWithoutExperiencesInput.schema';
import { UserCreateWithoutExperiencesInputObjectSchema as UserCreateWithoutExperiencesInputObjectSchema } from './UserCreateWithoutExperiencesInput.schema';
import { UserUncheckedCreateWithoutExperiencesInputObjectSchema as UserUncheckedCreateWithoutExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutExperiencesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExperiencesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExperiencesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutExperiencesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutExperiencesInput>;
export const UserUpsertWithoutExperiencesInputObjectZodSchema = makeSchema();
