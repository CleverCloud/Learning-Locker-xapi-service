"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canonicalActivityTest_1 = __importDefault(require("./utils/canonicalActivityTest"));
var createActivity_1 = __importDefault(require("./utils/createActivity"));
describe('get canonical statement object', function () {
    canonicalActivityTest_1.default(function (definition) {
        return {
            object: createActivity_1.default(definition),
        };
    });
});
//# sourceMappingURL=object.test.js.map