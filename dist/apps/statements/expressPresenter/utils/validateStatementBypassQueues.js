"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatementBypassQueues = void 0;
var rulr_1 = require("rulr");
var validateStatementBypassQueues = function (statementBypassQueues) {
    if (statementBypassQueues &&
        // TODO: Validate using actual queue names (TBD)
        !statementBypassQueues.split(',').every(function (queueName) { return queueName.startsWith('STATEMENT_'); })) {
        var warnings = [rulr_1.createWarning(statementBypassQueues, ['query', 'bypassQueues'])];
        throw new rulr_1.Warnings({}, ['query'], warnings);
    }
};
exports.validateStatementBypassQueues = validateStatementBypassQueues;
//# sourceMappingURL=validateStatementBypassQueues.js.map