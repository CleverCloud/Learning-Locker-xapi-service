"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var agentFormatTest_1 = __importDefault(require("./agentFormatTest"));
exports.default = (function (createActorStatement, createIdsActorStatement) {
    if (createIdsActorStatement === void 0) { createIdsActorStatement = createActorStatement; }
    describe('agent', function () {
        agentFormatTest_1.default(function (ifi) {
            return ifi;
        })(createActorStatement, createIdsActorStatement);
    });
});
//# sourceMappingURL=agentTest.js.map