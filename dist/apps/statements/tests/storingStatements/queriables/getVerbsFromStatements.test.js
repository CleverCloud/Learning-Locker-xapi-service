"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var getVerbsFromStatement_1 = __importDefault(require("../../../service/storeStatements/queriables/getVerbsFromStatement"));
var VERB_ID = 'http://example.org/test-verb';
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
        id: VERB_ID,
    },
    object: {
        objectType: 'Activity',
        id: 'http://example.org/activity',
    },
};
describe('create array of queriable verbs', function () {
    it('should return the verb from the statement', function () {
        var verbs = getVerbsFromStatement_1.default(statementDefaults);
        assert_1.default.deepStrictEqual(verbs, [VERB_ID]);
    });
});
//# sourceMappingURL=getVerbsFromStatements.test.js.map