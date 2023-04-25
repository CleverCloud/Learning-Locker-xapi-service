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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var convertToFullActivities = function (activities, client, contextActivities) {
    if (contextActivities === void 0) { contextActivities = {}; }
    return lodash_1.map(activities, function (activity) { return (__assign(__assign({ activityId: activity.id, lrsId: client.lrs_id, organisationId: client.organisation, name: {}, description: {}, extensions: {} }, activity.definition), (lodash_1.isEmpty(contextActivities) ? {} : { context: { contextActivities: contextActivities } }))); });
};
var getContextActivities = function (statement, client) {
    var _a;
    if (((_a = statement.context) === null || _a === void 0 ? void 0 : _a.contextActivities) !== undefined) {
        var contextActivities = statement.context.contextActivities;
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray([], (contextActivities.category === undefined
            ? []
            : convertToFullActivities(contextActivities.category, client))), (contextActivities.grouping === undefined
            ? []
            : convertToFullActivities(contextActivities.grouping, client))), (contextActivities.other === undefined
            ? []
            : convertToFullActivities(contextActivities.other, client))), (contextActivities.parent === undefined
            ? []
            : convertToFullActivities(contextActivities.parent, client)));
    }
    return [];
};
var getObjectActivity = function (statement, client) {
    var _a, _b;
    return statement.object.objectType === 'Activity'
        ? convertToFullActivities([statement.object], client, (_b = (_a = statement.context) === null || _a === void 0 ? void 0 : _a.contextActivities) !== null && _b !== void 0 ? _b : {})
        : [];
};
var getStatementActivities = function (statement, client) { return __spreadArray(__spreadArray([], getObjectActivity(statement, client)), getContextActivities(statement, client)); };
var getFullActivitiesFromStatements = function (statements, client) {
    return lodash_1.flatMap(statements, function (statement) { return __spreadArray(__spreadArray([], getStatementActivities(statement.statement, client)), (statement.statement.object.objectType === 'SubStatement'
        ? getStatementActivities(statement.statement.object, client)
        : [])); });
};
exports.default = (function (_a) {
    var config = _a.config, models = _a.models, client = _a.client;
    return __awaiter(void 0, void 0, void 0, function () {
        var clientFullActivities, definedActivities, groupedActivities, fullActivities;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    /* istanbul ignore if - Deprecated flag */
                    if (!config.enableActivityUpdates) {
                        return [2 /*return*/];
                    }
                    clientFullActivities = getFullActivitiesFromStatements(models, client);
                    definedActivities = clientFullActivities.filter(function (fullActivity) {
                        return !lodash_1.isEmpty(fullActivity.context) ||
                            !lodash_1.isEmpty(fullActivity.name) ||
                            !lodash_1.isEmpty(fullActivity.description) ||
                            !lodash_1.isEmpty(fullActivity.extensions) ||
                            fullActivity.moreInfo !== undefined ||
                            fullActivity.type !== undefined;
                    });
                    groupedActivities = lodash_1.groupBy(definedActivities, function (activity) { return activity.activityId; });
                    fullActivities = lodash_1.map(groupedActivities, function (matchingActivities, activityId) {
                        var names = matchingActivities.map(function (matchingActivity) { return matchingActivity.name; });
                        var descriptions = matchingActivities.map(function (matchingActivity) { return matchingActivity.description; });
                        var extensions = matchingActivities.map(function (matchingActivity) { return matchingActivity.extensions; });
                        var contextActivitiesForFullActivity = matchingActivities.map(function (matchingActivity) {
                            var _a;
                            return lodash_1.mapValues((_a = matchingActivity.context) === null || _a === void 0 ? void 0 : _a.contextActivities, function (matchingContextActivities) {
                                return matchingContextActivities !== undefined
                                    ? matchingContextActivities.map(function (matchingContextActivity) { return matchingContextActivity.id; })
                                    : matchingContextActivities;
                            });
                        });
                        var mergedContextActivities = contextActivitiesForFullActivity.reduce(function (acc, contextActivity) {
                            return lodash_1.mergeWith(acc, contextActivity, function (objValue, srcValue) {
                                return lodash_1.isArray(objValue) ? lodash_1.uniq(objValue.concat(srcValue)) : objValue;
                            });
                        });
                        var type = lodash_1.last(matchingActivities
                            .map(function (matchingActivity) { return matchingActivity.type; })
                            .filter(function (value) { return value !== undefined; }));
                        var moreInfo = lodash_1.last(matchingActivities
                            .map(function (matchingActivity) { return matchingActivity.moreInfo; })
                            .filter(function (value) { return value !== undefined; }));
                        return __assign(__assign(__assign({ activityId: activityId, lrsId: client.lrs_id, organisationId: client.organisation, name: Object.assign.apply(Object, __spreadArray([{}], names)), description: Object.assign.apply(Object, __spreadArray([{}], descriptions)), extensions: Object.assign.apply(Object, __spreadArray([{}], extensions)) }, (lodash_1.isEmpty(mergedContextActivities)
                            ? {}
                            : { context: { contextActivities: mergedContextActivities } })), (type !== undefined ? { type: type } : {})), (moreInfo !== undefined ? { moreInfo: moreInfo } : {}));
                    });
                    return [4 /*yield*/, config.repo.updateFullActivities({ fullActivities: fullActivities })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=updateFullActivities.js.map