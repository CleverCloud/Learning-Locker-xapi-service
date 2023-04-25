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
var assert_1 = __importDefault(require("assert"));
var lodash_1 = require("lodash");
var createClientModel_1 = __importDefault(require("../utils/createClientModel"));
var createStatement_1 = __importDefault(require("../utils/createStatement"));
var setup_1 = __importDefault(require("../utils/setup"));
var storeStatementsInService_1 = __importDefault(require("../utils/storeStatementsInService"));
var TEST_ID_1 = '1c86d8e9-f325-404f-b3d9-24c451035582';
var TEST_ID_2 = '1c86d8e9-f325-404f-b3d9-24c451035583';
var TEST_ID_3 = '1c86d8e9-f325-404f-b3d9-24c451035584';
var TEST_STATEMENT_1 = createStatement_1.default({ id: TEST_ID_1 });
var TEST_STATEMENT_2 = createStatement_1.default({ id: TEST_ID_2 });
var TEST_STATEMENT_3 = createStatement_1.default({ id: TEST_ID_3 });
var TEST_CLIENT = createClientModel_1.default();
describe('get statements by slicing', function () {
    var service = setup_1.default();
    var storeStatements = storeStatementsInService_1.default(service);
    var getStatements = function (opts) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.getStatements(opts)];
                case 1: return [2 /*return*/, (_a.sent()).statements];
            }
        });
    }); };
    var sliceStatements = function (opts) { return __awaiter(void 0, void 0, void 0, function () {
        var slicedStatements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, storeStatements([TEST_STATEMENT_1, TEST_STATEMENT_2, TEST_STATEMENT_3])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getStatements(opts)];
                case 2:
                    slicedStatements = _a.sent();
                    assert_1.default(lodash_1.isArray(slicedStatements));
                    return [2 /*return*/, slicedStatements];
            }
        });
    }); };
    it('should return statements when they are inside the limit', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sliceStatements({
                        limit: 1,
                        client: TEST_CLIENT,
                    })];
                case 1:
                    statements = _a.sent();
                    assert_1.default.strictEqual(statements.length, 1);
                    assert_1.default.strictEqual(statements[0].id, TEST_ID_3);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return statements when they are inside the default limit', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sliceStatements({
                        limit: 0,
                        client: TEST_CLIENT,
                    })];
                case 1:
                    statements = _a.sent();
                    assert_1.default.strictEqual(statements.length, 3); // eslint-disable-line no-magic-numbers
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return statements when they are not skipped', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sliceStatements({
                        skip: 2,
                        client: TEST_CLIENT,
                    })];
                case 1:
                    statements = _a.sent();
                    assert_1.default.strictEqual(statements.length, 1);
                    assert_1.default.strictEqual(statements[0].id, TEST_ID_1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return statements when they are not sliced', function () { return __awaiter(void 0, void 0, void 0, function () {
        var statements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sliceStatements({
                        skip: 1,
                        limit: 1,
                        client: TEST_CLIENT,
                    })];
                case 1:
                    statements = _a.sent();
                    assert_1.default.strictEqual(statements.length, 1);
                    assert_1.default.strictEqual(statements[0].id, TEST_ID_2);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=slice.test.js.map