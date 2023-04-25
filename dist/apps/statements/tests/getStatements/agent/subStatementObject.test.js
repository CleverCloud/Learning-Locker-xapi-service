"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var assertFilteredStatementRefs_1 = __importDefault(require("../utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("../utils/assertFilteredStatements"));
var actorTest_1 = __importDefault(require("./utils/actorTest"));
var createActor = function (object) {
    return createSubStatement_1.default({ object: object });
};
describe('get statements by agent in sub statement object', function () {
    actorTest_1.default(assertFilteredStatements_1.default)(createActor, true);
});
describe('get statements by agent in sub statement object with references', function () {
    actorTest_1.default(assertFilteredStatementRefs_1.default)(createActor, true);
});
//# sourceMappingURL=subStatementObject.test.js.map