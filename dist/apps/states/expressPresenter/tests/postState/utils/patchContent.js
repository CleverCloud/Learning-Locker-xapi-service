"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var patchState_1 = __importDefault(require("./patchState"));
exports.default = (function (content, contentType, sendVersion) {
    if (sendVersion === void 0) { sendVersion = true; }
    return patchState_1.default({}, content, contentType, sendVersion);
});
//# sourceMappingURL=patchContent.js.map