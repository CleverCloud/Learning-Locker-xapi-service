"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createContext_1 = __importDefault(require("./createContext"));
var createIdsSubStatement_1 = __importDefault(require("./createIdsSubStatement"));
exports.default = (function (contextActivities) {
    return createIdsSubStatement_1.default(createContext_1.default(contextActivities));
});
//# sourceMappingURL=createIdsSubStatementContext.js.map