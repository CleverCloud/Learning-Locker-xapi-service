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
var http_status_codes_1 = require("http-status-codes");
var assertDeleted_1 = __importDefault(require("../../../utils/assertDeleted"));
var assertState_1 = __importDefault(require("../../../utils/assertState"));
var createJsonState_1 = __importDefault(require("../../../utils/createJsonState"));
var createTextState_1 = __importDefault(require("../../../utils/createTextState"));
var testValues_1 = require("../../../utils/testValues");
var setup_1 = __importDefault(require("../utils/setup"));
var deleteState_1 = __importDefault(require("./utils/deleteState"));
describe('expressPresenter.deleteState with existing state', function () {
    setup_1.default();
    it('should delete when deleting text', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default().expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete when deleting json', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createJsonState_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default().expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete when not using registration', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default({
                            registration: undefined,
                        }).expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not delete when deleting existing model without a registration with one', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default({ registration: undefined })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default().expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertState_1.default(testValues_1.TEST_CONTENT, { registration: undefined })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete when deleting with an mbox', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default({ agent: testValues_1.TEST_MBOX_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default({ agent: JSON.stringify(testValues_1.TEST_MBOX_AGENT) }).expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default({ agent: testValues_1.TEST_MBOX_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete when deleting with an mbox_sha1sum', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default({ agent: testValues_1.TEST_MBOXSHA1_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default({ agent: JSON.stringify(testValues_1.TEST_MBOXSHA1_AGENT) }).expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default({ agent: testValues_1.TEST_MBOXSHA1_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete when deleting with an openid', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default({ agent: testValues_1.TEST_OPENID_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default({ agent: JSON.stringify(testValues_1.TEST_OPENID_AGENT) }).expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default({ agent: testValues_1.TEST_OPENID_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete when deleting with an account', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextState_1.default({ agent: testValues_1.TEST_ACCOUNT_AGENT })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deleteState_1.default({ agent: JSON.stringify(testValues_1.TEST_ACCOUNT_AGENT) }).expect(http_status_codes_1.StatusCodes.NO_CONTENT)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, assertDeleted_1.default({ agent: testValues_1.TEST_ACCOUNT_AGENT })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=deleteExistingState.test.js.map