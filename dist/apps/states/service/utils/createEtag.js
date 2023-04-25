"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sha1_1 = __importDefault(require("sha1"));
var uuid_1 = require("uuid");
exports.default = (function () {
    var id = uuid_1.v4();
    var timestamp = new Date().toISOString();
    return sha1_1.default(id + "-" + timestamp);
});
//# sourceMappingURL=createEtag.js.map