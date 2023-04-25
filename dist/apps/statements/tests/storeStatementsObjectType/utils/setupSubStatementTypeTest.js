"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var setupObjectTypeTest_1 = __importDefault(require("./setupObjectTypeTest"));
exports.default = (function () {
    var assertTypedStatement = setupObjectTypeTest_1.default();
    var assertTypedSubStatement = function (obj, objectType, objCreator) {
        return assertTypedStatement(obj, objectType, function (data) {
            return createSubStatement_1.default(objCreator(data));
        });
    };
    return assertTypedSubStatement;
});
//# sourceMappingURL=setupSubStatementTypeTest.js.map