"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var activitiesTest_1 = __importDefault(require("./utils/activitiesTest"));
var setupObjectTypeTest_1 = __importDefault(require("./utils/setupObjectTypeTest"));
describe('store statement with objectType in activities', function () {
    var assertTypedStatement = setupObjectTypeTest_1.default();
    activitiesTest_1.default(assertTypedStatement);
});
//# sourceMappingURL=activities.test.js.map