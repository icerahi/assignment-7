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
exports.UserUpdateInputObjectZodSchema = exports.UserUpdateInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
const NullableStringFieldUpdateOperationsInput_schema_1 = require("./NullableStringFieldUpdateOperationsInput.schema");
const UserUpdateskillsInput_schema_1 = require("./UserUpdateskillsInput.schema");
const DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
const BlogUpdateManyWithoutUserNestedInput_schema_1 = require("./BlogUpdateManyWithoutUserNestedInput.schema");
const ProjectUpdateManyWithoutUserNestedInput_schema_1 = require("./ProjectUpdateManyWithoutUserNestedInput.schema");
const WorkExperienceUpdateManyWithoutUserNestedInput_schema_1 = require("./WorkExperienceUpdateManyWithoutUserNestedInput.schema");
const makeSchema = () => z.object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    picture: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
    password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
    bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInput_schema_1.NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
    skills: z.union([z.lazy(() => UserUpdateskillsInput_schema_1.UserUpdateskillsInputObjectSchema), z.string().array()]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    blogs: z.lazy(() => BlogUpdateManyWithoutUserNestedInput_schema_1.BlogUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    projects: z.lazy(() => ProjectUpdateManyWithoutUserNestedInput_schema_1.ProjectUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    experiences: z.lazy(() => WorkExperienceUpdateManyWithoutUserNestedInput_schema_1.WorkExperienceUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
exports.UserUpdateInputObjectSchema = makeSchema();
exports.UserUpdateInputObjectZodSchema = makeSchema();
