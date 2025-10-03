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
exports.UserUpdateOneRequiredWithoutProjectsNestedInputObjectZodSchema = exports.UserUpdateOneRequiredWithoutProjectsNestedInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const UserCreateWithoutProjectsInput_schema_1 = require("./UserCreateWithoutProjectsInput.schema");
const UserUncheckedCreateWithoutProjectsInput_schema_1 = require("./UserUncheckedCreateWithoutProjectsInput.schema");
const UserCreateOrConnectWithoutProjectsInput_schema_1 = require("./UserCreateOrConnectWithoutProjectsInput.schema");
const UserUpsertWithoutProjectsInput_schema_1 = require("./UserUpsertWithoutProjectsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateToOneWithWhereWithoutProjectsInput_schema_1 = require("./UserUpdateToOneWithWhereWithoutProjectsInput.schema");
const UserUpdateWithoutProjectsInput_schema_1 = require("./UserUpdateWithoutProjectsInput.schema");
const UserUncheckedUpdateWithoutProjectsInput_schema_1 = require("./UserUncheckedUpdateWithoutProjectsInput.schema");
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutProjectsInput_schema_1.UserCreateWithoutProjectsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProjectsInput_schema_1.UserUncheckedCreateWithoutProjectsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProjectsInput_schema_1.UserCreateOrConnectWithoutProjectsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutProjectsInput_schema_1.UserUpsertWithoutProjectsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProjectsInput_schema_1.UserUpdateToOneWithWhereWithoutProjectsInputObjectSchema), z.lazy(() => UserUpdateWithoutProjectsInput_schema_1.UserUpdateWithoutProjectsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProjectsInput_schema_1.UserUncheckedUpdateWithoutProjectsInputObjectSchema)]).optional()
}).strict();
exports.UserUpdateOneRequiredWithoutProjectsNestedInputObjectSchema = makeSchema();
exports.UserUpdateOneRequiredWithoutProjectsNestedInputObjectZodSchema = makeSchema();
