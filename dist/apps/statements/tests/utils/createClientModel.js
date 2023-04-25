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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_ORGANISATION_ID = void 0;
var scopes_1 = require("../../utils/scopes");
exports.TEST_ORGANISATION_ID = '5988f0f00000000000000000';
var DEFAULT_AUTHORITY = {
    objectType: 'Agent',
    mbox: 'mailto:authority@example.com',
};
exports.default = (function (overrides) {
    if (overrides === void 0) { overrides = {}; }
    return __assign({ _id: '5988f0f00000000000000002', title: 'test_title', organisation: exports.TEST_ORGANISATION_ID, lrs_id: '5988f0f00000000000000001', authority: DEFAULT_AUTHORITY, isTrusted: true, scopes: [scopes_1.ALL] }, overrides);
});
//# sourceMappingURL=createClientModel.js.map