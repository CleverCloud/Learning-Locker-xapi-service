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
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var getLikertMetadata_1 = require("../../../../service/storeStatements/queriables/getMetadataFromStatement/getLikertMetadata");
var likert_fixture_1 = require("./fixtures/likert.fixture");
describe('Retrieve likert metadata from statement', function () {
    it('should return empty metadata from empty result', function () {
        var expectedEmptyMetadata = {};
        var actualEmptyMetadataFromEmptyResult = getLikertMetadata_1.getLikertMetadata(__assign(__assign({}, likert_fixture_1.likertStatement), {
            result: {},
        }));
        assert.deepStrictEqual(actualEmptyMetadataFromEmptyResult, expectedEmptyMetadata);
    });
    it('should retrieve metadata when likert is provided in the result', function () {
        var actualCorrectMetadata = getLikertMetadata_1.getLikertMetadata(likert_fixture_1.likertStatement);
        var expectedCorrectMetadata = {
            'https://learninglocker&46;net/likert-response': 'likert_3',
        };
        assert.deepStrictEqual(actualCorrectMetadata, expectedCorrectMetadata);
    });
});
//# sourceMappingURL=getLikertMetadata.test.js.map