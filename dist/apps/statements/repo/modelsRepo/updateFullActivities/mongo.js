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
var lodash_1 = require("lodash");
var lodash_2 = require("lodash");
var mongodb_1 = require("mongodb");
var constants_1 = require("../utils/mongoModels/constants");
var matchesFullActivity_1 = __importDefault(require("../utils/mongoModels/matchesFullActivity"));
var replaceDotsInStatement_1 = require("../utils/mongoModels/replaceDotsInStatement");
var getPatchUpdate = function (patch, parentKeys) {
    return lodash_1.mapKeys(patch, function (_value, key) { return parentKeys.join('.') + "." + key; });
};
var createMongoAddToSet = function (fullActivity) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (__assign(__assign(__assign(__assign({}, (((_b = (_a = fullActivity.context) === null || _a === void 0 ? void 0 : _a.contextActivities) === null || _b === void 0 ? void 0 : _b.parent) !== undefined
        ? {
            'context.contextActivities.parent': {
                $each: fullActivity.context.contextActivities.parent,
            },
        }
        : {})), (((_d = (_c = fullActivity.context) === null || _c === void 0 ? void 0 : _c.contextActivities) === null || _d === void 0 ? void 0 : _d.category) !== undefined
        ? {
            'context.contextActivities.category': {
                $each: fullActivity.context.contextActivities.category,
            },
        }
        : {})), (((_f = (_e = fullActivity.context) === null || _e === void 0 ? void 0 : _e.contextActivities) === null || _f === void 0 ? void 0 : _f.other) !== undefined
        ? {
            'context.contextActivities.other': {
                $each: fullActivity.context.contextActivities.other,
            },
        }
        : {})), (((_h = (_g = fullActivity.context) === null || _g === void 0 ? void 0 : _g.contextActivities) === null || _h === void 0 ? void 0 : _h.grouping) !== undefined
        ? {
            'context.contextActivities.grouping': {
                $each: fullActivity.context.contextActivities.grouping,
            },
        }
        : {})));
};
var createMongoSet = function (fullActivity) {
    var extensions = replaceDotsInStatement_1.replaceDotsInExtensions(/\./g, '&46;')(fullActivity.extensions);
    return __assign(__assign(__assign(__assign(__assign({}, getPatchUpdate(fullActivity.name, ['name'])), getPatchUpdate(fullActivity.description, ['description'])), getPatchUpdate(extensions, ['extensions'])), (fullActivity.moreInfo !== undefined ? { moreInfo: fullActivity.moreInfo } : {})), (fullActivity.type !== undefined ? { type: fullActivity.type } : {}));
};
var createMongoQuery = function (fullActivity) {
    var activityId = fullActivity.activityId;
    var lrsId = new mongodb_1.ObjectId(fullActivity.lrsId);
    var organisationId = new mongodb_1.ObjectId(fullActivity.organisationId);
    return matchesFullActivity_1.default({ activityId: activityId, lrsId: lrsId, organisationId: organisationId });
};
var creatBatchQuery = function (batch) { return function (fullActivity) {
    var mongoQuery = createMongoQuery(fullActivity);
    var mongoSet = createMongoSet(fullActivity);
    // const mongoAddToSet = createMongoAddToSet(fullActivity);
    batch
        .find(mongoQuery)
        .upsert()
        .updateOne(__assign({}, (!lodash_2.isEmpty(mongoSet) ? { $set: mongoSet } : {})));
}; };
exports.default = (function (config) { return function (_a) {
    var fullActivities = _a.fullActivities;
    return __awaiter(void 0, void 0, void 0, function () {
        var collection, batch;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (fullActivities.length < 1) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, config.db()];
                case 1:
                    collection = (_b.sent()).collection(constants_1.FULL_ACTIVITIES_COLLECTION_NAME);
                    batch = collection.initializeUnorderedBulkOp();
                    fullActivities.forEach(creatBatchQuery(batch));
                    return [4 /*yield*/, batch.execute()];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}; });
//# sourceMappingURL=mongo.js.map