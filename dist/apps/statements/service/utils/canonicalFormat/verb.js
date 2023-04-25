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
var langMap_1 = __importDefault(require("./langMap"));
exports.default = (function (verb, langs) {
    return __assign(__assign({}, verb), (verb.display === undefined ? {} : { display: langMap_1.default(verb.display, langs) }));
});
//# sourceMappingURL=verb.js.map