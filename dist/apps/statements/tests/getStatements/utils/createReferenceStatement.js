"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createStatement_1 = __importDefault(require("../../utils/createStatement"));
exports.default = (function (sourceId, targetId) {
    return createStatement_1.default({
        id: sourceId,
        actor: {
            objectType: 'Agent',
            account: {
                homePage: 'http://www.example.com',
                name: sourceId,
            },
        },
        object: {
            objectType: 'StatementRef',
            id: targetId,
        },
    });
});
//# sourceMappingURL=createReferenceStatement.js.map