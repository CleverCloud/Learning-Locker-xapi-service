"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIdsSubStatement_1 = __importDefault(require("../../utils/createIdsSubStatement"));
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var agentTest_1 = __importDefault(require("./utils/agentTest"));
describe('get ids statement in sub statement instructor', function () {
    agentTest_1.default(function (instructor) {
        return createSubStatement_1.default({ context: { instructor: instructor } });
    }, function (instructor) {
        return createIdsSubStatement_1.default({ context: { instructor: instructor } });
    });
});
//# sourceMappingURL=subStatementInstructor.test.js.map