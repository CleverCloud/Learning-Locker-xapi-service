"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var getSubFolderPath = function (subfolder) {
    /* istanbul ignore if - Just being cautious. */
    if (subfolder === undefined) {
        return [];
    }
    return [subfolder];
};
exports.default = (function (opts) {
    return path_1.join.apply(void 0, __spreadArray(__spreadArray([], getSubFolderPath(opts.subfolder)), [opts.lrs_id, 'states']));
});
//# sourceMappingURL=getStorageDir.js.map