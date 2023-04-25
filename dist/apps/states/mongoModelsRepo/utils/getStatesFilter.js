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
var mongodb_1 = require("mongodb");
var getAgentFilter_1 = __importDefault(require("./getAgentFilter"));
var getRegistrationFilter_1 = __importDefault(require("./getRegistrationFilter"));
exports.default = (function (opts) {
    return __assign(__assign(__assign({ activityId: opts.activityId }, getAgentFilter_1.default(opts.agent)), getRegistrationFilter_1.default(opts.registration)), { lrs: new mongodb_1.ObjectId(opts.client.lrs_id), organisation: new mongodb_1.ObjectId(opts.client.organisation) });
});
//# sourceMappingURL=getStatesFilter.js.map