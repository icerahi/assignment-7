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
exports.ProjectUpsertOneZodSchema = exports.ProjectUpsertOneSchema = void 0;
const z = __importStar(require("zod"));
const ProjectSelect_schema_1 = require("./objects/ProjectSelect.schema");
const ProjectInclude_schema_1 = require("./objects/ProjectInclude.schema");
const ProjectWhereUniqueInput_schema_1 = require("./objects/ProjectWhereUniqueInput.schema");
const ProjectCreateInput_schema_1 = require("./objects/ProjectCreateInput.schema");
const ProjectUncheckedCreateInput_schema_1 = require("./objects/ProjectUncheckedCreateInput.schema");
const ProjectUpdateInput_schema_1 = require("./objects/ProjectUpdateInput.schema");
const ProjectUncheckedUpdateInput_schema_1 = require("./objects/ProjectUncheckedUpdateInput.schema");
exports.ProjectUpsertOneSchema = z.object({ select: ProjectSelect_schema_1.ProjectSelectObjectSchema.optional(), include: ProjectInclude_schema_1.ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInput_schema_1.ProjectWhereUniqueInputObjectSchema, create: z.union([ProjectCreateInput_schema_1.ProjectCreateInputObjectSchema, ProjectUncheckedCreateInput_schema_1.ProjectUncheckedCreateInputObjectSchema]), update: z.union([ProjectUpdateInput_schema_1.ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInput_schema_1.ProjectUncheckedUpdateInputObjectSchema]) }).strict();
exports.ProjectUpsertOneZodSchema = z.object({ select: ProjectSelect_schema_1.ProjectSelectObjectSchema.optional(), include: ProjectInclude_schema_1.ProjectIncludeObjectSchema.optional(), where: ProjectWhereUniqueInput_schema_1.ProjectWhereUniqueInputObjectSchema, create: z.union([ProjectCreateInput_schema_1.ProjectCreateInputObjectSchema, ProjectUncheckedCreateInput_schema_1.ProjectUncheckedCreateInputObjectSchema]), update: z.union([ProjectUpdateInput_schema_1.ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInput_schema_1.ProjectUncheckedUpdateInputObjectSchema]) }).strict();
