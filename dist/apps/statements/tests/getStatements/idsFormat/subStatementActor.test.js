"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIdsSubStatement_1 = __importDefault(require("../../utils/createIdsSubStatement"));
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var actorTest_1 = __importDefault(require("./utils/actorTest"));
describe('get ids statements in sub statement actor', function () {
    actorTest_1.default(function (actor) {
        return createSubStatement_1.default({ actor: actor });
    }, function (actor) {
        return createIdsSubStatement_1.default({ actor: actor });
    });
});
//# sourceMappingURL=subStatementActor.test.js.map