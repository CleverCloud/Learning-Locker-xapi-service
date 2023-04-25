"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchingQuestionsMetadata = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../models/ActivityInteractionType"));
var getMatchingQuestionsMetadata = function (statement) {
    if (!(lodash_1.get(statement.object, ['definition', 'interactionType']) ===
        ActivityInteractionType_1.default.MATCHING && lodash_1.has(statement, ['result', 'response']))) {
        return {};
    }
    var matchingQuestionsString = lodash_1.get(statement, ['result', 'response']);
    var matchingQuestions = matchingQuestionsString
        .split('[,]')
        .map(function (mq) { return mq.split('[.]'); });
    return { 'https://learninglocker&46;net/matching-response': matchingQuestions };
};
exports.getMatchingQuestionsMetadata = getMatchingQuestionsMetadata;
//# sourceMappingURL=getMatchingQuestionsMetadata.js.map