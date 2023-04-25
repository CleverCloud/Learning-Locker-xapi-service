"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assertFilteredStatementRefs_1 = __importDefault(require("./utils/assertFilteredStatementRefs"));
var assertFilteredStatements_1 = __importDefault(require("./utils/assertFilteredStatements"));
var registrationTest_1 = __importDefault(require("./utils/registrationTest"));
describe('get statements by registration', function () {
    registrationTest_1.default(assertFilteredStatements_1.default);
});
describe('get statements by registration with statement references', function () {
    registrationTest_1.default(assertFilteredStatementRefs_1.default);
});
//# sourceMappingURL=registration.test.js.map