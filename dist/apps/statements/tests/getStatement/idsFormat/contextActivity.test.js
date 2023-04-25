"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createContext_1 = __importDefault(require("../../utils/createContext"));
var activityFormatTest_1 = __importDefault(require("./utils/activityFormatTest"));
describe('get ids statement in parent contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createContext_1.default({ parent: [activity] });
    });
});
describe('get ids statement in grouping contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createContext_1.default({ grouping: [activity] });
    });
});
describe('get ids statement in category contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createContext_1.default({ category: [activity] });
    });
});
describe('get ids statement in other contextActivities', function () {
    activityFormatTest_1.default(function (activity) {
        return createContext_1.default({ other: [activity] });
    });
});
//# sourceMappingURL=contextActivity.test.js.map