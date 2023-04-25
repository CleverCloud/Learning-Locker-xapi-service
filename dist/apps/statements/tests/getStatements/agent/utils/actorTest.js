"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var agentTest_1 = __importDefault(require("./agentTest"));
var groupTest_1 = __importDefault(require("./groupTest"));
exports.default = (function (assertFilteredStatements) {
    return function (createActor, relatedAgents) {
        if (relatedAgents === void 0) { relatedAgents = false; }
        agentTest_1.default(assertFilteredStatements)(createActor, relatedAgents);
        groupTest_1.default(assertFilteredStatements)(createActor, relatedAgents);
    };
});
//# sourceMappingURL=actorTest.js.map