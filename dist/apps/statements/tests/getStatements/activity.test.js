"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activityTest_1 = __importDefault(require("./utils/activityTest"));
var assertFilteredStatementRefs_1 = __importDefault(require("./utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("./utils/assertFilteredStatements"));
describe('get statements by activity', function () {
    activityTest_1.default(assertFilteredStatements_1.default);
});
describe('get statements by activity with statement references', function () {
    activityTest_1.default(assertFilteredStatementRefs_1.default);
});
//# sourceMappingURL=activity.test.js.map