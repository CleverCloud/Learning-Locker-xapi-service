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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var query_string_1 = require("query-string");
var stream_to_string_1 = __importDefault(require("stream-to-string"));
var statementProcessingPriority_enum_1 = require("../../enums/statementProcessingPriority.enum");
var InvalidContentType_1 = __importDefault(require("../../errors/InvalidContentType"));
var parseJson_1 = __importDefault(require("../../utils/parseJson"));
var catchErrors_1 = __importDefault(require("../utils/catchErrors"));
var contentTypePatterns_1 = require("../utils/contentTypePatterns");
var getClient_1 = __importDefault(require("../utils/getClient"));
var validateHeaderVersion_1 = __importDefault(require("../utils/validateHeaderVersion"));
var validateStatementProcessingPriority_1 = require("../utils/validateStatementProcessingPriority");
var validateStatementBypassQueues_1 = require("../utils/validateStatementBypassQueues");
var alternateRequest_1 = __importDefault(require("./alternateRequest"));
var storeStatements_1 = __importDefault(require("./storeStatements"));
var storeWithAttachments_1 = __importDefault(require("./storeWithAttachments"));
var contentParam = 'content';
var contentParamStart = contentParam + "=";
var parseJsonBody = function (config, req) { return __awaiter(void 0, void 0, void 0, function () {
    var body, formData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, stream_to_string_1.default(req)];
            case 1:
                body = _a.sent();
                if (config.allowFormBody && body.slice(0, contentParamStart.length) === contentParamStart) {
                    formData = query_string_1.parse(body);
                    return [2 /*return*/, parseJson_1.default(formData.content, ['body', contentParam])];
                }
                return [2 /*return*/, parseJson_1.default(body, ['body'])];
        }
    });
}); };
exports.default = (function (config) {
    return catchErrors_1.default(config, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var method, priority, bypassQueues, contentType, client, body, attachments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    method = req.query.method;
                    validateStatementProcessingPriority_1.validateStatementProcessingPriority(req.query.priority);
                    validateStatementBypassQueues_1.validateStatementBypassQueues(req.query.bypassQueues);
                    priority = req.query.priority || statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM;
                    bypassQueues = req.query.bypassQueues && req.query.bypassQueues.trim() !== ''
                        ? req.query.bypassQueues.split(',')
                        : [];
                    contentType = lodash_1.defaultTo(req.header('Content-Type'), '');
                    if (method === undefined && contentTypePatterns_1.multipartContentTypePattern.test(contentType)) {
                        return [2 /*return*/, storeWithAttachments_1.default({ config: config, req: req, res: res })];
                    }
                    if (!(method === undefined && contentTypePatterns_1.jsonContentTypePattern.test(contentType))) return [3 /*break*/, 3];
                    return [4 /*yield*/, getClient_1.default(config, lodash_1.defaultTo(req.header('Authorization'), ''))];
                case 1:
                    client = _a.sent();
                    validateHeaderVersion_1.default(req.header('X-Experience-API-Version'));
                    return [4 /*yield*/, parseJsonBody(config, req)];
                case 2:
                    body = _a.sent();
                    attachments = [];
                    return [2 /*return*/, storeStatements_1.default({ config: config, client: client, priority: priority, bypassQueues: bypassQueues, body: body, attachments: attachments, res: res })];
                case 3:
                    if (method !== undefined || contentTypePatterns_1.alternateContentTypePattern.test(contentType)) {
                        return [2 /*return*/, alternateRequest_1.default({ config: config, method: method, req: req, res: res })];
                    }
                    throw new InvalidContentType_1.default(contentType);
            }
        });
    }); });
});
//# sourceMappingURL=index.js.map