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
var s3Repo_1 = __importDefault(require("jscommons/dist/s3Repo"));
var deleteStateContent_1 = __importDefault(require("./deleteStateContent"));
var deleteStatesContent_1 = __importDefault(require("./deleteStatesContent"));
var getStateContent_1 = __importDefault(require("./getStateContent"));
var storeStateContent_1 = __importDefault(require("./storeStateContent"));
exports.default = (function (config) {
    return __assign(__assign({}, s3Repo_1.default(config)), { deleteStateContent: deleteStateContent_1.default(config), deleteStatesContent: deleteStatesContent_1.default(config), getStateContent: getStateContent_1.default(config), storeStateContent: storeStateContent_1.default(config) });
});
//# sourceMappingURL=index.js.map