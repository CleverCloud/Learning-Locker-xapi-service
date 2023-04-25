"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var statementProcessingPriority_enum_1 = require("../../enums/statementProcessingPriority.enum");
var createClientModel_1 = __importDefault(require("./createClientModel"));
var storeAwaitedStatements_1 = __importDefault(require("./storeAwaitedStatements"));
exports.default = (function (service) {
    return function (statements, attachments, client, priority, bypassQueues) {
        if (attachments === void 0) { attachments = []; }
        if (client === void 0) { client = createClientModel_1.default(); }
        if (priority === void 0) { priority = statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM; }
        if (bypassQueues === void 0) { bypassQueues = []; }
        return storeAwaitedStatements_1.default(service)({
            priority: priority,
            models: statements,
            attachments: attachments,
            client: client,
            bypassQueues: bypassQueues,
        });
    };
});
//# sourceMappingURL=storeStatementsInService.js.map