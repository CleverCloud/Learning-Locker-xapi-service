"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var assertFilteredStatementRefs_1 = __importDefault(require("../utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("../utils/assertFilteredStatements"));
var actorTest_1 = __importDefault(require("./utils/actorTest"));
var createActor = function (actor) {
    return createSubStatement_1.default({ actor: actor });
};
describe('get statements by agent in sub statement actor', function () {
    actorTest_1.default(assertFilteredStatements_1.default)(createActor, true);
});
describe('get statements by agent in sub statement actor with references', function () {
    actorTest_1.default(assertFilteredStatementRefs_1.default)(createActor, true);
});
//# sourceMappingURL=subStatementActor.test.js.map