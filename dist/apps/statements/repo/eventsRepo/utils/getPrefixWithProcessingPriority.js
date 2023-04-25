"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefixWithProcessingPriority = void 0;
var statementProcessingPriority_enum_1 = require("../../../enums/statementProcessingPriority.enum");
var getPrefixWithProcessingPriority = function (originalPrefix, priority, isQueuePriorityEnabled) {
    if (!isQueuePriorityEnabled) {
        return originalPrefix;
    }
    switch (priority) {
        case statementProcessingPriority_enum_1.StatementProcessingPriority.LOW:
            return originalPrefix + "_" + statementProcessingPriority_enum_1.StatementProcessingPriority.LOW;
        case statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM:
        default:
            return originalPrefix;
    }
};
exports.getPrefixWithProcessingPriority = getPrefixWithProcessingPriority;
//# sourceMappingURL=getPrefixWithProcessingPriority.js.map