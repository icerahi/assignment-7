import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutExperiencesInputObjectSchema as UserCreateWithoutExperiencesInputObjectSchema } from './UserCreateWithoutExperiencesInput.schema';
import { UserUncheckedCreateWithoutExperiencesInputObjectSchema as UserUncheckedCreateWithoutExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutExperiencesInput.schema';
import { UserCreateOrConnectWithoutExperiencesInputObjectSchema as UserCreateOrConnectWithoutExperiencesInputObjectSchema } from './UserCreateOrConnectWithoutExperiencesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExperiencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExperiencesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutExperiencesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutExperiencesInput>;
export const UserCreateNestedOneWithoutExperiencesInputObjectZodSchema = makeSchema();
