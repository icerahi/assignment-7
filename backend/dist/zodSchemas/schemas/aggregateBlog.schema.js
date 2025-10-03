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
exports.BlogAggregateZodSchema = exports.BlogAggregateSchema = void 0;
const z = __importStar(require("zod"));
const BlogOrderByWithRelationInput_schema_1 = require("./objects/BlogOrderByWithRelationInput.schema");
const BlogWhereInput_schema_1 = require("./objects/BlogWhereInput.schema");
const BlogWhereUniqueInput_schema_1 = require("./objects/BlogWhereUniqueInput.schema");
const BlogCountAggregateInput_schema_1 = require("./objects/BlogCountAggregateInput.schema");
const BlogMinAggregateInput_schema_1 = require("./objects/BlogMinAggregateInput.schema");
const BlogMaxAggregateInput_schema_1 = require("./objects/BlogMaxAggregateInput.schema");
const BlogAvgAggregateInput_schema_1 = require("./objects/BlogAvgAggregateInput.schema");
const BlogSumAggregateInput_schema_1 = require("./objects/BlogSumAggregateInput.schema");
exports.BlogAggregateSchema = z.object({ orderBy: z.union([BlogOrderByWithRelationInput_schema_1.BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInput_schema_1.BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInput_schema_1.BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), BlogCountAggregateInput_schema_1.BlogCountAggregateInputObjectSchema]).optional(), _min: BlogMinAggregateInput_schema_1.BlogMinAggregateInputObjectSchema.optional(), _max: BlogMaxAggregateInput_schema_1.BlogMaxAggregateInputObjectSchema.optional(), _avg: BlogAvgAggregateInput_schema_1.BlogAvgAggregateInputObjectSchema.optional(), _sum: BlogSumAggregateInput_schema_1.BlogSumAggregateInputObjectSchema.optional() }).strict();
exports.BlogAggregateZodSchema = z.object({ orderBy: z.union([BlogOrderByWithRelationInput_schema_1.BlogOrderByWithRelationInputObjectSchema, BlogOrderByWithRelationInput_schema_1.BlogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BlogWhereInput_schema_1.BlogWhereInputObjectSchema.optional(), cursor: BlogWhereUniqueInput_schema_1.BlogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), BlogCountAggregateInput_schema_1.BlogCountAggregateInputObjectSchema]).optional(), _min: BlogMinAggregateInput_schema_1.BlogMinAggregateInputObjectSchema.optional(), _max: BlogMaxAggregateInput_schema_1.BlogMaxAggregateInputObjectSchema.optional(), _avg: BlogAvgAggregateInput_schema_1.BlogAvgAggregateInputObjectSchema.optional(), _sum: BlogSumAggregateInput_schema_1.BlogSumAggregateInputObjectSchema.optional() }).strict();
