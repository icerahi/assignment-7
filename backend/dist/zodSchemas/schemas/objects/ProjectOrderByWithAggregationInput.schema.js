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
exports.ProjectOrderByWithAggregationInputObjectZodSchema = exports.ProjectOrderByWithAggregationInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const ProjectCountOrderByAggregateInput_schema_1 = require("./ProjectCountOrderByAggregateInput.schema");
const ProjectAvgOrderByAggregateInput_schema_1 = require("./ProjectAvgOrderByAggregateInput.schema");
const ProjectMaxOrderByAggregateInput_schema_1 = require("./ProjectMaxOrderByAggregateInput.schema");
const ProjectMinOrderByAggregateInput_schema_1 = require("./ProjectMinOrderByAggregateInput.schema");
const ProjectSumOrderByAggregateInput_schema_1 = require("./ProjectSumOrderByAggregateInput.schema");
const makeSchema = () => z.object({
    id: SortOrder_schema_1.SortOrderSchema.optional(),
    title: SortOrder_schema_1.SortOrderSchema.optional(),
    thumbnail: z.union([SortOrder_schema_1.SortOrderSchema, z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(),
    projectLink: SortOrder_schema_1.SortOrderSchema.optional(),
    liveSite: z.union([SortOrder_schema_1.SortOrderSchema, z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(),
    description: SortOrder_schema_1.SortOrderSchema.optional(),
    features: SortOrder_schema_1.SortOrderSchema.optional(),
    userId: SortOrder_schema_1.SortOrderSchema.optional(),
    _count: z.lazy(() => ProjectCountOrderByAggregateInput_schema_1.ProjectCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => ProjectAvgOrderByAggregateInput_schema_1.ProjectAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProjectMaxOrderByAggregateInput_schema_1.ProjectMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProjectMinOrderByAggregateInput_schema_1.ProjectMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProjectSumOrderByAggregateInput_schema_1.ProjectSumOrderByAggregateInputObjectSchema).optional()
}).strict();
exports.ProjectOrderByWithAggregationInputObjectSchema = makeSchema();
exports.ProjectOrderByWithAggregationInputObjectZodSchema = makeSchema();
