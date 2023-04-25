"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connectToDb_1 = __importDefault(require("jscommons/dist/mongoRepo/utils/connectToDb"));
var lodash_1 = require("lodash");
var config_1 = __importDefault(require("../config"));
var logger_1 = __importDefault(require("../logger"));
exports.default = lodash_1.once(connectToDb_1.default({
    dbName: config_1.default.mongoModelsRepo.dbName,
    logger: logger_1.default,
    url: config_1.default.mongoModelsRepo.url,
}));
//# sourceMappingURL=connectToMongoDb.js.map