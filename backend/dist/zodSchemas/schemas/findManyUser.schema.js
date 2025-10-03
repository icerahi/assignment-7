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
exports.UserFindManyZodSchema = exports.UserFindManySchema = exports.UserFindManySelectZodSchema = exports.UserFindManySelectSchema = void 0;
const z = __importStar(require("zod"));
const UserInclude_schema_1 = require("./objects/UserInclude.schema");
const UserOrderByWithRelationInput_schema_1 = require("./objects/UserOrderByWithRelationInput.schema");
const UserWhereInput_schema_1 = require("./objects/UserWhereInput.schema");
const UserWhereUniqueInput_schema_1 = require("./objects/UserWhereUniqueInput.schema");
const UserScalarFieldEnum_schema_1 = require("./enums/UserScalarFieldEnum.schema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.UserFindManySelectSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    picture: z.boolean().optional(),
    password: z.boolean().optional(),
    phone: z.boolean().optional(),
    bio: z.boolean().optional(),
    skills: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    blogs: z.boolean().optional(),
    projects: z.boolean().optional(),
    experiences: z.boolean().optional(),
    _count: z.boolean().optional()
}).strict();
exports.UserFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    picture: z.boolean().optional(),
    password: z.boolean().optional(),
    phone: z.boolean().optional(),
    bio: z.boolean().optional(),
    skills: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    blogs: z.boolean().optional(),
    projects: z.boolean().optional(),
    experiences: z.boolean().optional(),
    _count: z.boolean().optional()
}).strict();
exports.UserFindManySchema = z.object({ select: exports.UserFindManySelectSchema.optional(), include: z.lazy(() => UserInclude_schema_1.UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInput_schema_1.UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnum_schema_1.UserScalarFieldEnumSchema, UserScalarFieldEnum_schema_1.UserScalarFieldEnumSchema.array()]).optional() }).strict();
exports.UserFindManyZodSchema = z.object({ select: exports.UserFindManySelectSchema.optional(), include: z.lazy(() => UserInclude_schema_1.UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInput_schema_1.UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInput_schema_1.UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnum_schema_1.UserScalarFieldEnumSchema, UserScalarFieldEnum_schema_1.UserScalarFieldEnumSchema.array()]).optional() }).strict();
