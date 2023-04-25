"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assertFilteredStatementRefs_1 = __importDefault(require("../utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("../utils/assertFilteredStatements"));
var agentTest_1 = __importDefault(require("./utils/agentTest"));
var createActor = function (instructor) {
    return { context: { instructor: instructor } };
};
describe('get statements by agent in instructor', function () {
    agentTest_1.default(assertFilteredStatements_1.default)(createActor, true);
});
describe('get statements by agent in instructor with references', function () {
    agentTest_1.default(assertFilteredStatementRefs_1.default)(createActor, true);
});
//# sourceMappingURL=instructor.test.js.map