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
var assertError_1 = __importDefault(require("jscommons/dist/tests/utils/assertError"));
var Conflict_1 = __importDefault(require("../../../errors/Conflict"));
var IfMatch_1 = __importDefault(require("../../../errors/IfMatch"));
var IfNoneMatch_1 = __importDefault(require("../../../errors/IfNoneMatch"));
var MaxEtags_1 = __importDefault(require("../../../errors/MaxEtags"));
var MissingEtags_1 = __importDefault(require("../../../errors/MissingEtags"));
var createTextProfile_1 = __importDefault(require("../../../utils/createTextProfile"));
var getTestProfile_1 = __importDefault(require("../../../utils/getTestProfile"));
var setup_1 = __importDefault(require("../utils/setup"));
var overwriteProfile_1 = __importDefault(require("./utils/overwriteProfile"));
describe('overwriteProfile with etags', function () {
    setup_1.default();
    it('should allow overwrites when using a correct etag', function () { return __awaiter(void 0, void 0, void 0, function () {
        var getProfileResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getTestProfile_1.default()];
                case 2:
                    getProfileResult = _a.sent();
                    return [4 /*yield*/, overwriteProfile_1.default({ ifMatch: getProfileResult.etag, ifNoneMatch: undefined })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw precondition error when using an incorrect ifMatch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    promise = overwriteProfile_1.default({ ifMatch: 'incorrect_etag', ifNoneMatch: undefined });
                    return [4 /*yield*/, assertError_1.default(IfMatch_1.default, promise)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw precondition error when using an incorrect ifNoneMatch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    promise = overwriteProfile_1.default({ ifNoneMatch: '*' });
                    return [4 /*yield*/, assertError_1.default(IfNoneMatch_1.default, promise)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw conflict error when not using ifMatch or ifNoneMatch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    promise = overwriteProfile_1.default({ ifNoneMatch: undefined });
                    return [4 /*yield*/, assertError_1.default(Conflict_1.default, promise)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw max etag error when using ifMatch and ifNoneMatch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createTextProfile_1.default()];
                case 1:
                    _a.sent();
                    promise = overwriteProfile_1.default({ ifMatch: 'incorrect_etag', ifNoneMatch: '*' });
                    return [4 /*yield*/, assertError_1.default(MaxEtags_1.default, promise)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw missing etags error when not using ifMatch and ifNoneMatch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = overwriteProfile_1.default({ ifNoneMatch: undefined });
                    return [4 /*yield*/, assertError_1.default(MissingEtags_1.default, promise)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=overwriteWithEtags.test.js.map