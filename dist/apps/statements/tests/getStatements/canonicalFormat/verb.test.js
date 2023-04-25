"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSubStatement_1 = __importDefault(require("../../utils/createSubStatement"));
var canonicalTest_1 = __importDefault(require("./utils/canonicalTest"));
var createVerb = function (display) {
    return {
        id: 'http://www.example.com/verb',
        display: display,
    };
};
describe('get canonical statements verb', function () {
    canonicalTest_1.default(function (display) {
        return {
            verb: createVerb(display),
        };
    });
});
describe('get canonical statements sub statement verb', function () {
    canonicalTest_1.default(function (display) {
        return createSubStatement_1.default({
            verb: createVerb(display),
        });
    });
});
//# sourceMappingURL=verb.test.js.map