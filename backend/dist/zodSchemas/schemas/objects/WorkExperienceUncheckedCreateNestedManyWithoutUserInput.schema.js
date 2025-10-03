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
exports.WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = exports.WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const WorkExperienceCreateWithoutUserInput_schema_1 = require("./WorkExperienceCreateWithoutUserInput.schema");
const WorkExperienceUncheckedCreateWithoutUserInput_schema_1 = require("./WorkExperienceUncheckedCreateWithoutUserInput.schema");
const WorkExperienceCreateOrConnectWithoutUserInput_schema_1 = require("./WorkExperienceCreateOrConnectWithoutUserInput.schema");
const WorkExperienceCreateManyUserInputEnvelope_schema_1 = require("./WorkExperienceCreateManyUserInputEnvelope.schema");
const WorkExperienceWhereUniqueInput_schema_1 = require("./WorkExperienceWhereUniqueInput.schema");
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => WorkExperienceCreateWithoutUserInput_schema_1.WorkExperienceCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceCreateWithoutUserInput_schema_1.WorkExperienceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInput_schema_1.WorkExperienceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceUncheckedCreateWithoutUserInput_schema_1.WorkExperienceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => WorkExperienceCreateOrConnectWithoutUserInput_schema_1.WorkExperienceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WorkExperienceCreateOrConnectWithoutUserInput_schema_1.WorkExperienceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => WorkExperienceCreateManyUserInputEnvelope_schema_1.UserWorkExperienceCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema), z.lazy(() => WorkExperienceWhereUniqueInput_schema_1.WorkExperienceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
exports.WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectSchema = makeSchema();
exports.WorkExperienceUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
