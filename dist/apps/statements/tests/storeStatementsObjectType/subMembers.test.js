"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var membersTest_1 = __importDefault(require("./utils/membersTest"));
var setupSubStatementTypeTest_1 = __importDefault(require("./utils/setupSubStatementTypeTest"));
describe('store statement with objectType in sub members', function () {
    var assertTypedStatement = setupSubStatementTypeTest_1.default();
    membersTest_1.default(assertTypedStatement);
});
//# sourceMappingURL=subMembers.test.js.map