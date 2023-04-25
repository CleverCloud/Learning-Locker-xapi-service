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
exports.TEST_ACTIVITY_WITH_MERGED_CONTEXT_ACTIVITIES = exports.TEST_ACTIVITY_WITH_CONTEXT_ACTIVITIES = exports.TEST_MERGED_CONTEXT_ACTIVITIES_RESULT = exports.TEST_CONTEXT_ACTIVITIES_RESULT = exports.ANOTHER_TEST_CONTEXT_ACTIVITIES = exports.TEST_CONTEXT_ACTIVITIES = exports.TEST_MERGED_ACTIVITY = exports.TEST_IMMUTABLE_ACTIVITY = exports.TEST_MERGE_ACTIVITY = exports.TEST_ACTIVITY = exports.TEST_BASE_ACTIVITY = exports.TEST_IMMUTABLE_ACTIVITY_ID = exports.ANOTHER_TEST_ACTIVITY_ID = exports.TEST_ACTIVITY_ID = exports.TEST_OUTSIDE_STORE_CLIENT = exports.TEST_OUTSIDE_ORG_CLIENT = exports.TEST_ALLOWED_CLIENT = exports.TEST_FORBIDDEN_CLIENT = exports.TEST_CLIENT = void 0;
var scopes_1 = require("../../../utils/scopes");
var createClientModel_1 = __importDefault(require("../../utils/createClientModel"));
exports.TEST_CLIENT = createClientModel_1.default();
exports.TEST_FORBIDDEN_CLIENT = createClientModel_1.default({
    scopes: [],
});
exports.TEST_ALLOWED_CLIENT = createClientModel_1.default({
    scopes: [scopes_1.XAPI_PROFILE_ALL],
});
exports.TEST_OUTSIDE_ORG_CLIENT = createClientModel_1.default({
    organisation: '4988f0f00000000000000000',
});
exports.TEST_OUTSIDE_STORE_CLIENT = createClientModel_1.default({
    lrs_id: '4988f0f00000000000000001',
});
exports.TEST_ACTIVITY_ID = 'http://www.example.org/fullActivityTest';
exports.ANOTHER_TEST_ACTIVITY_ID = 'http://www.example.org/anotherFullActivityTest';
exports.TEST_IMMUTABLE_ACTIVITY_ID = 'http://www.example.org/fullActivityTest/immutable';
exports.TEST_BASE_ACTIVITY = {
    objectType: 'Activity',
    id: exports.TEST_ACTIVITY_ID,
    definition: {
        name: {},
        description: {},
        extensions: {},
    },
};
exports.TEST_ACTIVITY = __assign(__assign({}, exports.TEST_BASE_ACTIVITY), { definition: {
        name: {
            'en-GB': 'test_gb_name',
        },
        description: {
            'en-GB': 'test_gb_description',
        },
        extensions: {
            'http://www.example.org/test_extension': 1,
        },
        moreInfo: 'http://www.example.org/moreInfo',
        type: 'http://www.example.org/type',
    } });
exports.TEST_MERGE_ACTIVITY = __assign(__assign({}, exports.TEST_BASE_ACTIVITY), { definition: {
        name: {
            'en-US': 'test_us_name',
        },
        description: {
            'en-US': 'test_us_description',
        },
        extensions: {
            'http://www.example.org/test_merge_extension': 2,
        },
        moreInfo: 'http://www.example.org/mergedMoreInfo',
        type: 'http://www.example.org/mergedType',
    } });
exports.TEST_IMMUTABLE_ACTIVITY = __assign(__assign({}, exports.TEST_MERGE_ACTIVITY), { id: exports.TEST_IMMUTABLE_ACTIVITY_ID });
exports.TEST_MERGED_ACTIVITY = __assign(__assign({}, exports.TEST_BASE_ACTIVITY), { definition: {
        name: __assign(__assign({}, exports.TEST_ACTIVITY.definition.name), exports.TEST_MERGE_ACTIVITY.definition.name),
        description: __assign(__assign({}, exports.TEST_ACTIVITY.definition.description), exports.TEST_MERGE_ACTIVITY.definition.description),
        extensions: __assign(__assign({}, exports.TEST_ACTIVITY.definition.extensions), exports.TEST_MERGE_ACTIVITY.definition.extensions),
        moreInfo: 'http://www.example.org/mergedMoreInfo',
        type: 'http://www.example.org/mergedType',
    } });
exports.TEST_CONTEXT_ACTIVITIES = {
    context: {
        contextActivities: {
            category: [exports.TEST_ACTIVITY],
            grouping: [exports.TEST_ACTIVITY],
            parent: [exports.TEST_ACTIVITY],
            other: [exports.TEST_ACTIVITY],
        },
    },
};
exports.ANOTHER_TEST_CONTEXT_ACTIVITIES = {
    context: {
        contextActivities: {
            category: [__assign(__assign({}, exports.TEST_ACTIVITY), { id: exports.ANOTHER_TEST_ACTIVITY_ID })],
            grouping: [__assign(__assign({}, exports.TEST_ACTIVITY), { id: exports.ANOTHER_TEST_ACTIVITY_ID })],
            parent: [__assign(__assign({}, exports.TEST_ACTIVITY), { id: exports.ANOTHER_TEST_ACTIVITY_ID })],
            other: [__assign(__assign({}, exports.TEST_ACTIVITY), { id: exports.ANOTHER_TEST_ACTIVITY_ID })],
        },
    },
};
exports.TEST_CONTEXT_ACTIVITIES_RESULT = {
    context: {
        contextActivities: {
            category: [exports.TEST_ACTIVITY_ID],
            grouping: [exports.TEST_ACTIVITY_ID],
            parent: [exports.TEST_ACTIVITY_ID],
            other: [exports.TEST_ACTIVITY_ID],
        },
    },
};
exports.TEST_MERGED_CONTEXT_ACTIVITIES_RESULT = {
    context: {
        contextActivities: {
            category: [exports.TEST_ACTIVITY_ID, exports.ANOTHER_TEST_ACTIVITY_ID],
            grouping: [exports.TEST_ACTIVITY_ID, exports.ANOTHER_TEST_ACTIVITY_ID],
            parent: [exports.TEST_ACTIVITY_ID, exports.ANOTHER_TEST_ACTIVITY_ID],
            other: [exports.TEST_ACTIVITY_ID, exports.ANOTHER_TEST_ACTIVITY_ID],
        },
    },
};
exports.TEST_ACTIVITY_WITH_CONTEXT_ACTIVITIES = __assign(__assign({}, exports.TEST_ACTIVITY), exports.TEST_CONTEXT_ACTIVITIES_RESULT);
exports.TEST_ACTIVITY_WITH_MERGED_CONTEXT_ACTIVITIES = __assign(__assign({}, exports.TEST_ACTIVITY), exports.TEST_MERGED_CONTEXT_ACTIVITIES_RESULT);
//# sourceMappingURL=testValues.js.map