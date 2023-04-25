"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fake_1 = __importDefault(require("../../getClient/fake"));
exports.default = (function (_factoryConfig) {
    if (_factoryConfig === void 0) { _factoryConfig = {}; }
    var facadeConfig = {};
    return {
        getClient: fake_1.default(facadeConfig),
    };
});
//# sourceMappingURL=factory.js.map