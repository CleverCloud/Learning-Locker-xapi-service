"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activity_1 = __importDefault(require("./activity"));
var actor_1 = __importDefault(require("./actor"));
exports.default = (function (statementObject) {
    switch (statementObject.objectType) {
        case 'Agent':
        case 'Group':
            return actor_1.default(statementObject);
        case 'StatementRef':
            return statementObject;
        case 'Activity':
        default:
            return activity_1.default(statementObject);
    }
});
//# sourceMappingURL=subStatementObject.js.map