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
var getMatchingQuestionsMetadata_1 = require("../../../../service/storeStatements/queriables/getMetadataFromStatement/getMatchingQuestionsMetadata");
var matching_interaction_fixture_1 = require("./fixtures/matching-interaction.fixture");
describe('Retrieve matching questions metadata from statement', function () {
    it('should return matching questions metadata from statement', function () {
        var expectedEmptyMetadata = {};
        var actualEmptyMetadataFromEmptyResult = getMatchingQuestionsMetadata_1.getMatchingQuestionsMetadata(__assign(__assign({}, matching_interaction_fixture_1.singleMatchingQuestion), {
            result: {},
        }));
        assert.deepStrictEqual(actualEmptyMetadataFromEmptyResult, expectedEmptyMetadata);
    });
    it('should return metadata from single matching question', function () {
        var actualSingleMatchingQuestionMetadata = getMatchingQuestionsMetadata_1.getMatchingQuestionsMetadata(matching_interaction_fixture_1.singleMatchingQuestion);
        var expectedSingleMatchingQuestionMetadata = {
            'https://learninglocker&46;net/matching-response': [['ben', '3']],
        };
        assert.deepStrictEqual(actualSingleMatchingQuestionMetadata, expectedSingleMatchingQuestionMetadata);
    });
    it('should return metadata from multiple matching questions', function () {
        var actualMultipleMatchingQuestionsMetadata = getMatchingQuestionsMetadata_1.getMatchingQuestionsMetadata(matching_interaction_fixture_1.multipleMatchingQuestions);
        var expectedMultipleMatchingQuestionsMetadata = {
            'https://learninglocker&46;net/matching-response': [
                ['ben', '3'],
                ['chris', '2'],
                ['troy', '4'],
                ['freddie', '1'],
            ],
        };
        assert.deepStrictEqual(actualMultipleMatchingQuestionsMetadata, expectedMultipleMatchingQuestionsMetadata);
    });
});
//# sourceMappingURL=getMatchingQuestionsMetadata.test.js.map