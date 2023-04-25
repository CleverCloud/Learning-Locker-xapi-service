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
var testService_1 = __importDefault(require("./testService"));
var testValues_1 = require("./testValues");
exports.default = (function (optsOverrides) {
    if (optsOverrides === void 0) { optsOverrides = {}; }
    return testService_1.default.getProfile(__assign({ agent: testValues_1.TEST_MBOX_AGENT, client: testValues_1.TEST_CLIENT, profileId: testValues_1.TEST_PROFILE_ID }, optsOverrides));
});
//# sourceMappingURL=getTestProfile.js.map