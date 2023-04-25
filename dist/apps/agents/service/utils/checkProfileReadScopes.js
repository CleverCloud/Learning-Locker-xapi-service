"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkScopes_1 = __importDefault(require("jscommons/dist/service/utils/checkScopes"));
var scopes_1 = require("../../utils/scopes");
exports.default = (function (scopes) {
    checkScopes_1.default(scopes_1.PROFILE_READ_SCOPES, scopes);
});
//# sourceMappingURL=checkProfileReadScopes.js.map