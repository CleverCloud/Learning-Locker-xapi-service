"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var statementProcessingPriority_enum_1 = require("../../../enums/statementProcessingPriority.enum");
var getPrefixWithProcessingPriority_1 = require("./getPrefixWithProcessingPriority");
describe(__filename, function () {
    it('should return prefix properly', function () {
        var originalPrefix = 'LEARNINGLOCKER';
        assert_1.default.strictEqual(getPrefixWithProcessingPriority_1.getPrefixWithProcessingPriority(originalPrefix, statementProcessingPriority_enum_1.StatementProcessingPriority.MEDIUM, true), originalPrefix);
        assert_1.default.strictEqual(getPrefixWithProcessingPriority_1.getPrefixWithProcessingPriority(originalPrefix, statementProcessingPriority_enum_1.StatementProcessingPriority.LOW, true), originalPrefix + "_" + statementProcessingPriority_enum_1.StatementProcessingPriority.LOW);
        assert_1.default.strictEqual(getPrefixWithProcessingPriority_1.getPrefixWithProcessingPriority(originalPrefix, statementProcessingPriority_enum_1.StatementProcessingPriority.LOW), originalPrefix);
    });
});
//# sourceMappingURL=getPrefixWithProcessingPriority.test.js.map