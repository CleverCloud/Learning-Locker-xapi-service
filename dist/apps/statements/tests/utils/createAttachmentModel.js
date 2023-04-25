"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringToStream_1 = require("../../../../utils/stringToStream");
var createSha_1 = __importDefault(require("./createSha"));
exports.default = (function (content, contentType) {
    if (contentType === void 0) { contentType = 'text/plain'; }
    return {
        stream: stringToStream_1.stringToStream(content),
        hash: createSha_1.default(content),
        contentType: contentType,
        contentLength: content.length,
    };
});
//# sourceMappingURL=createAttachmentModel.js.map