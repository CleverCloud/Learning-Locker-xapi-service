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
var createStatement_1 = __importDefault(require("../../../tests/utils/createStatement"));
var constants_2 = require("../../../utils/constants");
var setup_1 = __importDefault(require("../utils/setup"));
describe('getStatements', function () {
    var supertest = setup_1.default().supertest;
    var TEST_ID_1 = 'f2ec2bf0-d6bd-4013-a652-846315b3e240';
    var TEST_ID_2 = '60ccc696-4502-4a8b-896f-6c3dc1eb9639';
    it('should successfully return statement without readonly parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest
                        .post(constants_2.statementsRoute)
                        .set('Content-Type', constants_2.jsonContentType)
                        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                        .send([createStatement_1.default({ id: TEST_ID_1 })])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, supertest
                            .get(constants_2.statementsRoute)
                            .set('Content-Type', constants_2.jsonContentType)
                            .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                            .query({
                            statementId: TEST_ID_1,
                        })
                            .expect(function (response) {
                            assert.deepStrictEqual(response.status, http_status_codes_1.StatusCodes.OK);
                            assert.deepStrictEqual(response.body.id, TEST_ID_1);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should successfully return statement with readonly parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest
                        .post(constants_2.statementsRoute)
                        .set('Content-Type', constants_2.jsonContentType)
                        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                        .send([createStatement_1.default({ id: TEST_ID_1 })])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, supertest
                            .get(constants_2.statementsRoute)
                            .set('Content-Type', constants_2.jsonContentType)
                            .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                            .query({
                            statementId: TEST_ID_1,
                            readonly: 1,
                        })
                            .expect(function (response) {
                            assert.deepStrictEqual(response.status, http_status_codes_1.StatusCodes.OK);
                            assert.deepStrictEqual(response.body.id, TEST_ID_1);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should successfully return multiple statements with readonly parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest
                        .post(constants_2.statementsRoute)
                        .set('Content-Type', constants_2.jsonContentType)
                        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                        .send([createStatement_1.default({ id: TEST_ID_1 }), createStatement_1.default({ id: TEST_ID_2 })])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, supertest
                            .get(constants_2.statementsRoute)
                            .set('Content-Type', constants_2.jsonContentType)
                            .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                            .query({
                            readonly: 1,
                        })
                            .expect(function (response) {
                            assert.deepStrictEqual(response.status, http_status_codes_1.StatusCodes.OK);
                            var actualIds = response.body.statements.map(function (statement) { return statement.id; });
                            assert.deepStrictEqual(actualIds.includes(TEST_ID_1, TEST_ID_2), true);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should successfully return multiple statements without readonly parameter', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supertest
                        .post(constants_2.statementsRoute)
                        .set('Content-Type', constants_2.jsonContentType)
                        .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                        .send([createStatement_1.default({ id: TEST_ID_1 }), createStatement_1.default({ id: TEST_ID_2 })])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, supertest
                            .get(constants_2.statementsRoute)
                            .set('Content-Type', constants_2.jsonContentType)
                            .set('X-Experience-API-Version', constants_1.xapiHeaderVersion)
                            .expect(function (response) {
                            assert.deepStrictEqual(response.status, http_status_codes_1.StatusCodes.OK);
                            var actualIds = response.body.statements.map(function (statement) { return statement.id; });
                            assert.deepStrictEqual(actualIds.includes(TEST_ID_1, TEST_ID_2), true);
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=readonly.test.js.map