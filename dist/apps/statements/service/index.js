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
var service_1 = __importDefault(require("jscommons/dist/service"));
var getClient_1 = __importDefault(require("./getClient"));
var getFullActivity_1 = __importDefault(require("./getFullActivity"));
var getStatement_1 = __importDefault(require("./getStatement"));
var getStatements_1 = __importDefault(require("./getStatements"));
var storeStatements_1 = __importDefault(require("./storeStatements"));
exports.default = (function (config) {
    return __assign({ getClient: getClient_1.default(config), storeStatements: storeStatements_1.default(config), getStatement: getStatement_1.default(config), getStatements: getStatements_1.default(config), getFullActivity: getFullActivity_1.default(config) }, service_1.default(config));
});
//# sourceMappingURL=index.js.map