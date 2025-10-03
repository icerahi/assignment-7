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
exports.UserWhereInputObjectZodSchema = exports.UserWhereInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const StringNullableListFilter_schema_1 = require("./StringNullableListFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const BlogListRelationFilter_schema_1 = require("./BlogListRelationFilter.schema");
const ProjectListRelationFilter_schema_1 = require("./ProjectListRelationFilter.schema");
const WorkExperienceListRelationFilter_schema_1 = require("./WorkExperienceListRelationFilter.schema");
const userwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => exports.UserWhereInputObjectSchema), z.lazy(() => exports.UserWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => exports.UserWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => exports.UserWhereInputObjectSchema), z.lazy(() => exports.UserWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), z.number().int()]).optional(),
    name: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    picture: z.union([z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    password: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    phone: z.union([z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    bio: z.union([z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    skills: z.lazy(() => StringNullableListFilter_schema_1.StringNullableListFilterObjectSchema).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilter_schema_1.DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    blogs: z.lazy(() => BlogListRelationFilter_schema_1.BlogListRelationFilterObjectSchema).optional(),
    projects: z.lazy(() => ProjectListRelationFilter_schema_1.ProjectListRelationFilterObjectSchema).optional(),
    experiences: z.lazy(() => WorkExperienceListRelationFilter_schema_1.WorkExperienceListRelationFilterObjectSchema).optional()
}).strict();
exports.UserWhereInputObjectSchema = userwhereinputSchema;
exports.UserWhereInputObjectZodSchema = userwhereinputSchema;
