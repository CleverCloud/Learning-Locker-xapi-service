"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var ExtraAttachments_1 = __importDefault(require("../../errors/ExtraAttachments"));
var MissingAttachments_1 = __importDefault(require("../../errors/MissingAttachments"));
var getStatementsAttachments_1 = __importDefault(require("../utils/getStatementsAttachments"));
exports.default = (function (config, models, attachments) {
    /* istanbul ignore if - Deprecated flag */
    if (!config.enableAttachmentValidation) {
        return;
    }
    var attachmentHashes = attachments.map(function (attachment) {
        return attachment.hash;
    });
    var statementsAttachments = getStatementsAttachments_1.default(models);
    // Checks for attachments defined in statements but not in the attachments.
    var missingHashes = statementsAttachments
        .filter(function (attachment) {
        return !lodash_1.includes(attachmentHashes, attachment.sha2) && attachment.fileUrl === undefined;
    })
        .map(function (attachment) {
        return attachment.sha2;
    });
    if (missingHashes.length > 0) {
        throw new MissingAttachments_1.default(missingHashes);
    }
    // Checks for attachments defined in the attachments but not in the statements.
    var statementHashes = statementsAttachments.map(function (attachment) {
        return attachment.sha2;
    });
    var extraHashes = lodash_1.difference(attachmentHashes, statementHashes);
    if (extraHashes.length > 0) {
        throw new ExtraAttachments_1.default(extraHashes);
    }
});
//# sourceMappingURL=checkAttachments.js.map