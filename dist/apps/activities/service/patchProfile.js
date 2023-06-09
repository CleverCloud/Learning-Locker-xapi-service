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
var lodash_1 = require("lodash");
var stream_to_string_1 = __importDefault(require("stream-to-string"));
var NonJsonObject_1 = __importDefault(require("../errors/NonJsonObject"));
var constants_1 = require("../utils/constants");
var getFileExtension_1 = __importDefault(require("../utils/getFileExtension"));
var parseJson_1 = __importDefault(require("../utils/parseJson"));
var checkProfileWriteScopes_1 = __importDefault(require("./utils/checkProfileWriteScopes"));
var createEtag_1 = __importDefault(require("./utils/createEtag"));
var validateActivityId_1 = __importDefault(require("./utils/validateActivityId"));
exports.default = (function (config) {
    return function (opts) { return __awaiter(void 0, void 0, void 0, function () {
        var client, content, _a, extension, etag;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    client = opts.client;
                    checkProfileWriteScopes_1.default(client.scopes);
                    validateActivityId_1.default(opts.activityId);
                    if (opts.contentType !== constants_1.jsonContentType) {
                        throw new NonJsonObject_1.default();
                    }
                    _a = parseJson_1.default;
                    return [4 /*yield*/, stream_to_string_1.default(opts.content)];
                case 1:
                    content = _a.apply(void 0, [_b.sent(), ['content']]);
                    if (!lodash_1.isPlainObject(content)) {
                        throw new NonJsonObject_1.default();
                    }
                    extension = getFileExtension_1.default(opts.contentType);
                    etag = createEtag_1.default();
                    return [4 /*yield*/, config.repo.patchProfile({
                            activityId: opts.activityId,
                            client: client,
                            content: content,
                            contentType: opts.contentType,
                            etag: etag,
                            extension: extension,
                            ifMatch: opts.ifMatch,
                            ifNoneMatch: opts.ifNoneMatch,
                            profileId: opts.profileId,
                        })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
});
//# sourceMappingURL=patchProfile.js.map