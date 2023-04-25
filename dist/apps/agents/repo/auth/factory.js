"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoAuthRepo_1 = __importDefault(require("../../mongoAuthRepo"));
var testAuthRepo_1 = __importDefault(require("../../testAuthRepo"));
exports.default = (function (factoryConfig) {
    switch (factoryConfig.factoryName) {
        case 'test':
            return testAuthRepo_1.default(factoryConfig.test);
        default:
        case 'mongo':
            return mongoAuthRepo_1.default(factoryConfig.mongo);
    }
});
//# sourceMappingURL=factory.js.map