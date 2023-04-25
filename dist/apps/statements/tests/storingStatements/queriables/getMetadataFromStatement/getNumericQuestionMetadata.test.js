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
var getNumericQuestionMetadata_1 = require("../../../../service/storeStatements/queriables/getMetadataFromStatement/getNumericQuestionMetadata");
var numeric_question_interaction_fixture_1 = require("./fixtures/numeric-question-interaction.fixture");
describe('Retrieve numeric question metadata from statement', function () {
    it('should return empty metadata from empty result', function () {
        var expectedEmptyMetadata = {};
        var actualEmptyMetadataFromEmptyResult = getNumericQuestionMetadata_1.getNumericQuestionMetadata(__assign(__assign({}, numeric_question_interaction_fixture_1.numericQuestionInteractionActivityStatement), {
            result: {},
        }));
        assert.deepStrictEqual(actualEmptyMetadataFromEmptyResult, expectedEmptyMetadata);
    });
    it('should return numeric question for correct result', function () {
        var actualCorrectMetadata = getNumericQuestionMetadata_1.getNumericQuestionMetadata(numeric_question_interaction_fixture_1.numericQuestionInteractionActivityStatement);
        var expectedCorrectMetadata = {
            'https://learninglocker&46;net/numeric-response': 4,
        };
        assert.deepStrictEqual(actualCorrectMetadata, expectedCorrectMetadata);
    });
    it('should return numeric question with min and max values for correct result', function () {
        var actualCorrectMetadata = getNumericQuestionMetadata_1.getNumericQuestionMetadata(numeric_question_interaction_fixture_1.numericQuestionWithMinAndMaxInteractionActivityStatement);
        var expectedCorrectMetadata = {
            'https://learninglocker&46;net/numeric-response': {
                min: '4',
                max: '5',
            },
        };
        assert.deepStrictEqual(actualCorrectMetadata, expectedCorrectMetadata);
    });
});
//# sourceMappingURL=getNumericQuestionMetadata.test.js.map