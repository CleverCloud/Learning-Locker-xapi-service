"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (data, boundary) {
    var partBoundary = new RegExp("\\r?\\n?--" + boundary);
    var dataParts = data.split(partBoundary);
    // Slices to ignore data before the first boundary and after the last boundary.
    return dataParts.slice(1, -1);
});
//# sourceMappingURL=getStreamParts.js.map