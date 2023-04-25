"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeWarning_1 = __importDefault(require("@learninglocker/xapi-validation/dist/warnings/TypeWarning"));
var translateWarning_1 = __importDefault(require("jscommons/dist/expressPresenter/utils/translateWarning"));
exports.default = (function (translator, warning) {
    switch (warning.constructor) {
        case TypeWarning_1.default:
            return translator.xapiTypeWarning(warning);
        default:
            return translateWarning_1.default(translator, warning);
    }
});
//# sourceMappingURL=translateWarning.js.map