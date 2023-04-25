"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activitiesTest_1 = __importDefault(require("./utils/activitiesTest"));
var setupSubStatementTypeTest_1 = __importDefault(require("./utils/setupSubStatementTypeTest"));
describe('store statement with objectType in sub activities', function () {
    var assertTypedStatement = setupSubStatementTypeTest_1.default();
    activitiesTest_1.default(assertTypedStatement);
});
//# sourceMappingURL=subActivities.test.js.map