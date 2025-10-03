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
exports.UserUncheckedCreateInputObjectZodSchema = exports.UserUncheckedCreateInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const UserCreateskillsInput_schema_1 = require("./UserCreateskillsInput.schema");
const BlogUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./BlogUncheckedCreateNestedManyWithoutUserInput.schema");
const ProjectUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./ProjectUncheckedCreateNestedManyWithoutUserInput.schema");
const WorkExperienceUncheckedCreateNestedManyWithoutUserInput_schema_1 = require("./WorkExperienceUncheckedCreateNestedManyWithoutUserInput.schema");
const makeSchema = () => z.object({
    id: z.number().int().optional(),
    name: z.string(),
    email: z.string(),
    picture: z.string().optional().nullable(),
    password: z.string(),
    phone: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
    skills: z.union([z.lazy(() => UserCreateskillsInput_schema_1.UserCreateskillsInputObjectSchema), z.string().array()]),
    createdAt: z.coerce.date().optional(),
    blogs: z.lazy(() => BlogUncheckedCreateNestedManyWithoutUserInput_schema_1.BlogUncheckedCreateNestedManyWithoutUserInputObjectSchema),
    projects: z.lazy(() => ProjectUncheckedCreateNestedManyWithoutUserInput_schema_1.ProjectUncheckedCreateNestedManyWithoutUserInputObjectSchema),
    experiences: z.lazy(() => WorkExperienceUncheckedCreateNestedManyWithoutUserInput_schema_1.WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
exports.UserUncheckedCreateInputObjectSchema = makeSchema();
exports.UserUncheckedCreateInputObjectZodSchema = makeSchema();
