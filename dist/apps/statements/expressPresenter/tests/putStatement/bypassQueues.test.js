"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var assert = __importStar(require("assert"));
var http_status_codes_1 = require("http-status-codes");
var constants_1 = require("../../../../activities/utils/constants");
var createClientModel_1 = __importDefault(require("../../../tests/utils/createClientModel"));
var createStatement_1 = __importDefault(require("../../../tests/utils/createStatement"));
var constants_2 = require("../../../utils/constants");
var setup_1 = __importDefault(require("../../tests/utils/setup"));
var repo_1 = __importDefault(require("../../../repo"));
describe('putStatement', function () {
    var supertest = setup_1.default().supertest;
    it('should throw error for incorrect bypassQueues query param', function () { return __awaiter(void 0, void 0, void 0, function () {
        var TEST_ID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    TEST_ID = '1c86d8e9-f325-404f-b3d9-24c451035586';
                    return [4 /*yield*/, supertest
                            .put(constants_2.statementsRoute)
                            .set('Content-Type', constants_2.jsonContentType)
                            .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                            .query({
                            bypassQueues: 'abc',
                            statementId: TEST_ID,
                        })
                            .send(createStatement_1.default())
                            .expect(function (response) {
                            assert.strictEqual(response.status, http_status_codes_1.StatusCodes.BAD_REQUEST);
                            assert.deepStrictEqual(response.body.warnings, [
                                "Problem in 'query.bypassQueues'. Received '\"abc\"'",
                            ]);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should insert statement with proper bypassQueues query param', function () { return __awaiter(void 0, void 0, void 0, function () {
        var TEST_ID, TEST_CLIENT, expectedCompletedQueues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    TEST_ID = '1c86d8e9-f325-404f-b3d9-24c451035587';
                    TEST_CLIENT = createClientModel_1.default();
                    expectedCompletedQueues = ['STATEMENT_QUEUE_1', 'STATEMENT_QUEUE_2'];
                    return [4 /*yield*/, supertest
                            .put(constants_2.statementsRoute)
                            .set('Content-Type', constants_2.jsonContentType)
                            .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                            .query({
                            bypassQueues: expectedCompletedQueues.join(','),
                            statementId: TEST_ID,
                        })
                            .send(createStatement_1.default())
                            .expect(function (response) { return __awaiter(void 0, void 0, void 0, function () {
                            var fullStatement;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        assert.strictEqual(response.status, http_status_codes_1.StatusCodes.NO_CONTENT);
                                        return [4 /*yield*/, repo_1.default.getStatement({ id: TEST_ID, client: TEST_CLIENT })];
                                    case 1:
                                        fullStatement = _a.sent();
                                        assert.deepStrictEqual(fullStatement.completedQueues, expectedCompletedQueues);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=bypassQueues.test.js.map