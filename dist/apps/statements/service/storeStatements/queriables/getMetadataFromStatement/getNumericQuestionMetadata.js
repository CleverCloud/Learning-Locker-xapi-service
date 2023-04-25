"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumericQuestionMetadata = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../models/ActivityInteractionType"));
var getNumericQuestionMetadata = function (statement) {
    if (!(lodash_1.get(statement.object, ['definition', 'interactionType']) ===
        ActivityInteractionType_1.default.NUMERIC && lodash_1.has(statement, ['result', 'response']))) {
        return {};
    }
    var numericQuestionString = lodash_1.get(statement, ['result', 'response']);
    if (!numericQuestionString.includes('[:]')) {
        return { 'https://learninglocker&46;net/numeric-response': parseFloat(numericQuestionString) };
    }
    var _a = numericQuestionString.split('[:]'), min = _a[0], max = _a[1];
    return {
        'https://learninglocker&46;net/numeric-response': {
            min: min,
            max: max,
        },
    };
};
exports.getNumericQuestionMetadata = getNumericQuestionMetadata;
//# sourceMappingURL=getNumericQuestionMetadata.js.map