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
var assert_1 = __importDefault(require("assert"));
var getRegistrationsFromStatement_1 = __importDefault(require("../../../service/storeStatements/queriables/getRegistrationsFromStatement"));
var REG = '1c86d8e9-f325-404f-b3d9-24c451035585';
var statementDefaults = {
    id: 'testvalue',
    authority: {
        objectType: 'Agent',
        mbox: 'mailto:authority@test.com',
    },
    stored: 'testvalue',
    timestamp: 'testvalue',
    version: 'testvalue',
    actor: {
        objectType: 'Agent',
        mbox: 'mailto:actor@test.com',
    },
    verb: {
        id: 'http://example.org/test-verb',
    },
    object: {
        objectType: 'Activity',
        id: 'http://example.org/activity',
    },
};
var registrationStatement = __assign(__assign({}, statementDefaults), { context: {
        registration: REG,
    } });
describe('create array of queriable registrations', function () {
    it('should return just the registration from the statement', function () {
        var registrations = getRegistrationsFromStatement_1.default(registrationStatement);
        assert_1.default.deepStrictEqual(registrations, [REG]);
    });
    it('should return just an empty array from a statement with no registrations', function () {
        var registrations = getRegistrationsFromStatement_1.default(statementDefaults);
        assert_1.default.deepStrictEqual(registrations, []);
    });
});
//# sourceMappingURL=getRegistrationsFromStatement.test.js.map