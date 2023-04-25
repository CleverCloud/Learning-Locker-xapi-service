"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getFileExtension_1 = __importDefault(require("./getFileExtension"));
exports.default = (function (opts) {
    var ext = getFileExtension_1.default(opts.contentType);
    return opts.hash + "." + ext;
});
//# sourceMappingURL=getAttachmentFilename.js.map