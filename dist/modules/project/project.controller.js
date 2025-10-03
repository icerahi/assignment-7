"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const project_service_1 = require("./project.service");
const projectService = new project_service_1.ProjectService();
class ProjectController {
    constructor() {
        //all project
        this.getAllProjects = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield projectService.getAllProjects();
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "All projects retrieved Successfully!",
                meta: result.meta,
                data: result.data,
            });
        }));
        //single project
        this.getSingleProject = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield projectService.getSinglelProject(Number(id));
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Project retrieved Successfully!",
                data: result,
            });
        }));
        //create
        this.create = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const decodedToken = req.user;
            const payload = Object.assign(Object.assign({}, req.body), { thumbnail: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
            const result = yield projectService.create(decodedToken.id, payload);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.CREATED,
                message: "Project Created Successfully!",
                data: result,
            });
        }));
        //update
        this.updateProject = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { id } = req.params;
            const payload = Object.assign(Object.assign({}, req.body), { thumbnail: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
            const result = yield projectService.updateProject(Number(id), payload);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Project Updated Successfully!",
                data: result,
            });
        }));
        //delete
        this.deleteProject = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield projectService.deleteProject(Number(id));
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Project Deleted Successfully!",
                data: result,
            });
        }));
    }
}
exports.ProjectController = ProjectController;
