"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assertFilteredStatementRefs_1 = __importDefault(require("./utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("./utils/assertFilteredStatements"));
var verbTest_1 = __importDefault(require("./utils/verbTest"));
describe('get statements by verb', function () {
    verbTest_1.default(assertFilteredStatements_1.default);
});
describe('get statements by verb with statement references', function () {
    verbTest_1.default(assertFilteredStatementRefs_1.default);
});
//# sourceMappingURL=verb.test.js.map