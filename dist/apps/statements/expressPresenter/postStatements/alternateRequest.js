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
var InvalidMethod_1 = __importDefault(require("../../errors/InvalidMethod"));
var parseJson_1 = __importDefault(require("../../utils/parseJson"));
var checkUnknownParams_1 = __importDefault(require("../utils/checkUnknownParams"));
var contentTypePatterns_1 = require("../utils/contentTypePatterns");
var getClient_1 = __importDefault(require("../utils/getClient"));
var getStatements_1 = __importDefault(require("../utils/getStatements"));
var getUrlPath_1 = __importDefault(require("../utils/getUrlPath"));
var storeStatement_1 = __importDefault(require("../utils/storeStatement"));
var validateHeaderVersion_1 = __importDefault(require("../utils/validateHeaderVersion"));
var validateStatementProcessingPriority_1 = require("../utils/validateStatementProcessingPriority");
var validateStatementBypassQueues_1 = require("../utils/validateStatementBypassQueues");
var storeStatements_1 = __importDefault(require("./storeStatements"));
var checkContentType = function (bodyParams) {
    var contentType = lodash_1.get(bodyParams, 'Content-Type', 'application/json');
    if (!contentTypePatterns_1.jsonContentTypePattern.test(contentType)) {
        throw new InvalidContentType_1.default(contentType);
    }
};
var getBodyContent = function (bodyParams) {
    var unparsedBody = lodash_1.get(bodyParams, 'content', '');
    return parseJson_1.default(unparsedBody, ['body', 'content']);
};
var getHeader = function (bodyParams, req, name) {
    return lodash_1.get(bodyParams, name, lodash_1.defaultTo(req.header(name), ''));
};
var getBodyParams = function (stream) { return __awaiter(void 0, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, stream_to_string_1.default(stream)];
            case 1:
                body = _a.sent();
                return [2 /*return*/, query_string_1.parse(body)];
        }
    });
}); };
exports.default = (function (_a) {
    var config = _a.config, method = _a.method, req = _a.req, res = _a.res;
    return __awaiter(void 0, void 0, void 0, function () {
        var priority, bypassQueues, bodyParams, auth, client, version, body, bodyParams, urlPath, auth, client, version, acceptedLangs, queryParams, bodyParams, auth, client, version, body, statementId;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checkUnknownParams_1.default(req.query, ['method']);
                    validateStatementProcessingPriority_1.validateStatementProcessingPriority(req.query.priority);
                    validateStatementBypassQueues_1.validateStatementBypassQueues(req.query.bypassQueues);
                    priority = req.query.priority || statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM;
                    bypassQueues = req.query.bypassQueues && req.query.bypassQueues.trim() !== ''
                        ? req.query.bypassQueues.split(',')
                        : [];
                    if (!(method === 'POST' || (method === undefined && config.allowUndefinedMethod))) return [3 /*break*/, 3];
                    return [4 /*yield*/, getBodyParams(req)];
                case 1:
                    bodyParams = _b.sent();
                    checkContentType(bodyParams);
                    auth = getHeader(bodyParams, req, 'Authorization');
                    return [4 /*yield*/, getClient_1.default(config, auth)];
                case 2:
                    client = _b.sent();
                    version = getHeader(bodyParams, req, 'X-Experience-API-Version');
                    validateHeaderVersion_1.default(version);
                    body = getBodyContent(bodyParams);
                    return [2 /*return*/, storeStatements_1.default({ config: config, client: client, priority: priority, bypassQueues: bypassQueues, body: body, attachments: [], res: res })];
                case 3:
                    if (!(method === 'GET')) return [3 /*break*/, 6];
                    return [4 /*yield*/, getBodyParams(req)];
                case 4:
                    bodyParams = _b.sent();
                    urlPath = getUrlPath_1.default(req);
                    auth = getHeader(bodyParams, req, 'Authorization');
                    return [4 /*yield*/, getClient_1.default(config, auth)];
                case 5:
                    client = _b.sent();
                    version = getHeader(bodyParams, req, 'X-Experience-API-Version');
                    validateHeaderVersion_1.default(version);
                    acceptedLangs = lodash_1.defaultTo(req.header('Accept-Language'), '');
                    queryParams = bodyParams;
                    return [2 /*return*/, getStatements_1.default({ config: config, res: res, client: client, queryParams: queryParams, urlPath: urlPath, acceptedLangs: acceptedLangs })];
                case 6:
                    if (!(method === 'PUT')) return [3 /*break*/, 9];
                    return [4 /*yield*/, getBodyParams(req)];
                case 7:
                    bodyParams = _b.sent();
                    checkContentType(bodyParams);
                    auth = getHeader(bodyParams, req, 'Authorization');
                    return [4 /*yield*/, getClient_1.default(config, auth)];
                case 8:
                    client = _b.sent();
                    version = getHeader(bodyParams, req, 'X-Experience-API-Version');
                    validateHeaderVersion_1.default(version);
                    body = getBodyContent(bodyParams);
                    statementId = bodyParams.statementId;
                    return [2 /*return*/, storeStatement_1.default({
                            config: config,
                            client: client,
                            body: body,
                            priority: priority,
                            bypassQueues: bypassQueues,
                            attachments: [],
                            statementId: statementId,
                            res: res,
                        })];
                case 9: throw new InvalidMethod_1.default(method);
            }
        });
    });
});
//# sourceMappingURL=alternateRequest.js.map