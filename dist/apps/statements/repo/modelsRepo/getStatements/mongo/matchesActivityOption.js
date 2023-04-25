"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchesModel_1 = __importDefault(require("./matchesModel"));
var matcher = function (activity, opts) {
    if (opts.related_activities === true) {
        return { relatedActivities: activity };
    }
    return { activities: activity };
};
exports.default = matchesModel_1.default(matcher, function (opts) {
    return opts.activity;
});
//# sourceMappingURL=matchesActivityOption.js.map