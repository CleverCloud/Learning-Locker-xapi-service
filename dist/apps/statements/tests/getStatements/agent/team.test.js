"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assertFilteredStatementRefs_1 = __importDefault(require("../utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("../utils/assertFilteredStatements"));
var groupTest_1 = __importDefault(require("./utils/groupTest"));
var createActor = function (team) {
    return { context: { team: team } };
};
describe('get statements by agent in team', function () {
    groupTest_1.default(assertFilteredStatements_1.default)(createActor, true);
});
describe('get statements by agent in team with references', function () {
    groupTest_1.default(assertFilteredStatementRefs_1.default)(createActor, true);
});
//# sourceMappingURL=team.test.js.map