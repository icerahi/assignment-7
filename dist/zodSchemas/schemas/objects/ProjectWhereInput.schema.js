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
exports.ProjectWhereInputObjectZodSchema = exports.ProjectWhereInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const IntFilter_schema_1 = require("./IntFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const UserScalarRelationFilter_schema_1 = require("./UserScalarRelationFilter.schema");
const UserWhereInput_schema_1 = require("./UserWhereInput.schema");
const projectwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => exports.ProjectWhereInputObjectSchema), z.lazy(() => exports.ProjectWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => exports.ProjectWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => exports.ProjectWhereInputObjectSchema), z.lazy(() => exports.ProjectWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), z.number().int()]).optional(),
    title: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    thumbnail: z.union([z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    projectLink: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    liveSite: z.union([z.lazy(() => StringNullableFilter_schema_1.StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    description: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    features: z.union([z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => IntFilter_schema_1.IntFilterObjectSchema), z.number().int()]).optional(),
    user: z.union([z.lazy(() => UserScalarRelationFilter_schema_1.UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInput_schema_1.UserWhereInputObjectSchema)]).optional()
}).strict();
exports.ProjectWhereInputObjectSchema = projectwhereinputSchema;
exports.ProjectWhereInputObjectZodSchema = projectwhereinputSchema;
