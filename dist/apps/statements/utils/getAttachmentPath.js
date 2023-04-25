"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getAttachmentFilename_1 = __importDefault(require("./getAttachmentFilename"));
exports.default = (function (opts) {
    var filename = getAttachmentFilename_1.default(opts);
    return opts.dir + "/" + filename;
});
//# sourceMappingURL=getAttachmentPath.js.map