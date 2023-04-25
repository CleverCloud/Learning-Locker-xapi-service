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
var getBooleanMetadata_1 = require("../../../../service/storeStatements/queriables/getMetadataFromStatement/getBooleanMetadata");
var boolean_fixture_1 = require("./fixtures/boolean.fixture");
describe('Retrieve sequencing metadata from statement', function () {
    it('should return empty metadata from empty result', function () {
        var expectedEmptyMetadata = {};
        var actualEmptyMetadataFromEmptyResult = getBooleanMetadata_1.getBooleanMetadata(__assign(__assign({}, boolean_fixture_1.booleanInteractionActivityStatement), {
            result: {},
        }));
        assert.deepStrictEqual(actualEmptyMetadataFromEmptyResult, expectedEmptyMetadata);
    });
    it('should return false metadata when `false` provided in the result', function () {
        var actualCorrectMetadata = getBooleanMetadata_1.getBooleanMetadata(__assign(__assign({}, boolean_fixture_1.booleanInteractionActivityStatement), {
            result: {
                response: 'false',
            },
        }));
        var expectedCorrectMetadata = {
            'https://learninglocker&46;net/true-false-response': 'false',
        };
        assert.deepStrictEqual(actualCorrectMetadata, expectedCorrectMetadata);
    });
    it('should return true metadata when `true` provided in the result', function () {
        var actualCorrectMetadata = getBooleanMetadata_1.getBooleanMetadata(boolean_fixture_1.booleanInteractionActivityStatement);
        var expectedCorrectMetadata = {
            'https://learninglocker&46;net/true-false-response': 'true',
        };
        assert.deepStrictEqual(actualCorrectMetadata, expectedCorrectMetadata);
    });
});
//# sourceMappingURL=getBooleanMetadata.test.js.map