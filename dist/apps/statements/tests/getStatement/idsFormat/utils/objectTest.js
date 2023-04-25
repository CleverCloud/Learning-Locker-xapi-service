"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activityFormatTest_1 = __importDefault(require("./activityFormatTest"));
var actorTest_1 = __importDefault(require("./actorTest"));
exports.default = (function (createObjectStatement, createIdsObjectStatement) {
    if (createIdsObjectStatement === void 0) { createIdsObjectStatement = createObjectStatement; }
    describe('activity', function () {
        activityFormatTest_1.default(createObjectStatement, createIdsObjectStatement);
    });
    actorTest_1.default(createObjectStatement, createIdsObjectStatement);
});
//# sourceMappingURL=objectTest.js.map