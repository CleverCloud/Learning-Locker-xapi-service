"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actorsTest_1 = __importDefault(require("./utils/actorsTest"));
var setupObjectTypeTest_1 = __importDefault(require("./utils/setupObjectTypeTest"));
describe('store statement with objectType in actors', function () {
    var assertTypedStatement = setupObjectTypeTest_1.default();
    actorsTest_1.default(assertTypedStatement);
});
//# sourceMappingURL=actors.test.js.map