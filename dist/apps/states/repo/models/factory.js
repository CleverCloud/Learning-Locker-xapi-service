"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoModelsRepo_1 = __importDefault(require("../../mongoModelsRepo"));
exports.default = (function (factoryConfig) {
    switch (factoryConfig.factoryName) {
        default:
        case 'mongo':
            return mongoModelsRepo_1.default(factoryConfig.mongo);
    }
});
//# sourceMappingURL=factory.js.map