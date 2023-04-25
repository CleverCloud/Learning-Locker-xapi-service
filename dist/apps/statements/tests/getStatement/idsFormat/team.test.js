"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var groupTest_1 = __importDefault(require("./utils/groupTest"));
describe('get ids statement in team', function () {
    groupTest_1.default(function (team) {
        return { context: { team: team } };
    });
});
//# sourceMappingURL=team.test.js.map