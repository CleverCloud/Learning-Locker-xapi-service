"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSequencingMetadata = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../models/ActivityInteractionType"));
var getSequencingMetadata = function (statement) {
    if (!(lodash_1.get(statement.object, ['definition', 'interactionType']) ===
        ActivityInteractionType_1.default.SEQUENCING && lodash_1.has(statement, ['result', 'response']))) {
        return {};
    }
    var choicesString = lodash_1.get(statement, ['result', 'response']);
    var choices = choicesString.split('[,]');
    /**
     * In case of there are no items after split e.g. "somestring.split('[,]') = ['somestring']".
     * And sequencing implies that we should have at least two items
     */
    if (lodash_1.head(choices) === lodash_1.get(statement, ['result', 'response'])) {
        return {};
    }
    return { 'https://learninglocker&46;net/sequencing-response': choices };
};
exports.getSequencingMetadata = getSequencingMetadata;
//# sourceMappingURL=getSequencingMetadata.js.map