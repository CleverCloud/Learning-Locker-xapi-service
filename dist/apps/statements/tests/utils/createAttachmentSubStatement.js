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
var createStatement_1 = __importDefault(require("./createStatement"));
var createSubStatement_1 = __importDefault(require("./createSubStatement"));
exports.default = (function (attachments, id) {
    return createStatement_1.default(__assign(__assign({}, (id === undefined ? {} : { id: id })), createSubStatement_1.default({
        attachments: attachments,
    })));
});
//# sourceMappingURL=createAttachmentSubStatement.js.map