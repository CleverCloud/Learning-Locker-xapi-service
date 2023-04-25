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
var mongodb_1 = require("mongodb");
var connectToMongoDb_1 = __importDefault(require("../../repo/utils/connectToMongoDb"));
var createClientModel_1 = __importDefault(require("../utils/createClientModel"));
var createStatement_1 = __importDefault(require("../utils/createStatement"));
var setup_1 = __importDefault(require("../utils/setup"));
var assertStatementsPageResultsAndOrder_1 = require("./utils/assertStatementsPageResultsAndOrder");
var TEST_ID_1 = '46bca0ac-426f-44ec-8b7d-04eb31dd1f22';
var TEST_ID_2 = '92718e8a-8eaf-4f20-b347-0a82cdedacf0';
var TEST_ID_3 = '4a39fc67-eab0-4b2e-a8fd-5785d7600160';
var TEST_ID_4 = 'cf3b2ddd-ae7d-4f48-b653-02a385f64067';
var TEST_ID_5 = '3418987e-fc23-497f-9e3c-cb00d2783255';
var TEST_CLIENT = createClientModel_1.default();
describe('get statements with different stored value using cursor', function () {
    var service = setup_1.default();
    var createStatementPartial = function (documentId, statementId, stored) { return ({
        _id: new mongodb_1.ObjectId(documentId),
        person: null,
        active: true,
        voided: false,
        client: new mongodb_1.ObjectId(TEST_CLIENT._id),
        lrs_id: new mongodb_1.ObjectId(TEST_CLIENT.lrs_id),
        organisation: new mongodb_1.ObjectId(TEST_CLIENT.organisation),
        stored: new Date(stored),
        statement: createStatement_1.default({
            id: statementId,
            stored: stored,
        }),
    }); };
    var statement1 = createStatementPartial('5bae31b42e18c3081e40db5a', TEST_ID_1, '2018-09-28T13:50:44.041Z');
    var statement2 = createStatementPartial('5bae3248e07a8007f0b27deb', TEST_ID_2, '2018-09-28T13:53:12.874Z');
    var statement3 = createStatementPartial('5bae32485e331207f3d8e005', TEST_ID_3, '2018-09-28T13:53:12.882Z');
    var statement4 = createStatementPartial('5bae324821a3b907e9b13992', TEST_ID_4, '2018-09-28T13:53:12.943Z');
    var statement5 = createStatementPartial('5bae32482e18c3081e40db63', TEST_ID_5, '2018-09-28T13:53:12.994Z');
    it('should return correct statements when ascending', function () { return __awaiter(void 0, void 0, void 0, function () {
        var db, page1Results, page2Results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectToMongoDb_1.default()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .collection('statements')
                            .insertMany([statement1, statement2, statement3, statement4, statement5])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertStatementsPageResultsAndOrder_1.assertStatementsPageResultsAndOrder({
                            service: service,
                            client: TEST_CLIENT,
                            ascending: true,
                            expectedPageStatementIds: [TEST_ID_1, TEST_ID_2],
                            pageNumber: 1,
                        })];
                case 3:
                    page1Results = _a.sent();
                    return [4 /*yield*/, assertStatementsPageResultsAndOrder_1.assertStatementsPageResultsAndOrder({
                            service: service,
                            client: TEST_CLIENT,
                            ascending: true,
                            cursor: page1Results.cursor,
                            expectedPageStatementIds: [TEST_ID_3, TEST_ID_4],
                            pageNumber: 2,
                        })];
                case 4:
                    page2Results = _a.sent();
                    return [4 /*yield*/, assertStatementsPageResultsAndOrder_1.assertStatementsPageResultsAndOrder({
                            service: service,
                            client: TEST_CLIENT,
                            ascending: true,
                            cursor: page2Results.cursor,
                            expectedPageStatementIds: [TEST_ID_5],
                            isNextPageCheckEnabled: false,
                            pageNumber: 3,
                        })];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return correct statements when descending cursor', function () { return __awaiter(void 0, void 0, void 0, function () {
        var db, page1Results, page2Results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectToMongoDb_1.default()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .collection('statements')
                            .insertMany([statement1, statement2, statement3, statement4, statement5])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertStatementsPageResultsAndOrder_1.assertStatementsPageResultsAndOrder({
                            service: service,
                            client: TEST_CLIENT,
                            expectedPageStatementIds: [TEST_ID_5, TEST_ID_4],
                            pageNumber: 1,
                        })];
                case 3:
                    page1Results = _a.sent();
                    return [4 /*yield*/, assertStatementsPageResultsAndOrder_1.assertStatementsPageResultsAndOrder({
                            service: service,
                            client: TEST_CLIENT,
                            cursor: page1Results.cursor,
                            expectedPageStatementIds: [TEST_ID_3, TEST_ID_2],
                            pageNumber: 2,
                        })];
                case 4:
                    page2Results = _a.sent();
                    return [4 /*yield*/, assertStatementsPageResultsAndOrder_1.assertStatementsPageResultsAndOrder({
                            service: service,
                            client: TEST_CLIENT,
                            cursor: page2Results.cursor,
                            expectedPageStatementIds: [TEST_ID_1],
                            isNextPageCheckEnabled: false,
                            pageNumber: 3,
                        })];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=cursorDifferentStoredValues.test.js.map