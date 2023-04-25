"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __importDefault(require("./utils/redisEvents/factory"));
var factory_2 = __importDefault(require("./utils/sqsEvents/factory"));
exports.default = (function (config) {
    switch (config.facade) {
        default:
        case 'redis':
            return factory_1.default(config.redis);
        case 'sqs':
            return factory_2.default(config.sqs);
    }
});
//# sourceMappingURL=factory.js.map