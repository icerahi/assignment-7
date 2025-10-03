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
exports.WorkExperienceUpdateOneZodSchema = exports.WorkExperienceUpdateOneSchema = void 0;
const z = __importStar(require("zod"));
const WorkExperienceSelect_schema_1 = require("./objects/WorkExperienceSelect.schema");
const WorkExperienceInclude_schema_1 = require("./objects/WorkExperienceInclude.schema");
const WorkExperienceUpdateInput_schema_1 = require("./objects/WorkExperienceUpdateInput.schema");
const WorkExperienceUncheckedUpdateInput_schema_1 = require("./objects/WorkExperienceUncheckedUpdateInput.schema");
const WorkExperienceWhereUniqueInput_schema_1 = require("./objects/WorkExperienceWhereUniqueInput.schema");
exports.WorkExperienceUpdateOneSchema = z.object({ select: WorkExperienceSelect_schema_1.WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceInclude_schema_1.WorkExperienceIncludeObjectSchema.optional(), data: z.union([WorkExperienceUpdateInput_schema_1.WorkExperienceUpdateInputObjectSchema, WorkExperienceUncheckedUpdateInput_schema_1.WorkExperienceUncheckedUpdateInputObjectSchema]), where: WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema }).strict();
exports.WorkExperienceUpdateOneZodSchema = z.object({ select: WorkExperienceSelect_schema_1.WorkExperienceSelectObjectSchema.optional(), include: WorkExperienceInclude_schema_1.WorkExperienceIncludeObjectSchema.optional(), data: z.union([WorkExperienceUpdateInput_schema_1.WorkExperienceUpdateInputObjectSchema, WorkExperienceUncheckedUpdateInput_schema_1.WorkExperienceUncheckedUpdateInputObjectSchema]), where: WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema }).strict();
