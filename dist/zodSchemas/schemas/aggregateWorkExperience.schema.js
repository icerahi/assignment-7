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
exports.WorkExperienceAggregateZodSchema = exports.WorkExperienceAggregateSchema = void 0;
const z = __importStar(require("zod"));
const WorkExperienceOrderByWithRelationInput_schema_1 = require("./objects/WorkExperienceOrderByWithRelationInput.schema");
const WorkExperienceWhereInput_schema_1 = require("./objects/WorkExperienceWhereInput.schema");
const WorkExperienceWhereUniqueInput_schema_1 = require("./objects/WorkExperienceWhereUniqueInput.schema");
const WorkExperienceCountAggregateInput_schema_1 = require("./objects/WorkExperienceCountAggregateInput.schema");
const WorkExperienceMinAggregateInput_schema_1 = require("./objects/WorkExperienceMinAggregateInput.schema");
const WorkExperienceMaxAggregateInput_schema_1 = require("./objects/WorkExperienceMaxAggregateInput.schema");
const WorkExperienceAvgAggregateInput_schema_1 = require("./objects/WorkExperienceAvgAggregateInput.schema");
const WorkExperienceSumAggregateInput_schema_1 = require("./objects/WorkExperienceSumAggregateInput.schema");
exports.WorkExperienceAggregateSchema = z.object({ orderBy: z.union([WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInput_schema_1.WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), WorkExperienceCountAggregateInput_schema_1.WorkExperienceCountAggregateInputObjectSchema]).optional(), _min: WorkExperienceMinAggregateInput_schema_1.WorkExperienceMinAggregateInputObjectSchema.optional(), _max: WorkExperienceMaxAggregateInput_schema_1.WorkExperienceMaxAggregateInputObjectSchema.optional(), _avg: WorkExperienceAvgAggregateInput_schema_1.WorkExperienceAvgAggregateInputObjectSchema.optional(), _sum: WorkExperienceSumAggregateInput_schema_1.WorkExperienceSumAggregateInputObjectSchema.optional() }).strict();
exports.WorkExperienceAggregateZodSchema = z.object({ orderBy: z.union([WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema, WorkExperienceOrderByWithRelationInput_schema_1.WorkExperienceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkExperienceWhereInput_schema_1.WorkExperienceWhereInputObjectSchema.optional(), cursor: WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), WorkExperienceCountAggregateInput_schema_1.WorkExperienceCountAggregateInputObjectSchema]).optional(), _min: WorkExperienceMinAggregateInput_schema_1.WorkExperienceMinAggregateInputObjectSchema.optional(), _max: WorkExperienceMaxAggregateInput_schema_1.WorkExperienceMaxAggregateInputObjectSchema.optional(), _avg: WorkExperienceAvgAggregateInput_schema_1.WorkExperienceAvgAggregateInputObjectSchema.optional(), _sum: WorkExperienceSumAggregateInput_schema_1.WorkExperienceSumAggregateInputObjectSchema.optional() }).strict();
