"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assertFilteredStatementRefs_1 = __importDefault(require("../utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("../utils/assertFilteredStatements"));
var actorTest_1 = __importDefault(require("./utils/actorTest"));
var createActor = function (object) {
    return { object: object };
};
describe('get statements by agent in object', function () {
    actorTest_1.default(assertFilteredStatements_1.default)(createActor);
});
describe('get statements by agent in object with references', function () {
    actorTest_1.default(assertFilteredStatementRefs_1.default)(createActor);
});
//# sourceMappingURL=object.test.js.map