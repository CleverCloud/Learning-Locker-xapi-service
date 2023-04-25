"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activity_1 = __importDefault(require("./activity"));
exports.default = (function (statementObject, langs) {
    switch (statementObject.objectType) {
        case 'Agent':
        case 'Group':
        case 'StatementRef':
            return statementObject;
        case 'Activity':
        default:
            return activity_1.default(statementObject, langs);
    }
});
//# sourceMappingURL=subStatementObject.js.map