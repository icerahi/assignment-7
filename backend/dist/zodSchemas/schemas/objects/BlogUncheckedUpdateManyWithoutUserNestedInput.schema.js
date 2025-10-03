"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = exports.BlogUncheckedUpdateManyWithoutUserNestedInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const BlogCreateWithoutUserInput_schema_1 = require("./BlogCreateWithoutUserInput.schema");
const BlogUncheckedCreateWithoutUserInput_schema_1 = require("./BlogUncheckedCreateWithoutUserInput.schema");
const BlogCreateOrConnectWithoutUserInput_schema_1 = require("./BlogCreateOrConnectWithoutUserInput.schema");
const BlogUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./BlogUpsertWithWhereUniqueWithoutUserInput.schema");
const BlogCreateManyUserInputEnvelope_schema_1 = require("./BlogCreateManyUserInputEnvelope.schema");
const BlogWhereUniqueInput_schema_1 = require("./BlogWhereUniqueInput.schema");
const BlogUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./BlogUpdateWithWhereUniqueWithoutUserInput.schema");
const BlogUpdateManyWithWhereWithoutUserInput_schema_1 = require("./BlogUpdateManyWithWhereWithoutUserInput.schema");
const BlogScalarWhereInput_schema_1 = require("./BlogScalarWhereInput.schema");
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => BlogCreateWithoutUserInput_schema_1.BlogCreateWithoutUserInputObjectSchema), z.lazy(() => BlogCreateWithoutUserInput_schema_1.BlogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BlogUncheckedCreateWithoutUserInput_schema_1.BlogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedCreateWithoutUserInput_schema_1.BlogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => BlogCreateOrConnectWithoutUserInput_schema_1.BlogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BlogCreateOrConnectWithoutUserInput_schema_1.BlogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => BlogUpsertWithWhereUniqueWithoutUserInput_schema_1.BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BlogUpsertWithWhereUniqueWithoutUserInput_schema_1.BlogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => BlogCreateManyUserInputEnvelope_schema_1.UserBlogCreateManyUserInputEnvelopeObjectSchema).optional(),
    set: z.union([z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema).array()]).optional(),
    update: z.union([z.lazy(() => BlogUpdateWithWhereUniqueWithoutUserInput_schema_1.BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => BlogUpdateWithWhereUniqueWithoutUserInput_schema_1.BlogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => BlogUpdateManyWithWhereWithoutUserInput_schema_1.BlogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => BlogUpdateManyWithWhereWithoutUserInput_schema_1.BlogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => BlogScalarWhereInput_schema_1.BlogScalarWhereInputObjectSchema), z.lazy(() => BlogScalarWhereInput_schema_1.BlogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
exports.BlogUncheckedUpdateManyWithoutUserNestedInputObjectSchema = makeSchema();
exports.BlogUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
