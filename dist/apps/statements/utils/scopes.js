"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATEMENT_WRITE_SCOPES = exports.PROFILE_READ_SCOPES = exports.STATEMENT_READ_SCOPES = exports.XAPI_PROFILE_ALL = exports.XAPI_STATE_ALL = exports.XAPI_STATEMENTS_READ_MINE = exports.XAPI_STATEMENTS_WRITE = exports.XAPI_STATEMENTS_READ = exports.XAPI_READ = exports.XAPI_ALL = exports.ALL_READ = exports.ALL = void 0;
exports.ALL = 'all';
exports.ALL_READ = 'all/read';
exports.XAPI_ALL = 'xapi/all';
exports.XAPI_READ = 'xapi/read';
exports.XAPI_STATEMENTS_READ = 'statements/read';
exports.XAPI_STATEMENTS_WRITE = 'statements/write';
exports.XAPI_STATEMENTS_READ_MINE = 'statements/read/mine';
exports.XAPI_STATE_ALL = 'state';
exports.XAPI_PROFILE_ALL = 'profile';
exports.STATEMENT_READ_SCOPES = [
    exports.ALL,
    exports.ALL_READ,
    exports.XAPI_ALL,
    exports.XAPI_READ,
    exports.XAPI_STATEMENTS_READ,
    exports.XAPI_STATEMENTS_READ_MINE,
];
exports.PROFILE_READ_SCOPES = [exports.ALL, exports.ALL_READ, exports.XAPI_ALL, exports.XAPI_READ, exports.XAPI_PROFILE_ALL];
exports.STATEMENT_WRITE_SCOPES = [exports.ALL, exports.XAPI_ALL, exports.XAPI_STATEMENTS_WRITE];
exports.default = [
    exports.ALL,
    exports.ALL_READ,
    exports.XAPI_ALL,
    exports.XAPI_READ,
    exports.XAPI_STATEMENTS_READ,
    exports.XAPI_STATEMENTS_READ_MINE,
    exports.XAPI_STATEMENTS_WRITE,
    exports.XAPI_STATE_ALL,
    exports.XAPI_PROFILE_ALL,
];
//# sourceMappingURL=scopes.js.map