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
var getChoiceQuestionMetadata_1 = require("../../../../service/storeStatements/queriables/getMetadataFromStatement/getChoiceQuestionMetadata");
var choice_interaction_fixture_1 = require("./fixtures/choice-interaction.fixture");
describe('Retrieve choices metadata from statement', function () {
    it('should return choices metadata from statement', function () {
        var expectedEmptyMetadata = {};
        var actualEmptyMetadataFromEmptyResult = getChoiceQuestionMetadata_1.getChoiceQuestionMetadata(__assign(__assign({}, choice_interaction_fixture_1.singleChoice), {
            result: {},
        }));
        assert.deepStrictEqual(actualEmptyMetadataFromEmptyResult, expectedEmptyMetadata);
    });
    it('should retrieve metadata from statement with one choice', function () {
        var actualSingleChoiceMetadata = getChoiceQuestionMetadata_1.getChoiceQuestionMetadata(choice_interaction_fixture_1.singleChoice);
        var expectedSingleChoiceMetadata = {
            'https://learninglocker&46;net/choice-response': ['golf'],
        };
        assert.deepStrictEqual(actualSingleChoiceMetadata, expectedSingleChoiceMetadata);
    });
    it('should retrieve metadata from statement with multiple choices', function () {
        var actualMultipleChoicesMetadata = getChoiceQuestionMetadata_1.getChoiceQuestionMetadata(choice_interaction_fixture_1.multipleChoices);
        var expectedMultipleChoicesMetadata = {
            'https://learninglocker&46;net/choice-response': ['golf', 'tetris'],
        };
        assert.deepStrictEqual(actualMultipleChoicesMetadata, expectedMultipleChoicesMetadata);
    });
});
//# sourceMappingURL=getChoiceQuestionMetadata.test.js.map