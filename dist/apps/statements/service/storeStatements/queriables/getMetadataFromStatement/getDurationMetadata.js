"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDurationMetadata = void 0;
var lodash_1 = require("lodash");
var moment_1 = require("moment");
var getDurationMetadata = function (statement) {
    if (!lodash_1.has(statement, ['result', 'duration'])) {
        return {};
    }
    var resultDuration = lodash_1.get(statement, ['result', 'duration']);
    var seconds = moment_1.duration(resultDuration).as('seconds');
    return { 'https://learninglocker&46;net/result-duration': { seconds: seconds } };
};
exports.getDurationMetadata = getDurationMetadata;
//# sourceMappingURL=getDurationMetadata.js.map