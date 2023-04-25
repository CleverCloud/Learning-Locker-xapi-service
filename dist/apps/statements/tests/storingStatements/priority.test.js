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
var lodash_1 = require("lodash");
var setupService_1 = __importDefault(require("jscommons/dist/tests/utils/setupService"));
var config_1 = __importDefault(require("../../../../config"));
var statementProcessingPriority_enum_1 = require("../../enums/statementProcessingPriority.enum");
var repo_1 = require("../../repo");
var constants_1 = require("../../repo/eventsRepo/utils/constants");
var getPrefixWithProcessingPriority_1 = require("../../repo/eventsRepo/utils/getPrefixWithProcessingPriority");
var factory_1 = __importDefault(require("../../repo/factory"));
var connectToRedis_1 = __importDefault(require("../../repo/utils/connectToRedis"));
var serviceFactory_1 = __importDefault(require("../../serviceFactory"));
var createClientModel_1 = require("../utils/createClientModel");
var createStatement_1 = __importDefault(require("../utils/createStatement"));
var storeStatementsInService_1 = __importDefault(require("../utils/storeStatementsInService"));
var checkRedisPayloadArray = function (_a) {
    var redisClient = _a.redisClient, priority = _a.priority, items = _a.items, _b = _a.isQueuePriorityEnabled, isQueuePriorityEnabled = _b === void 0 ? true : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var eventName, listLength, listData, expectedPayloadItems;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    eventName = getPrefixWithProcessingPriority_1.getPrefixWithProcessingPriority(config_1.default.redis.prefix, priority, isQueuePriorityEnabled) + ":" + constants_1.EVENT_NAME;
                    return [4 /*yield*/, redisClient.llen(eventName)];
                case 1:
                    listLength = _c.sent();
                    assert_1.default.strictEqual(listLength, items.length, "Expected payload list length is incorrect for \"" + priority + "\" priority");
                    return [4 /*yield*/, redisClient.lrange(eventName, 0, listLength)];
                case 2:
                    listData = _c.sent();
                    expectedPayloadItems = items.map(function (statementPayload) {
                        return JSON.stringify(statementPayload);
                    });
                    assert_1.default.deepStrictEqual(listData, expectedPayloadItems, "Expected payload items are incorrect for \"" + priority + "\" priority");
                    return [2 /*return*/];
            }
        });
    });
};
describe(__filename, function () {
    var modifiedConfig = __assign(__assign({}, repo_1.repoFactoryConfig), { events: __assign(__assign({}, repo_1.repoFactoryConfig.events), { redis: __assign(__assign({}, repo_1.repoFactoryConfig.events.redis), { isQueuePriorityEnabled: true }) }) });
    var repo = factory_1.default(modifiedConfig);
    var serviceFacade = serviceFactory_1.default({
        repo: repo,
    });
    var setup = setupService_1.default(serviceFacade);
    var service = setup();
    var storeStatements = storeStatementsInService_1.default(service);
    var TEST_ID_1 = '1c86d8e9-f325-404f-b3d9-24c451035583';
    var TEST_ID_2 = '1c86d8e9-f325-404f-b3d9-24c451035584';
    var TEST_ID_3 = '1c86d8e9-f325-404f-b3d9-24c451035585';
    it('should store statements with different priority', function () { return __awaiter(void 0, void 0, void 0, function () {
        var redisClient, lowStatementIds, mediumStatementIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectToRedis_1.default()()];
                case 1:
                    redisClient = _a.sent();
                    return [4 /*yield*/, storeStatements([createStatement_1.default({ id: TEST_ID_1 }), createStatement_1.default({ id: TEST_ID_2 })], undefined, undefined, statementProcessingPriority_enum_1.StatementProcessingPriority.LOW, [])];
                case 2:
                    lowStatementIds = _a.sent();
                    assert_1.default.strictEqual(lodash_1.isArray(lowStatementIds), true);
                    assert_1.default.deepStrictEqual(lowStatementIds, [TEST_ID_1, TEST_ID_2]);
                    return [4 /*yield*/, storeStatements([createStatement_1.default({ id: TEST_ID_3 })], undefined, undefined, statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM, [])];
                case 3:
                    mediumStatementIds = _a.sent();
                    assert_1.default.strictEqual(lodash_1.isArray(mediumStatementIds), true);
                    assert_1.default.deepStrictEqual(mediumStatementIds, [TEST_ID_3]);
                    return [4 /*yield*/, checkRedisPayloadArray({
                            redisClient: redisClient,
                            priority: statementProcessingPriority_enum_1.StatementProcessingPriority.LOW,
                            items: [
                                { statementId: TEST_ID_1, organisationId: createClientModel_1.TEST_ORGANISATION_ID },
                                { statementId: TEST_ID_2, organisationId: createClientModel_1.TEST_ORGANISATION_ID },
                            ],
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, checkRedisPayloadArray({
                            redisClient: redisClient,
                            priority: statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM,
                            items: [{ statementId: TEST_ID_3, organisationId: createClientModel_1.TEST_ORGANISATION_ID }],
                        })];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=priority.test.js.map