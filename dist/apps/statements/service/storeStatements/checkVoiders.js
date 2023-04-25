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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var InvalidVoidType_1 = __importDefault(require("../../errors/InvalidVoidType"));
var VoidingError_1 = __importDefault(require("../../errors/VoidingError"));
var voidVerbId_1 = __importDefault(require("../../utils/voidVerbId"));
var isVoiding = function (model) {
    return model.statement.verb.id === voidVerbId_1.default;
};
var getVoiders = function (statements) {
    return statements.reduce(function (result, model) {
        if (isVoiding(model) && model.statement.object.objectType === 'StatementRef') {
            return {
                voiderIds: __spreadArray(__spreadArray([], result.voiderIds), [model.statement.id]),
                voidedObjectIds: __spreadArray(__spreadArray([], result.voidedObjectIds), [model.statement.object.id]),
                voidingModels: __spreadArray(__spreadArray([], result.voidingModels), [model]),
            };
        }
        return result;
    }, { voiderIds: [], voidedObjectIds: [], voidingModels: [] });
};
var checkWithinStatements = function (voiderIds, voidingModels) {
    voidingModels.forEach(function (model) {
        if (model.statement.object.objectType !== 'StatementRef') {
            /* istanbul ignore next - Should already be caught in validation. */
            throw new InvalidVoidType_1.default(model.statement.object.objectType);
        }
        var targetId = model.statement.object.id;
        if (lodash_1.includes(voiderIds, targetId)) {
            throw new VoidingError_1.default([targetId]);
        }
    });
};
var checkWithinRepo = function (config, voiderIds, voidedObjectIds, client) { return __awaiter(void 0, void 0, void 0, function () {
    var voidersByObjectIds, voidersByIds;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, config.repo.getVoidersByIds({
                    ids: voidedObjectIds,
                    client: client,
                })];
            case 1:
                voidersByObjectIds = _a.sent();
                if (voidersByObjectIds.length > 0) {
                    throw new VoidingError_1.default(voidersByObjectIds);
                }
                return [4 /*yield*/, config.repo.getVoidersByObjectIds({
                        ids: voiderIds,
                        client: client,
                    })];
            case 2:
                voidersByIds = _a.sent();
                if (voidersByIds.length > 0) {
                    throw new VoidingError_1.default(voidersByIds);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.default = (function (config, statements, client) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, voiderIds, voidedObjectIds, voidingModels;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                /* istanbul ignore if - Deprecated flag */
                if (!config.enableVoidingChecks) {
                    return [2 /*return*/, []];
                }
                _a = getVoiders(statements), voiderIds = _a.voiderIds, voidedObjectIds = _a.voidedObjectIds, voidingModels = _a.voidingModels;
                if (!(voiderIds.length > 0)) return [3 /*break*/, 2];
                checkWithinStatements(voiderIds, voidingModels);
                return [4 /*yield*/, checkWithinRepo(config, voiderIds, voidedObjectIds, client)];
            case 1:
                _b.sent();
                _b.label = 2;
            case 2: return [2 /*return*/, voidedObjectIds];
        }
    });
}); });
//# sourceMappingURL=checkVoiders.js.map