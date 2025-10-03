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
exports.ProjectWhereUniqueInputObjectZodSchema = exports.ProjectWhereUniqueInputObjectSchema = void 0;
const z = __importStar(require("zod"));
const makeSchema = () => z.object({
    id: z.number().int().optional()
}).strict().superRefine((obj, ctx) => {
    const presentTop = (k) => obj[k] != null;
    const singles = ["id"];
    const groups = [];
    const anySingle = Array.isArray(singles) && singles.length > 0 ? singles.some(presentTop) : false;
    let anyComposite = false;
    if (Array.isArray(groups) && groups.length > 0) {
        // Iterate over nested composite selectors (e.g., { composite_key_name: { a: ..., b: ... } })
        for (const [propKey, composite] of Object.entries(obj)) {
            if (!composite || typeof composite !== 'object')
                continue;
            for (const g of groups) {
                if (!Array.isArray(g) || g.length === 0)
                    continue;
                const presentInComposite = (k) => composite[k] != null;
                const provided = g.filter(presentInComposite).length;
                if (provided > 0 && provided < g.length) {
                    for (const f of g) {
                        if (!presentInComposite(f)) {
                            ctx.addIssue({ code: 'custom', message: 'All fields of composite unique must be provided', path: [propKey, f] });
                        }
                    }
                }
                if (provided === g.length && g.length > 0) {
                    anyComposite = true;
                }
            }
        }
    }
    if (!anySingle && !anyComposite) {
        ctx.addIssue({ code: 'custom', message: 'Provide at least one unique selector' });
    }
});
exports.ProjectWhereUniqueInputObjectSchema = makeSchema();
exports.ProjectWhereUniqueInputObjectZodSchema = makeSchema();
