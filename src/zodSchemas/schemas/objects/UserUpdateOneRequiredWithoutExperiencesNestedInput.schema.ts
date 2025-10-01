import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutExperiencesInputObjectSchema as UserCreateWithoutExperiencesInputObjectSchema } from './UserCreateWithoutExperiencesInput.schema';
import { UserUncheckedCreateWithoutExperiencesInputObjectSchema as UserUncheckedCreateWithoutExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutExperiencesInput.schema';
import { UserCreateOrConnectWithoutExperiencesInputObjectSchema as UserCreateOrConnectWithoutExperiencesInputObjectSchema } from './UserCreateOrConnectWithoutExperiencesInput.schema';
import { UserUpsertWithoutExperiencesInputObjectSchema as UserUpsertWithoutExperiencesInputObjectSchema } from './UserUpsertWithoutExperiencesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutExperiencesInputObjectSchema as UserUpdateToOneWithWhereWithoutExperiencesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutExperiencesInput.schema';
import { UserUpdateWithoutExperiencesInputObjectSchema as UserUpdateWithoutExperiencesInputObjectSchema } from './UserUpdateWithoutExperiencesInput.schema';
import { UserUncheckedUpdateWithoutExperiencesInputObjectSchema as UserUncheckedUpdateWithoutExperiencesInputObjectSchema } from './UserUncheckedUpdateWithoutExperiencesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExperiencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExperiencesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutExperiencesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutExperiencesInputObjectSchema), z.lazy(() => UserUpdateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutExperiencesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutExperiencesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExperiencesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutExperiencesNestedInput>;
export const UserUpdateOneRequiredWithoutExperiencesNestedInputObjectZodSchema = makeSchema();
