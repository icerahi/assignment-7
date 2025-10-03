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
exports.UserCreateNestedOneWithoutExperiencesInputObjectZodSchema = exports.UserCreateNestedOneWithoutExperiencesInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const UserCreateWithoutExperiencesInput_schema_1 = require("./UserCreateWithoutExperiencesInput.schema");
const UserUncheckedCreateWithoutExperiencesInput_schema_1 = require("./UserUncheckedCreateWithoutExperiencesInput.schema");
const UserCreateOrConnectWithoutExperiencesInput_schema_1 = require("./UserCreateOrConnectWithoutExperiencesInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutExperiencesInput_schema_1.UserCreateWithoutExperiencesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutExperiencesInput_schema_1.UserUncheckedCreateWithoutExperiencesInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExperiencesInput_schema_1.UserCreateOrConnectWithoutExperiencesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional()
}).strict();
exports.UserCreateNestedOneWithoutExperiencesInputObjectSchema = makeSchema();
exports.UserCreateNestedOneWithoutExperiencesInputObjectZodSchema = makeSchema();
