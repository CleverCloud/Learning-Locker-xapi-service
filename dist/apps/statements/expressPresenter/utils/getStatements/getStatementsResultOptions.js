"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boolean_1 = __importDefault(require("boolean"));
exports.default = (function (queryParams, client) {
    return {
        format: queryParams.format,
        attachments: queryParams.attachments !== undefined ? boolean_1.default(queryParams.attachments) : undefined,
        client: client,
    };
});
//# sourceMappingURL=getStatementsResultOptions.js.map