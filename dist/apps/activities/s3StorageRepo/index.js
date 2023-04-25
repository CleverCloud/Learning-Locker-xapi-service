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
var deleteProfileContent_1 = __importDefault(require("./deleteProfileContent"));
var getProfileContent_1 = __importDefault(require("./getProfileContent"));
var storeProfileContent_1 = __importDefault(require("./storeProfileContent"));
exports.default = (function (config) {
    return __assign(__assign({}, s3Repo_1.default(config)), { deleteProfileContent: deleteProfileContent_1.default(config), getProfileContent: getProfileContent_1.default(config), storeProfileContent: storeProfileContent_1.default(config) });
});
//# sourceMappingURL=index.js.map