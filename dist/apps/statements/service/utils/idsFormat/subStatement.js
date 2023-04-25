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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var statementBase_1 = __importDefault(require("./statementBase"));
var subStatementObject_1 = __importDefault(require("./subStatementObject"));
exports.default = (function (statement) {
    return __assign(__assign(__assign({}, statement), statementBase_1.default(statement)), { object: subStatementObject_1.default(statement.object) });
});
//# sourceMappingURL=subStatement.js.map