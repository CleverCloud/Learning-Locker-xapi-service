"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subStatement_1 = __importDefault(require("./subStatement"));
var subStatementObject_1 = __importDefault(require("./subStatementObject"));
exports.default = (function (statementObject) {
    switch (statementObject.objectType) {
        case 'SubStatement':
            return subStatement_1.default(statementObject);
        default:
            return subStatementObject_1.default(statementObject);
    }
});
//# sourceMappingURL=statementObject.js.map