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
var config_1 = __importDefault(require("../../../config"));
var logger_1 = __importDefault(require("../../../logger"));
var tracker_1 = __importDefault(require("../../../tracker"));
var repo_1 = __importDefault(require("../repo"));
var service_1 = __importDefault(require("../service"));
exports.default = (function (configOverrides) {
    return service_1.default(__assign({ repo: repo_1.default, tracker: tracker_1.default, logger: logger_1.default, awaitUpdates: config_1.default.statementsService.awaitUpdates, enableActorLowerCasing: config_1.default.statementsService.enableActorLowerCasing, enableActivityUpdates: config_1.default.statementsService.enableActivityUpdates, enableAttachmentCreation: config_1.default.statementsService.enableAttachmentCreation, enableAttachmentValidation: config_1.default.statementsService.enableAttachmentValidation, enableConflictChecks: config_1.default.statementsService.enableConflictChecks, enableNullRemoval: config_1.default.statementsService.enableNullRemoval, enableReferencing: config_1.default.statementsService.enableReferencing, enableStatementCreation: config_1.default.statementsService.enableStatementCreation, enableVoiding: config_1.default.statementsService.enableVoiding, enableVoidingChecks: config_1.default.statementsService.enableVoidingChecks }, configOverrides));
});
//# sourceMappingURL=index.js.map