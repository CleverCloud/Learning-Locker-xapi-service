"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connectToMongoDb_1 = __importDefault(require("../../../utils/connectToMongoDb"));
var mongo_1 = __importDefault(require("../../getClient/mongo"));
exports.default = (function (factoryConfig) {
    var facadeConfig = factoryConfig !== undefined ? factoryConfig : { db: connectToMongoDb_1.default };
    return {
        getClient: mongo_1.default(facadeConfig),
    };
});
//# sourceMappingURL=factory.js.map