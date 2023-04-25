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
Object.defineProperty(exports, "__esModule", { value: true });
var getBooleanMetadata_1 = require("./getBooleanMetadata");
var getChoiceQuestionMetadata_1 = require("./getChoiceQuestionMetadata");
var getDurationMetadata_1 = require("./getDurationMetadata");
var getLikertMetadata_1 = require("./getLikertMetadata");
var getMatchingQuestionsMetadata_1 = require("./getMatchingQuestionsMetadata");
var getNumericQuestionMetadata_1 = require("./getNumericQuestionMetadata");
var getSequencingMetadata_1 = require("./getSequencingMetadata");
exports.default = (function (statement) {
    var likertMetadata = getLikertMetadata_1.getLikertMetadata(statement);
    var durationMetadata = getDurationMetadata_1.getDurationMetadata(statement);
    var sequencingMetadata = getSequencingMetadata_1.getSequencingMetadata(statement);
    var choicesMetadata = getChoiceQuestionMetadata_1.getChoiceQuestionMetadata(statement);
    var matchingMetadata = getMatchingQuestionsMetadata_1.getMatchingQuestionsMetadata(statement);
    var booleanMetadata = getBooleanMetadata_1.getBooleanMetadata(statement);
    var numericQuestionMetadata = getNumericQuestionMetadata_1.getNumericQuestionMetadata(statement);
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, durationMetadata), sequencingMetadata), numericQuestionMetadata), choicesMetadata), matchingMetadata), booleanMetadata), likertMetadata);
});
//# sourceMappingURL=index.js.map