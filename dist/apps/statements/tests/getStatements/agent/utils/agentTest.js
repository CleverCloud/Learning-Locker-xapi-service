"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var agentFilterTest_1 = __importDefault(require("./agentFilterTest"));
exports.default = (function (assertFilteredStatements) {
    return function (createActor, relatedAgents) {
        describe('agent', function () {
            agentFilterTest_1.default(assertFilteredStatements)(function (actor) {
                return createActor(__assign(__assign({}, actor), { objectType: 'Agent' }));
            }, relatedAgents);
        });
    };
});
//# sourceMappingURL=agentTest.js.map