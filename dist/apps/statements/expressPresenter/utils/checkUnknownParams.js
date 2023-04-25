"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var UnknownParams_1 = __importDefault(require("../../errors/UnknownParams"));
exports.default = (function (queryParams, knownParams) {
    var givenParams = Object.keys(queryParams);
    var unknownParams = lodash_1.difference(givenParams, knownParams);
    if (unknownParams.length > 0) {
        throw new UnknownParams_1.default(unknownParams);
    }
});
//# sourceMappingURL=checkUnknownParams.js.map