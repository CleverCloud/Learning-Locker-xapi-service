"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actorsTest_1 = __importDefault(require("./utils/actorsTest"));
var setupSubStatementTypeTest_1 = __importDefault(require("./utils/setupSubStatementTypeTest"));
describe('store statement with objectType in sub actors', function () {
    var assertTypedStatement = setupSubStatementTypeTest_1.default();
    actorsTest_1.default(assertTypedStatement);
});
//# sourceMappingURL=subActors.test.js.map