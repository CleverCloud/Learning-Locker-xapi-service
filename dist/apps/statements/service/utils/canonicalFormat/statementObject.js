"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var subStatement_1 = __importDefault(require("./subStatement"));
var subStatementObject_1 = __importDefault(require("./subStatementObject"));
exports.default = (function (statementObject, langs) {
    switch (statementObject.objectType) {
        case 'SubStatement':
            return subStatement_1.default(statementObject, langs);
        default:
            return subStatementObject_1.default(statementObject, langs);
    }
});
//# sourceMappingURL=statementObject.js.map