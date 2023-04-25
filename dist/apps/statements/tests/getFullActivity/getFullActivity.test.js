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
var assert_1 = __importDefault(require("assert"));
var createStatement_1 = __importDefault(require("../utils/createStatement"));
var setup_1 = __importDefault(require("../utils/setup"));
var testValues_1 = require("./utils/testValues");
describe('getFullActivity', function () {
    var service = setup_1.default();
    it('should return the activity ID when getting a non-existing activity', function () { return __awaiter(void 0, void 0, void 0, function () {
        var fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.getFullActivity({
                        activityId: testValues_1.TEST_ACTIVITY_ID,
                        client: testValues_1.TEST_CLIENT,
                    })];
                case 1:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_BASE_ACTIVITY);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should also return the definition when getting a existing activity', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    statement = createStatement_1.default({ object: testValues_1.TEST_ACTIVITY });
                    return [4 /*yield*/, service.storeStatements({
                            models: [statement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_ACTIVITY);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should merge the definitions when storing two definitions in one batch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var initialStatement, mergeStatement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialStatement = createStatement_1.default({ object: testValues_1.TEST_ACTIVITY });
                    mergeStatement = createStatement_1.default({ object: testValues_1.TEST_MERGE_ACTIVITY });
                    return [4 /*yield*/, service.storeStatements({
                            models: [initialStatement, mergeStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_MERGED_ACTIVITY);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should merge the definitions when storing two definitions in two batches', function () { return __awaiter(void 0, void 0, void 0, function () {
        var initialStatement, mergeStatement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialStatement = createStatement_1.default({ object: testValues_1.TEST_ACTIVITY });
                    mergeStatement = createStatement_1.default({ object: testValues_1.TEST_MERGE_ACTIVITY });
                    return [4 /*yield*/, service.storeStatements({
                            models: [initialStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.storeStatements({
                            models: [mergeStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 3:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_MERGED_ACTIVITY);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should merge with existing activities when storing a different ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var existingActivityStatement, initialStatement, mergeStatement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    existingActivityStatement = createStatement_1.default({ object: testValues_1.TEST_IMMUTABLE_ACTIVITY });
                    initialStatement = createStatement_1.default({ object: testValues_1.TEST_ACTIVITY });
                    mergeStatement = createStatement_1.default({ object: testValues_1.TEST_MERGE_ACTIVITY });
                    return [4 /*yield*/, service.storeStatements({
                            models: [initialStatement, existingActivityStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.storeStatements({
                            models: [mergeStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 3:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_MERGED_ACTIVITY);
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip('should return the definition and contextActivities when getting a existing activity', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    statement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.TEST_CONTEXT_ACTIVITIES));
                    return [4 /*yield*/, service.storeStatements({
                            models: [statement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_ACTIVITY_WITH_CONTEXT_ACTIVITIES);
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip('should return the contextActivities when getting a existing activity', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    statement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.TEST_CONTEXT_ACTIVITIES));
                    return [4 /*yield*/, service.storeStatements({
                            models: [statement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_ACTIVITY_WITH_CONTEXT_ACTIVITIES);
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip('should merge the contextActivities when storing two contextActivities in one batch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var initialStatement, mergeStatement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialStatement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.TEST_CONTEXT_ACTIVITIES));
                    mergeStatement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.TEST_CONTEXT_ACTIVITIES));
                    return [4 /*yield*/, service.storeStatements({
                            models: [initialStatement, mergeStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_ACTIVITY_WITH_CONTEXT_ACTIVITIES);
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip('should merge two different contextActivities when storing contextActivities in one batch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var initialStatement, mergeStatement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialStatement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.TEST_CONTEXT_ACTIVITIES));
                    mergeStatement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.ANOTHER_TEST_CONTEXT_ACTIVITIES));
                    return [4 /*yield*/, service.storeStatements({
                            models: [initialStatement, mergeStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_ACTIVITY_WITH_MERGED_CONTEXT_ACTIVITIES);
                    return [2 /*return*/];
            }
        });
    }); });
    it.skip('should return last contextActivities when storing contextActivities in two batches', function () { return __awaiter(void 0, void 0, void 0, function () {
        var initialStatement, mergeStatement, fullActivity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialStatement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.TEST_CONTEXT_ACTIVITIES));
                    mergeStatement = createStatement_1.default(__assign({ object: testValues_1.TEST_ACTIVITY }, testValues_1.ANOTHER_TEST_CONTEXT_ACTIVITIES));
                    return [4 /*yield*/, service.storeStatements({
                            models: [initialStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, service.storeStatements({
                            models: [mergeStatement],
                            attachments: [],
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, service.getFullActivity({
                            activityId: testValues_1.TEST_ACTIVITY_ID,
                            client: testValues_1.TEST_CLIENT,
                        })];
                case 3:
                    fullActivity = _a.sent();
                    assert_1.default.deepStrictEqual(fullActivity, testValues_1.TEST_ACTIVITY_WITH_MERGED_CONTEXT_ACTIVITIES);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=getFullActivity.test.js.map