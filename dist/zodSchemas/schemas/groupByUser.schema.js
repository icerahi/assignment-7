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
exports.UserGroupByZodSchema = exports.UserGroupBySchema = void 0;
const z = __importStar(require("zod"));
const UserWhereInput_schema_1 = require("./objects/UserWhereInput.schema");
const UserOrderByWithAggregationInput_schema_1 = require("./objects/UserOrderByWithAggregationInput.schema");
const UserScalarWhereWithAggregatesInput_schema_1 = require("./objects/UserScalarWhereWithAggregatesInput.schema");
const UserScalarFieldEnum_schema_1 = require("./enums/UserScalarFieldEnum.schema");
const UserCountAggregateInput_schema_1 = require("./objects/UserCountAggregateInput.schema");
const UserMinAggregateInput_schema_1 = require("./objects/UserMinAggregateInput.schema");
const UserMaxAggregateInput_schema_1 = require("./objects/UserMaxAggregateInput.schema");
const UserAvgAggregateInput_schema_1 = require("./objects/UserAvgAggregateInput.schema");
const UserSumAggregateInput_schema_1 = require("./objects/UserSumAggregateInput.schema");
exports.UserGroupBySchema = z.object({ where: UserWhereInput_schema_1.UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInput_schema_1.UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInput_schema_1.UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInput_schema_1.UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnum_schema_1.UserScalarFieldEnumSchema), _count: z.union([z.literal(true), UserCountAggregateInput_schema_1.UserCountAggregateInputObjectSchema]).optional(), _min: UserMinAggregateInput_schema_1.UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInput_schema_1.UserMaxAggregateInputObjectSchema.optional(), _avg: UserAvgAggregateInput_schema_1.UserAvgAggregateInputObjectSchema.optional(), _sum: UserSumAggregateInput_schema_1.UserSumAggregateInputObjectSchema.optional() }).strict();
exports.UserGroupByZodSchema = z.object({ where: UserWhereInput_schema_1.UserWhereInputObjectSchema.optional(), orderBy: z.union([UserOrderByWithAggregationInput_schema_1.UserOrderByWithAggregationInputObjectSchema, UserOrderByWithAggregationInput_schema_1.UserOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserScalarWhereWithAggregatesInput_schema_1.UserScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserScalarFieldEnum_schema_1.UserScalarFieldEnumSchema), _count: z.union([z.literal(true), UserCountAggregateInput_schema_1.UserCountAggregateInputObjectSchema]).optional(), _min: UserMinAggregateInput_schema_1.UserMinAggregateInputObjectSchema.optional(), _max: UserMaxAggregateInput_schema_1.UserMaxAggregateInputObjectSchema.optional(), _avg: UserAvgAggregateInput_schema_1.UserAvgAggregateInputObjectSchema.optional(), _sum: UserSumAggregateInput_schema_1.UserSumAggregateInputObjectSchema.optional() }).strict();
