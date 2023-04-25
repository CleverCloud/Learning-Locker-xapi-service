"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATE_WRITE_SCOPES = exports.STATE_READ_SCOPES = exports.XAPI_STATE_ALL = exports.XAPI_READ = exports.XAPI_ALL = exports.ALL_READ = exports.ALL = void 0;
exports.ALL = 'all';
exports.ALL_READ = 'all/read';
exports.XAPI_ALL = 'xapi/all';
exports.XAPI_READ = 'xapi/read';
exports.XAPI_STATE_ALL = 'state';
exports.STATE_READ_SCOPES = [exports.ALL, exports.ALL_READ, exports.XAPI_ALL, exports.XAPI_READ, exports.XAPI_STATE_ALL];
exports.STATE_WRITE_SCOPES = [exports.ALL, exports.XAPI_ALL, exports.XAPI_STATE_ALL];
exports.default = [exports.ALL, exports.ALL_READ, exports.XAPI_ALL, exports.XAPI_READ, exports.XAPI_STATE_ALL];
//# sourceMappingURL=scopes.js.map