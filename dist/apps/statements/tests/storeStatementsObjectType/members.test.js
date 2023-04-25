"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var membersTest_1 = __importDefault(require("./utils/membersTest"));
var setupObjectTypeTest_1 = __importDefault(require("./utils/setupObjectTypeTest"));
describe('store statement with objectType in members', function () {
    var assertTypedStatement = setupObjectTypeTest_1.default();
    membersTest_1.default(assertTypedStatement);
});
//# sourceMappingURL=members.test.js.map