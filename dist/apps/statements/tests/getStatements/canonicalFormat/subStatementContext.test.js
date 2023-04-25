"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createSubStatementContext_1 = __importDefault(require("../../utils/createSubStatementContext"));
var canonicalActivityTest_1 = __importDefault(require("./utils/canonicalActivityTest"));
var createActivity_1 = __importDefault(require("./utils/createActivity"));
var canonicalContextActivityTest = function (contextActivityType) {
    describe("get canonical statements sub statement " + contextActivityType, function () {
        canonicalActivityTest_1.default(function (definition) {
            var _a;
            return createSubStatementContext_1.default((_a = {},
                _a[contextActivityType] = [createActivity_1.default(definition)],
                _a));
        });
    });
};
canonicalContextActivityTest('parent');
canonicalContextActivityTest('grouping');
canonicalContextActivityTest('category');
canonicalContextActivityTest('other');
//# sourceMappingURL=subStatementContext.test.js.map