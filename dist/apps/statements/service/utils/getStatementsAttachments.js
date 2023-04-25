"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var removeDuplicates_1 = __importDefault(require("../../utils/removeDuplicates"));
var getStatementBaseAttachments = function (statement) {
    var attachments = statement.attachments;
    if (attachments === undefined) {
        return [];
    }
    return attachments;
};
exports.default = (function (models) {
    var attachments = models.reduce(function (results, model) {
        var statementAttachments = getStatementBaseAttachments(model.statement);
        var subStatementAttachments = model.statement.object.objectType === 'SubStatement'
            ? getStatementBaseAttachments(model.statement.object)
            : [];
        return __spreadArray(__spreadArray(__spreadArray([], results), statementAttachments), subStatementAttachments);
    }, []);
    var uniqueAttachments = removeDuplicates_1.default(attachments, function (attachment) {
        return attachment.sha2;
    });
    return uniqueAttachments;
});
//# sourceMappingURL=getStatementsAttachments.js.map