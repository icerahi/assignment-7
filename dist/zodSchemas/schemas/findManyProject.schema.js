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
exports.ProjectFindManyZodSchema = exports.ProjectFindManySchema = exports.ProjectFindManySelectZodSchema = exports.ProjectFindManySelectSchema = void 0;
const z = __importStar(require("zod"));
const ProjectInclude_schema_1 = require("./objects/ProjectInclude.schema");
const ProjectOrderByWithRelationInput_schema_1 = require("./objects/ProjectOrderByWithRelationInput.schema");
const ProjectWhereInput_schema_1 = require("./objects/ProjectWhereInput.schema");
const ProjectWhereUniqueInput_schema_1 = require("./objects/ProjectWhereUniqueInput.schema");
const ProjectScalarFieldEnum_schema_1 = require("./enums/ProjectScalarFieldEnum.schema");
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
exports.ProjectFindManySelectSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    projectLink: z.boolean().optional(),
    liveSite: z.boolean().optional(),
    description: z.boolean().optional(),
    features: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
}).strict();
exports.ProjectFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    thumbnail: z.boolean().optional(),
    projectLink: z.boolean().optional(),
    liveSite: z.boolean().optional(),
    description: z.boolean().optional(),
    features: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
}).strict();
exports.ProjectFindManySchema = z.object({ select: exports.ProjectFindManySelectSchema.optional(), include: z.lazy(() => ProjectInclude_schema_1.ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInput_schema_1.ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInput_schema_1.ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInput_schema_1.ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInput_schema_1.ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnum_schema_1.ProjectScalarFieldEnumSchema, ProjectScalarFieldEnum_schema_1.ProjectScalarFieldEnumSchema.array()]).optional() }).strict();
exports.ProjectFindManyZodSchema = z.object({ select: exports.ProjectFindManySelectSchema.optional(), include: z.lazy(() => ProjectInclude_schema_1.ProjectIncludeObjectSchema.optional()), orderBy: z.union([ProjectOrderByWithRelationInput_schema_1.ProjectOrderByWithRelationInputObjectSchema, ProjectOrderByWithRelationInput_schema_1.ProjectOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectWhereInput_schema_1.ProjectWhereInputObjectSchema.optional(), cursor: ProjectWhereUniqueInput_schema_1.ProjectWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectScalarFieldEnum_schema_1.ProjectScalarFieldEnumSchema, ProjectScalarFieldEnum_schema_1.ProjectScalarFieldEnumSchema.array()]).optional() }).strict();
