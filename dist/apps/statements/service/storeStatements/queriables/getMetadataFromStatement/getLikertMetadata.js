"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLikertMetadata = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../models/ActivityInteractionType"));
var getLikertMetadata = function (statement) {
    if (!(lodash_1.get(statement.object, ['definition', 'interactionType']) === ActivityInteractionType_1.default.LIKERT &&
        lodash_1.has(statement, ['result', 'response']))) {
        return {};
    }
    return {
        'https://learninglocker&46;net/likert-response': lodash_1.get(statement, ['result', 'response']),
    };
};
exports.getLikertMetadata = getLikertMetadata;
//# sourceMappingURL=getLikertMetadata.js.map