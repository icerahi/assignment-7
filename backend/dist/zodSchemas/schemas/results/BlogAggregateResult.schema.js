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
exports.BlogAggregateResultSchema = void 0;
const z = __importStar(require("zod"));
exports.BlogAggregateResultSchema = z.object({ _count: z.object({
        id: z.number(),
        title: z.number(),
        content: z.number(),
        view: z.number(),
        published: z.number(),
        createdAt: z.number(),
        updatedAt: z.number(),
        user: z.number(),
        userId: z.number()
    }).optional(),
    _sum: z.object({
        id: z.number().nullable(),
        view: z.number().nullable(),
        userId: z.number().nullable()
    }).nullable().optional(),
    _avg: z.object({
        id: z.number().nullable(),
        view: z.number().nullable(),
        userId: z.number().nullable()
    }).nullable().optional(),
    _min: z.object({
        id: z.number().int().nullable(),
        title: z.string().nullable(),
        content: z.string().nullable(),
        view: z.number().int().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        userId: z.number().int().nullable()
    }).nullable().optional(),
    _max: z.object({
        id: z.number().int().nullable(),
        title: z.string().nullable(),
        content: z.string().nullable(),
        view: z.number().int().nullable(),
        createdAt: z.date().nullable(),
        updatedAt: z.date().nullable(),
        userId: z.number().int().nullable()
    }).nullable().optional() });
