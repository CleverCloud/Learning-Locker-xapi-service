"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getClient_1 = __importDefault(require("./getClient"));
exports.default = (function (config) {
    return {
        getClient: getClient_1.default(config),
    };
});
//# sourceMappingURL=index.js.map