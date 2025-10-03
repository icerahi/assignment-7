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
exports.ProjectCreateNestedManyWithoutUserInputObjectZodSchema = exports.ProjectCreateNestedManyWithoutUserInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const ProjectCreateWithoutUserInput_schema_1 = require("./ProjectCreateWithoutUserInput.schema");
const ProjectUncheckedCreateWithoutUserInput_schema_1 = require("./ProjectUncheckedCreateWithoutUserInput.schema");
const ProjectCreateOrConnectWithoutUserInput_schema_1 = require("./ProjectCreateOrConnectWithoutUserInput.schema");
const ProjectCreateManyUserInputEnvelope_schema_1 = require("./ProjectCreateManyUserInputEnvelope.schema");
const ProjectWhereUniqueInput_schema_1 = require("./ProjectWhereUniqueInput.schema");
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ProjectCreateWithoutUserInput_schema_1.ProjectCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectCreateWithoutUserInput_schema_1.ProjectCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ProjectUncheckedCreateWithoutUserInput_schema_1.ProjectUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutUserInput_schema_1.ProjectUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ProjectCreateOrConnectWithoutUserInput_schema_1.ProjectCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ProjectCreateOrConnectWithoutUserInput_schema_1.ProjectCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => ProjectCreateManyUserInputEnvelope_schema_1.UserProjectCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => ProjectWhereUniqueInput_schema_1.ProjectWhereUniqueInputObjectSchema), z.lazy(() => ProjectWhereUniqueInput_schema_1.ProjectWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
exports.ProjectCreateNestedManyWithoutUserInputObjectSchema = makeSchema();
exports.ProjectCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
