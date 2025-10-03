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
exports.UserOrderByWithAggregationInputObjectZodSchema = exports.UserOrderByWithAggregationInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const SortOrderInput_schema_1 = require("./SortOrderInput.schema");
const UserCountOrderByAggregateInput_schema_1 = require("./UserCountOrderByAggregateInput.schema");
const UserAvgOrderByAggregateInput_schema_1 = require("./UserAvgOrderByAggregateInput.schema");
const UserMaxOrderByAggregateInput_schema_1 = require("./UserMaxOrderByAggregateInput.schema");
const UserMinOrderByAggregateInput_schema_1 = require("./UserMinOrderByAggregateInput.schema");
const UserSumOrderByAggregateInput_schema_1 = require("./UserSumOrderByAggregateInput.schema");
const makeSchema = () => z.object({
    id: SortOrder_schema_1.SortOrderSchema.optional(),
    name: SortOrder_schema_1.SortOrderSchema.optional(),
    email: SortOrder_schema_1.SortOrderSchema.optional(),
    picture: z.union([SortOrder_schema_1.SortOrderSchema, z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(),
    password: SortOrder_schema_1.SortOrderSchema.optional(),
    phone: z.union([SortOrder_schema_1.SortOrderSchema, z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(),
    bio: z.union([SortOrder_schema_1.SortOrderSchema, z.lazy(() => SortOrderInput_schema_1.SortOrderInputObjectSchema)]).optional(),
    skills: SortOrder_schema_1.SortOrderSchema.optional(),
    createdAt: SortOrder_schema_1.SortOrderSchema.optional(),
    updatedAt: SortOrder_schema_1.SortOrderSchema.optional(),
    _count: z.lazy(() => UserCountOrderByAggregateInput_schema_1.UserCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => UserAvgOrderByAggregateInput_schema_1.UserAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserMaxOrderByAggregateInput_schema_1.UserMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserMinOrderByAggregateInput_schema_1.UserMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UserSumOrderByAggregateInput_schema_1.UserSumOrderByAggregateInputObjectSchema).optional()
}).strict();
exports.UserOrderByWithAggregationInputObjectSchema = makeSchema();
exports.UserOrderByWithAggregationInputObjectZodSchema = makeSchema();
