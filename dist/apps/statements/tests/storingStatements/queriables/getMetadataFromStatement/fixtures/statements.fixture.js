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
exports.sequencingInteractionActivityStatement = exports.statementDefaults = void 0;
var ActivityInteractionType_1 = __importDefault(require("../../../../../models/ActivityInteractionType"));
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
    result: {
        duration: 'P1Y2M3DT4H5M6S',
    },
};
exports.statementDefaults = statementDefaults;
var sequencingInteractionActivityStatement = __assign(__assign({}, statementDefaults), {
    result: {
        response: 'tim[,]mike[,]ells[,]ben',
    },
    object: {
        definition: {
            name: { 'en-US': 'Question 6' },
            description: { 'en-US': 'Order players by their pong ladder position:' },
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
            interactionType: ActivityInteractionType_1.default.SEQUENCING,
            correctResponsesPattern: ['tim[,]mike[,]ells[,]ben'],
            choices: [
                { id: 'tim', description: { 'en-US': 'Tim' } },
                { id: 'ben', description: { 'en-US': 'Ben' } },
                { id: 'ells', description: { 'en-US': 'Ells' } },
                { id: 'mike', description: { 'en-US': 'Mike' } },
            ],
        },
    },
});
exports.sequencingInteractionActivityStatement = sequencingInteractionActivityStatement;
//# sourceMappingURL=statements.fixture.js.map