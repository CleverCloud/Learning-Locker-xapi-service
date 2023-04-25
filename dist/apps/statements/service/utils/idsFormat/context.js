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
var formatContextActivities_1 = __importDefault(require("../formatContextActivities"));
var activity_1 = __importDefault(require("./activity"));
var actor_1 = __importDefault(require("./actor"));
exports.default = (function (context) {
    return __assign(__assign(__assign(__assign({}, context), (context.instructor === undefined ? {} : { instructor: actor_1.default(context.instructor) })), (context.team === undefined ? {} : { team: actor_1.default(context.team) })), (context.contextActivities === undefined
        ? {}
        : {
            contextActivities: formatContextActivities_1.default(context.contextActivities, activity_1.default),
        }));
});
//# sourceMappingURL=context.js.map