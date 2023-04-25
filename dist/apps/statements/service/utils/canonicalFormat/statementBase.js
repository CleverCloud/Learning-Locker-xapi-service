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
var context_1 = __importDefault(require("./context"));
var verb_1 = __importDefault(require("./verb"));
exports.default = (function (statement, langs) {
    return __assign(__assign(__assign({}, statement), { verb: verb_1.default(statement.verb, langs) }), (statement.context === undefined
        ? {}
        : { context: context_1.default(statement.context, langs) }));
});
//# sourceMappingURL=statementBase.js.map