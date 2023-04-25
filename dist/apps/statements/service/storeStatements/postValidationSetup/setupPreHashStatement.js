"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var modr = __importStar(require("../../../utils/modr"));
exports.default = (function (model) {
    return modr.modifyRestrictedSchema({
        // Adds the required properties from the model.
        id: modr.defaultValue(uuid_1.v4),
        actor: modr.keepValue,
        verb: modr.keepValue,
        object: modr.keepValue,
        // Adds the optional properties from the model.
        context: modr.keepValue,
        result: modr.keepValue,
        attachments: modr.keepValue,
        timestamp: modr.keepValue,
    })(model);
});
//# sourceMappingURL=setupPreHashStatement.js.map