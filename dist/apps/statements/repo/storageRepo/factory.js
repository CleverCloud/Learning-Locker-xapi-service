"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __importDefault(require("./utils/azureStorage/factory"));
var factory_2 = __importDefault(require("./utils/googleStorage/factory"));
var factory_3 = __importDefault(require("./utils/localStorage/factory"));
var factory_4 = __importDefault(require("./utils/s3Storage/factory"));
exports.default = (function (config) {
    switch (config.facade) {
        case 's3':
            return factory_4.default(config.s3);
        case 'google':
            return factory_2.default(config.google);
        case 'azure':
            return factory_1.default(config.azure);
        case 'local':
        default:
            return factory_3.default(config.local);
    }
});
//# sourceMappingURL=factory.js.map