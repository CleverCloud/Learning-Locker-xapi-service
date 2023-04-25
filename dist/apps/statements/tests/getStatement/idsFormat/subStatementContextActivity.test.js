"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIdsSubStatementContext_1 = __importDefault(require("../../utils/createIdsSubStatementContext"));
var createSubStatementContext_1 = __importDefault(require("../../utils/createSubStatementContext"));
var activityFormatTest_1 = __importDefault(require("./utils/activityFormatTest"));
describe('get ids statement in sub statement parent contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createSubStatementContext_1.default({ parent: [activity] });
    }, function (activity) {
        return createIdsSubStatementContext_1.default({ parent: [activity] });
    });
});
describe('get ids statement in sub statement grouping contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createSubStatementContext_1.default({ grouping: [activity] });
    }, function (activity) {
        return createIdsSubStatementContext_1.default({ grouping: [activity] });
    });
});
describe('get ids statement in sub statement category contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createSubStatementContext_1.default({ category: [activity] });
    }, function (activity) {
        return createIdsSubStatementContext_1.default({ category: [activity] });
    });
});
describe('get ids statement in sub statement other contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createSubStatementContext_1.default({ other: [activity] });
    }, function (activity) {
        return createIdsSubStatementContext_1.default({ other: [activity] });
    });
});
//# sourceMappingURL=subStatementContextActivity.test.js.map