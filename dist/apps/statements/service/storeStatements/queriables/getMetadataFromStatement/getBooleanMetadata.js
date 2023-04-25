"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooleanMetadata = void 0;
var lodash_1 = require("lodash");
var ActivityInteractionType_1 = __importDefault(require("../../../../models/ActivityInteractionType"));
var getBooleanMetadata = function (statement) {
    if (!(lodash_1.get(statement.object, ['definition', 'interactionType']) ===
        ActivityInteractionType_1.default.TRUE_FALSE && lodash_1.has(statement, ['result', 'response']))) {
        return {};
    }
    return {
        'https://learninglocker&46;net/true-false-response': lodash_1.get(statement, ['result', 'response']),
    };
};
exports.getBooleanMetadata = getBooleanMetadata;
//# sourceMappingURL=getBooleanMetadata.js.map