"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIdsSubStatement_1 = __importDefault(require("../../utils/createIdsSubStatement"));
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var groupTest_1 = __importDefault(require("./utils/groupTest"));
describe('get ids statement in sub statement team', function () {
    groupTest_1.default(function (team) {
        return createSubStatement_1.default({ context: { team: team } });
    }, function (team) {
        return createIdsSubStatement_1.default({ context: { team: team } });
    });
});
//# sourceMappingURL=subStatementTeam.test.js.map