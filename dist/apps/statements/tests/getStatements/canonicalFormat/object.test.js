"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canonicalObjectTest_1 = __importDefault(require("./utils/canonicalObjectTest"));
describe('get canonical statements object', function () {
    canonicalObjectTest_1.default(function (object) {
        return { object: object };
    });
});
//# sourceMappingURL=object.test.js.map