"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var removeNulls = function (data) {
    if (lodash_1.isPlainObject(data)) {
        return lodash_1.mapValues(lodash_1.omitBy(data, lodash_1.isNull), removeNulls);
    }
    if (lodash_1.isArray(data)) {
        return lodash_1.reject(data, lodash_1.isNull).map(removeNulls);
    }
    return data;
};
exports.default = (function (config) {
    return function (data) {
        /* istanbul ignore next */
        if (!config.enableNullRemoval) {
            return data;
        }
        return removeNulls(data);
    };
});
//# sourceMappingURL=removeNulls.js.map