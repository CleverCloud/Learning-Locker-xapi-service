"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatementProcessingPriority = void 0;
var rulr_1 = require("rulr");
var statementProcessingPriority_enum_1 = require("../../enums/statementProcessingPriority.enum");
var validateStatementProcessingPriority = function (statementProcessingPriority) {
    if (statementProcessingPriority &&
        !Object.values(statementProcessingPriority_enum_1.StatementProcessingPriority).includes(statementProcessingPriority)) {
        var warnings = [rulr_1.createWarning(statementProcessingPriority, ['query', 'priority'])];
        throw new rulr_1.Warnings({}, ['query'], warnings);
    }
};
exports.validateStatementProcessingPriority = validateStatementProcessingPriority;
//# sourceMappingURL=validateStatementProcessingPriority.js.map