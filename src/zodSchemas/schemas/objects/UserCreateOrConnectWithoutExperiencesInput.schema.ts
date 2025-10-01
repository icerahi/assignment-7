import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutExperiencesInputObjectSchema as UserCreateWithoutExperiencesInputObjectSchema } from './UserCreateWithoutExperiencesInput.schema';
import { UserUncheckedCreateWithoutExperiencesInputObjectSchema as UserUncheckedCreateWithoutExperiencesInputObjectSchema } from './UserUncheckedCreateWithoutExperiencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExperiencesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutExperiencesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutExperiencesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutExperiencesInput>;
export const UserCreateOrConnectWithoutExperiencesInputObjectZodSchema = makeSchema();
