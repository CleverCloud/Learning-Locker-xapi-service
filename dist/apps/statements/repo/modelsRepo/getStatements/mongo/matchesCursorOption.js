"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
exports.default = (function (options) {
    var _a, _b;
    if (options.cursor === undefined) {
        return {};
    }
    var _c = options.cursor.split('_'), _id = _c[0], stored = _c[1];
    var storedDate = new Date(stored);
    var oid = new mongodb_1.ObjectId(_id);
    return {
        $or: [
            {
                _id: (_a = {}, _a[options.ascending ? '$gte' : '$lte'] = oid, _a),
                stored: storedDate,
            },
            { stored: (_b = {}, _b[options.ascending ? '$gt' : '$lt'] = storedDate, _b) },
        ],
    };
});
//# sourceMappingURL=matchesCursorOption.js.map