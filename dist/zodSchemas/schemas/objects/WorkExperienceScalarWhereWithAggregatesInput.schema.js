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
exports.WorkExperienceScalarWhereWithAggregatesInputObjectZodSchema = exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const IntWithAggregatesFilter_schema_1 = require("./IntWithAggregatesFilter.schema");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const DateTimeNullableWithAggregatesFilter_schema_1 = require("./DateTimeNullableWithAggregatesFilter.schema");
const workexperiencescalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
    company: z.union([z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    position: z.union([z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    startDate: z.union([z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    endDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilter_schema_1.DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
    userId: z.union([z.lazy(() => IntWithAggregatesFilter_schema_1.IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
exports.WorkExperienceScalarWhereWithAggregatesInputObjectSchema = workexperiencescalarwherewithaggregatesinputSchema;
exports.WorkExperienceScalarWhereWithAggregatesInputObjectZodSchema = workexperiencescalarwherewithaggregatesinputSchema;
