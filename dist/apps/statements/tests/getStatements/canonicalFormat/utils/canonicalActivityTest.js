"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canonicalTest_1 = __importDefault(require("./canonicalTest"));
exports.default = (function (createActivityStatement) {
    describe('name', function () {
        canonicalTest_1.default(function (name) {
            return createActivityStatement({ name: name });
        });
    });
    describe('description', function () {
        canonicalTest_1.default(function (description) {
            return createActivityStatement({ description: description });
        });
    });
});
//# sourceMappingURL=canonicalActivityTest.js.map