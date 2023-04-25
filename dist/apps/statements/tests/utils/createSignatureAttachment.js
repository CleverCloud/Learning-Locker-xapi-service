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
var createSha_1 = __importDefault(require("./createSha"));
exports.default = (function (content, fileUrl) {
    return __assign({ usageType: 'http://adlnet.gov/expapi/attachments/signature', display: {}, contentType: 'application/octet-stream', sha2: createSha_1.default(content), length: 0 }, (fileUrl === undefined ? {} : { fileUrl: fileUrl }));
});
//# sourceMappingURL=createSignatureAttachment.js.map