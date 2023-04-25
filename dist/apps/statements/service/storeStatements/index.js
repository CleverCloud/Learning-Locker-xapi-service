"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var stream_1 = require("stream");
var checkScopes_1 = __importDefault(require("jscommons/dist/service/utils/checkScopes"));
var statementProcessingPriority_enum_1 = require("../../enums/statementProcessingPriority.enum");
var scopes_1 = require("../../utils/scopes");
var logger_1 = __importDefault(require("../../../../logger"));
var checkAttachments_1 = __importDefault(require("./checkAttachments"));
var checkVoiders_1 = __importDefault(require("./checkVoiders"));
var createAttachments_1 = __importDefault(require("./createAttachments"));
var createStatements_1 = __importDefault(require("./createStatements"));
var getUnstoredModels_1 = __importDefault(require("./getUnstoredModels"));
var postValidationSetup_1 = __importDefault(require("./postValidationSetup"));
var preValidationSetup_1 = __importDefault(require("./preValidationSetup/preValidationSetup"));
var updateFullActivities_1 = __importDefault(require("./updateFullActivities"));
var updateReferences_1 = __importDefault(require("./updateReferences"));
var validateStatements_1 = __importDefault(require("./validateStatements"));
var voidStatements_1 = __importDefault(require("./voidStatements"));
/* istanbul ignore next */
var awaitUpdates = function (config, updates) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!config.awaitUpdates) return [3 /*break*/, 2];
                return [4 /*yield*/, updates];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
var cloneAttachments = function (attachmentModels) {
    return attachmentModels.map(function (attachmentModel) {
        return __assign(__assign({}, attachmentModel), { stream: attachmentModel.stream.pipe(new stream_1.PassThrough()) });
    });
};
exports.default = (function (config) {
    return function (_a) {
        var models = _a.models, attachments = _a.attachments, client = _a.client, _b = _a.priority, priority = _b === void 0 ? statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM : _b, _c = _a.bypassQueues, bypassQueues = _c === void 0 ? [] : _c;
        return __awaiter(void 0, void 0, void 0, function () {
            var preValidatedModels, clonedAttachments, postValidatedModels, unstoredModels, voidedObjectIds, statementIds, unstoredStatementProperties, unawaitedUpdates, tracker;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        checkScopes_1.default(scopes_1.STATEMENT_WRITE_SCOPES, client.scopes);
                        preValidatedModels = preValidationSetup_1.default(config, models);
                        validateStatements_1.default(preValidatedModels);
                        clonedAttachments = cloneAttachments(attachments);
                        return [4 /*yield*/, postValidationSetup_1.default(preValidatedModels, cloneAttachments(attachments), client, priority, bypassQueues)];
                    case 1:
                        postValidatedModels = _d.sent();
                        return [4 /*yield*/, getUnstoredModels_1.default(config, postValidatedModels, client)];
                    case 2:
                        unstoredModels = _d.sent();
                        return [4 /*yield*/, checkVoiders_1.default(config, unstoredModels, client)];
                    case 3:
                        voidedObjectIds = _d.sent();
                        checkAttachments_1.default(config, postValidatedModels, clonedAttachments);
                        return [4 /*yield*/, createStatements_1.default(config, unstoredModels)];
                    case 4:
                        _d.sent();
                        statementIds = postValidatedModels.map(function (postValidatedModel) {
                            return postValidatedModel.statement.id;
                        });
                        unstoredStatementProperties = unstoredModels.map(function (unstoredModel) {
                            return JSON.stringify({
                                statementId: unstoredModel.statement.id,
                                organisationId: unstoredModel.organisation,
                            });
                        });
                        unawaitedUpdates = Promise.all([
                            createAttachments_1.default(config, clonedAttachments, client.lrs_id),
                            voidStatements_1.default(config, unstoredModels, voidedObjectIds, client),
                            updateReferences_1.default(config, unstoredModels, client),
                            updateFullActivities_1.default({ config: config, models: unstoredModels, client: client }),
                            config.repo.incrementStoreCount({ client: client, count: unstoredModels.length }),
                        ]).catch(function (err) {
                            /* istanbul ignore next */
                            config.logger.error('Error in unawaited updates', err);
                        });
                        return [4 /*yield*/, awaitUpdates(config, unawaitedUpdates)];
                    case 5:
                        _d.sent();
                        if (unstoredStatementProperties.length !== 0) {
                            config.repo
                                .emitNewStatements({
                                statementProperties: unstoredStatementProperties,
                                priority: priority,
                            })
                                .catch(function (err) {
                                /* istanbul ignore next */
                                logger_1.default.error('emitNewStatements error', err);
                            });
                        }
                        return [4 /*yield*/, config.tracker];
                    case 6:
                        tracker = _d.sent();
                        tracker('batchSize', unstoredModels.length);
                        tracker('sentBatchSize', models.length);
                        return [2 /*return*/, statementIds];
                }
            });
        });
    };
});
//# sourceMappingURL=index.js.map