"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var setupService_1 = __importDefault(require("jscommons/dist/tests/utils/setupService"));
var testService_1 = __importDefault(require("../../../utils/testService"));
var setup = setupService_1.default(testService_1.default);
exports.default = (function () {
    return setup();
});
//# sourceMappingURL=setup.js.map