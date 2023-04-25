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
var assertFilteredStatements_1 = __importDefault(require("../utils/assertFilteredStatements"));
var agentFilterTest_1 = __importDefault(require("./utils/agentFilterTest"));
var agentTest_1 = __importDefault(require("./utils/agentTest"));
describe('get statements by agent in authority', function () {
    agentTest_1.default(assertFilteredStatements_1.default)(function (authority) {
        return { authority: authority };
    }, true);
    describe('anonymous group members', function () {
        agentFilterTest_1.default(assertFilteredStatements_1.default)(function (actor) {
            return {
                authority: {
                    objectType: 'Group',
                    member: [
                        __assign(__assign({}, actor), { objectType: 'Agent' }),
                        {
                            mbox: 'mailto:test@example.com',
                            objectType: 'Agent',
                        },
                    ],
                },
            };
        }, true);
    });
});
//# sourceMappingURL=authority.test.js.map