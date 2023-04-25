"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToStream = void 0;
var stream_1 = require("stream");
var stringToStream = function (data) {
    return stream_1.Readable.from(data);
};
exports.stringToStream = stringToStream;
//# sourceMappingURL=stringToStream.js.map