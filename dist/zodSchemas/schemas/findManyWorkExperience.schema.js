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
exports.WorkExperienceFindManyZodSchema = exports.WorkExperienceFindManySchema = exports.WorkExperienceFindManySelectZodSchema = exports.WorkExperienceFindManySelectSchema = void 0;
const z = __importStar(require("zod"));
const WorkExperienceInclude_schema_1 = require("./objects/WorkExperienceInclude.schema");
const WorkExperienceOrderByWithRelationInput_schema_1 = require("./objects/WorkExperienceOrderByWithRelationInput.schema");
const WorkExperienceWhereInput_schema_1 = require("./objects/WorkExperienceWhereInput.schema");
const WorkExperienceWhereUniqueInput_schema_1 = require("./objects/WorkExperienceWhereUniqueInput.schema");
const WorkExperienceScalarFieldEnum_schema_1 = require("./enums/WorkExperienceScalarFieldEnum.schema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.WorkExperienceFindManySelectSchema = z.object({
    id: z.boolean().optional(),
    company: z.boolean().optional(),
    position: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
}).strict();
exports.WorkExperienceFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    company: z.boolean().optional(),
    position: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
}).strict();
exports.WorkExperienceFindManySchema = z.object({ select: exports.WorkExperienceFindManySelectSchema.optional(), include: z.lazy(() => WorkExperienceInclude_schema_1.WorkExperienceIncludeObjectSchema.optional()), orderBy: z.union([WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInput_schema_1.WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkExperienceScalarFieldEnum_schema_1.WorkExperienceScalarFieldEnumSchema, WorkExperienceScalarFieldEnum_schema_1.WorkExperienceScalarFieldEnumSchema.array()]).optional() }).strict();
exports.WorkExperienceFindManyZodSchema = z.object({ select: exports.WorkExperienceFindManySelectSchema.optional(), include: z.lazy(() => WorkExperienceInclude_schema_1.WorkExperienceIncludeObjectSchema.optional()), orderBy: z.union([WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInput_schema_1.WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkExperienceScalarFieldEnum_schema_1.WorkExperienceScalarFieldEnumSchema, WorkExperienceScalarFieldEnum_schema_1.WorkExperienceScalarFieldEnumSchema.array()]).optional() }).strict();
