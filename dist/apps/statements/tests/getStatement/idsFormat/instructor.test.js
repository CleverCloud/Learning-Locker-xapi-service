"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var agentTest_1 = __importDefault(require("./utils/agentTest"));
describe('get ids statement in instructor', function () {
    agentTest_1.default(function (instructor) {
        return { context: { instructor: instructor } };
    });
});
//# sourceMappingURL=instructor.test.js.map