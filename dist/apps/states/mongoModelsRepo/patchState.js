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
var lodash_1 = require("lodash");
var mongodb_1 = require("mongodb");
var NonJsonObject_1 = __importDefault(require("../errors/NonJsonObject"));
var constants_1 = require("../utils/constants");
var constants_2 = require("./utils/constants");
var getStateFilter_1 = __importDefault(require("./utils/getStateFilter"));
exports.default = (function (config) {
    return function (opts) { return __awaiter(void 0, void 0, void 0, function () {
        var collection, jsonObjectFilter, stateFilter, contentPatch, update, updateOpResult, updatedDocuments, createOpResult, wasCreated;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, config.db()];
                case 1:
                    collection = (_c.sent()).collection(constants_2.COLLECTION_NAME);
                    jsonObjectFilter = {
                        contentType: constants_1.jsonContentType,
                        isObjectContent: true,
                    };
                    stateFilter = getStateFilter_1.default(opts);
                    contentPatch = lodash_1.mapKeys(opts.content, function (_value, key) {
                        return "content." + key;
                    });
                    update = {
                        // Overwrites the content and contentType.
                        contentType: constants_1.jsonContentType,
                        etag: opts.etag,
                        extension: 'json',
                        isObjectContent: true,
                        // Updates updatedAt time.
                        updatedAt: new Date(),
                    };
                    return [4 /*yield*/, collection.findOneAndUpdate(__assign(__assign({}, jsonObjectFilter), stateFilter), {
                            $set: __assign(__assign({}, contentPatch), update),
                        }, {
                            returnDocument: mongodb_1.ReturnDocument.AFTER,
                            upsert: false, // Does not create the state when it doesn't exist.
                        })];
                case 2:
                    updateOpResult = _c.sent();
                    updatedDocuments = (_a = updateOpResult.lastErrorObject) === null || _a === void 0 ? void 0 : _a.n;
                    if (updatedDocuments === 1) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, collection.findOneAndUpdate(stateFilter, {
                            $setOnInsert: __assign({ content: opts.content }, update),
                        }, {
                            returnDocument: mongodb_1.ReturnDocument.AFTER,
                            upsert: true, // Creates the state when it's not found.
                        })];
                case 3:
                    createOpResult = _c.sent();
                    wasCreated = ((_b = createOpResult.lastErrorObject) === null || _b === void 0 ? void 0 : _b.upserted) !== undefined;
                    // When the state is found at the create stage but not the update stage,
                    // Then the exsting state has the wrong content
                    if (!wasCreated) {
                        throw new NonJsonObject_1.default();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
});
//# sourceMappingURL=patchState.js.map