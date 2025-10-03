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
exports.BlogCreateNestedManyWithoutUserInputObjectZodSchema = exports.BlogCreateNestedManyWithoutUserInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const BlogCreateWithoutUserInput_schema_1 = require("./BlogCreateWithoutUserInput.schema");
const BlogUncheckedCreateWithoutUserInput_schema_1 = require("./BlogUncheckedCreateWithoutUserInput.schema");
const BlogCreateOrConnectWithoutUserInput_schema_1 = require("./BlogCreateOrConnectWithoutUserInput.schema");
const BlogCreateManyUserInputEnvelope_schema_1 = require("./BlogCreateManyUserInputEnvelope.schema");
const BlogWhereUniqueInput_schema_1 = require("./BlogWhereUniqueInput.schema");
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => BlogCreateWithoutUserInput_schema_1.BlogCreateWithoutUserInputObjectSchema), z.lazy(() => BlogCreateWithoutUserInput_schema_1.BlogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => BlogUncheckedCreateWithoutUserInput_schema_1.BlogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => BlogUncheckedCreateWithoutUserInput_schema_1.BlogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => BlogCreateOrConnectWithoutUserInput_schema_1.BlogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => BlogCreateOrConnectWithoutUserInput_schema_1.BlogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => BlogCreateManyUserInputEnvelope_schema_1.UserBlogCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema), z.lazy(() => BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
exports.BlogCreateNestedManyWithoutUserInputObjectSchema = makeSchema();
exports.BlogCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
