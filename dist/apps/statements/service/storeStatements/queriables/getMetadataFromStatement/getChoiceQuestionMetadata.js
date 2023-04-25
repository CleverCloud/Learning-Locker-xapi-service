"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChoiceQuestionMetadata = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../models/ActivityInteractionType"));
var getChoiceQuestionMetadata = function (statement) {
    if (!(lodash_1.get(statement.object, ['definition', 'interactionType']) === ActivityInteractionType_1.default.CHOICE &&
        lodash_1.has(statement, ['result', 'response']))) {
        return {};
    }
    var choicesString = lodash_1.get(statement, ['result', 'response']);
    var choices = choicesString.split('[,]');
    return { 'https://learninglocker&46;net/choice-response': choices };
};
exports.getChoiceQuestionMetadata = getChoiceQuestionMetadata;
//# sourceMappingURL=getChoiceQuestionMetadata.js.map