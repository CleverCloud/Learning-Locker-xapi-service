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
var assertError_1 = __importDefault(require("jscommons/dist/tests/utils/assertError"));
var stream_to_string_1 = __importDefault(require("stream-to-string"));
var ExtraAttachments_1 = __importDefault(require("../../errors/ExtraAttachments"));
var MissingAttachments_1 = __importDefault(require("../../errors/MissingAttachments"));
var createAttachment_1 = __importDefault(require("../utils/createAttachment"));
var createAttachmentModel_1 = __importDefault(require("../utils/createAttachmentModel"));
var createAttachmentStatement_1 = __importDefault(require("../utils/createAttachmentStatement"));
var createAttachmentSubStatement_1 = __importDefault(require("../utils/createAttachmentSubStatement"));
var createClientModel_1 = __importDefault(require("../utils/createClientModel"));
var setup_1 = __importDefault(require("../utils/setup"));
var storeStatementsInService_1 = __importDefault(require("../utils/storeStatementsInService"));
var TEST_ID = '1c86d8e9-f325-404f-b3d9-24c451035582';
var TEST_CONTENT_A = 'A';
var TEST_CONTENT_B = 'B';
var TEST_ATTACHMENT_MODEL_A = createAttachmentModel_1.default(TEST_CONTENT_A);
var TEST_ATTACHMENT_MODEL_B = createAttachmentModel_1.default(TEST_CONTENT_B);
var TEST_ATTACHMENT_A = createAttachment_1.default(TEST_CONTENT_A);
var TEST_ATTACHMENT_B = createAttachment_1.default(TEST_CONTENT_B);
describe('store statements with attachments', function () {
    var service = setup_1.default();
    var storeStatements = storeStatementsInService_1.default(service);
    it('should store the attachment when it is valid', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement, statementId, result, _a, _b;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    testStatement = createAttachmentStatement_1.default([TEST_ATTACHMENT_A]);
                    return [4 /*yield*/, storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A])];
                case 1:
                    statementId = (_e.sent())[0];
                    return [4 /*yield*/, service.getStatement({
                            id: statementId,
                            attachments: true,
                            voided: false,
                            client: createClientModel_1.default(),
                        })];
                case 2:
                    result = _e.sent();
                    assert_1.default.strictEqual(result.attachments.length, 1);
                    assert_1.default.strictEqual((_c = result.attachments[0].contentLength) === null || _c === void 0 ? void 0 : _c.toString(), (_d = TEST_ATTACHMENT_MODEL_A.contentLength) === null || _d === void 0 ? void 0 : _d.toString());
                    assert_1.default.strictEqual(result.attachments[0].contentType, TEST_ATTACHMENT_MODEL_A.contentType);
                    assert_1.default.strictEqual(result.attachments[0].hash, TEST_ATTACHMENT_MODEL_A.hash);
                    _b = (_a = assert_1.default).strictEqual;
                    return [4 /*yield*/, stream_to_string_1.default(result.attachments[0].stream)];
                case 3:
                    _b.apply(_a, [_e.sent(), TEST_CONTENT_A]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error when there is a missing SHA from the statements', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testStatement = createAttachmentStatement_1.default([TEST_ATTACHMENT_A, TEST_ATTACHMENT_B]);
                    promise = storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A]);
                    return [4 /*yield*/, assertError_1.default(MissingAttachments_1.default, promise)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error when there is a missing SHA from a statement', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testStatement = createAttachmentStatement_1.default([TEST_ATTACHMENT_A, TEST_ATTACHMENT_B]);
                    promise = storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A]);
                    return [4 /*yield*/, assertError_1.default(MissingAttachments_1.default, promise)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error when there is an extra SHA', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testStatement = createAttachmentStatement_1.default([TEST_ATTACHMENT_A]);
                    promise = storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A, TEST_ATTACHMENT_MODEL_B]);
                    return [4 /*yield*/, assertError_1.default(ExtraAttachments_1.default, promise)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error when there is a missing SHA from the sub statements', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testStatement = createAttachmentSubStatement_1.default([TEST_ATTACHMENT_A, TEST_ATTACHMENT_B]);
                    promise = storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A]);
                    return [4 /*yield*/, assertError_1.default(MissingAttachments_1.default, promise)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw an error when there is a missing SHA from a sub statement', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testStatement = createAttachmentSubStatement_1.default([TEST_ATTACHMENT_A, TEST_ATTACHMENT_B]);
                    promise = storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A]);
                    return [4 /*yield*/, assertError_1.default(MissingAttachments_1.default, promise)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not error when reinserting a statement with an ID and attachments', function () { return __awaiter(void 0, void 0, void 0, function () {
        var testStatement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testStatement = createAttachmentStatement_1.default([TEST_ATTACHMENT_A], TEST_ID);
                    return [4 /*yield*/, storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, storeStatements([testStatement], [TEST_ATTACHMENT_MODEL_A])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=attachments.test.js.map