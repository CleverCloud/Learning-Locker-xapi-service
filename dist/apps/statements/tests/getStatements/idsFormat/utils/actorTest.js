"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var agentTest_1 = __importDefault(require("./agentTest"));
var groupTest_1 = __importDefault(require("./groupTest"));
exports.default = (function (createActorStatement, createIdsActorStatement) {
    if (createIdsActorStatement === void 0) { createIdsActorStatement = createActorStatement; }
    agentTest_1.default(createActorStatement, createIdsActorStatement);
    groupTest_1.default(createActorStatement, createIdsActorStatement);
});
//# sourceMappingURL=actorTest.js.map