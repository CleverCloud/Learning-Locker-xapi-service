"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createIdsSubStatement_1 = __importDefault(require("../../utils/createIdsSubStatement"));
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var objectTest_1 = __importDefault(require("./utils/objectTest"));
describe('get ids statement in sub statement object', function () {
    objectTest_1.default(function (object) {
        return createSubStatement_1.default({ object: object });
    }, function (object) {
        return createIdsSubStatement_1.default({ object: object });
    });
});
//# sourceMappingURL=subStatementObject.test.js.map