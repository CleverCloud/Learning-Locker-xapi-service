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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var jwt = __importStar(require("jsonwebtoken"));
var lodash_1 = require("lodash");
var object_hash_1 = require("object-hash");
var stream_to_string_1 = __importDefault(require("stream-to-string"));
var InvalidJws_1 = __importDefault(require("../../../errors/InvalidJws"));
var InvalidSignatureAlgorithm_1 = __importDefault(require("../../../errors/InvalidSignatureAlgorithm"));
var InvalidSignedStatement_1 = __importDefault(require("../../../errors/InvalidSignedStatement"));
var InvalidX5CChain_1 = __importDefault(require("../../../errors/InvalidX5CChain"));
var InvalidX5CType_1 = __importDefault(require("../../../errors/InvalidX5CType"));
var JsonSyntaxError_1 = __importDefault(require("../../../errors/JsonSyntaxError"));
var decodeToken = function (token, path) {
    try {
        return jwt.decode(token, { json: true, complete: true });
    }
    catch (_a) {
        throw new JsonSyntaxError_1.default(path);
    }
};
exports.default = (function (statement, uniqueHashAttachmentDictionary) { return __awaiter(void 0, void 0, void 0, function () {
    var attachments, statementWithoutAttachments, statementAttachments, signaturedAttachments, nonSignaturedAttachments, originalStatement, originalStatementHash, attachmentChecks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                attachments = statement.attachments, statementWithoutAttachments = __rest(statement, ["attachments"]);
                statementAttachments = attachments !== undefined ? attachments : [];
                signaturedAttachments = statementAttachments.filter(function (attachment) {
                    return attachment.usageType === 'http://adlnet.gov/expapi/attachments/signature';
                });
                if (signaturedAttachments.length === 0) {
                    return [2 /*return*/];
                }
                nonSignaturedAttachments = statementAttachments.filter(function (attachment) {
                    return attachment.usageType !== 'http://adlnet.gov/expapi/attachments/signature';
                });
                originalStatement = __assign(__assign({}, statementWithoutAttachments), (nonSignaturedAttachments.length === 0 ? {} : { attachments: nonSignaturedAttachments }));
                originalStatementHash = object_hash_1.sha1(originalStatement);
                attachmentChecks = signaturedAttachments.map(function (signaturedAttachment) { return __awaiter(void 0, void 0, void 0, function () {
                    var hash, attachment, stream, token, decodedToken, decodedHeaders, decodedX5C, publicKeyDER, splitDER, publicKey, decodedStatement, decodedStatementHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                hash = signaturedAttachment.sha2;
                                attachment = uniqueHashAttachmentDictionary[hash];
                                stream = attachment.stream.pipe(new stream_1.PassThrough());
                                return [4 /*yield*/, stream_to_string_1.default(stream)];
                            case 1:
                                token = _a.sent();
                                decodedToken = decodeToken(token, ['statement', originalStatement.id, 'attachments']);
                                decodedHeaders = decodedToken.header;
                                if (!lodash_1.includes(['RS256', 'RS384', 'RS512'], decodedHeaders.alg)) {
                                    throw new InvalidSignatureAlgorithm_1.default(originalStatement.id, decodedHeaders.alg);
                                }
                                decodedX5C = decodedHeaders.x5c;
                                if (decodedX5C !== undefined) {
                                    if (!lodash_1.isArray(decodedX5C)) {
                                        throw new InvalidX5CType_1.default(originalStatement.id);
                                    }
                                    if (decodedX5C.length === 0) {
                                        throw new InvalidX5CChain_1.default(originalStatement.id);
                                    }
                                    publicKeyDER = decodedX5C[0];
                                    splitDER = publicKeyDER.replace(/(.{64})/g, '$1\n');
                                    publicKey = "-----BEGIN CERTIFICATE-----\n" + splitDER + "\n-----END CERTIFICATE-----";
                                    try {
                                        jwt.verify(token, publicKey);
                                    }
                                    catch (_b) {
                                        throw new InvalidJws_1.default(originalStatement.id);
                                    }
                                }
                                decodedStatement = decodedToken.payload;
                                decodedStatementHash = object_hash_1.sha1(decodedStatement);
                                if (originalStatementHash !== decodedStatementHash) {
                                    throw new InvalidSignedStatement_1.default(originalStatement, decodedStatement);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [4 /*yield*/, Promise.all(attachmentChecks)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=checkSignedStatements.js.map