"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fsRepo_1 = __importDefault(require("jscommons/dist/fsRepo"));
var lodash_1 = require("lodash");
var local_1 = __importDefault(require("../../createAttachments/local"));
var local_2 = __importDefault(require("../../getAttachment/local"));
exports.default = (function (factoryConfig) {
    if (factoryConfig === void 0) { factoryConfig = {}; }
    var facadeConfig = {
        storageDir: lodash_1.defaultTo(factoryConfig.storageDir, '/storage'),
    };
    return __assign(__assign({}, fsRepo_1.default(facadeConfig)), { createAttachments: local_1.default(facadeConfig), getAttachment: local_2.default(facadeConfig) });
});
//# sourceMappingURL=factory.js.map