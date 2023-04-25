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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var lodash_1 = require("lodash");
var getMetadataFromStatement_1 = __importDefault(require("../../../../service/storeStatements/queriables/getMetadataFromStatement"));
var choice_interaction_fixture_1 = require("./fixtures/choice-interaction.fixture");
var likert_fixture_1 = require("./fixtures/likert.fixture");
var matching_interaction_fixture_1 = require("./fixtures/matching-interaction.fixture");
var statements_fixture_1 = require("./fixtures/statements.fixture");
describe('Retrieve metadata from statement', function () {
    it('should retrieve duration metadata from statement', function () {
        var actualDurationMetadata = getMetadataFromStatement_1.default(statements_fixture_1.statementDefaults);
        var expectedDurationMetadata = {
            'https://learninglocker&46;net/result-duration': { seconds: 37080306 },
        };
        assert.deepStrictEqual(actualDurationMetadata, expectedDurationMetadata);
    });
    it('should return sequencing metadata from statement', function () {
        var actualSequencingMetadata = getMetadataFromStatement_1.default(statements_fixture_1.sequencingInteractionActivityStatement);
        var expectedSequencingMetadata = {
            'https://learninglocker&46;net/sequencing-response': ['tim', 'mike', 'ells', 'ben'],
        };
        assert.deepStrictEqual(actualSequencingMetadata, expectedSequencingMetadata);
    });
    it('should return duration and sequencing metadata from one statement', function () {
        var statementWithDurationAndSequencing = lodash_1.merge({}, statements_fixture_1.sequencingInteractionActivityStatement, {
            result: {
                duration: 'P1Y2M3DT4H5M6S',
            },
        });
        var actualMetadata = getMetadataFromStatement_1.default(statementWithDurationAndSequencing);
        var expectedMetadata = {
            'https://learninglocker&46;net/result-duration': { seconds: 37080306 },
            'https://learninglocker&46;net/sequencing-response': ['tim', 'mike', 'ells', 'ben'],
        };
        assert.deepStrictEqual(actualMetadata, expectedMetadata);
    });
    it('should retrieve likert metadata from statement', function () {
        var actualLikertMetadata = getMetadataFromStatement_1.default(likert_fixture_1.likertStatement);
        var expectedLikertMetadata = {
            'https://learninglocker&46;net/likert-response': 'likert_3',
        };
        assert.deepStrictEqual(actualLikertMetadata, expectedLikertMetadata);
    });
    it('should return choices metadata from statement', function () {
        var _a;
        var actualMetadata = getMetadataFromStatement_1.default(__assign(__assign({}, choice_interaction_fixture_1.multipleChoices), {
            result: {
                response: (_a = choice_interaction_fixture_1.multipleChoices.result) === null || _a === void 0 ? void 0 : _a.response,
            },
        }));
        var expectedMetadata = {
            'https://learninglocker&46;net/choice-response': ['golf', 'tetris'],
        };
        assert.deepStrictEqual(actualMetadata, expectedMetadata);
    });
    it('should return matching questions metadata', function () {
        var actualMatchingQuestionsMetadata = getMetadataFromStatement_1.default(matching_interaction_fixture_1.multipleMatchingQuestions);
        var expectedMatchingQuestionsMetadata = {
            'https://learninglocker&46;net/matching-response': [
                ['ben', '3'],
                ['chris', '2'],
                ['troy', '4'],
                ['freddie', '1'],
            ],
        };
        assert.deepStrictEqual(actualMatchingQuestionsMetadata, expectedMatchingQuestionsMetadata);
    });
});
//# sourceMappingURL=getMetadataFromStatement.test.js.map